"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  Headphones,
  Wrench,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function HomeProcess() {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: Headphones,
      title: "Entendemos tu operación real",
      duration: "Primeros días",
      desc: "Una conversación, no un cuestionario de 40 páginas. Vemos cómo trabajás hoy y si tu rubro ya tiene un sistema en el ecosistema o necesita uno a medida.",
      deliverable: "Diagnóstico claro: adoptás un producto existente o construimos el tuyo.",
      codePreview: `// 01-diagnostico-operativo.ts
export interface RelevamientoOperativo {
  rubro: string;
  flujoActual: "planillas" | "sistema_rigido" | "mixto";
  estrategia: "ADOPTAR_SAAS_EXISTENTE" | "CONSTRUIR_A_MEDIDA";
  sistemasEcosistemaDisponibles: ["DentalDesk", "LautaroNutrición", "Pharmalyze AI"];
}

export function evaluarCaso(operacion: RelevamientoOperativo) {
  return {
    ruta: operacion.estrategia,
    puntoDePartida: "Base modular probada en producción",
  };
}`,
    },
    {
      num: "02",
      icon: Wrench,
      title: "Configuración o desarrollo, según tu caso",
      duration: "Semanas, no meses",
      desc: "Si tu rubro ya está en el ecosistema, ajustamos el sistema existente a tu operación. Si no, construimos sobre la misma base técnica que ya probamos en producción.",
      deliverable: "Sistema funcionando, no una maqueta.",
      codePreview: `// 02-logica-sistema.ts (Ejemplo: Pharmalyze AI / Stock FEFO)
export async function registrarRecepcionLote(lote: {
  medicamentoId: string;
  loteCodigo: string;
  fechaVencimiento: Date;
  cantidad: number;
  proveedorDrogueria: string;
}) {
  // Ordenamiento automático por criterio FEFO
  return await db.lotes.create({
    data: { ...lote, estado: "DISPONIBLE_PARA_VENTA" },
  });
}`,
    },
    {
      num: "03",
      icon: LifeBuoy,
      title: "Seguimos con vos, no desaparecemos al entregar",
      duration: "Continuo",
      desc: "Capacitación de tu equipo, ajustes sobre la marcha, soporte directo — el mismo criterio que sostiene a DentalDesk y LautaroNutrición en producción hoy.",
      deliverable: "Soporte continuo + evolución del sistema.",
      codePreview: `// 03-acompanamiento.ts
export const soporteEcosistema = {
  ubicacion: "Buenos Aires, Argentina",
  canalDirecto: "WhatsApp + videollamadas con el equipo",
  filosofia: "Ajustes sobre la práctica real, no teoría",
  estadoSistemas: {
    dentalDesk: "En producción",
    lautaroNutricion: "En producción",
    pharmalyzeAI: "Piloto activo",
  },
};`,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="blue" size="sm" className="mb-3">
            Cómo entrás al ecosistema
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151A21] leading-tight">
            No arrancamos de cero. Partimos de lo que ya funciona.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ya sea que tu rubro esté en el ecosistema o necesites algo a medida, el punto de partida es una base construida y probada — no una página en blanco.
          </p>
        </div>

        {/* Componente Split: 3 Pasos Clickeables + Consola de Código en Fondo Claro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pasos a la izquierda */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-50/50 border-[#2563EB] shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-[#2563EB] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        PASO {step.num}
                      </span>
                      <span className="text-xs font-mono text-[#2563EB] font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <Icon
                      size={18}
                      className={isSelected ? "text-[#2563EB]" : "text-slate-400"}
                    />
                  </div>
                  <h3
                    className={`text-base font-bold transition-colors ${
                      isSelected ? "text-[#151A21]" : "text-slate-800"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Consola ilustrativa a la derecha */}
          <div className="lg:col-span-7 rounded-xl bg-slate-50 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
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
                    Paso {steps[selectedStep].num} · Entregable real
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
                <div className="text-sm sm:text-base font-bold text-[#151A21] mt-0.5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  {steps[selectedStep].deliverable}
                </div>
              </div>

              {/* Bloque de código */}
              <div className="rounded-lg bg-white border border-slate-200 p-4 overflow-x-auto text-xs font-mono leading-relaxed">
                <pre className="text-slate-800">
                  <code>{steps[selectedStep].codePreview}</code>
                </pre>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 mt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">
                ¿Querés evaluar qué opción conviene para tu negocio?
              </span>
              <Link
                href="/contacto"
                className="text-[#2563EB] hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                Hablemos de tu caso <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
