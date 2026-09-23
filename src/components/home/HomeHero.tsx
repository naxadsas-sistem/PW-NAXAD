'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* 1. Fondo Dinámico: Orbes de gradiente animados (Efecto Stripe Aurora) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-aurora-1 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[120px] animate-aurora-2 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-violet-600/20 rounded-full blur-[120px] animate-aurora-3 pointer-events-none" />

      {/* 2. Rejilla sutil (Grid) para textura "Tech" */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 3. Viñeta oscura en los bordes para enfocar la atención al centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)] pointer-events-none" />

      {/* 4. Contenido del Hero */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow / Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-sm shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Sistemas de gestión a medida para PyMEs</span>
          </div>

          {/* H1: Jerarquía clara y tracking-tight para elegancia */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Tu empresa ya tiene un sistema.{" "}
            <span className="text-slate-400">Hoy depende de personas y planillas.</span>
            <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
              Lo convertimos en software.
            </span>
          </h1>

          {/* Subtítulo: Leading-relaxed para legibilidad */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Encontramos dónde se traba tu operación y construimos el sistema que la destraba. Menos horas cargando datos, menos errores y números claros para decidir.
          </p>

          {/* CTAs con Jerarquía Visual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#diagnostico"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Hacé el diagnóstico en 2 min</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20hablar%20con%20un%20especialista%20de%20NAXAD."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              <span>Hablar con un especialista</span>
            </a>
          </div>

          {/* Micro-Proof / Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>Sin costo inicial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>Sin registrarte</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>Resultado inmediato</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeHero;
