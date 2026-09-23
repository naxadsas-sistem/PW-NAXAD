'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroDynamicBackground } from "./HeroDynamicBackground";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center bg-white overflow-hidden">
      {/* 1. Fondo dinámico WebGL Stripe Gradient difuminado y lento (como /contacto) */}
      <HeroDynamicBackground />

      {/* 2. Contenido del Hero con alta legibilidad y jerarquía ejecutiva */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow / Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 text-[#2563EB] text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
            </span>
            <span>Sistemas de gestión a medida para PyMEs</span>
          </div>

          {/* H1: Jerarquía clara, colores luminosos de alta gama */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#151A21] tracking-tight leading-[1.1] mb-6">
            Tu empresa ya tiene un sistema.{" "}
            <span className="text-slate-500 font-bold">Hoy depende de personas y planillas.</span>
            <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              Lo convertimos en software.
            </span>
          </h1>

          {/* Subtítulo claro y legible */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Encontramos dónde se traba tu operación y construimos el sistema que la destraba. Menos horas cargando datos, menos errores y números claros para decidir.
          </p>

          {/* CTAs con Jerarquía Visual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#diagnostico"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2563EB] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Hacé el diagnóstico en 2 min</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20hablar%20con%20un%20especialista%20de%20NAXAD."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 text-[#151A21] border border-slate-200/90 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              <span>Hablar con un especialista</span>
            </a>
          </div>

          {/* Micro-Proof / Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              <span>Sin costo inicial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              <span>Sin registrarte</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              <span>Resultado inmediato</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeHero;
