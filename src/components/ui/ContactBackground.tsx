"use client";

import React, { useEffect, useRef } from "react";
import { StripeGradient } from "@/lib/stripe-gradient";

export function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Detectar preferencia de reducción de movimiento
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const gradient = new StripeGradient();
    
    // Configuración estética de Stripe: ondas visibles y fluidas
    gradient.amp = 260;
    gradient.angle = 0.35; // inclinación elegante diagonal
    gradient.conf.density = [0.06, 0.16];

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

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Canvas con el Shader WebGL Stripe Real (Paleta Oficial NAXAD) */}
      <div
        className="absolute top-0 left-0 right-0 h-[560px] sm:h-[680px] w-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.2) 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.2) 85%, transparent 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-75 sm:opacity-80"
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

      {/* 2. Cuadrícula arquitectónica punteada estilo Stripe para eliminar bandas de color */}
      <div
        className="absolute top-0 left-0 right-0 h-[560px] sm:h-[680px] bg-dot-grid opacity-30"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 20%, transparent 85%)",
        }}
      />

      {/* 3. Velo luminoso de transición para fundirse armónicamente con el fondo blanco inferior */}
      <div className="absolute top-0 left-0 right-0 h-[560px] sm:h-[680px] bg-gradient-to-b from-white/10 via-white/20 to-white pointer-events-none" />
    </div>
  );
}
