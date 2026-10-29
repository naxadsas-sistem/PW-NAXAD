"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Apple,
  Pill,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface RubroItem {
  id: string;
  nombre: string;
  icono: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  colorLight: string;
  producto: string;
  dolor: string;
  solucion: string;
  paraQuien?: string[];
  metrica: { valor: string; unidad: string; label: string };
  href: string;
}

const rubros: RubroItem[] = [
  {
    id: "clinicas",
    nombre: "Clínicas Dentales",
    icono: Stethoscope,
    color: "from-blue-500 to-indigo-600",
    colorLight: "bg-blue-50 text-blue-700 border-blue-200",
    producto: "DentalDesk",
    dolor: "Turnos en papel, fichas perdidas, cobros desorganizados.",
    solucion: "Agenda digital, fichas en la nube, dashboard financiero diario.",
    metrica: { valor: "14", unidad: "turnos/día", label: "Promedio gestionados" },
    href: "/#ecosistema",
  },
  {
    id: "nutricion",
    nombre: "Consultorios de Nutrición",
    icono: Apple,
    color: "from-emerald-500 to-teal-600",
    colorLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    producto: "LautaroNutrición",
    dolor: "Pacientes que abandonan, planes genéricos, sin seguimiento real.",
    solucion: "IA que estima macros desde fotos, alertas de retención automáticas.",
    metrica: { valor: "3x", unidad: "retención", label: "vs. consulta tradicional" },
    href: "/#ecosistema",
  },
  {
    id: "farmacias",
    nombre: "Farmacias",
    icono: Pill,
    color: "from-amber-500 to-orange-600",
    colorLight: "bg-amber-50 text-amber-700 border-amber-200",
    producto: "Pharmalyze AI",
    dolor: "Vencimientos que se pierden, stock desfasado, proveedores opacos.",
    solucion: "Predicción inteligente de reposición, control de lotes automatizado.",
    paraQuien: [
      "Farmacias independientes",
      "Múltiples proveedores / droguerías",
      "Mayor control de inventario",
      "Sobre sistema comercial existente",
      "Equipos que buscan trazabilidad",
      "Datos operativos para decidir",
    ],
    metrica: { valor: "-40%", unidad: "mermas", label: "Reducción promedio" },
    href: "/para-quien#pharmalyze",
  },
  {
    id: "otros",
    nombre: "Otros Negocios",
    icono: Building2,
    color: "from-slate-600 to-slate-800",
    colorLight: "bg-slate-100 text-slate-700 border-slate-200",
    producto: "Sistema a medida",
    dolor: "Excel duplicados, procesos manuales, decisiones a ciegas.",
    solucion: "Sistema propio construido sobre base probada, no desde cero.",
    metrica: { valor: "30d", unidad: "tiempo", label: "De idea a producción" },
    href: "/contacto?solucion=desarrollo",
  },
];

export default function RubrosShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 text-slate-500 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="font-semibold text-slate-700">Para Quién Construimos</span>
            <span className="text-slate-300 hidden sm:inline">&middot;</span>
            <span className="text-slate-500 hidden sm:inline">Especialización Sectorial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#151A21] tracking-tight leading-[1.15] mb-4"
          >
            Tres rubros resueltos.{" "}
            <span className="bg-gradient-to-r from-[#2563EB] via-indigo-600 to-[#2563EB] bg-clip-text text-transparent">
              Infinitos por venir.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Cada sistema nace de operar un negocio real. Si tu rubro ya está en el ecosistema, adoptás. Si no, lo construimos.
          </motion.p>
        </div>

        {/* Grid de Rubros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {rubros.map((rubro, idx) => {
            const isActive = activeId === rubro.id;
            const Icon = rubro.icono;

            return (
              <motion.div
                key={rubro.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onHoverStart={() => setActiveId(rubro.id)}
                onHoverEnd={() => setActiveId(null)}
                onClick={() => setActiveId(isActive ? null : rubro.id)}
                className="relative group cursor-pointer touch-manipulation"
              >
                <div
                  className={`relative h-full p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isActive
                      ? "bg-white border-transparent shadow-2xl shadow-slate-900/10 scale-[1.02]"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Gradiente de fondo animado al hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${rubro.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                  />

                  {/* Indicador superior de color */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${rubro.color} transform origin-left transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Icono con fondo dinámico */}
                    <div
                      className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-br ${rubro.color} text-white shadow-lg`
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon
                        size={24}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-[#151A21] mb-2">
                      {rubro.nombre}
                    </h3>

                    {/* Badge del producto */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border mb-4 transition-all duration-300 ${
                        isActive
                          ? rubro.colorLight
                          : "bg-slate-50 text-slate-500 border-slate-200"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? "bg-current animate-pulse" : "bg-slate-400"
                        }`}
                      />
                      {rubro.producto}
                    </div>

                    {/* Descripción que se expande */}
                    <AnimatePresence>
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-red-500 mb-1">
                              El problema
                            </p>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {rubro.dolor}
                            </p>
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1">
                              La solución Naxad
                            </p>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {rubro.solucion}
                            </p>
                          </div>

                          {rubro.paraQuien && (
                            <div className="pt-1">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
                                Pensado para:
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {rubro.paraQuien.map((item, i) => (
                                  <span
                                    key={i}
                                    className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 font-medium"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Métrica destacada */}
                          <div className="pt-3 border-t border-slate-100">
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#E76F73] bg-clip-text text-transparent">
                                {rubro.metrica.valor}
                              </span>
                              <span className="text-xs font-semibold text-slate-500">
                                {rubro.metrica.unidad}
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              {rubro.metrica.label}
                            </p>
                          </div>

                          <Link
                            href={rubro.href}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-blue-700 transition-colors group/btn pt-1"
                          >
                            <span>Ver caso completo</span>
                            <ArrowRight
                              size={12}
                              className="transition-transform group-hover/btn:translate-x-1"
                            />
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.p
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-sm text-slate-600 leading-relaxed"
                        >
                          {rubro.dolor.split(".")[0]}.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-sm text-slate-500 mb-4">
            ¿Tu rubro no está en la lista? Lo construimos a tu medida.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#151A21] text-white text-sm font-semibold hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg active:scale-95 touch-manipulation cursor-pointer"
          >
            <span>Contanos tu caso</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export { RubrosShowcase };
