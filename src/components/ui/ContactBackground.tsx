"use client";

import React, { useEffect, useState } from "react";

export function ContactBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Parallax suave y amortiguado con el cursor (solo si no prefiere reducción de movimiento)
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let frameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 28; // máximo 14px de rango
      targetY = (e.clientY / innerHeight - 0.5) * 28;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      setMousePos({ x: currentX, y: currentY });
      frameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    frameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
      {/* 1. Gradiente radial difuso base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.08),rgba(255,255,255,0))]" />

      {/* 2. Malla líquida de orbes reactivos al cursor (100% GPU, 0% CPU) */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Orbe Azul Eléctrico NAXAD (#2563EB -> #38BDF8) - Superior Izquierda */}
        <div className="absolute -top-[12%] -left-[8%] w-[32rem] sm:w-[42rem] h-[32rem] sm:h-[42rem] rounded-full bg-gradient-to-tr from-[#2563EB]/18 via-[#38BDF8]/16 to-transparent blur-[85px] animate-orb-1" />

        {/* Orbe Índigo / Coral (#6366F1 -> #E76F73) - Superior Derecha */}
        <div className="absolute top-[5%] -right-[10%] w-[30rem] sm:w-[38rem] h-[30rem] sm:h-[38rem] rounded-full bg-gradient-to-bl from-[#E76F73]/14 via-[#6366F1]/16 to-transparent blur-[90px] animate-orb-2" />

        {/* Orbe Central Inferior de Profundidad (#818CF8 / Lavanda Tech) */}
        <div className="absolute top-[45%] left-[20%] w-[26rem] sm:w-[34rem] h-[26rem] sm:h-[34rem] rounded-full bg-gradient-to-r from-[#818CF8]/12 to-[#2563EB]/10 blur-[80px] animate-orb-3" />
      </div>

      {/* 3. Cuadrícula arquitectónica punteada estilo Stripe con máscara focal */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-35"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 20%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 20%, black 30%, transparent 90%)",
        }}
      />

      {/* 4. Velo protector de contraste (asegura legibilidad perfecta del formulario) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white/95" />
    </div>
  );
}
