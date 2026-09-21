"use client";

import React, { useEffect, useRef, useState } from "react";
import { StripeGradient } from "@/lib/stripe-gradient";

export interface HeroDynamicBackgroundProps {
  intensity?: "subtle" | "medium" | "vibrant";
  className?: string;
}

export function HeroDynamicBackground({
  className = "",
}: HeroDynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // 1. Parallax reactivo al scroll (GPU-friendly)
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

  // 2. Inicialización del motor WebGL Stripe Gradient con alta dinámica y movimiento fluido
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gradient = new StripeGradient();

    // Calibración dinámica: ondas fluidas, mayor amplitud y movimiento continuo visible
    gradient.amp = 320;
    gradient.angle = 0.16;
    gradient.conf.density = [0.06, 0.16];
    gradient.globalNoiseSpeed = 1.5e-5;
    gradient.speedFactor = 2.4;

    try {
      gradient.initGradient(canvas);
      if (prefersReducedMotion) {
        gradient.pause();
      }
    } catch (err) {
      console.warn("WebGL Stripe Gradient initialization fallback:", err);
    }

    // Pausar cuando el Hero salga del viewport (ahorro de recursos GPU)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !prefersReducedMotion) {
          gradient.play();
        } else {
          gradient.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      gradient.destroy();
    };
  }, []);

  const parallaxY = scrollY * 0.14;
  const orbsY = scrollY * 0.22;

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      {/* 1. Orbes de Luz Ambiental Flotantes que se desplazan por la pantalla */}
      <div
        style={{
          transform: `translate3d(0, ${orbsY}px, 0)`,
          willChange: "transform",
        }}
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
      >
        {/* Orbe 1: Azul eléctrico y cyan superior izquierdo que se mueve */}
        <div className="absolute -top-12 -left-16 w-[34rem] sm:w-[42rem] h-[34rem] sm:h-[42rem] bg-gradient-to-tr from-blue-600/25 via-sky-400/20 to-transparent rounded-full blur-3xl animate-orb-1" />

        {/* Orbe 2: Índigo y púrpura central derecho que oscila */}
        <div className="absolute top-1/4 -right-16 w-[36rem] sm:w-[46rem] h-[36rem] sm:h-[46rem] bg-gradient-to-bl from-indigo-600/25 via-purple-500/20 to-transparent rounded-full blur-3xl animate-orb-2" />

        {/* Orbe 3: Coral y rosa fucsia vibrante inferior */}
        <div className="absolute top-1/3 left-1/4 w-[28rem] sm:w-[36rem] h-[28rem] sm:h-[36rem] bg-gradient-to-br from-rose-500/18 via-pink-400/15 to-transparent rounded-full blur-3xl animate-orb-3" />
      </div>

      {/* 2. Canvas con el Shader WebGL Stripe Real (Paleta Oficial NAXAD / Contacto) */}
      <div
        className="absolute top-0 left-0 right-0 h-[720px] sm:h-[840px] md:h-[960px] w-full"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 80%, transparent 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-85 sm:opacity-90"
          style={
            {
              "--gradient-color-1": "#2563EB", // Azul Eléctrico NAXAD
              "--gradient-color-2": "#4F46E5", // Índigo profundo
              "--gradient-color-3": "#0EA5E9", // Cyan / Sky brillante
              "--gradient-color-4": "#F43F5E", // Coral / Fucsia de contraste
            } as React.CSSProperties
          }
        />
      </div>

      {/* 3. Cuadrícula arquitectónica punteada estilo Stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[720px] sm:h-[840px] md:h-[960px] bg-dot-grid opacity-25 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 25%, black 25%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 25%, black 25%, transparent 90%)",
        }}
      />
    </div>
  );
}

// Alias para compatibilidad directa
export const StripeGradientBackground = HeroDynamicBackground;


