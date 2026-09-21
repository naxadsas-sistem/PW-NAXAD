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

    // Calibración fluida y serena: ondas lentas, suaves y continuas sin distorsión
    gradient.amp = 140;
    gradient.angle = 0.12; // Inclinación diagonal orgánica suave
    gradient.conf.density = [0.04, 0.12];
    gradient.globalNoiseSpeed = 4.0e-6;
    gradient.speedFactor = 0.65;

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

  const parallaxY = scrollY * 0.12;
  const orbsY = scrollY * 0.20;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-[800px] sm:h-[950px] md:h-[1100px] overflow-hidden select-none"
    >
      {/* 1. Orbes de Luz Ambiental Flotantes que se desplazan y oscilan por la pantalla */}
      <div
        style={{
          transform: `translate3d(0, ${orbsY}px, 0)`,
          willChange: "transform",
        }}
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
      >
        {/* Orbe 1: Azul eléctrico y cyan superior izquierdo que se mueve */}
        <div className="absolute -top-16 -left-16 w-[34rem] sm:w-[44rem] h-[34rem] sm:h-[44rem] bg-gradient-to-tr from-blue-600/30 via-sky-400/25 to-transparent rounded-full blur-3xl animate-orb-1" />

        {/* Orbe 2: Índigo y púrpura central derecho que oscila */}
        <div className="absolute top-1/4 -right-20 w-[36rem] sm:w-[46rem] h-[36rem] sm:h-[46rem] bg-gradient-to-bl from-indigo-600/30 via-purple-500/25 to-transparent rounded-full blur-3xl animate-orb-2" />

        {/* Orbe 3: Coral y rosa fucsia vibrante inferior */}
        <div className="absolute top-1/2 left-1/4 w-[28rem] sm:w-[38rem] h-[28rem] sm:h-[38rem] bg-gradient-to-br from-rose-500/22 via-pink-400/18 to-transparent rounded-full blur-3xl animate-orb-3" />
      </div>

      {/* 2. Canvas con el Shader WebGL Stripe Real (Paleta Oficial NAXAD / Contacto) */}
      <div
        className="w-full h-full"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 50%, rgba(0,0,0,0.3) 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 50%, rgba(0,0,0,0.3) 80%, transparent 100%)",
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
        className="absolute inset-0 bg-dot-grid opacity-25"
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
