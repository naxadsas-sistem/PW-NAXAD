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
    
    // Configuración estética de Stripe: ondas visibles, amplias y fluidas
    gradient.amp = 280;
    gradient.angle = 0.15; // Inclinación diagonal orgánica suave
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
      className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-[640px] sm:h-[760px] overflow-hidden select-none"
    >
      {/* 1. Canvas con el Shader WebGL Stripe Real (Paleta Oficial NAXAD) */}
      <div
        className="w-full h-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 80%, transparent 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
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

      {/* 2. Cuadrícula arquitectónica punteada estilo Stripe */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-25"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 20%, transparent 85%)",
        }}
      />
    </div>
  );
}
