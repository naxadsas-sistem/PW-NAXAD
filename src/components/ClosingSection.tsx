'use client';

import React, { useState, useRef } from 'react';
import { MessageCircle, Calendar, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

export default function ClosingSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      {/* 1. Fondo Dinámico: Orbes de gradiente difuminados */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" 
      />
      
      {/* Rejilla sutil de fondo para textura tecnológica */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* 2. Tarjeta Principal con Efecto Spotlight Glassmorphism Claro */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          className="relative group rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-xl p-8 lg:p-16 overflow-hidden transition-all duration-500 hover:border-blue-300/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]"
        >
          {/* El "Spotlight" que sigue al mouse dentro de la tarjeta */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.06), transparent 45%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Icono de cita estilizado */}
            <div className="mb-8 p-4 rounded-2xl bg-blue-50 border border-blue-200/80 text-[#2563EB] shadow-xs">
              <Quote className="w-8 h-8" />
            </div>

            {/* Cita Principal con Jerarquía Tipográfica */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#151A21] leading-tight mb-8 max-w-4xl tracking-tight">
              &ldquo;Cada proyecto puede tener un alcance distinto, pero el criterio es siempre el mismo: generar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                mejoras aplicables y sostenibles.
              </span>
              &rdquo;
            </blockquote>

            {/* Subtexto de tranquilización (Reduce fricción) */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-12 leading-relaxed font-normal">
              No forzamos etapas burocráticas innecesarias. Adaptamos la profundidad del proceso a la realidad y urgencia de tu negocio.
            </p>

            {/* 3. CTAs Dinámicos y Jerárquicos */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              {/* CTA Primario: Conversación */}
              <Link 
                href="/contacto"
                className="group/btn relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#2563EB] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Efecto de brillo interno en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Coordinar conversación inicial</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
              </Link>

              {/* CTA Secundario: WhatsApp */}
              <a 
                href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20conversar%20sobre%20c%C3%B3mo%20trabajan%20en%20NAXAD."
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#151A21] border border-slate-200/90 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-2xs"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 group-hover/btn:scale-110 transition-transform shrink-0" />
                <span>Hablar por WhatsApp</span>
              </a>

            </div>
          </div>
        </div>

        {/* 4. Micro-proof final */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Respuesta en menos de 24 hs</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Sin compromiso ni costo</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>

      </div>
    </section>
  );
}
