"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  Globe,
  Stethoscope,
  MapPin,
  Activity,
  Shield,
  Zap,
} from "lucide-react";

// Hook para animar contadores
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || target <= 0) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      setCount(Math.floor(target * eased));

      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return { count, ref };
}

export interface StatItem {
  id: string;
  valor: number;
  valorTexto?: string;
  sufijo: string;
  label: string;
  descripcion: string;
  icono: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  bgColor: string;
  visual: React.ReactNode;
}

const stats: StatItem[] = [
  {
    id: "sistemas",
    valor: 3,
    sufijo: "",
    label: "Sistemas en el ecosistema",
    descripcion: "Dos en producción, uno en desarrollo activo",
    icono: Globe,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 text-[#2563EB]",
    visual: (
      <div className="flex gap-1.5 mt-3">
        <div className="h-2 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
        <div className="h-2 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
        <div className="h-2 w-8 rounded-full bg-slate-200 animate-pulse" />
      </div>
    ),
  },
  {
    id: "tablas",
    valor: 31,
    sufijo: "",
    label: "Tablas auditadas con RLS",
    descripcion: "20 en DentalDesk + 11 en Pharmalyze AI",
    icono: Database,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 text-emerald-600",
    visual: (
      <div className="grid grid-cols-7 gap-1 mt-3">
        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-80"
          />
        ))}
      </div>
    ),
  },
  {
    id: "rubros",
    valor: 3,
    sufijo: "",
    label: "Rubros resueltos",
    descripcion: "Clínicas, nutrición y farmacias",
    icono: Stethoscope,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 text-amber-600",
    visual: (
      <div className="flex items-center gap-2 mt-3">
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xs">
          <Stethoscope size={12} className="text-white" />
        </div>
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xs">
          <Activity size={12} className="text-white" />
        </div>
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xs">
          <Zap size={12} className="text-white" />
        </div>
      </div>
    ),
  },
  {
    id: "soporte",
    valor: 0,
    valorTexto: "CABA",
    sufijo: "",
    label: "CABA · Soporte directo",
    descripcion: "Presencia en Buenos Aires para toda la región",
    icono: MapPin,
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-100 text-slate-700",
    visual: (
      <div className="relative mt-3 h-8 flex items-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-slate-700 ring-4 ring-slate-200" />
        <div className="ml-4 h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
        <span className="ml-2 text-[10px] font-mono text-slate-500">34°36&apos;S 58°22&apos;W</span>
      </div>
    ),
  },
];

function StatCard({ stat, idx }: { stat: StatItem; idx: number }) {
  const { count, ref } = useCountUp(stat.valor);
  const Icon = stat.icono;
  const isLarge = idx === 0 || idx === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`group relative ${isLarge ? "lg:col-span-2" : ""}`}
    >
      <div className="relative h-full p-6 lg:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 overflow-hidden flex flex-col justify-between">
        {/* Gradiente de fondo sutil al hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
        />

        {/* Indicador superior */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100`}
        />

        <div>
          {/* Icono con fondo dinámico */}
          <div
            className={`inline-flex p-3 rounded-2xl ${stat.bgColor} mb-4 transition-all duration-500 group-hover:scale-110 shadow-2xs`}
          >
            <Icon size={24} />
          </div>

          {/* Número animado */}
          <div className="mb-2">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent tabular-nums font-mono">
                {stat.valorTexto ?? count}
              </span>
              {stat.sufijo && (
                <span className="text-2xl font-bold text-slate-400">
                  {stat.sufijo}
                </span>
              )}
            </div>
          </div>

          {/* Label */}
          <h3 className="text-sm font-bold text-[#151A21] mb-1">
            {stat.label}
          </h3>

          {/* Descripción */}
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {stat.descripcion}
          </p>
        </div>

        {/* Visualización contextual */}
        <div className="pt-4 border-t border-slate-100">
          {stat.visual}
        </div>

        {/* Efecto de brillo al hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function StatsCommandCenter() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-4">
            <Shield size={14} className="text-[#2563EB]" />
            <span>Métricas auditadas en tiempo real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151A21] tracking-tight mb-4">
            Números que{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#E76F73] bg-clip-text text-transparent">
              respaldan decisiones
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada sistema, cada tabla, cada rubro: construido con criterio de negocio y seguridad enterprise.
          </p>
        </motion.div>

        {/* Bento Grid Asimétrico con Contadores Animados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} idx={idx} />
          ))}
        </div>

        {/* Footer de la sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xs sm:text-sm text-slate-500">
            Todas las métricas son auditadas y actualizadas en tiempo real desde nuestros sistemas en producción.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { StatsCommandCenter };
