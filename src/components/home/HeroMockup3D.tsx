"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Apple,
  Pill,
  Calendar,
  Users,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

type ProductTab = "dental" | "reyna" | "pharmalized";

export function HeroMockup3D() {
  const [activeTab, setActiveTab] = useState<ProductTab>("dental");
  const [dentalViewMode, setDentalViewMode] = useState<"interactive" | "real">("interactive");
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
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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
            onClick={() => setActiveTab("reyna")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "reyna"
                ? "bg-white text-emerald-700 shadow-xs"
                : "text-slate-600 hover:text-[#151A21]"
            }`}
          >
            <Apple size={15} className={activeTab === "reyna" ? "text-emerald-600" : ""} />
            <span>Reyna Desk</span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Salud & Nutrición
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pharmalized")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "pharmalized"
                ? "bg-white text-amber-700 shadow-xs"
                : "text-slate-600 hover:text-[#151A21]"
            }`}
          >
            <Pill size={15} className={activeTab === "pharmalized" ? "text-amber-600" : ""} />
            <span>Pharmalized AI</span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-800">
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
        {/* Badges Flotantes 3D en los Laterales (Visibles en pantallas medianas y grandes) */}
        <div
          style={{
            transform: `translate3d(0, 0, ${isHovered ? "45px" : "20px"})`,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="absolute -left-3 sm:-left-6 top-1/4 z-30 hidden md:block pointer-events-none"
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
            transform: `translate3d(0, 0, ${isHovered ? "45px" : "20px"})`,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="absolute -right-3 sm:-right-6 bottom-1/4 z-30 hidden md:block pointer-events-none"
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

        {/* Tarjeta Mockup Principal con Tilt 3D */}
        <div
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: isHovered
              ? "transform 0.12s ease-out, box-shadow 0.25s ease-out"
              : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
            transformStyle: "preserve-3d",
          }}
          className="relative mx-auto rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] overflow-hidden"
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
                naxad-ecosystem-os v2.4 · {activeTab === "dental" ? "DentalDesk Clínica" : activeTab === "reyna" ? "Reyna Desk Nutrición" : "Pharmalized AI Farmacia"}
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
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/dashboard-dental.jpg"
                      alt="DentalDesk Dashboard en Producción Real"
                      className="w-full h-auto object-cover max-h-[360px]"
                    />
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
                          <span className="col-span-3 text-slate-600">Dr. G. Zambrano</span>
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

            {activeTab === "reyna" && (
              <div className="space-y-5 text-left">
                {/* Header de la App */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold">
                      Reyna Desk · Consulta Nutricional Especializada
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#151A21]">
                      Seguimiento Antropométrico & Análisis de Platos por IA
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                      88% Adherencia Paciente
                    </span>
                  </div>
                </div>

                {/* Métricas y Análisis de IA */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Reconocimiento por Foto</span>
                    <span className="text-xl font-extrabold text-[#151A21] font-mono">IA Vision</span>
                    <span className="text-[10px] text-emerald-600 block mt-0.5 font-medium">Cálculo de macros automático</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Plan Nutricional Activo</span>
                    <span className="text-xl font-extrabold text-[#151A21] font-mono">2.150 kcal</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">145g Proteínas · 180g Carbos</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Retención de Pacientes</span>
                    <span className="text-xl font-extrabold text-emerald-600 font-mono">+40%</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">Portal propio con feedback</span>
                  </div>
                </div>

                {/* Tarjeta de Plato Analizado */}
                <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                      🥗
                    </div>
                    <div>
                      <p className="font-bold text-[#151A21]">Almuerzo: Bowl de Salmón, Quinoa y Palta</p>
                      <p className="text-[11px] text-slate-600">Estimación validada por profesional: 580 kcal · 38g Proteína</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-white border border-emerald-200 text-emerald-700 font-semibold text-[11px] shrink-0">
                    Cumple pauta diaria ✔
                  </span>
                </div>
              </div>
            )}

            {activeTab === "pharmalized" && (
              <div className="space-y-5 text-left">
                {/* Header de la App */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-amber-600 uppercase font-semibold">
                      Pharmalized AI · Inteligencia de Reposición Farmacéutica
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#151A21]">
                      Monitoreo FEFO & Comparación de Droguerías
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 font-medium border border-amber-200">
                      Piloto CABA Activo
                    </span>
                  </div>
                </div>

                {/* Métricas de Stock */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Control FEFO de Lotes</span>
                    <span className="text-xl font-extrabold text-[#151A21] font-mono">0 Pérdidas</span>
                    <span className="text-[10px] text-amber-700 block mt-0.5 font-medium">Alertas a 60 y 30 días</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Comparativa Droguerías</span>
                    <span className="text-xl font-extrabold text-[#151A21] font-mono">3 Proveedores</span>
                    <span className="text-[10px] text-emerald-600 block mt-0.5 font-medium">Ahorro promedio: 8.5%</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Integración</span>
                    <span className="text-xl font-extrabold text-[#2563EB] font-mono">Conectado a POS</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">Sin reemplazar caja</span>
                  </div>
                </div>

                {/* Alerta de sugerencia de compra inteligente */}
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-amber-200 flex items-center justify-center text-amber-600 font-bold shrink-0">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-[#151A21]">Amoxicilina 500mg (20 comp.) — Reposición sugerida</p>
                      <p className="text-[11px] text-slate-600">Stock crítico: 3 unidades restantes · Droguería Monroe tiene 11% de descuento hoy</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-[#151A21] text-white font-semibold text-[11px] shrink-0">
                    Sugerir Pedido
                  </span>
                </div>
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
    </div>
  );
}
