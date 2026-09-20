// Stripe WebGL Gradient Engine
// Based on Stripe's open-source MiniGl & Gradient shader implementation
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-this-alias */

function normalizeColor(hexCode: number): [number, number, number] {
  return [
    ((hexCode >> 16) & 255) / 255,
    ((hexCode >> 8) & 255) / 255,
    (255 & hexCode) / 255,
  ];
}

class MiniGl {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
  meshes: any[];
  commonUniforms: any;
  width: number = 0;
  height: number = 0;

  Material: any;
  Uniform: any;
  PlaneGeometry: any;
  Mesh: any;
  Attribute: any;

  constructor(canvas: HTMLCanvasElement, width?: number, height?: number) {
    const _miniGl = this;
    this.canvas = canvas;
    const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!gl) throw new Error("WebGL not supported");
    this.gl = gl;
    this.meshes = [];

    const context = this.gl;

    this.Uniform = class {
      type: string = "float";
      value: any;
      typeFn: string;
      excludeFrom?: string;

      constructor(config: any) {
        Object.assign(this, config);
        const map: Record<string, string> = {
          float: "1f",
          int: "1i",
          vec2: "2fv",
          vec3: "3fv",
          vec4: "4fv",
          mat4: "Matrix4fv",
        };
        this.typeFn = map[this.type] || "1f";
        this.update();
      }

      update(loc?: WebGLUniformLocation | null) {
        if (this.value !== undefined && loc) {
          if (this.typeFn === "Matrix4fv") {
            (context as any).uniformMatrix4fv(loc, false, this.value);
          } else {
            (context as any)[`uniform${this.typeFn}`](loc, this.value);
          }
        }
      }

      getDeclaration(name: string, type: string, length?: number): string {
        if (this.excludeFrom === type) return "";
        if (this.type === "array") {
          return (
            this.value[0].getDeclaration(name, type, this.value.length) +
            `\nconst int ${name}_length = ${this.value.length};`
          );
        }
        if (this.type === "struct") {
          let nameNoPrefix = name.replace("u_", "");
          nameNoPrefix =
            nameNoPrefix.charAt(0).toUpperCase() + nameNoPrefix.slice(1);
          const fields = Object.entries(this.value)
            .map(([fName, field]: [string, any]) =>
              field.getDeclaration(fName, type).replace(/^uniform/, "")
            )
            .join("");
          return `uniform struct ${nameNoPrefix} {\n${fields}\n} ${name}${
            length && length > 0 ? `[${length}]` : ""
          };`;
        }
        return `uniform ${this.type} ${name}${
          length && length > 0 ? `[${length}]` : ""
        };`;
      }
    };

    this.Attribute = class {
      target: number = context.ARRAY_BUFFER;
      size: number = 3;
      type: number = context.FLOAT;
      normalized: boolean = false;
      buffer: WebGLBuffer | null = null;
      values: Float32Array | Uint16Array | null = null;

      constructor(config: any) {
        this.buffer = context.createBuffer();
        Object.assign(this, config);
        this.update();
      }

      update() {
        if (this.values) {
          context.bindBuffer(this.target, this.buffer);
          context.bufferData(this.target, this.values, context.STATIC_DRAW);
        }
      }

      attach(name: string, program: WebGLProgram): number {
        const loc = context.getAttribLocation(program, name);
        if (this.target === context.ARRAY_BUFFER && loc >= 0) {
          context.enableVertexAttribArray(loc);
          context.vertexAttribPointer(
            loc,
            this.size,
            this.type,
            this.normalized,
            0,
            0
          );
        }
        return loc;
      }

      use(loc: number) {
        context.bindBuffer(this.target, this.buffer);
        if (this.target === context.ARRAY_BUFFER && loc >= 0) {
          context.enableVertexAttribArray(loc);
          context.vertexAttribPointer(
            loc,
            this.size,
            this.type,
            this.normalized,
            0,
            0
          );
        }
      }
    };

