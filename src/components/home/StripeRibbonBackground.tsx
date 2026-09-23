"use client";

import React, { useEffect, useRef, useState } from "react";
import { StripeGradient } from "@/lib/stripe-gradient";

export interface StripeRibbonBackgroundProps {
  className?: string;
}

export function StripeRibbonBackground({
  className = "",
}: StripeRibbonBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // 1. Parallax sutil y fluido reactivo al scroll
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

  // 2. Inicialización del motor WebGL con la paleta e inclinación exacta de Stripe
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gradient = new StripeGradient();

    // Calibración para generar la curvatura y dinamismo de la cinta Stripe
    gradient.amp = 260; // Amplitud pronunciada para ondas 3D vivas
    gradient.angle = 0.32; // Inclinación diagonal orgánica idéntica a Stripe
    gradient.conf.density = [0.05, 0.14];
    gradient.globalNoiseSpeed = 3.5e-6; // Evolución del fluido continua y suave
    gradient.speedFactor = 0.40; // Velocidad pausada y majestuosa a 60 FPS

    try {
      gradient.initGradient(canvas);
      if (prefersReducedMotion) {
        gradient.pause();
      }
    } catch (err) {
      console.warn("WebGL Stripe Ribbon initialization fallback:", err);
    }

    // IntersectionObserver: pausar el shader cuando no esté visible en pantalla (0% GPU)
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

  const parallaxY = scrollY * 0.12;

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-white ${className}`}
      aria-hidden="true"
    >
      {/* A. Grilla sutil arquitectónica de fondo */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      {/* B. Orbes de atmósfera cromática (refuerzan la calidez naranja y profundidad violeta) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${parallaxY * 0.7}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Resplandor cálido ámbar/naranja superior derecho */}
        <div className="absolute -top-24 right-[-10%] sm:right-[5%] w-[32rem] sm:w-[46rem] h-[32rem] sm:h-[46rem] bg-gradient-to-bl from-amber-400/40 via-orange-500/30 to-transparent rounded-full blur-[110px] sm:blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />

        {/* Resplandor rosa coral y fucsia central */}
        <div className="absolute top-[18%] right-[10%] sm:right-[20%] w-[26rem] sm:w-[38rem] h-[26rem] sm:h-[38rem] bg-gradient-to-br from-rose-500/35 via-pink-400/25 to-transparent rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

        {/* Resplandor violeta e índigo inferior derecho */}
        <div className="absolute top-[35%] right-[-5%] sm:right-[8%] w-[30rem] sm:w-[44rem] h-[30rem] sm:h-[44rem] bg-gradient-to-tl from-indigo-600/35 via-purple-600/25 to-transparent rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />

        {/* Resplandor azul cielo suave que disipa hacia el centro */}
        <div className="absolute top-[10%] right-[32%] sm:right-[42%] w-[22rem] sm:w-[34rem] h-[22rem] sm:h-[34rem] bg-gradient-to-r from-sky-400/25 via-blue-500/15 to-transparent rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      </div>

      {/* C. Contenedor Esculpido de la Cinta 3D WebGL (Ubicado en el lateral derecho como Stripe) */}
      <div
        className="absolute -top-12 -right-24 sm:-right-8 lg:right-0 w-[550px] sm:w-[780px] lg:w-[1020px] xl:w-[1180px] h-[720px] sm:h-[900px] lg:h-[1050px] pointer-events-none"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
          maskImage:
            "radial-gradient(ellipse 95% 85% at 75% 35%, black 45%, rgba(0,0,0,0.6) 72%, transparent 98%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 85% at 75% 35%, black 45%, rgba(0,0,0,0.6) 72%, transparent 98%)",
        }}
      >
        {/* Lienzo WebGL con la paleta de Stripe */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-95 filter blur-[3px] sm:blur-[4px] mix-blend-multiply"
          style={
            {
              "--gradient-color-1": "#FB923C", // Naranja / Ámbar dorado iluminado
              "--gradient-color-2": "#F43F5E", // Rosa Coral / Magenta vivo
              "--gradient-color-3": "#6366F1", // Índigo / Violeta profundo
              "--gradient-color-4": "#38BDF8", // Cyan / Azul cielo brillante
            } as React.CSSProperties
          }
        />

        {/* D. Líneas de relieve y brillo de satén (Simulan los pliegues y el brillo especular de la cinta) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-overlay"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cresta de luz dorada exterior */}
          <path
            d="M950 50 C 780 200, 680 420, 850 750 C 920 880, 960 920, 1000 950"
            stroke="url(#ribbonHighlightGold)"
            strokeWidth="4"
            strokeLinecap="round"
            className="filter blur-[1px]"
          />
          {/* Pliegue central de satén */}
          <path
            d="M820 0 C 650 250, 560 480, 720 800 C 790 920, 840 980, 900 1000"
            stroke="url(#ribbonHighlightWhite)"
            strokeWidth="3"
            strokeLinecap="round"
            className="filter blur-[1.5px]"
          />
          {/* Fila secundaria de torsión */}
          <path
            d="M700 80 C 540 320, 480 580, 620 880"
            stroke="url(#ribbonHighlightCyan)"
            strokeWidth="2"
            strokeLinecap="round"
            className="filter blur-[2px]"
          />

          <defs>
            <linearGradient id="ribbonHighlightGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#F97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="ribbonHighlightWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FBCFE8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="ribbonHighlightCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#C084FC" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* E. Gradiente suave horizontal para proteger la legibilidad del texto en el lado izquierdo */}
      <div 
        className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[55%] bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none z-[1]" 
      />

      {/* F. Transición vertical hacia la sección siguiente */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[1]" />
    </div>
  );
}

export default StripeRibbonBackground;
