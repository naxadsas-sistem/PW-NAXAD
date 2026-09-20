"use client";

import React, { useEffect, useRef, useState } from "react";
import { StripeGradient } from "@/lib/stripe-gradient";

export function HeroDynamicBackground() {
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

  // 2. Inicialización del motor WebGL Stripe Gradient estilo Hero
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gradient = new StripeGradient();

    // Calibración exacta estilo Stripe Hero:
    // - Inclinación diagonal característica (-0.22 rad)
    // - Amplitud suave (220) para un oleaje pausado y elegante
    gradient.amp = 220;
    gradient.angle = -0.22;
    gradient.conf.density = [0.05, 0.14];

    try {
      gradient.initGradient(canvas);
      if (prefersReducedMotion) {
        gradient.pause();
      }
    } catch (err) {
      console.warn("WebGL Stripe Gradient initialization fallback:", err);
    }

    // Pausar cuando el Hero salga del viewport (0% GPU durante la lectura del resto de la página)
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
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Canvas WebGL Stripe en paleta pastel luminosa con corte diagonal y parallax */}
      <div
        className="absolute top-0 left-0 right-0 h-[680px] sm:h-[780px] md:h-[880px] w-full"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 75%, transparent 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-60 sm:opacity-65"
          style={
            {
              "--gradient-color-1": "#93C5FD", // Azul cielo pastel luminoso
              "--gradient-color-2": "#C7D2FE", // Lavanda tech / Índigo suave
              "--gradient-color-3": "#BAE6FD", // Cyan suave translúcido
              "--gradient-color-4": "#FECDD3", // Coral etéreo / Rosewater
            } as React.CSSProperties
          }
        />
      </div>

      {/* 2. Cuadrícula arquitectónica punteada estilo Stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[680px] sm:h-[780px] md:h-[880px] bg-dot-grid opacity-25 pointer-events-none"
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
