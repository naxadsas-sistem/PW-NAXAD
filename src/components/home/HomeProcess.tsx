"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Headphones,
  Wrench,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code2,
  ShieldCheck,
  Clock,
  ChevronRight
} from "lucide-react";

export function HomeProcess() {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: Headphones,
      title: "Escuchamos tu operación antes de escribir código",
      subtitle: "Diagnóstico profundo y mapeo de flujos",
      duration: "Primeros días",
      desc: "Relevamos cómo opera tu equipo hoy en la práctica. Identificamos los cuellos de botella reales, las planillas que se rompen y las tareas manuales a ordenar. Definimos si adoptás un producto existente del ecosistema o construimos a medida.",
      deliverable: "Diagnóstico operativo documentado con mapa de flujos y prioridades.",
      codePreview: `// 01-diagnostico-operativo.ts
export interface RelevamientoOperativo {
  rubro: "clinica" | "farmacia" | "distribuidora" | "pyme";
  friccionActual: "planillas_rotas" | "software_rigido" | "decision_ciegas";
  estrategia: "ADOPTAR_SAAS_EXISTENTE" | "CONSTRUIR_A_MEDIDA";
  puntoDePartida: "Base modular probada en producción (PostgreSQL RLS)";
}

export function evaluarRetorno(caso: RelevamientoOperativo) {
  return {
    rutaOptima: caso.estrategia,
    tiempoAhorradoEstimado: "14+ hs/semana por área",
    criterio: "Tecnología al servicio de la rentabilidad del negocio",
  };
}`,
    },
    {
      num: "02",
      icon: Wrench,
      title: "Criterio de negocio y desarrollo ágil",
      subtitle: "Ingeniería + administración de empresas",
      duration: "Semanas, no meses",
      desc: "No diseñamos desde la teoría de desarrollo. Cada decisión —qué automatizar, qué dejar manual y cómo medir el resultado— pasa primero por un criterio de gestión de negocio. Código 100% de tu empresa sobre PostgreSQL RLS probado en producción.",
      deliverable: "Sistema funcionando en producción, no una maqueta estática.",
      codePreview: `// 02-logica-operativa.ts (Ej: Pharmalyze AI / Control FEFO)
export async function registrarMovimientoStock(lote: {
  medicamentoId: string;
  loteCodigo: string;
  fechaVencimiento: Date;
  cantidad: number;
}) {
  // Priorización estricta por criterio FEFO para evitar mermas
  return await db.lotes.create({
    data: { 
      ...lote, 
      estado: "DISPONIBLE_VENTA_PRIORITARIA",
      auditoriaRLS: "clinic_isolation_verified" 
    },
  });
}`,
    },
    {
      num: "03",
      icon: LifeBuoy,
      title: "Adopción real y acompañamiento continuo",
      subtitle: "Implementación asistida en tu equipo",
      duration: "Continuo",
      desc: "El éxito de un sistema no es terminarlo, sino que tu equipo lo use todos los días con naturalidad. Capacitamos a cada persona, medimos el uso real y brindamos soporte directo por WhatsApp sin tickets burocráticos.",
      deliverable: "Equipo capacitado, adopción real y soporte directo del consultor.",
      codePreview: `// 03-acompanamiento-activo.ts
export const soporteEcosistemaNaxad = {
  canalDirecto: "WhatsApp oficial + reuniones con Gabriel Zambrano",
  soporte: "Post-lanzamiento activo en Buenos Aires",
  adopcionPromedio: "90%+ en los primeros 30 días",
  garantia: "SLA de disponibilidad 99.9% e infraestructura escalable",
  sistemasActivos: ["DentalDesk", "LautaroNutrición", "Pharmalyze AI"],
};`,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <Container>
        {/* Header de Sección */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>Metodología NAXAD · Criterio de Negocio + Ingeniería</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151A21] leading-tight mb-4">
            Tecnología pensada desde la administración de empresas.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            No arrancamos preguntando qué funciones querés, sino dónde perdés tiempo y plata. 
            Ni software genérico que te obliga a cambiar tu operatoria, ni código improvisado desde cero.
          </p>
        </div>

        {/* Layout Split: 3 Pasos Clickeables + Consola de Código en Fondo Claro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Columna Izquierda: Pasos Clickeables */}
          <div className="lg:col-span-5 space-y-3.5">
            {steps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-blue-50/70 border-[#2563EB] shadow-xs ring-1 ring-[#2563EB]/20"
                      : "bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-[#2563EB] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        PASO {step.num}
                      </span>
                      <span className="text-[11px] font-mono text-[#2563EB] font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <Icon
                      size={18}
                      className={isSelected ? "text-[#2563EB]" : "text-slate-400"}
                    />
                  </div>
                  <h3
                    className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                      isSelected ? "text-[#151A21]" : "text-slate-800"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5 mb-1.5">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Columna Derecha: Consola Técnica & Entregable Real */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header de la consola */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 ml-2">
                    Fase {steps[selectedStep].num} · Entregable operativo
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-medium">
                  {steps[selectedStep].duration}
                </span>
              </div>

              {/* Título de entregable */}
              <div className="mb-4">
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Entregable Concreto:
                </div>
                <div className="text-sm sm:text-base font-bold text-[#151A21] mt-1 flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                  <span>{steps[selectedStep].deliverable}</span>
                </div>
              </div>

              {/* Bloque de código */}
              <div className="rounded-xl bg-white border border-slate-200/90 p-4 sm:p-5 overflow-x-auto text-xs font-mono leading-relaxed shadow-2xs">
                <pre className="text-slate-800">
                  <code>{steps[selectedStep].codePreview}</code>
                </pre>
              </div>
            </div>

            {/* Footer de la consola */}
            <div className="pt-4 mt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">
                ¿Querés evaluar qué opción conviene para tu negocio?
              </span>
              <Link
                href="/contacto"
                className="text-[#2563EB] hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <span>Hablemos de tu caso</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeProcess;
