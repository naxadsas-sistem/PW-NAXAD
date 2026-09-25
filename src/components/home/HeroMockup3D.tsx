"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import {
  Stethoscope,
  Apple,
  Pill,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

type ProductTab = "dental" | "lautaro" | "pharmalyze";

interface ModalImageData {
  src: string;
  alt: string;
  title: string;
  badge: string;
  subtitle: string;
  width: number;
  height: number;
}

export function HeroMockup3D() {
  const [activeTab, setActiveTab] = useState<ProductTab>("dental");
  const [dentalViewMode, setDentalViewMode] = useState<"interactive" | "real">("interactive");
  const [lautaroViewMode, setLautaroViewMode] = useState<"interactive" | "real" | "login">("interactive");
  const [pharmalyzeViewMode, setPharmalyzeViewMode] = useState<"interactive" | "real">("interactive");
  const [modalImage, setModalImage] = useState<ModalImageData | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalImage(null);
      }
    };
    if (modalImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalImage]);

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Manejo de perspectiva 3D ultra-fluida al mover el cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Inclinación máxima de 6 a 8 grados para mantener legibilidad y elegancia Stripe
    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 7;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 pb-2">
      {/* Selector de Producto Interactivo (Pestañas Superiores) */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="inline-flex p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("dental")}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
              activeTab === "dental"
                ? "bg-white text-[#2563EB] shadow-xs"
                : "text-slate-600 hover:text-[#151A21]"
            }`}
          >
            <Stethoscope size={15} />
            <span>DentalDesk</span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-[#2563EB]">
              SaaS Clínico
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("lautaro")}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
              activeTab === "lautaro"
                ? "bg-white text-emerald-800 shadow-xs"
                : "text-slate-600 hover:text-[#151A21]"
            }`}
          >
            <Apple size={15} className={activeTab === "lautaro" ? "text-emerald-600" : ""} />
            <span>LautaroNutrición</span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800">
              Nutrición & IA
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pharmalyze")}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
              activeTab === "pharmalyze"
                ? "bg-white text-emerald-800 shadow-xs"
                : "text-slate-600 hover:text-[#151A21]"
            }`}
          >
            <Pill size={15} className={activeTab === "pharmalyze" ? "text-emerald-600" : ""} />
            <span>Pharmalyze AI</span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Farmacia
            </span>
          </button>
        </div>
      </div>

      {/* Contenedor de Perspectiva 3D */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative [perspective:1400px]"
      >
        {/* Sombra y halo de suelo 3D reactivo */}
        <div
          className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-gradient-to-r from-blue-600/15 via-indigo-600/20 to-purple-600/15 blur-2xl rounded-full pointer-events-none transition-all duration-700 ${
            isHovered ? "scale-105 opacity-100" : "scale-100 opacity-70 animate-pulse"
          }`}
        />

        {/* Badges Flotantes 3D en los Laterales con flotación desfasada para máxima profundidad */}
        <div
          style={{
            transform: isHovered ? `translate3d(0, 0, 45px)` : undefined,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className={`absolute -left-3 sm:-left-6 top-1/4 z-30 hidden md:block pointer-events-none ${
            !isHovered ? "animate-badge-float-left" : ""
          }`}
        >
          <div className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#151A21]">20 tablas con RLS</p>
              <p className="text-[10px] text-slate-500 font-medium">Seguridad multitenant auditada</p>
            </div>
          </div>
        </div>

        <div
          style={{
            transform: isHovered ? `translate3d(0, 0, 45px)` : undefined,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className={`absolute -right-3 sm:-right-6 bottom-1/4 z-30 hidden md:block pointer-events-none ${
            !isHovered ? "animate-badge-float-right" : ""
          }`}
        >
          <div className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#151A21]">Operación en tiempo real</p>
              <p className="text-[10px] text-slate-500 font-medium">Clínica · Nutrición · Farmacia</p>
            </div>
          </div>
        </div>

        {/* Tarjeta Mockup Principal: Flotación y rotación sutil continua + Tilt 3D reactivo al cursor */}
        <div
          style={{
            transform: isHovered ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : undefined,
            transition: isHovered
              ? "transform 0.12s ease-out, box-shadow 0.25s ease-out"
              : "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
            transformStyle: "preserve-3d",
          }}
          className={`relative mx-auto rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] overflow-hidden transition-all ${
            !isHovered ? "animate-float-sway" : "hover:shadow-[0_25px_70px_-15px_rgba(37,99,235,0.18)]"
          }`}
        >
          {/* Barra de Título Superior estilo macOS */}
          <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-50/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#E76F73]/80 border border-red-300/60" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80 border border-amber-300/60" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80 border border-emerald-300/60" />
              </div>
              <span className="ml-2 text-[11px] font-mono font-medium text-slate-500 hidden sm:inline-block">
                naxad-ecosystem-os v2.4 · {activeTab === "dental" ? "DentalDesk Clínica" : activeTab === "lautaro" ? "LautaroNutrición · Dr. Lautaro Reyna" : "Pharmalyze AI · Control de Stock"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-50 text-[#2563EB] border border-blue-200/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Producción en vivo
              </span>
            </div>
          </div>

          {/* Contenido Visual Interactivo según Producto Seleccionado */}
          <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-slate-50/50">
            {/* 1. DENTALDESK */}
            {activeTab === "dental" && (
              <div className="space-y-5 text-left">
                {/* Header de la App */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-[#2563EB] uppercase font-semibold">
                      DentalDesk · Centro Odontológico Belgrano
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#151A21]">
                      Panel Diario de Operaciones & Turnos
                    </h3>
                  </div>

                  {/* Selector de Modo: Interactivo vs Captura Real */}
                  <div className="flex items-center gap-2">
                    <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-xs">
                      <button
                        type="button"
                        onClick={() => setDentalViewMode("interactive")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          dentalViewMode === "interactive"
                            ? "bg-white text-[#2563EB] shadow-xs"
                            : "text-slate-600 hover:text-[#151A21]"
                        }`}
                      >
                        Panel Interactivo
                      </button>
                      <button
                        type="button"
                        onClick={() => setDentalViewMode("real")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          dentalViewMode === "real"
                            ? "bg-white text-[#2563EB] shadow-xs"
                            : "text-slate-600 hover:text-[#151A21]"
                        }`}
                      >
                        Captura de Producción
                      </button>
                    </div>
                  </div>
                </div>

                {dentalViewMode === "real" ? (
                  <div
                    onClick={() =>
                      setModalImage({
                        src: "/dashboard-dental.jpg",
                        alt: "DentalDesk Dashboard en Producción Real",
                        title: "DentalDesk · Centro Odontológico Belgrano",
                        badge: "Producción Real · CABA",
                        subtitle:
                          "Agenda de turnos en tiempo real, 20 tablas RLS auditadas y liquidación automática",
                        width: 3006,
                        height: 1736,
                      })
                    }
                    className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm cursor-zoom-in transition-all hover:border-blue-400 hover:shadow-md"
                  >
                    <ImageWithSkeleton
                      src="/dashboard-dental.jpg"
                      alt="DentalDesk Dashboard en Producción Real"
                      width={3006}
                      height={1736}
                      quality={96}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px)"
                      className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5 pointer-events-none">
                      <span className="text-white text-xs font-semibold drop-shadow-sm flex items-center gap-1.5">
                        <Maximize2 size={14} /> Ampliar captura en alta definición
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/90 text-slate-800 text-[10px] font-mono font-bold shadow-xs">
                        3006 × 1736 px · 3K
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Métricas Rápidas */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Turnos Completados</span>
                        <span className="text-xl font-extrabold text-[#151A21] font-mono">14 / 18</span>
                        <span className="text-[10px] text-emerald-600 block mt-0.5 font-medium">4 en sala de espera</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Fichas Clínicas Digitales</span>
                        <span className="text-xl font-extrabold text-[#151A21] font-mono">1.240</span>
                        <span className="text-[10px] text-[#2563EB] block mt-0.5 font-medium">Historial 100% en la nube</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Seguridad de Datos</span>
                        <span className="text-xl font-extrabold text-emerald-600 font-mono">RLS Activo</span>
                        <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">Aislamiento por clínica</span>
                      </div>
                    </div>

                    {/* Lista de Turnos Operativos */}
                    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden text-xs">
                      <div className="grid grid-cols-12 px-3 py-2 bg-slate-50 font-mono text-[11px] text-slate-500 font-semibold border-b border-slate-200">
                        <span className="col-span-3">Hora · Paciente</span>
                        <span className="col-span-4">Tratamiento</span>
                        <span className="col-span-3">Profesional</span>
                        <span className="col-span-2 text-right">Estado</span>
                      </div>
                      <div className="divide-y divide-slate-100 font-medium">
                        <div className="grid grid-cols-12 px-3 py-2.5 items-center">
                          <span className="col-span-3 text-[#151A21]">09:30 · Martín Sosa</span>
                          <span className="col-span-4 text-slate-600">Ortodoncia — Control mensual</span>
                          <span className="col-span-3 text-slate-600">Dra. M. Benítez</span>
                          <span className="col-span-2 text-right">
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 font-semibold">
                              Finalizado
                            </span>
                          </span>
                        </div>
                        <div className="grid grid-cols-12 px-3 py-2.5 items-center bg-blue-50/30">
                          <span className="col-span-3 text-[#151A21] font-semibold">10:15 · Florencia Díaz</span>
                          <span className="col-span-4 text-slate-600">Limpieza + Diagnóstico 3D</span>
                          <span className="col-span-3 text-slate-600">Dr. M. Rossi</span>
                          <span className="col-span-2 text-right">
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-50 text-[#2563EB] font-semibold animate-pulse">
                              En Box 2
                            </span>
                          </span>
                        </div>
                        <div className="grid grid-cols-12 px-3 py-2.5 items-center">
                          <span className="col-span-3 text-slate-700">11:00 · Carlos Méndez</span>
                          <span className="col-span-4 text-slate-600">Implante — Primera consulta</span>
                          <span className="col-span-3 text-slate-600">Dra. M. Benítez</span>
                          <span className="col-span-2 text-right">
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-600">
                              Confirmado
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* 2. LAUTARONUTRICIÓN (Dr. Lautaro Reyna) */}
            {activeTab === "lautaro" && (
              <div className="space-y-5 text-left">
                {/* Header de la App */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 uppercase font-semibold">
                      LautaroNutrición · Dr. Lautaro Reyna · Gestión Nutricional
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#151A21]">
                      Buenas tardes, Lautaro 👋
                    </h3>
                  </div>

                  {/* Selector de Modo: Interactivo vs Dashboard Real vs Login Real */}
                  <div className="flex items-center gap-2">
                    <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-xs">
                      <button
                        type="button"
                        onClick={() => setLautaroViewMode("interactive")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          lautaroViewMode === "interactive"
                            ? "bg-white text-emerald-800 shadow-xs"
                            : "text-slate-600 hover:text-[#151A21]"
                        }`}
                      >
                        Panel Interactivo
                      </button>
                      <button
                        type="button"
                        onClick={() => setLautaroViewMode("real")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          lautaroViewMode === "real"
                            ? "bg-white text-emerald-800 shadow-xs"
                            : "text-slate-600 hover:text-[#151A21]"
                        }`}
                      >
                        Dashboard Real
                      </button>
                      <button
                        type="button"
                        onClick={() => setLautaroViewMode("login")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          lautaroViewMode === "login"
                            ? "bg-white text-emerald-800 shadow-xs"
                            : "text-slate-600 hover:text-[#151A21]"
                        }`}
                      >
                        Acceso Paciente
                      </button>
                    </div>
                  </div>
                </div>

                {lautaroViewMode === "real" ? (
                  <div
                    onClick={() =>
                      setModalImage({
                        src: "/lautaronutricion-dashboard.jpg",
                        alt: "LautaroNutrición Dashboard en Producción Real",
                        title: "LautaroNutrición · Dr. Lautaro Reyna",
                        badge: "Producción Real · En Consultorio",
                        subtitle:
                          "Panel diario: 3 turnos hoy, 41 planes a revisar, 99 pacientes activos y alertas contra abandono",
                        width: 2048,
                        height: 1196,
                      })
                    }
                    className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm cursor-zoom-in transition-all hover:border-emerald-400 hover:shadow-md"
                  >
                    <ImageWithSkeleton
                      src="/lautaronutricion-dashboard.jpg"
                      alt="LautaroNutrición Dashboard en Producción Real"
                      width={2048}
                      height={1196}
                      quality={96}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px)"
                      className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5 pointer-events-none">
                      <span className="text-white text-xs font-semibold drop-shadow-sm flex items-center gap-1.5">
                        <Maximize2 size={14} /> Ampliar captura en alta definición (2K)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/90 text-slate-800 text-[10px] font-mono font-bold shadow-xs">
                        2048 × 1196 px · 2K
                      </span>
                    </div>
                  </div>
                ) : lautaroViewMode === "login" ? (
                  <div
                    onClick={() =>
                      setModalImage({
                        src: "/lautaronutricion-login.jpg",
                        alt: "LautaroNutrición Pantalla de Acceso en Producción Real",
                        title: "LautaroNutrición · Portal de Pacientes",
                        badge: "Producción Real · Acceso Web",
                        subtitle:
                          "Acceso seguro para registro diario de hábitos, peso y fotos de platos con visión por IA",
                        width: 2048,
                        height: 1182,
                      })
                    }
                    className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm cursor-zoom-in transition-all hover:border-emerald-400 hover:shadow-md flex justify-center p-2 sm:p-4"
                  >
                    <ImageWithSkeleton
                      src="/lautaronutricion-login.jpg"
                      alt="LautaroNutrición Pantalla de Acceso en Producción Real"
                      width={2048}
                      height={1182}
                      quality={96}
                      priority
                      sizes="(max-width: 768px) 100vw, 850px)"
                      className="w-full max-w-2xl h-auto object-contain rounded-lg shadow-sm border border-slate-200/80 transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5 pointer-events-none">
                      <span className="text-white text-xs font-semibold drop-shadow-sm flex items-center gap-1.5">
                        <Maximize2 size={14} /> Ampliar pantalla de acceso (2K)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/90 text-slate-800 text-[10px] font-mono font-bold shadow-xs">
                        2048 × 1182 px · 2K
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* 4 Métricas Reales del Dashboard */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Turnos Hoy</span>
                        <span className="text-xl font-extrabold text-[#151A21] font-mono">3</span>
                        <span className="text-[10px] text-emerald-600 block mt-0.5 font-medium">Agenda cargada</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Planes a Revisar</span>
                        <span className="text-xl font-extrabold text-[#151A21] font-mono">41</span>
                        <span className="text-[10px] text-amber-600 block mt-0.5 font-medium">Vencidos o sin fecha</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Pacientes Activos</span>
                        <span className="text-xl font-extrabold text-[#151A21] font-mono">99</span>
                        <span className="text-[10px] text-[#2563EB] block mt-0.5 font-medium">En seguimiento</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Asistencia</span>
                        <span className="text-xl font-extrabold text-emerald-600 font-mono">100%</span>
                        <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">Últimos 30 días</span>
                      </div>
                    </div>

                    {/* Agenda del Día & Alertas de Retención */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 text-xs">
                      {/* Agenda del día */}
                      <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-3 space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 font-semibold text-[#151A21]">
                          <span>Agenda del Día</span>
                          <span className="text-[11px] text-slate-400 font-normal">3 turnos</span>
                        </div>
                        <div className="space-y-1.5 font-medium">
                          <div className="p-2 rounded-lg bg-emerald-50/40 border border-emerald-100/60 flex items-center justify-between">
                            <div>
                              <span className="font-bold text-[#151A21] block">11:00 · Alan Meozzi</span>
                              <span className="text-[11px] text-slate-500">Musculación · 30d sin registro</span>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-semibold">
                              Confirmado
                            </span>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                            <div>
                              <span className="font-semibold text-slate-800 block">12:30 · Juan RS Molina</span>
                              <span className="text-[11px] text-slate-500">Sin registros</span>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-amber-50 text-amber-800 font-semibold">
                              Pendiente
                            </span>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                            <div>
                              <span className="font-semibold text-slate-800 block">13:30 · Johanna RS Francia</span>
                              <span className="text-[11px] text-slate-500">Sin registros</span>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-amber-50 text-amber-800 font-semibold">
                              Pendiente
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Alertas de Retención */}
                      <div className="lg:col-span-5 rounded-xl border border-rose-100 bg-rose-50/30 p-3 space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-rose-100 font-semibold text-rose-800">
                          <span>Alertas de Retención</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-mono">10</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="p-2 rounded-lg bg-white border border-rose-200">
                            <span className="font-bold text-[#151A21] block">Mimi RS Barrionuevo</span>
                            <span className="text-[10px] font-bold uppercase text-rose-600 block">Riesgo de abandono</span>
                            <span className="text-[10px] text-slate-500">Nunca registró comidas en el portal</span>
                          </div>
                          <div className="p-2 rounded-lg bg-white border border-rose-200">
                            <span className="font-bold text-[#151A21] block">Barby Arroyo</span>
                            <span className="text-[10px] font-bold uppercase text-rose-600 block">Riesgo de abandono · 7% adherencia</span>
                            <span className="text-[10px] text-slate-500">13 días sin registrar comidas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* 3. PHARMALYZE AI (Control de Stock Predictivo) */}
            {activeTab === "pharmalyze" && (
              <div className="space-y-5 text-left">
                {/* Header de la App */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 uppercase font-semibold">
                      Pharmalyze AI · NaxadSistem v1.0
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#151A21]">
                      Control de Stock Predictivo · Farmacia Internacional (CABA)
                    </h3>
                  </div>

                  {/* Selector de Modo: Interactivo vs Captura Real */}
                  <div className="flex items-center gap-2">
                    <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-xs">
                      <button
                        type="button"
                        onClick={() => setPharmalyzeViewMode("interactive")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          pharmalyzeViewMode === "interactive"
                            ? "bg-white text-emerald-800 shadow-xs"
                            : "text-slate-600 hover:text-[#151A21]"
                        }`}
                      >
                        Panel Interactivo
                      </button>
                      <button
                        type="button"
                        onClick={() => setPharmalyzeViewMode("real")}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                          pharmalyzeViewMode === "real"
                            ? "bg-white text-emerald-800 shadow-xs"
                            : "text-slate-600 hover:text-[#151A21]"
                        }`}
                      >
                        Captura de Producción
                      </button>
                    </div>
                  </div>
                </div>

                {pharmalyzeViewMode === "real" ? (
                  <div
                    onClick={() =>
                      setModalImage({
                        src: "/pharmalyze-dashboard.jpg",
                        alt: "Pharmalyze AI Dashboard en Producción Real",
                        title: "Pharmalyze AI · NaxadSistem v1.0",
                        badge: "Piloto en Producción · Farmacia Internacional CABA",
                        subtitle:
                          "Triaje operativo diario, inventario valorizado en $916.200 y control de 180 alertas de stock",
                        width: 2048,
                        height: 1196,
                      })
                    }
                    className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm cursor-zoom-in transition-all hover:border-emerald-400 hover:shadow-md"
                  >
                    <ImageWithSkeleton
                      src="/pharmalyze-dashboard.jpg"
                      alt="Pharmalyze AI Dashboard en Producción Real"
                      width={2048}
                      height={1196}
                      quality={96}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px)"
                      className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5 pointer-events-none">
                      <span className="text-white text-xs font-semibold drop-shadow-sm flex items-center gap-1.5">
                        <Maximize2 size={14} /> Ampliar captura en alta definición (2K)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/90 text-slate-800 text-[10px] font-mono font-bold shadow-xs">
                        2048 × 1196 px · 2K
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Mission Control: Triaje Operativo Diario */}
                    <div className="rounded-xl bg-[#111827] text-white p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-400 font-semibold">
                          MISSION CONTROL · Triaje Operativo Diario
                        </span>
                        <span className="text-[11px] text-slate-300 font-mono">Reglas determinísticas v2.0</span>
                      </div>
                      <p className="text-base font-bold text-white">¿Qué necesita mi farmacia hoy?</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-slate-900 text-xs">
                        {/* 1. Crítico */}
                        <div className="p-3 rounded-lg bg-white border border-rose-200 space-y-2">
                          <div className="flex items-center justify-between text-rose-700 font-bold text-[11px]">
                            <span>1. CRÍTICO</span>
                            <span className="px-1.5 py-0.5 rounded bg-rose-50 border border-rose-200 text-rose-700 font-bold">
                              180 alertas
                            </span>
                          </div>
                          <p className="font-semibold text-slate-800 text-[11px]">
                            179 productos agotados (Stock 0)
                          </p>
                          <p className="text-[10px] text-slate-500 leading-tight">
                            102 MUJER cáps. bl. x 30, ACC LP AGUJA x 1 y 177 más
                          </p>
                          <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[10px]">
                            <span className="text-rose-600 font-bold">1 lote vencido en góndola</span>
                            <span className="text-slate-400">Retirar hoy</span>
                          </div>
                          <button
                            type="button"
                            className="w-full py-1.5 rounded-md bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] transition-colors"
                          >
                            Resolver Críticos →
                          </button>
                        </div>

                        {/* 2. Atención */}
                        <div className="p-3 rounded-lg bg-white border border-amber-200 space-y-2">
                          <div className="flex items-center justify-between text-amber-800 font-bold text-[11px]">
                            <span>2. ATENCIÓN</span>
                            <span className="px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 font-bold">
                              1 punto
                            </span>
                          </div>
                          <p className="font-semibold text-slate-800 text-[11px]">
                            1 producto bajo punto de reposición
                          </p>
                          <p className="text-[10px] text-slate-500 leading-tight">
                            Existencias iguales o inferiores al stock mínimo asignado por góndola.
                          </p>
                          <div className="pt-2" />
                          <button
                            type="button"
                            className="w-full py-1.5 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold text-[10px] transition-colors"
                          >
                            Inspeccionar Inventario →
                          </button>
                        </div>

                        {/* 3. Oportunidades & Decisiones */}
                        <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between text-slate-800 font-bold text-[11px]">
                            <span>3. OPORTUNIDADES</span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                              Evidencia real
                            </span>
                          </div>
                          <p className="font-semibold text-slate-800 text-[11px]">
                            Sugerencia de Reposición Directa
                          </p>
                          <p className="text-[10px] text-slate-500 leading-tight">
                            Naxad no inventa proyecciones de demanda ni velocidades ficticias. 0 datos simulados.
                          </p>
                          <div className="pt-1 border-t border-slate-100">
                            <span className="text-[10px] text-emerald-700 font-semibold block">
                              Conectado a POS en tiempo real
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom KPIs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Días de Autonomía</span>
                        <span className="text-lg font-bold text-slate-700 font-mono">Sin datos</span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">Historial en acumulación</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Productos en Riesgo</span>
                        <span className="text-xl font-extrabold text-[#151A21] font-mono">180</span>
                        <span className="text-[10px] text-rose-600 block mt-0.5 font-medium">En o bajo mínimo, hoy</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                        <span className="text-[11px] text-slate-500 block font-medium">Valor de Inventario</span>
                        <span className="text-xl font-extrabold text-emerald-700 font-mono">$ 916.200</span>
                        <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">A precio de costo total</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Footer del Mockup con llamada a la acción contextual */}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Base técnica compartida: Next.js + PostgreSQL + Row Level Security</span>
              </div>
              <Link
                href="/contacto"
                className="font-semibold text-[#2563EB] hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
              >
                <span>Consultar por este sistema para tu negocio</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal HD para Inspección en Máxima Resolución */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[94vh] bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-slate-50/90 shrink-0">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-bold text-[#151A21]">
                    {modalImage.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                    {modalImage.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  {modalImage.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  ESC para cerrar
                </span>
                <button
                  type="button"
                  onClick={() => setModalImage(null)}
                  className="h-8 w-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  title="Cerrar (Esc)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body: Imagen a resolución nativa completa */}
            <div className="p-3 sm:p-5 overflow-auto max-h-[calc(94vh-65px)] flex items-center justify-center bg-slate-900/5">
              <div className="w-full flex justify-center">
                <ImageWithSkeleton
                  src={modalImage.src}
                  alt={modalImage.alt}
                  width={modalImage.width}
                  height={modalImage.height}
                  quality={98}
                  priority
                  sizes="100vw"
                  className="max-w-full h-auto object-contain rounded-xl border border-slate-200 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
