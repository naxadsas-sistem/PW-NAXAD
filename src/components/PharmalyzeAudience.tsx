"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Pill,
  Store,
  Truck,
  PackageCheck,
  MonitorSmartphone,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AudienceItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  tag: string;
}

const audienceItems: AudienceItem[] = [
  {
    icon: Store,
    title: "Farmacias independientes",
    description:
      "Estructuras ágiles que necesitan optimizar su capital de trabajo y cuidar cada peso de stock sin software corporativo sobredimensionado ni costos inaccesibles.",
    tag: "Autonomía de gestión",
  },
  {
    icon: Truck,
    title: "Farmacias con múltiples proveedores",
    description:
      "Comparación cruzada y automática de listas de precios, bonificaciones comerciales y plazos de entrega entre distintas droguerías en tiempo real.",
    tag: "Arbitraje de compras",
  },
  {
    icon: PackageCheck,
    title: "Organizaciones que necesitan mayor control de inventario",
    description:
      "Monitoreo preventivo mediante semáforo FEFO (First Expired, First Out) para erradicar pérdidas por medicamentos vencidos en góndola o depósito.",
    tag: "Cero mermas",
  },
  {
    icon: MonitorSmartphone,
    title: "Operaciones que ya utilizan un sistema comercial",
    description:
      "Conector no invasivo que opera sobre tu sistema de facturación y POS actual (NaxadSistem, etc.), sin migraciones traumáticas ni días de cierre.",
    tag: "Integración sin fricción",
  },
  {
    icon: ShieldCheck,
    title: "Equipos que necesitan mejorar trazabilidad",
    description:
      "Auditoría exhaustiva de lotes, recetas, movimientos críticos y responsabilidades por turno con registro inmutable y alertas de desvío.",
    tag: "Seguridad y auditoría",
  },
  {
    icon: TrendingUp,
    title: "Farmacias que quieren transformar sus datos operativos en información útil para decidir",
    description:
      "Evolución de planillas ciegas a tableros ejecutivos predictivos con sugerencias inteligentes que te dicen exactamente qué reponer y cuándo.",
    tag: "Decisiones con datos",
  },
];

export function PharmalyzeAudience() {
  return (
    <section className="relative rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 border-2 border-amber-200/90 p-7 sm:p-10 md:p-12 shadow-sm overflow-hidden">
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-amber-300/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-orange-300/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold font-mono">
              <Pill size={14} className="text-amber-700" />
              PRODUCTO ECOSISTEMA NAXAD
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Piloto en Producción · Farmacia Internacional (CABA)
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#151A21] tracking-tight">
              Naxad Pharmalyzed IA:{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                ¿Para quién es?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              Naxad Pharmalyzed IA está pensado para:
            </p>
          </div>
        </div>

        {/* Grid de 6 Perfiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {audienceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white/95 border border-amber-200/90 shadow-2xs hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-105 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-800 bg-amber-50/80 px-2 py-0.5 rounded border border-amber-100">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#151A21] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                  <CheckCircle2 size={13} className="shrink-0 text-emerald-600" />
                  <span>Resuelto en Naxad Pharmalyzed IA</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Card Inferior con Llamado a la Acción y Datos de Integración */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-amber-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200 mb-1">
              <Sparkles size={12} />
              <span>Conexión no invasiva en 48hs</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#151A21]">
              ¿Tu farmacia se identifica con estos puntos de dolor?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              No necesitás cambiar de sistema ni cargar todo desde cero. Pharmalyze AI se conecta a tu software comercial actual para darte control de lotes y sugerencias de compra inmediatas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <Link href="/contacto?solucion=pharmalyze" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-sm font-semibold text-xs"
              >
                Sumarme al piloto de farmacias
                <ArrowRight size={14} className="ml-1.5" />
              </Button>
            </Link>

            <a
              href="https://wa.me/5491123456789?text=Hola%20Gabriel!%20Me%20interesa%20sumarme%20al%20piloto%20de%20Pharmalyze%20AI%20para%20mi%20farmacia."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="md"
                className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={14} className="text-emerald-600" />
                WhatsApp directo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PharmalyzeAudience;
