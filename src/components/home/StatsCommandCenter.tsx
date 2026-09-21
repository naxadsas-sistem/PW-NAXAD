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
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
  tag: string;
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
    tag: "Ecosistema",
    valor: 3,
    sufijo: "",
    label: "Sistemas en el ecosistema",
    descripcion: "Dos en producción, uno en desarrollo activo.",
    icono: Globe,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 text-[#2563EB]",
    visual: (
      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
        <div className="h-1.5 w-5 rounded-full bg-blue-600" title="DentalDesk" />
        <div className="h-1.5 w-5 rounded-full bg-emerald-600" title="LautaroNutrición" />
        <div className="h-1.5 w-5 rounded-full bg-amber-400 animate-pulse" title="Pharmalyze AI" />
        <span className="ml-auto text-emerald-600 font-semibold">2 prod · 1 dev</span>
      </div>
    ),
  },
  {
    id: "tablas",
    tag: "PostgreSQL",
    valor: 31,
    sufijo: "",
    label: "Tablas auditadas con RLS",
    descripcion: "20 en DentalDesk + 11 en Pharmalyze AI.",
    icono: Database,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 text-emerald-600",
    visual: (
      <div className="space-y-1">
        <div className="flex flex-wrap gap-0.5">
          {Array.from({ length: 31 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-emerald-500/80"
              title={`Tabla ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-0.5">
          <span>20 DentalDesk</span>
          <span>11 Pharmalyze</span>
        </div>
      </div>
    ),
  },
  {
    id: "rubros",
    tag: "Industrias",
    valor: 3,
    sufijo: "",
    label: "Rubros resueltos",
    descripcion: "Clínicas, nutrición y farmacias.",
    icono: Stethoscope,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 text-amber-600",
    visual: (
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5 rounded-md bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100 shadow-2xs" title="Clínicas">
            <Stethoscope size={10} />
          </div>
          <div className="h-5 w-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-2xs" title="Nutrición">
            <Activity size={10} />
          </div>
          <div className="h-5 w-5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-2xs" title="Farmacia">
            <Zap size={10} />
          </div>
        </div>
        <span className="text-[10px] font-mono text-amber-700 font-semibold">3 activos</span>
      </div>
    ),
  },
  {
    id: "soporte",
    tag: "Presencial & Cloud",
    valor: 0,
    valorTexto: "CABA",
    sufijo: "",
    label: "CABA · Soporte directo",
    descripcion: "Presencia en Buenos Aires para toda la región.",
    icono: MapPin,
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-100 text-slate-700",
    visual: (
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-700 font-medium">1-a-1</span>
        </div>
        <span className="text-slate-400">34°36&apos;S 58°22&apos;W</span>
      </div>
    ),
  },
];

function StatCard({ stat, idx }: { stat: StatItem; idx: number }) {
  const { count, ref } = useCountUp(stat.valor);
  const Icon = stat.icono;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      className="group relative h-full"
    >
      <div className="relative h-full p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between">
        {/* Indicador superior de acento con animación sutil al hover */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.color} transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}
        />

        <div>
          {/* Header de la card: Icono estilizado y Tag */}
          <div className="flex items-center justify-between mb-3.5">
            <div
              className={`p-2 rounded-xl ${stat.bgColor} shadow-2xs group-hover:scale-105 transition-transform duration-300`}
            >
              <Icon size={16} />
            </div>
            <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
              {stat.tag}
            </span>
          </div>

          {/* Número animado compacto */}
          <div className="mb-2">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#151A21] tracking-tight font-mono">
                {stat.valorTexto ?? count}
              </span>
              {stat.sufijo && (
                <span className="text-lg font-bold text-slate-400">
                  {stat.sufijo}
                </span>
              )}
            </div>
          </div>

          {/* Label */}
          <h3 className="text-xs sm:text-sm font-bold text-[#151A21] mb-1 leading-snug">
            {stat.label}
          </h3>

          {/* Descripción */}
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
            {stat.descripcion}
          </p>
        </div>

        {/* Visualización contextual compacta */}
        <div className="pt-3 mt-3 border-t border-slate-100">
          {stat.visual}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCommandCenter() {
  return (
    <div className="py-14 sm:py-18 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Compacto y Proporcional */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700 mb-3 shadow-2xs">
            <Shield size={13} className="text-[#2563EB]" />
            <span>Métricas auditadas en tiempo real</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151A21] tracking-tight mb-2">
            Números que{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#E76F73] bg-clip-text text-transparent">
              respaldan decisiones
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Cada sistema, cada tabla, cada rubro: construido con criterio de negocio y seguridad enterprise.
          </p>
        </motion.div>

        {/* Grid Simétrico de 4 Columnas Compacto y Equilibrado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4.5">
          {stats.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { StatsCommandCenter };
