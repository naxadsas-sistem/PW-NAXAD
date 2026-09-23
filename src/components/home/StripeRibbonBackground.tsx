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
      {/* 1. Rejilla arquitectónica punteada y sutil (Firma de Stripe) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 90%)',
        }}
      />

      {/* 2. Orbes de atmósfera cálida que irradian detrás de la cinta */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY * 0.6}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Resplandor ámbar / naranja superior */}
        <div className="absolute -top-24 right-[-10%] sm:right-[5%] w-[34rem] sm:w-[48rem] h-[34rem] sm:h-[48rem] bg-gradient-to-bl from-amber-400/35 via-orange-400/25 to-transparent rounded-full blur-[110px] pointer-events-none" />

        {/* Resplandor rosa coral central */}
        <div className="absolute top-[18%] right-[10%] sm:right-[18%] w-[28rem] sm:w-[40rem] h-[28rem] sm:h-[40rem] bg-gradient-to-br from-rose-500/30 via-pink-400/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Resplandor violeta e índigo profundo */}
        <div className="absolute top-[35%] right-[-5%] sm:right-[8%] w-[32rem] sm:w-[46rem] h-[32rem] sm:h-[46rem] bg-gradient-to-tl from-indigo-500/30 via-purple-500/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* 3. La Cinta 3D Satinada Auténtica de Stripe con animación suave y parallax */}
      <div
        className="absolute -top-[5%] sm:top-[-3%] right-[-32%] sm:right-[-18%] lg:right-[-8%] xl:right-[-2%] 2xl:right-[2%] w-[680px] sm:w-[960px] lg:w-[1260px] xl:w-[1440px] h-[750px] sm:h-[950px] lg:h-[1100px] pointer-events-none transition-transform duration-100 ease-out flex items-center justify-end"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="relative w-full h-full animate-aurora-ribbon">
          <Image
            src="/brand/stripe-wave.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            className="object-contain object-right-top select-none pointer-events-none drop-shadow-[0_24px_60px_rgba(244,63,94,0.14)]"
          />
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