    this.Material = class {
      uniforms: any;
      uniformInstances: { uniform: any; location: WebGLUniformLocation | null }[] = [];
      program: WebGLProgram;

      constructor(vertexSource: string, fragmentSource: string, uniforms: any = {}) {
        const getShader = (type: number, source: string) => {
          const shader = context.createShader(type)!;
          context.shaderSource(shader, source);
          context.compileShader(shader);
          if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
            console.error(context.getShaderInfoLog(shader));
          }
          return shader;
        };

        const getDecls = (u: any, type: string) =>
          Object.entries(u)
            .map(([name, val]: [string, any]) => val.getDeclaration(name, type))
            .join("\n");

        const prefix = "precision highp float;\n";
        const vSrc = `${prefix}\nattribute vec4 position;\nattribute vec2 uv;\nattribute vec2 uvNorm;\n${getDecls(
          _miniGl.commonUniforms,
          "vertex"
        )}\n${getDecls(uniforms, "vertex")}\n${vertexSource}`;

        const fSrc = `${prefix}\n${getDecls(
          _miniGl.commonUniforms,
          "fragment"
        )}\n${getDecls(uniforms, "fragment")}\n${fragmentSource}`;

        const vShader = getShader(context.VERTEX_SHADER, vSrc);
        const fShader = getShader(context.FRAGMENT_SHADER, fSrc);

        const program = context.createProgram()!;
        context.attachShader(program, vShader);
        context.attachShader(program, fShader);
        context.linkProgram(program);
        if (!context.getProgramParameter(program, context.LINK_STATUS)) {
          console.error(context.getProgramInfoLog(program));
        }
        context.useProgram(program);

        this.program = program;
        this.uniforms = uniforms;
        this.attachUniforms(undefined, _miniGl.commonUniforms);
        this.attachUniforms(undefined, uniforms);
      }

