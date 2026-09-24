"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  AlertTriangle,
  TrendingDown,
  CheckCircle2,
  ArrowRight,
  XCircle,
  Zap,
  Clock,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

// Datos de los 3 cuellos de botella
export interface ProblemaItem {
  id: string;
  titulo: string;
  descripcion: string;
  icono: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  metrica: {
    valor: string;
    unidad: string;
    label: string;
  };
  visualizacion: "excel" | "adopcion" | "timeline";
}

const problemas: ProblemaItem[] = [
  {
    id: "silos",
    titulo: "Planillas en silos y datos duplicados",
    descripcion:
      "Ventas usa un Excel, depósito maneja otro y administración concilia a mano a fin de mes. Las fórmulas se rompen y nadie sabe cuál es la versión real.",
    icono: FileSpreadsheet,
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700",
    metrica: {
      valor: "14",
      unidad: "hs/semana",
      label: "Tiempo perdido en consolidación manual",
    },
    visualizacion: "excel",
  },
  {
    id: "rigido",
    titulo: "Software rígido que tu equipo rechaza",
    descripcion:
      "Se compró una licencia cara con 200 opciones que nadie usa. Como es rígido y lento, los empleados crean atajos por fuera y se pierde la trazabilidad.",
    icono: Users,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    metrica: {
      valor: "28%",
      unidad: "uso real",
      label: "Adopción de ERP tradicional",
    },
    visualizacion: "adopcion",
  },
  {
    id: "ciegas",
    titulo: "Decisiones a ciegas y números tardíos",
    descripcion:
      "Saber cuánto se ganó realmente en el mes toma semanas. No hay visibilidad del margen neto por producto, la cobranza pendiente o el capital inmovilizado.",
    icono: TrendingDown,
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-300",
    textColor: "text-slate-700",
    metrica: {
      valor: "18",
      unidad: "días tarde",
      label: "Cierre mensual de gestión",
    },
    visualizacion: "timeline",
  },
];

// Preguntas del autodiagnóstico
const preguntasDiagnostico = [
  "¿Tu equipo usa planillas duplicadas o versiones desactualizadas?",
  "¿El cierre de mes tarda más de 10 días?",
  "¿Tenés miedo de que un empleado clave falte y todo se caiga?",
];

// Visualización 1: Excel con errores
function ExcelErrorVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-20 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden p-2 transition-all">
      <div className="grid grid-cols-4 gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: isActive ? [0.4, 1, 0.4] : 0.6,
              scale: isActive && i === 3 ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className={`h-6 rounded flex items-center justify-center text-[9px] font-mono select-none transition-colors ${
              i === 3
                ? "bg-red-100 border border-red-300 text-red-700 font-bold"
                : "bg-white border border-slate-200 text-slate-500"
            }`}
          >
            {i === 3 ? "#REF!" : `A${i + 1}`}
          </motion.div>
        ))}
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center bg-red-500/10 backdrop-blur-[1.5px]"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 shadow-xs border border-red-200">
            <XCircle className="text-red-600" size={14} />
            <span className="text-[10px] font-mono font-bold text-red-700">Fórmulas rotas</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Visualización 2: Barra de adopción baja
function AdopcionBajaVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-semibold text-slate-700">Adopción real</span>
        <span className="font-mono font-bold text-amber-700">28%</span>
      </div>
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden p-0.5">
        <motion.div
          initial={{ width: "28%" }}
          animate={{
            width: isActive ? ["28%", "34%", "28%"] : "28%",
          }}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-xs"
        />
      </div>
      <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span>WhatsApp / Papel: 72%</span>
        <span>ERP: 28%</span>
      </div>
    </div>
  );
}

