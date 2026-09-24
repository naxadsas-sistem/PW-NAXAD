"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export interface StripeRibbonBackgroundProps {
  className?: string;
}

export function StripeRibbonBackground({
  className = "",
}: StripeRibbonBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  // Parallax sutil reactivo al scroll para darle tridimensionalidad
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxY = scrollY * 0.12;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-white ${className}`}
      aria-hidden="true"
    >
      {/* 1. Rejilla arquitectónica punteada sutil (estilo Stripe / Linear) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 90%)',
        }}
      />

      {/* 2. Orbes de atmósfera con la paleta de marca NAXAD (Azul Eléctrico + Celeste Cielo + Coral sutil) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY * 0.6}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Resplandor Azul Eléctrico NAXAD (#2563EB) superior derecho */}
        <div className="absolute -top-20 right-[-8%] sm:right-[4%] w-[34rem] sm:w-[48rem] h-[34rem] sm:h-[48rem] bg-gradient-to-bl from-blue-600/28 via-indigo-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

        {/* Resplandor Celeste Cielo NAXAD (#8BC7F5) central */}
        <div className="absolute top-[16%] right-[12%] sm:right-[18%] w-[28rem] sm:w-[40rem] h-[28rem] sm:h-[40rem] bg-gradient-to-br from-sky-400/28 via-blue-500/18 to-transparent rounded-full blur-[110px] pointer-events-none" />

        {/* Resplandor Coral NAXAD (#E76F73) sutil en la arista inferior */}
        <div className="absolute top-[32%] right-[-4%] sm:right-[6%] w-[26rem] sm:w-[38rem] h-[26rem] sm:h-[38rem] bg-gradient-to-tl from-rose-500/18 via-indigo-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* 3. La Cinta 3D Satinada con Colores de Marca NAXAD y Flujo Ascendente Continuo */}
      <div
        className="absolute -top-[5%] sm:top-[-3%] right-[-32%] sm:right-[-18%] lg:right-[-8%] xl:right-[-2%] 2xl:right-[2%] w-[680px] sm:w-[960px] lg:w-[1260px] xl:w-[1440px] h-[750px] sm:h-[950px] lg:h-[1100px] pointer-events-none transition-transform duration-100 ease-out flex items-center justify-end"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="relative w-full h-full animate-ribbon-upward">
          {/* Asset 3D de alta definición en azul zafiro y celeste NAXAD */}
          <Image
            src="/brand/naxad-wave.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            className="object-contain object-right-top select-none pointer-events-none drop-shadow-[0_24px_60px_rgba(37,99,235,0.18)]"
          />

          {/* Haz de luz ascendente continuo (Shimmer stream de abajo hacia arriba) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-overlay">
            <div 
              className="w-full h-full animate-stream-upward"
              style={{
                background: "linear-gradient(to top right, transparent 35%, rgba(255,255,255,0.45) 50%, rgba(139,199,245,0.3) 65%, transparent 75%)",
              }}
            />
          </div>

          {/* Trazos de satén con pulso de luz ascendente que recorren la curvatura 3D */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-60"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arista de luz ascendente a lo largo de la cresta */}
            <path
              d="M950 50 C 780 200, 680 420, 850 750 C 920 880, 960 920, 1000 950"
              stroke="url(#naxadSheenStream)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="animate-stroke-up filter blur-[1.5px]"
            />
            {/* Reflejo secundario en la torsión central */}
            <path
              d="M820 0 C 650 250, 560 480, 720 800 C 790 920, 840 980, 900 1000"
              stroke="url(#naxadSheenWhite)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-stroke-up filter blur-[2px]"
              style={{ animationDelay: "-4.5s" }}
            />

            <defs>
              <linearGradient id="naxadSheenStream" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#8BC7F5" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="naxadSheenWhite" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8BC7F5" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* 4. Gradiente horizontal hacia blanco puro a la izquierda (Legibilidad 100% nítida) */}
      <div 
        className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none z-[1]" 
      />

      {/* 5. Desvanecimiento suave inferior hacia la sección siguiente */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[1]" />
    </div>
  );
}

export default StripeRibbonBackground;
