"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Stethoscope,
  Apple,
  Pill,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

export function HomeEcosystem() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProduct((prev) => (prev === id ? null : id));
  };

  return (
    <section id="ecosistema" className="py-20 md:py-28 bg-white border-b border-slate-200 scroll-mt-16">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="blue" size="sm" className="mb-3">
            Ecosistema Naxad
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151A21] leading-tight">
            SaaS propio. Sistemas a medida. Un mismo criterio detrás de los dos.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No elegís entre &ldquo;un producto enlatado&rdquo; o &ldquo;empezar de cero&rdquo; — Naxad construye lo que tu negocio necesita, sea un sistema propio o uno hecho a tu medida exacta.
          </p>
        </div>

        {/* Grid de 3 Cards de Productos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-start">
          {/* CARD 1 — DentalDesk */}
          <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-blue-50 text-[#2563EB] border border-blue-100">
                  SaaS multi-tenant
                </span>
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center">
                  <Stethoscope size={18} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#151A21] mb-2">
                DentalDesk
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Turnos, pacientes, finanzas y un dashboard con briefing diario del negocio. Un mismo producto, con seguridad auditada, listo para cualquier clínica.
              </p>

              {/* Detalle inline expandible */}
              {expandedProduct === "dentaldesk" && (
                <div className="mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2.5 font-sans animate-in fade-in duration-200">
                  <div className="font-semibold text-[#151A21] flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#2563EB]" />
                    Especificación de Arquitectura:
                  </div>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    <li>Multi-sede con permisos granulares (recepción, doctores, administración).</li>
                    <li>20 tablas de base de datos con políticas RLS (Row Level Security) auditadas.</li>
                    <li>Liquidación automática de honorarios por profesional y tratamiento.</li>
                    <li>Notificaciones y confirmación de turnos por WhatsApp.</li>
                  </ul>
                  <div className="pt-1 text-[11px] font-mono text-[#2563EB]">
                    Estado: En producción activa
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5 justify-between">
              <button
                onClick={() => toggleExpand("dentaldesk")}
                className="text-xs font-semibold text-slate-600 hover:text-[#151A21] inline-flex items-center gap-1 py-1"
              >
                {expandedProduct === "dentaldesk" ? (
                  <>Menos detalle <ChevronUp size={14} /></>
                ) : (
                  <>Ver cómo funciona <ChevronDown size={14} /></>
                )}
              </button>
              <Link href="/contacto" className="w-full sm:w-auto">
                <Button size="sm" variant="primary" className="w-full sm:w-auto text-xs bg-[#2563EB] text-white hover:bg-blue-700">
                  Quiero esto para mi clínica
                </Button>
              </Link>
            </div>
          </div>

          {/* CARD 2 — LautaroNutrición */}
          <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100">
                  Sistema a medida
                </span>
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Apple size={18} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#151A21] mb-2">
                LautaroNutrición
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Construido específicamente para el Dr. Lautaro Reyna: portal de pacientes, estimación de macros por IA desde una foto y panel de alertas de retención contra abandono de tratamiento.
              </p>

              {/* Detalle inline expandible */}
              {expandedProduct === "reynadesk" && (
                <div className="mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2.5 font-sans animate-in fade-in duration-200">
                  <img
                    src="/lautaronutricion-dashboard.jpg"
                    alt="LautaroNutrición Dashboard en producción"
                    className="w-full h-auto rounded-lg border border-slate-200 object-cover max-h-48 mb-2"
                  />
                  <div className="font-semibold text-[#151A21] flex items-center gap-1.5">
                    <Sparkles size={14} className="text-emerald-600" />
                    Caso de Uso & Alcance:
                  </div>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    <li>Estimación calórica y macronutrientes mediante visión por IA desde fotos de platos.</li>
                    <li>Portal para que el paciente registre peso, sensaciones y comidas diarias.</li>
                    <li>Disparador de alertas y mensajes de retención ante interrupción del registro.</li>
                    <li>Historial antropométrico y evolución gráfica de composición corporal.</li>
                  </ul>
                  <div className="pt-1 text-[11px] font-mono text-emerald-800">
                    Estado: Entregado y en uso diario en consultorio
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5 justify-between">
              <button
                onClick={() => toggleExpand("reynadesk")}
                className="text-xs font-semibold text-slate-600 hover:text-[#151A21] inline-flex items-center gap-1 py-1 cursor-pointer"
              >
                {expandedProduct === "reynadesk" ? (
                  <>Menos detalle <ChevronUp size={14} /></>
                ) : (
                  <>Ver el caso completo <ChevronDown size={14} /></>
                )}
              </button>
              <Link href="/contacto" className="w-full sm:w-auto">
                <Button size="sm" variant="outline" className="w-full sm:w-auto text-xs text-slate-700 border-slate-300 hover:bg-slate-50">
                  Quiero algo así a medida
                </Button>
              </Link>
            </div>
          </div>

          {/* CARD 3 — Pharmalyze AI */}
          <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100">
                  En desarrollo — próximo SaaS
                </span>
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Pill size={18} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#151A21] mb-2">
                Pharmalyze AI
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Nace como sistema a medida para Farmacia Internacional (CABA) y avanza hacia convertirse en el SaaS de inteligencia de stock para todo el rubro: vencimientos, lotes, comparación real de proveedores — conectado a tu POS, no en su lugar.
              </p>

              {/* Detalle inline expandible */}
              {expandedProduct === "pharmalyze" && (
                <div className="mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2.5 font-sans animate-in fade-in duration-200">
                  <img
                    src="/pharmalyze-dashboard.jpg"
                    alt="Pharmalyze AI Dashboard en producción"
                    className="w-full h-auto rounded-lg border border-slate-200 object-cover max-h-48 mb-2"
                  />
                  <div className="font-semibold text-[#151A21] flex items-center gap-1.5">
                    <Layers size={14} className="text-emerald-600" />
                    Trayectoria & Pruebas en Vivo:
                  </div>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    <li>Piloto activo en Farmacia Internacional (CABA).</li>
                    <li>Control estricto de vencimientos por lote mediante criterio FEFO.</li>
                    <li>Comparador de listas de precios y bonificaciones entre droguerías.</li>
                    <li>Capa no invasiva: complementa el sistema de facturación actual sin reemplazarlo.</li>
                  </ul>
                  <div className="pt-1 text-[11px] font-mono text-emerald-800">
                    Estado: Piloto activo en CABA · NaxadSistem v1.0
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5 justify-between">
              <button
                onClick={() => toggleExpand("pharmalyze")}
                className="text-xs font-semibold text-slate-600 hover:text-[#151A21] inline-flex items-center gap-1 py-1 cursor-pointer"
              >
                {expandedProduct === "pharmalyze" ? (
                  <>Menos detalle <ChevronUp size={14} /></>
                ) : (
                  <>Ver el proyecto <ChevronDown size={14} /></>
                )}
              </button>
              <Link href="/contacto" className="w-full sm:w-auto">
                <Button size="sm" variant="outline" className="w-full sm:w-auto text-xs text-slate-700 border-slate-300 hover:bg-slate-50">
                  Avisame cuando esté listo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Cierre de sección */}
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
            <strong className="text-[#151A21]">Así trabajamos:</strong> si tu rubro ya tiene su sistema en el ecosistema, lo adoptás. Si no, lo construimos a tu medida — y si tiene sentido, se convierte en el próximo producto.
          </p>
          <Link href="/contacto" className="shrink-0">
            <span className="text-xs font-semibold text-[#2563EB] hover:text-blue-700 inline-flex items-center gap-1 transition-colors">
              Hablemos de tu caso <ArrowRight size={13} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
