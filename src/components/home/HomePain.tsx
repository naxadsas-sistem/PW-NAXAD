"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  FileSpreadsheet,
  AlertTriangle,
  TrendingDown,
  Clock,
  Shuffle,
  ArrowDown,
} from "lucide-react";

export function HomePain() {
  const scrollToEcosystem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("ecosistema");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 sm:py-32 md:py-36 lg:py-40 bg-slate-50 border-b border-slate-200 relative">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="coral" size="sm" className="mb-3">
            Diagnóstico Operativo
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151A21] leading-tight">
            Cuando la operación crece, el caos operativo también escala.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-loose">
            Es un patrón clásico en empresas en expansión: las ventas aumentan, pero los procesos manuales empiezan a crujir. Estos son los tres cuellos de botella que más rentabilidad y tiempo le quitan a un negocio:
          </p>
        </div>

        {/* 3 Cards de Dolor con micro-visuales en fondo claro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-16">
          {/* Card 1: Planillas en silos */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-red-300 transition-all">
            <div>
              <div className="w-11 h-11 rounded-lg bg-red-50 text-[#E76F73] flex items-center justify-center mb-5">
                <FileSpreadsheet size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#151A21] mb-2">
                Planillas en silos y datos duplicados
              </h3>
              <p className="text-sm text-slate-600 leading-loose mb-6">
                Ventas usa un Excel, depósito maneja otro y administración concilia a mano a fin de mes. Las fórmulas se rompen y nadie sabe cuál es la versión real.
              </p>
            </div>

            {/* Micro-visual en bg-slate-50 */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
              <div className="text-[11px] text-slate-500 flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="truncate">stock_general_vfinal(3).xlsx</span>
                <span className="text-red-700 bg-red-50 px-1.5 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 shrink-0">
                  <AlertTriangle size={11} /> Desfasado
                </span>
              </div>
              <div className="flex justify-between text-slate-700 text-[11px]">
                <span>Fila 42 · Código Art. 802</span>
                <span className="text-red-600 font-medium">#REF! Error</span>
              </div>
              <div className="text-[10px] text-slate-500 pt-0.5">
                Tiempo perdido: ~14 hs/semana en consolidación manual
              </div>
            </div>
          </div>

          {/* Card 2: Software rígido que nadie usa */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-300 transition-all">
            <div>
              <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-5">
                <Shuffle size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#151A21] mb-2">
                Software rígido que tu equipo rechaza
              </h3>
              <p className="text-sm text-slate-600 leading-loose mb-6">
                Se compró una licencia cara con 200 opciones que nadie usa. Como es rígido y lento, los empleados crean atajos por fuera y se pierde la trazabilidad.
              </p>
            </div>

            {/* Micro-visual en bg-slate-50 */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
              <div className="text-[11px] text-slate-500 flex items-center justify-between pb-1 border-b border-slate-200">
                <span>Adopción de ERP Tradicional</span>
                <span className="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] font-semibold">
                  Baja adherencia
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#E76F73] h-full w-[28%]" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 pt-0.5">
                <span className="font-semibold text-slate-700">Solo 28% de uso real</span>
                <span>72% por WhatsApp / Papel</span>
              </div>
            </div>
          </div>

          {/* Card 3: Decisiones a ciegas */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-400 transition-all">
            <div>
              <div className="w-11 h-11 rounded-lg bg-slate-100 text-[#151A21] flex items-center justify-center mb-5">
                <TrendingDown size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#151A21] mb-2">
                Decisiones a ciegas y números tardíos
              </h3>
              <p className="text-sm text-slate-600 leading-loose mb-6">
                Saber cuánto se ganó realmente en el mes toma semanas. No hay visibilidad del margen neto por producto, la cobranza pendiente o el capital inmovilizado.
              </p>
            </div>

            {/* Micro-visual en bg-slate-50 */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
              <div className="text-[11px] text-slate-500 flex items-center justify-between pb-1 border-b border-slate-200">
                <span>Cierre Mensual de Gestión</span>
                <span className="text-red-700 bg-red-50 px-1.5 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1">
                  <Clock size={11} /> 18 días tarde
                </span>
              </div>
              <div className="flex justify-between text-slate-700 text-[11px]">
                <span>Margen por canal</span>
                <span className="text-slate-500">Sin desglose confiable</span>
              </div>
              <div className="text-[10px] text-[#2563EB] font-medium pt-0.5">
                Consecuencia: Decisiones tomadas por intuición
              </div>
            </div>
          </div>
        </div>

        {/* Bloque de Autodiagnóstico con CTA a #ecosistema */}
        <div className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm sm:text-base text-slate-700 max-w-2xl leading-loose">
            <span className="font-bold text-[#151A21] block sm:inline">
              Autodiagnóstico operativo:{" "}
            </span>
            Si contestás que sí a al menos dos de estas situaciones — planillas duplicadas, cierre de mes tardío, miedo a que un empleado clave falte — tu negocio ya está listo para un sistema propio.
          </div>
          <a
            href="#ecosistema"
            onClick={scrollToEcosystem}
            className="shrink-0 w-full sm:w-auto"
          >
            <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563EB] text-white hover:bg-blue-700 text-xs font-semibold shadow-sm transition-all w-full sm:w-auto">
              Ver el ecosistema
              <ArrowDown size={14} />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
