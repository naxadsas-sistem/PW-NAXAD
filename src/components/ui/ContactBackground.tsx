"use client";

import React, { useEffect, useRef, useState } from "react";
import { StripeGradient } from "@/lib/stripe-gradient";

export function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // 1. Parallax reactivo al scroll para dar sensación de profundidad
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

    // Calibración fluida, serena y majestuosa: ondas lentas y ultra suaves
    gradient.amp = 110;
    gradient.angle = 0.10; // Inclinación diagonal orgánica suave
    gradient.conf.density = [0.03, 0.10];
    gradient.globalNoiseSpeed = 1.6e-6;
    gradient.speedFactor = 0.28;

    try {
      gradient.initGradient(canvas);
      if (prefersReducedMotion) {
        gradient.pause();
      }
    } catch (err) {
      console.warn("WebGL Stripe Gradient initialization fallback:", err);
    }

    // Pausar cuando no esté visible en la pantalla (ahorro de batería y GPU)
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

  const parallaxY = scrollY * 0.10;
  const orbsY = scrollY * 0.16;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-[800px] sm:h-[950px] md:h-[1100px] overflow-hidden select-none"
    >
      {/* 1. Orbes de Luz Ambiental Flotantes difuminados */}
      <div
        style={{
          transform: `translate3d(0, ${orbsY}px, 0)`,
          willChange: "transform",
        }}
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
      >
        {/* Orbe 1: Azul eléctrico y cyan superior izquierdo */}
        <div className="absolute -top-16 -left-16 w-[36rem] sm:w-[46rem] h-[36rem] sm:h-[46rem] bg-gradient-to-tr from-blue-500/22 via-sky-400/18 to-transparent rounded-full blur-[140px] sm:blur-[160px] animate-orb-1" />

        {/* Orbe 2: Índigo y púrpura central derecho */}
        <div className="absolute top-1/4 -right-20 w-[38rem] sm:w-[48rem] h-[38rem] sm:h-[48rem] bg-gradient-to-bl from-indigo-500/20 via-purple-400/15 to-transparent rounded-full blur-[140px] sm:blur-[160px] animate-orb-2" />

        {/* Orbe 3: Coral y rosa fucsia inferior */}
        <div className="absolute top-1/2 left-1/4 w-[30rem] sm:w-[40rem] h-[30rem] sm:h-[40rem] bg-gradient-to-br from-rose-400/16 via-pink-300/12 to-transparent rounded-full blur-[140px] sm:blur-[160px] animate-orb-3" />
      </div>

      {/* 2. Canvas con el Shader WebGL Stripe con filtro de difuminado y desvanecimiento suave */}
      <div
        className="w-full h-full"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-75 sm:opacity-85 filter blur-[12px] sm:blur-[18px]"
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

      {/* 3. Capa de desenfoque ambiental (Backdrop Blur) */}
      <div className="absolute inset-0 backdrop-blur-[20px] pointer-events-none" />

      {/* 4. Cuadrícula arquitectónica punteada estilo Stripe */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 25%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 25%, black 20%, transparent 85%)",
        }}
      />
    </div>
  );
}