      attachUniforms(name: string | undefined, u: any) {
        if (name === undefined) {
          Object.entries(u).forEach(([n, val]: [string, any]) =>
            this.attachUniforms(n, val)
          );
        } else if (u.type === "array") {
          u.value.forEach((val: any, i: number) =>
            this.attachUniforms(`${name}[${i}]`, val)
          );
        } else if (u.type === "struct") {
          Object.entries(u.value).forEach(([n, val]: [string, any]) =>
            this.attachUniforms(`${name}.${n}`, val)
          );
        } else {
          this.uniformInstances.push({
            uniform: u,
            location: context.getUniformLocation(this.program, name),
          });
        }
      }
    };

    this.PlaneGeometry = class {
      attributes: any;
      xSegCount: number = 1;
      ySegCount: number = 1;
      vertexCount: number = 4;
      quadCount: number = 2;
      width: number = 1;
      height: number = 1;
      orientation: string = "xz";

      constructor(w: number = 1, h: number = 1, n: number = 1, i: number = 1, orientation: string = "xz") {
        this.attributes = {
          position: new _miniGl.Attribute({ target: context.ARRAY_BUFFER, size: 3 }),
          uv: new _miniGl.Attribute({ target: context.ARRAY_BUFFER, size: 2 }),
          uvNorm: new _miniGl.Attribute({ target: context.ARRAY_BUFFER, size: 2 }),
          index: new _miniGl.Attribute({
            target: context.ELEMENT_ARRAY_BUFFER,
            size: 3,
            type: context.UNSIGNED_SHORT,
          }),
        };
        this.setTopology(n, i);
        this.setSize(w, h, orientation);
      }

      setTopology(x: number = 1, y: number = 1) {
        this.xSegCount = x;
        this.ySegCount = y;
        this.vertexCount = (x + 1) * (y + 1);
        this.quadCount = x * y * 2;
        this.attributes.uv.values = new Float32Array(2 * this.vertexCount);
        this.attributes.uvNorm.values = new Float32Array(2 * this.vertexCount);
        this.attributes.index.values = new Uint16Array(3 * this.quadCount);

        for (let yIdx = 0; yIdx <= this.ySegCount; yIdx++) {
          for (let xIdx = 0; xIdx <= this.xSegCount; xIdx++) {
            const idx = yIdx * (this.xSegCount + 1) + xIdx;
            this.attributes.uv.values[2 * idx] = xIdx / this.xSegCount;
            this.attributes.uv.values[2 * idx + 1] = 1 - yIdx / this.ySegCount;
            this.attributes.uvNorm.values[2 * idx] = (xIdx / this.xSegCount) * 2 - 1;
            this.attributes.uvNorm.values[2 * idx + 1] = 1 - (yIdx / this.ySegCount) * 2;

            if (xIdx < this.xSegCount && yIdx < this.ySegCount) {
              const q = yIdx * this.xSegCount + xIdx;
              this.attributes.index.values[6 * q] = idx;
              this.attributes.index.values[6 * q + 1] = idx + 1 + this.xSegCount;
              this.attributes.index.values[6 * q + 2] = idx + 1;
              this.attributes.index.values[6 * q + 3] = idx + 1;
              this.attributes.index.values[6 * q + 4] = idx + 1 + this.xSegCount;
              this.attributes.index.values[6 * q + 5] = idx + 2 + this.xSegCount;
            }
          }
        }
        this.attributes.uv.update();
        this.attributes.uvNorm.update();
        this.attributes.index.update();
      }

      setSize(w: number = 1, h: number = 1, orientation: string = "xz") {
        this.width = w;
        this.height = h;
        this.orientation = orientation;
        if (!this.attributes.position.values || this.attributes.position.values.length !== 3 * this.vertexCount) {
          this.attributes.position.values = new Float32Array(3 * this.vertexCount);
        }
        const o = w / -2;
        const r = h / -2;
        const segW = w / this.xSegCount;
        const segH = h / this.ySegCount;

        for (let yIdx = 0; yIdx <= this.ySegCount; yIdx++) {
          const t = r + yIdx * segH;
          for (let xIdx = 0; xIdx <= this.xSegCount; xIdx++) {
            const posX = o + xIdx * segW;
            const l = yIdx * (this.xSegCount + 1) + xIdx;
            this.attributes.position.values[3 * l + "xyz".indexOf(orientation[0])] = posX;
            this.attributes.position.values[3 * l + "xyz".indexOf(orientation[1])] = -t;
          }
        }
        this.attributes.position.update();
      }
    };

    this.Mesh = class {
      geometry: any;
      material: any;
      attributeInstances: { attribute: any; location: number }[] = [];

      constructor(geometry: any, material: any) {
        this.geometry = geometry;
        this.material = material;
        Object.entries(geometry.attributes).forEach(([name, attr]: [string, any]) => {
          this.attributeInstances.push({
            attribute: attr,
            location: attr.attach(name, material.program),
          });
        });
        _miniGl.meshes.push(this);
      }

      draw() {
        context.useProgram(this.material.program);
        this.material.uniformInstances.forEach(({ uniform, location }: any) => {
          uniform.update(location);
        });
        this.attributeInstances.forEach(({ attribute, location }: any) => {
          attribute.use(location);
        });
        context.drawElements(
          context.TRIANGLES,
          this.geometry.attributes.index.values.length,
          context.UNSIGNED_SHORT,
          0
        );
      }

      remove() {
        _miniGl.meshes = _miniGl.meshes.filter((m) => m !== this);
      }
    };

    this.commonUniforms = {
      projectionMatrix: new this.Uniform({
        type: "mat4",
        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      }),
      modelViewMatrix: new this.Uniform({
        type: "mat4",
        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      }),
      resolution: new this.Uniform({ type: "vec2", value: [1, 1] }),
      aspectRatio: new this.Uniform({ type: "float", value: 1 }),
    };

    if (width && height) this.setSize(width, height);
  }

  setSize(w: number = 640, h: number = 480) {
    this.width = w;
    this.height = h;
    this.canvas.width = w;
    this.canvas.height = h;
    this.gl.viewport(0, 0, w, h);
    this.commonUniforms.resolution.value = [w, h];
    this.commonUniforms.aspectRatio.value = w / h;
  }

  setOrthographicCamera(e: number = 0, t: number = 0, n: number = 0, near: number = -2000, far: number = 2000) {
    this.commonUniforms.projectionMatrix.value = [
      2 / this.width,
      0,
      0,
      0,
      0,
      2 / this.height,
      0,
      0,
      0,
      0,
      2 / (near - far),
      0,
      e,
      t,
      n,
      1,
    ];
  }

  render() {
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clearDepth(1);
    this.meshes.forEach((m) => m.draw());
  }

  destroy() {
    this.meshes = [];
    const ext = this.gl.getExtension("WEBGL_lose_context");
    if (ext) ext.loseContext();
  }
}

