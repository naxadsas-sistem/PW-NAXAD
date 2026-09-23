"use client";

import React from "react";

export interface StripeRibbonBackgroundProps {
  className?: string;
}

export function StripeRibbonBackground({
  className = "",
}: StripeRibbonBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-white ${className}`}
      aria-hidden="true"
    >
      {/* CAPA 1: Gradiente Naranja/Rosa (Esquina superior derecha) */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-60 animate-gradient-1 pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255,180,100,0.45) 0%, rgba(255,100,150,0.25) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* CAPA 2: Gradiente Rosa/Púrpura (Centro-derecha) */}
      <div 
        className="absolute top-[18%] right-[8%] w-[620px] h-[620px] rounded-full opacity-60 animate-gradient-2 pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255,100,150,0.45) 0%, rgba(150,100,255,0.3) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* CAPA 3: Gradiente Púrpura/Azul (Inferior derecha) */}
      <div 
        className="absolute bottom-[-10%] right-[18%] w-[800px] h-[800px] rounded-full opacity-60 animate-gradient-3 pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(150,100,255,0.4) 0%, rgba(100,150,255,0.25) 50%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      {/* CAPA 4: Gradiente Azul suave (Izquierda para balance) */}
      <div 
        className="absolute top-[28%] left-[-6%] w-[520px] h-[520px] rounded-full opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(100,150,255,0.35) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Rejilla sutil arquitectónica (estilo Stripe) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 30%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 30%, black 40%, transparent 90%)',
        }}
      />

      {/* Máscara de desvanecimiento suave hacia la sección siguiente */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

export default StripeRibbonBackground;