// Visualización 3: Timeline de cierre tardío
function CierreTardioVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-16 pt-1">
      <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-slate-200 -translate-y-1/2" />
      <div className="relative flex items-center justify-between h-full px-2">
        <div className="flex flex-col items-center">
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
          <span className="text-[10px] font-semibold text-slate-700 mt-1">Día 1</span>
          <span className="text-[8px] font-mono text-slate-400">Cierre mes</span>
        </div>

        {/* Gap tardío */}
        <div className="flex flex-col items-center">
          <div
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md border transition-all ${
              isActive
                ? "bg-red-100 border-red-200 scale-105"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <Clock size={11} className={isActive ? "text-red-600 animate-spin" : "text-slate-500"} />
            <span className={`text-[9px] font-mono font-bold ${isActive ? "text-red-700" : "text-slate-600"}`}>
              18 días de atraso
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500 ring-4 ring-red-100 animate-pulse" />
          <span className="text-[10px] font-bold text-red-700 mt-1">Día 18</span>
          <span className="text-[8px] font-mono text-red-600 font-semibold">Reporte listo</span>
        </div>
      </div>
    </div>
  );
}

export default function DiagnosticoOperativo() {
  const [activeProblema, setActiveProblema] = useState<string | null>(null);
  const [respuestas, setRespuestas] = useState<(boolean | null)[]>([null, null, null]);
  const [showResultado, setShowResultado] = useState(false);

  const handleRespuesta = (index: number, valor: boolean) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = valor;
    setRespuestas(nuevasRespuestas);
  };

  const calcularResultado = () => {
    setShowResultado(true);
  };

  const siCount = respuestas.filter((r) => r === true).length;
  const tieneRespuestas = respuestas.some((r) => r !== null);

  return (
    <section id="diagnostico" className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-white to-slate-50/60 relative overflow-hidden border-b border-slate-200/80">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(231,111,115,0.06),transparent)] pointer-events-none" />

      <Container className="relative">
        {/* Header de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          {/* Eyebrow Editorial Monospace */}
          <div className="inline-flex items-center gap-2 mb-4 text-slate-500 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span className="font-semibold text-slate-700">Diagnóstico Operativo</span>
            <span className="text-slate-300 hidden sm:inline">&middot;</span>
            <span className="text-slate-500 hidden sm:inline">Detección de Fricción</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#151A21] tracking-tight leading-[1.15] mb-4">
            Cuando la operación crece,{" "}
            <span className="bg-gradient-to-r from-[#E76F73] via-rose-600 to-[#E76F73] bg-clip-text text-transparent">
              el desorden manual también escala.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Es un patrón clásico en empresas en expansión: las ventas aumentan, pero los procesos manuales empiezan a crujir. Estos son los tres cuellos de botella que más rentabilidad y tiempo le quitan a un negocio:
          </p>
        </motion.div>

        {/* Cards de Problemas con Visualizaciones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {problemas.map((problema, idx) => {
            const isActive = activeProblema === problema.id;
            const Icon = problema.icono;

            return (
              <motion.div
                key={problema.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onHoverStart={() => setActiveProblema(problema.id)}
                onHoverEnd={() => setActiveProblema(null)}
                onClick={() => setActiveProblema(isActive ? null : problema.id)}
                className="group cursor-pointer"
              >
                <div
                  className={`relative h-full p-6 sm:p-7 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "bg-white border-slate-300 shadow-xl shadow-slate-900/5 scale-[1.01]"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md"
                  }`}
                >
                  {/* Gradiente de fondo sutil al hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${problema.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Indicador superior */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${problema.color} transform origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />

                  <div>
                    {/* Icono */}
                    <div
                      className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-br ${problema.color} text-white shadow-md`
                          : `${problema.bgColor} ${problema.textColor}`
                      }`}
                    >
                      <Icon
                        size={22}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-bold text-[#151A21] mb-2 leading-snug">
                      {problema.titulo}
                    </h3>

                    {/* Descripción */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {problema.descripcion}
                    </p>
                  </div>

                  <div>
                    {/* Visualización Animada */}
                    <div className="pt-4 border-t border-slate-100 mb-5">
                      {problema.visualizacion === "excel" && (
                        <ExcelErrorVisual isActive={isActive} />
                      )}
                      {problema.visualizacion === "adopcion" && (
                        <AdopcionBajaVisual isActive={isActive} />
                      )}
                      {problema.visualizacion === "timeline" && (
                        <CierreTardioVisual isActive={isActive} />
                      )}
                    </div>

                    {/* Métrica destacada */}
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${problema.color} bg-clip-text text-transparent font-mono tracking-tight`}
                      >
                        {problema.metrica.valor}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 font-mono">
                        {problema.metrica.unidad}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {problema.metrica.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Autodiagnóstico Interactivo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#2563EB] to-indigo-600 text-white shadow-2xs">
                <Zap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#151A21]">
                  Autodiagnóstico operativo
                </h3>
                <p className="text-sm text-slate-600">
                  Respondé estas 3 preguntas rápidas
                </p>
              </div>
            </div>

            <div className="space-y-3.5 mb-6">
              {preguntasDiagnostico.map((pregunta, idx) => {
                const valorActual = respuestas[idx];

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 transition-colors hover:border-slate-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-600 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-sm font-medium text-[#151A21] leading-snug">
                        {pregunta}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 pl-9 sm:pl-0">
                      <button
                        type="button"
                        onClick={() => handleRespuesta(idx, true)}
                        className={`min-h-[40px] px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          valorActual === true
                            ? "bg-red-500 text-white shadow-xs scale-105"
                            : "bg-white border border-slate-200 text-slate-600 hover:border-red-300 hover:text-red-600"
                        }`}
                      >
                        Sí
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRespuesta(idx, false)}
                        className={`min-h-[40px] px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          valorActual === false
                            ? "bg-emerald-500 text-white shadow-xs scale-105"
                            : "bg-white border border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-600"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botón de resultado */}
            <button
              type="button"
              onClick={calcularResultado}
              className="w-full min-h-[48px] py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{showResultado ? "Actualizar mi diagnóstico" : "Ver mi diagnóstico"}</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* Resultado */}
            {showResultado && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`mt-6 p-6 rounded-2xl border transition-all ${
                  siCount >= 2
                    ? "bg-gradient-to-br from-red-50/60 via-white to-rose-50/40 border-red-200"
                    : "bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 border-blue-200"
                }`}
              >
                {siCount >= 2 ? (
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2.5">
                      <AlertTriangle className="text-red-600 shrink-0" size={22} />
                      <h4 className="text-base font-bold text-[#151A21]">
                        Tu negocio necesita un sistema propio
                      </h4>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Contestaste{" "}
                      <strong className="text-red-600 font-bold">
                        {siCount} de 3
                      </strong>{" "}
                      situaciones críticas. Es momento de dejar de parchear con
                      planillas y software genérico. Un sistema a medida no es un
                      lujo, es la única forma de escalar sin caos.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#151A21] text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-xs min-h-[44px]"
                      >
                        <span>Agendar diagnóstico gratuito</span>
                        <ArrowRight size={14} />
                      </Link>
                      <a
                        href="#ecosistema"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2563EB] transition-colors py-2"
                      >
                        <span>Ver productos del ecosistema</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="text-emerald-600 shrink-0" size={22} />
                      <h4 className="text-base font-bold text-[#151A21]">
                        Tu operación está en buen camino
                      </h4>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {tieneRespuestas ? (
                        <>
                          Contestaste{" "}
                          <strong className="text-emerald-600 font-bold">
                            {siCount} de 3
                          </strong>{" "}
                          situaciones críticas. Aún podés optimizar procesos antes
                          de que se conviertan en cuellos de botella. Un diagnóstico
                          preventivo te ahorra meses de caos futuro.
                        </>
                      ) : (
                        <>
                          Seleccioná las respuestas para recibir un diagnóstico personalizado. Un chequeo preventivo te permite identificar cuellos de botella antes de que frenen el crecimiento de tu empresa.
                        </>
                      )}
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#151A21] text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-xs min-h-[44px]"
                      >
                        <span>Prevenir antes de lamentar</span>
                        <ArrowRight size={14} />
                      </Link>
                      <a
                        href="#ecosistema"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2563EB] transition-colors py-2"
                      >
                        <span>Ver productos del ecosistema</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export { DiagnosticoOperativo };
