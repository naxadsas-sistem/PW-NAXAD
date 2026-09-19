"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export function HeroDynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // 1. Efecto Parallax reactivo al Scroll (GPU-friendly)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Red de Nodos & Conexiones Interactivas en HTML5 Canvas (120 FPS Retina)
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    // Detección de Retina / High-DPI
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse tracking
    const mouse = {
      x: -9999,
      y: -9999,
      isHovered: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.isHovered = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Inicialización de partículas / nodos
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Particle[] = [];

    const colors = [
      "rgba(37, 99, 235,",   // Azul Naxad #2563EB
      "rgba(14, 165, 233,",  // Cyan sutil #0EA5E9
      "rgba(16, 185, 129,",  // Esmeralda #10B981
      "rgba(148, 163, 184,", // Slate arquitectónico #94A3B8
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.35 + 0.3,
      });
    }

    // Loop de renderizado
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Actualizar y dibujar partículas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Rebote en bordes
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Atracción sutil al cursor si está cerca
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x += (dx / dist) * force * 0.6;
            p.y += (dy / dist) * force * 0.6;
          }
        }

        // Dibujar nodo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();

        // Conectar nodos cercanos entre sí
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Conectar nodo al cursor si está cerca
        if (mouse.isHovered) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Manejo de resize
    const handleResize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    // Pausar si no está en pantalla para ahorrar CPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  // Multiplicadores de desplazamiento parallax
  const bgImageY = scrollY * 0.15;
  const canvasY = scrollY * 0.22;
  const orbsY = scrollY * 0.28;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto select-none"
    >
      {/* 1. Capa de Imagen Base de Malla Gradiente con Parallax */}
      <div
        style={{
          transform: `translate3d(0, ${bgImageY}px, 0)`,
          willChange: "transform",
        }}
        className="absolute inset-0 -top-10 -bottom-10 pointer-events-none opacity-40 transition-transform duration-75 ease-out"
      >
        <Image
          src="/naxad-hero-bg.webp"
          alt="Naxad Hero Background"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        {/* Overlay translúcido para mantener el fondo blanco luminoso institucional */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
      </div>

      {/* 2. Cuadrícula Arquitectónica Punteada estilo Stripe */}
      <div
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 20%, transparent 85%)",
        }}
        className="absolute inset-0 pointer-events-none bg-dot-grid opacity-60"
      />

      {/* 3. Orbes de Luz Ambiental Flotantes (Multi-capa con Parallax y Animación Orgánica) */}
      <div
        style={{
          transform: `translate3d(0, ${orbsY}px, 0)`,
          willChange: "transform",
        }}
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
      >
        {/* Orbe Azul / Cyan Superior Izquierdo */}
        <div className="absolute top-[8%] left-[10%] w-80 sm:w-[28rem] h-80 sm:h-[28rem] bg-gradient-to-tr from-blue-500/15 via-cyan-400/15 to-transparent rounded-full blur-3xl animate-orb-1" />

        {/* Orbe Índigo / Violeta Central Derecho */}
        <div className="absolute bottom-[20%] right-[8%] w-96 sm:w-[32rem] h-96 sm:h-[32rem] bg-gradient-to-bl from-indigo-400/12 via-violet-300/10 to-transparent rounded-full blur-3xl animate-orb-2" />

        {/* Orbe Esmeralda Acento Superior Central */}
        <div className="absolute top-[2%] right-[35%] w-72 sm:w-80 h-72 sm:h-80 bg-emerald-400/10 rounded-full blur-3xl animate-orb-3" />
      </div>

      {/* 4. Canvas Interactivo: Red de Datos, Nodos y Respuestas al Cursor */}
      <div
        style={{
          transform: `translate3d(0, ${canvasY}px, 0)`,
          willChange: "transform",
        }}
        className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-75"
        />
      </div>
    </div>
  );
}