// 3D Simplex noise shader function (Ashima / Gustavson)
const NOISE_GLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

const BLEND_GLSL = `
vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}
vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}
`;

const VERTEX_GLSL = `
varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;
  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  float tilt = resolution.y / 2.0 * uvNorm.y;
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  if (u_active_colors[0] == 1.0) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.0) {
      WaveLayers layer = u_waveLayers[i];
      float nVal = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );
      v_color = blendNormal(v_color, layer.color, pow(nVal, 4.0));
    }
  }

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const FRAGMENT_GLSL = `
varying vec3 v_color;

void main() {
  gl_FragColor = vec4(v_color, 1.0);
}
`;

export class StripeGradient {
  el: HTMLCanvasElement | null = null;
  minigl: MiniGl | null = null;
  mesh: any = null;
  material: any = null;
  geometry: any = null;
  uniforms: any = null;
  sectionColors: [number, number, number][] = [];

  t: number = 1253106;
  last: number = 0;
  width: number = 0;
  height: number = 600;
  xSegCount: number = 0;
  ySegCount: number = 0;
  amp: number = 320;
  seed: number = 5;
  freqX: number = 14e-5;
  freqY: number = 29e-5;
  activeColors: number[] = [1, 1, 1, 1];
  conf: { density: [number, number]; playing: boolean } = {
    density: [0.06, 0.16],
    playing: true,
  };
  angle: number = 0;
  animationFrameId: number = 0;
  isDestroyed: boolean = false;

  initGradient(canvas: HTMLCanvasElement) {
    this.el = canvas;
    this.connect();
    return this;
  }

  connect() {
    if (!this.el) return;
    this.minigl = new MiniGl(this.el, 0, 0);
    this.readColors();
    this.init();
  }

  readColors() {
    if (!this.el) return;
    const style = getComputedStyle(this.el);
    const cssVars = [
      "--gradient-color-1",
      "--gradient-color-2",
      "--gradient-color-3",
      "--gradient-color-4",
    ];

    const parsed: [number, number, number][] = [];
    for (const v of cssVars) {
      let hex = style.getPropertyValue(v).trim();
      if (hex.startsWith("#")) {
        if (hex.length === 4) {
          hex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        parsed.push(normalizeColor(parseInt(hex.slice(1), 16)));
      }
    }

    if (parsed.length >= 4) {
      this.sectionColors = parsed;
    } else {
      // NAXAD Signature Palette:
      // #2563EB (Azul Eléctrico), #6366F1 (Índigo), #38BDF8 (Sky), #E76F73 (Coral)
      this.sectionColors = [
        normalizeColor(0x2563eb),
        normalizeColor(0x6366f1),
        normalizeColor(0x38bdf8),
        normalizeColor(0xe76f73),
      ];
    }
  }

  initMaterial() {
    if (!this.minigl) return;

    this.uniforms = {
      u_time: new this.minigl.Uniform({ value: 0 }),
      u_active_colors: new this.minigl.Uniform({
        value: this.activeColors,
        type: "vec4",
      }),
      u_global: new this.minigl.Uniform({
        value: {
          noiseFreq: new this.minigl.Uniform({
            value: [this.freqX, this.freqY],
            type: "vec2",
          }),
          noiseSpeed: new this.minigl.Uniform({ value: 5e-6 }),
        },
        type: "struct",
      }),
      u_vertDeform: new this.minigl.Uniform({
        value: {
          incline: new this.minigl.Uniform({
            value: Math.sin(this.angle) / Math.cos(this.angle),
          }),
          offsetTop: new this.minigl.Uniform({ value: -0.5 }),
          offsetBottom: new this.minigl.Uniform({ value: -0.5 }),
          noiseFreq: new this.minigl.Uniform({ value: [3, 4], type: "vec2" }),
          noiseAmp: new this.minigl.Uniform({ value: this.amp }),
          noiseSpeed: new this.minigl.Uniform({ value: 10 }),
          noiseFlow: new this.minigl.Uniform({ value: 3 }),
          noiseSeed: new this.minigl.Uniform({ value: this.seed }),
        },
        type: "struct",
        excludeFrom: "fragment",
      }),
      u_baseColor: new this.minigl.Uniform({
        value: this.sectionColors[0],
        type: "vec3",
        excludeFrom: "fragment",
      }),
      u_waveLayers: new this.minigl.Uniform({
        value: [],
        excludeFrom: "fragment",
        type: "array",
      }),
    };

    for (let i = 1; i < this.sectionColors.length; i++) {
      this.uniforms.u_waveLayers.value.push(
        new this.minigl.Uniform({
          value: {
            color: new this.minigl.Uniform({
              value: this.sectionColors[i],
              type: "vec3",
            }),
            noiseFreq: new this.minigl.Uniform({
              value: [
                2 + i / this.sectionColors.length,
                3 + i / this.sectionColors.length,
              ],
              type: "vec2",
            }),
            noiseSpeed: new this.minigl.Uniform({ value: 11 + 0.3 * i }),
            noiseFlow: new this.minigl.Uniform({ value: 6.5 + 0.3 * i }),
            noiseSeed: new this.minigl.Uniform({ value: this.seed + 10 * i }),
            noiseFloor: new this.minigl.Uniform({ value: 0.1 }),
            noiseCeil: new this.minigl.Uniform({ value: 0.63 + 0.07 * i }),
          },
          type: "struct",
        })
      );
    }

    const fullVertex = [NOISE_GLSL, BLEND_GLSL, VERTEX_GLSL].join("\n\n");
    this.material = new this.minigl.Material(
      fullVertex,
      FRAGMENT_GLSL,
      this.uniforms
    );
  }

  initMesh() {
    if (!this.minigl) return;
    this.initMaterial();
    this.geometry = new this.minigl.PlaneGeometry();
    this.mesh = new this.minigl.Mesh(this.geometry, this.material);
  }

  resize = () => {
    if (!this.el || !this.minigl || !this.mesh || this.isDestroyed) return;
    this.width = this.el.parentElement?.offsetWidth || window.innerWidth;
    this.height = this.el.parentElement?.offsetHeight || 650;
    this.minigl.setSize(this.width, this.height);
    this.minigl.setOrthographicCamera();
    this.xSegCount = Math.ceil(this.width * this.conf.density[0]);
    this.ySegCount = Math.ceil(this.height * this.conf.density[1]);
    this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount);
    this.mesh.geometry.setSize(this.width, this.height);
  };

  animate = (time: number) => {
    if (!this.conf.playing || this.isDestroyed || !this.mesh || !this.minigl) return;
    this.t += Math.min(time - this.last, 1000 / 15);
    this.last = time;
    this.mesh.material.uniforms.u_time.value = this.t;
    this.minigl.render();
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  pause() {
    this.conf.playing = false;
    cancelAnimationFrame(this.animationFrameId);
  }

  play() {
    if (this.conf.playing || this.isDestroyed) return;
    this.conf.playing = true;
    this.last = performance.now();
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  init() {
    this.initMesh();
    this.resize();
    this.last = performance.now();
    this.animationFrameId = requestAnimationFrame(this.animate);
    window.addEventListener("resize", this.resize);
  }

  destroy() {
    this.isDestroyed = true;
    this.pause();
    window.removeEventListener("resize", this.resize);
    if (this.minigl) {
      this.minigl.destroy();
    }
  }
}
