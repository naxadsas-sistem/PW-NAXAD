"use client";

import React, { useEffect, useRef } from "react";
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
  const orbsRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  // 1. Parallax reactivo al scroll (GPU-friendly, sin re-renders)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (orbsRef.current) {
            orbsRef.current.style.transform = `translate3d(0, ${y * 0.16}px, 0)`;
          }
          if (canvasWrapRef.current) {
            canvasWrapRef.current.style.transform = `translate3d(0, ${y * 0.10}px, 0)`;
          }
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

    // Calibración fluida, serena y majestuosa: ondas lentas y ultra suaves
    gradient.amp = 100;
    gradient.angle = 0.10; // Inclinación diagonal orgánica suave
    gradient.conf.density = [0.03, 0.09];
    gradient.globalNoiseSpeed = 1.6e-6; // Evolución del ruido muy lenta y pausada
    gradient.speedFactor = 0.25; // Movimiento lento y dinámico para serenidad visual

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

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      {/* 1. Orbes de Luz Ambiental Flotantes difuminados y lentos */}
      <div
        ref={orbsRef}
        style={{ willChange: "transform" }}
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
      >
        {/* Orbe 1: Azul eléctrico y cyan superior izquierdo ultra difuminado */}
        <div className="absolute -top-16 -left-16 w-[36rem] sm:w-[46rem] h-[36rem] sm:h-[46rem] bg-gradient-to-tr from-blue-500/22 via-sky-400/18 to-transparent rounded-full blur-[140px] sm:blur-[160px] animate-orb-1" />

        {/* Orbe 2: Índigo y púrpura central derecho ultra difuminado */}
        <div className="absolute top-1/4 -right-20 w-[38rem] sm:w-[48rem] h-[38rem] sm:h-[48rem] bg-gradient-to-bl from-indigo-500/20 via-purple-400/15 to-transparent rounded-full blur-[140px] sm:blur-[160px] animate-orb-2" />

        {/* Orbe 3: Coral y rosa fucsia vibrante inferior ultra difuminado */}
        <div className="absolute top-1/3 left-1/4 w-[30rem] sm:w-[40rem] h-[30rem] sm:h-[40rem] bg-gradient-to-br from-rose-400/16 via-pink-300/12 to-transparent rounded-full blur-[140px] sm:blur-[160px] animate-orb-3" />
      </div>

      {/* 2. Canvas con Shader WebGL Stripe con filtro de difuminado y desvanecimiento suave */}
      <div
        ref={canvasWrapRef}
        className="absolute top-0 left-0 right-0 h-[750px] sm:h-[880px] md:h-[1020px] w-full"
        style={{
          willChange: "transform",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.18) 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.18) 75%, transparent 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-70 sm:opacity-80 filter blur-[14px] sm:blur-[20px]"
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

      {/* 3. Capa de desenfoque ambiental (Backdrop Blur) para fundido seda */}
      <div className="absolute inset-0 backdrop-blur-[24px] pointer-events-none" />

      {/* 4. Cuadrícula arquitectónica punteada estilo Stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[750px] sm:h-[880px] md:h-[1020px] bg-dot-grid opacity-20 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 25%, black 25%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 25%, black 25%, transparent 90%)",
        }}
      />

      {/* 5. Viñeta radial suave para fundido a blanco perfecto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
    </div>
  );
}

// Alias para compatibilidad directa
export const StripeGradientBackground = HeroDynamicBackground;


