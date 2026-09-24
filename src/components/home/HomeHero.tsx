'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { StripeRibbonBackground } from "./StripeRibbonBackground";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center bg-white overflow-hidden">
      {/* 1. Fondo dinámico de cinta 3D con colores de marca NAXAD */}
      <StripeRibbonBackground />

      {/* 2. Contenido del Hero con alta legibilidad y jerarquía ejecutiva */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-2xl xl:max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          
          {/* Eyebrow / Kicker sobrio de alta gama (estilo Stripe / Linear) */}
          <div className="inline-flex items-center gap-2.5 mb-6 text-slate-500 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="font-semibold text-slate-700">Sistemas de gestión &middot; PyMEs y Clínicas</span>
            <span className="text-slate-300 hidden sm:inline">&middot;</span>
            <span className="text-slate-400 hidden sm:inline">Buenos Aires</span>
          </div>

          {/* H1: Proporción áurea ejecutiva, equilibrada y sin estridencias */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-bold text-[#151A21] tracking-tight leading-[1.12] mb-6">
            Tu empresa ya tiene un método.{" "}
            <br className="hidden sm:inline" />
            <span className="text-slate-500 font-medium">Hoy depende de planillas y memoria. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-indigo-600 to-[#2563EB]">
              Lo convertimos en software.
            </span>
          </h1>

          {/* Subtítulo claro, directo y con tono directivo */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-normal">
            Encontramos dónde se traba tu operación cotidiana y construimos el sistema que la ordena. Menos horas cargando datos, cero desfasaje de stock y números claros para decidir.
          </p>

          {/* CTAs con Proporciones Premium */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 mb-9">
            <a 
              href="#diagnostico"
              className="group inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Hacé el autodiagnóstico en 2 min</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20hablar%20con%20un%20especialista%20de%20NAXAD."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/90 text-[#151A21] border border-slate-200/90 px-5 py-3.5 rounded-xl text-sm sm:text-base font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs backdrop-blur-xs cursor-pointer"
            >
              <span>Hablar con un especialista</span>
            </a>
          </div>

          {/* Micro-Proof / Trust Signals minimalistas */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Diagnóstico sin costo inicial</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">&middot;</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sin registro previo</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">&middot;</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Resultado operativo inmediato</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeHero;
