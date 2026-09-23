'use client';

import React from "react";

export default function AuroraBackground({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative min-h-screen w-full bg-slate-950 overflow-hidden ${className}`}>
      {/* 1. Orbes de gradiente animados (El efecto Aurora) */}
      {/* Nota: La opacidad baja (/15) es la clave para que se vea premium y no saturado */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/15 rounded-full blur-[120px] animate-aurora-1 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/15 rounded-full blur-[120px] animate-aurora-2 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-violet-600/15 rounded-full blur-[120px] animate-aurora-3 pointer-events-none" />

      {/* 2. Rejilla sutil (Grid) para textura "Tech" */}
      {/* Esto evita que el fondo se vea "vacío" y le da ese toque de ingeniería de Stripe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 3. Viñeta oscura en los bordes para enfocar la atención al centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)] pointer-events-none" />

      {/* 4. Contenido de tu página */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
