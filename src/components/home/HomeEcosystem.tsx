"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  Stethoscope,
  Apple,
  Pill,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Activity,
  BrainCircuit,
  MessageSquare,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  status: string;
  statusType: "production" | "development";
  shortDesc: string;
  fullDesc: string;
  urlMock: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  features: {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    text: string;
  }[];
  highlight: string;
  cta: string;
  ctaHref: string;
  whatsappMessage: string;
  accentBorder: string;
  accentText: string;
  accentBg: string;
}

const PRODUCTS: Product[] = [
  {
    id: "dentaldesk",
    name: "DentalDesk",
    badge: "SaaS multi-tenant",
    badgeColor: "bg-blue-50 text-[#2563EB] border-blue-200",
    status: "En producción activa",
    statusType: "production",
    shortDesc:
      "Turnos, pacientes, finanzas y briefing diario para consultorios y clínicas odontológicas.",
    fullDesc:
      "Un mismo producto de alta seguridad auditada, listo para operar en cualquier clínica dental. Olvidate de planillas desactualizadas y centralizá la operatoria médica, contable y administrativa.",
    urlMock: "dentaldesk.app · Centro Odontológico Belgrano",
    image: "/dashboard-dental.jpg",
    imgWidth: 3006,
    imgHeight: 1736,
    icon: Stethoscope,
    features: [
      {
        icon: Activity,
        text: "Panel diario de operaciones, caja y turnos sincronizados en tiempo real.",
      },
      {
        icon: ShieldCheck,
        text: "20 tablas de base de datos con políticas de seguridad RLS (Row Level Security) auditadas.",
      },
      {
        icon: CheckCircle2,
        text: "Liquidación automática de honorarios por odontólogo y prestación realizada.",
      },
      {
        icon: Sparkles,
        text: "Historial clínico digital y recordatorios automáticos de citas vía WhatsApp.",
      },
    ],
    highlight:
      "Arquitectura multi-sede con roles granulares (recepción, doctores, administración).",
    cta: "Quiero esto para mi clínica",
    ctaHref: "/contacto?solucion=dentaldesk",
    whatsappMessage:
      "Hola! Me interesa conocer DentalDesk para mi consultorio o clínica dental.",
    accentBorder: "border-[#2563EB]",
    accentText: "text-[#2563EB]",
    accentBg: "bg-[#2563EB]",
  },
  {
    id: "lautaro",
    name: "LautaroNutrición",
    badge: "Sistema a medida",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    status: "En uso diario en consultorio",
    statusType: "production",
    shortDesc:
      "Portal de pacientes, estimación de macros por IA desde fotos y alertas de retención.",
    fullDesc:
      "Construido a la medida exacta del método del Dr. Lautaro Reyna. Transforma la consulta nutricional con un portal interactivo que los pacientes usan a diario y fideliza el tratamiento.",
    urlMock: "lautaronutricion.com · Dr. Lautaro Reyna",
    image: "/lautaronutricion-dashboard.jpg",
    imgWidth: 2048,
    imgHeight: 1196,
    icon: Apple,
    features: [
      {
        icon: BrainCircuit,
        text: "Estimación calórica y macronutrientes mediante visión por IA desde fotos de platos.",
      },
      {
        icon: Activity,
        text: "Portal personalizado donde el paciente registra peso, adherencia y comidas.",
      },
      {
        icon: CheckCircle2,
        text: "Disparador automático de alertas de retención ante abandono o falta de carga.",
      },
      {
        icon: Sparkles,
        text: "Gráficos de evolución antropométrica y bioimpedancia en tiempo real.",
      },
    ],
    highlight:
      "Desarrollo 100% a medida con inteligencia artificial integrada a la consulta médica.",
    cta: "Quiero algo así a medida",
    ctaHref: "/contacto?solucion=lautaronutricion",
    whatsappMessage:
      "Hola! Vi el caso de LautaroNutrición y quiero consultar por un sistema a medida para mi profesión o negocio.",
    accentBorder: "border-emerald-600",
    accentText: "text-emerald-700",
    accentBg: "bg-emerald-600",
  },
  {
    id: "pharmalyze",
    name: "Pharmalyze AI",
    badge: "En desarrollo — Próximo SaaS",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    status: "Piloto activo en CABA",
    statusType: "development",
    shortDesc:
      "Inteligencia de reposición de stock para farmacias: vencimientos por lote y comparación de droguerías.",
    fullDesc:
      "Nace como sistema a medida para Farmacia Internacional (CABA) y evoluciona hacia un SaaS sectorial. Se conecta de forma no invasiva al punto de venta (POS) para optimizar compras y erradicar mermas.",
    urlMock: "pharmalyze.ai · Farmacia Internacional (CABA)",
    image: "/pharmalyze-dashboard.jpg",
    imgWidth: 2048,
    imgHeight: 1196,
    icon: Pill,
    features: [
      {
        icon: Sparkles,
        text: "Algoritmo de predicción de compra y reposición inteligente según demanda y estacionalidad.",
      },
      {
        icon: ShieldCheck,
        text: "Control estricto de vencimientos por lote con criterio automatizado FEFO.",
      },
      {
        icon: Activity,
        text: "Comparación en tiempo real de listas de precios y bonificaciones entre droguerías.",
      },
      {
        icon: Layers,
        text: "Capa no invasiva: complementa el sistema de facturación actual sin reemplazarlo.",
      },
    ],
    highlight:
      "Reducción directa de capital inmovilizado y prevención de medicamentos vencidos.",
    cta: "Avisame cuando esté listo",
    ctaHref: "/contacto?solucion=pharmalyze",
    whatsappMessage:
      "Hola! Me interesa sumarme al piloto de Pharmalyze AI o recibir novedades cuando esté disponible.",
    accentBorder: "border-amber-500",
    accentText: "text-amber-700",
    accentBg: "bg-amber-500",
  },
];

export function HomeEcosystem() {
  const [activeId, setActiveId] = useState<string>("dentaldesk");
  const activeProduct = PRODUCTS.find((p) => p.id === activeId) || PRODUCTS[0];

  return (
    <section
      id="ecosistema"
      className="py-20 md:py-28 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <Container>
        {/* Header de Sección */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="blue" size="sm" className="mb-3">
            Ecosistema Naxad
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151A21] leading-tight">
            SaaS propio. Sistemas a medida. Un mismo criterio detrás de los dos.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No elegís entre &ldquo;un producto enlatado&rdquo; o &ldquo;empezar
            de cero&rdquo; — Naxad construye lo que tu negocio necesita, sea un
            sistema propio o uno hecho a tu medida exacta.
          </p>
        </div>

        {/* Master-Detail / Interactive Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 items-start">
          {/* COLUMNA IZQUIERDA: Selector de Productos (Menú interactivo) */}
          <div className="lg:col-span-5 space-y-3.5">
            {PRODUCTS.map((product) => {
              const isActive = activeId === product.id;
              const IconComp = product.icon;

              return (
                <div key={product.id} className="group">
                  <button
                    type="button"
                    onClick={() => setActiveId(product.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 relative overflow-hidden cursor-pointer ${
                      isActive
                        ? "bg-white border-[#2563EB] shadow-lg shadow-blue-900/5 ring-1 ring-[#2563EB]/20"
                        : "bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    {/* Indicador lateral activo */}
                    {isActive && (
                      <span
                        className={`absolute left-0 top-0 bottom-0 w-1.5 ${product.accentBg} rounded-r-full`}
                      />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                              isActive
                                ? "bg-blue-50 text-[#2563EB]"
                                : "bg-slate-100 text-slate-500 group-hover:text-slate-700"
                            }`}
                          >
                            <IconComp size={16} />
                          </div>
                          <h3
                            className={`text-base sm:text-lg font-bold ${
                              isActive ? "text-[#151A21]" : "text-slate-700"
                            }`}
                          >
                            {product.name}
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${product.badgeColor}`}
                          >
                            {product.badge}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {product.shortDesc}
                        </p>
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 mt-1 ${
                          isActive
                            ? "rotate-180 text-[#2563EB]"
                            : "group-hover:text-slate-600"
                        }`}
                      />
                    </div>
                  </button>

                  {/* ACCORDION INLINE PARA MÓVILES (< lg) */}
                  <div
                    className={`lg:hidden transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "max-h-[1600px] opacity-100 mt-3 mb-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-md">
                      {/* Estado */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              product.statusType === "production"
                                ? "bg-emerald-500"
                                : "bg-amber-500 animate-pulse"
                            }`}
                          />
                          {product.status}
                        </span>
                      </div>

                      <p className="text-sm text-slate-700 leading-relaxed mb-4">
                        {product.fullDesc}
                      </p>

                      {/* Mockup Dashboard */}
                      <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 mb-4 shadow-sm">
                        <div className="bg-slate-100/90 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-slate-300" />
                            <span className="w-2 h-2 rounded-full bg-slate-300" />
                            <span className="w-2 h-2 rounded-full bg-slate-300" />
                          </div>
                          <span>{product.urlMock}</span>
                        </div>
                        <Image
                          src={product.image}
                          alt={`${product.name} dashboard`}
                          width={product.imgWidth}
                          height={product.imgHeight}
                          quality={90}
                          className="w-full h-auto object-cover max-h-56 bg-slate-100"
                        />
                      </div>

                      {/* Lista de Características */}
                      <ul className="space-y-2.5 mb-5">
                        {product.features.map((feat, idx) => {
                          const FeatIcon = feat.icon;
                          return (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs text-slate-700"
                            >
                              <FeatIcon
                                size={15}
                                className="text-[#2563EB] shrink-0 mt-0.5"
                              />
                              <span>{feat.text}</span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* CTA Móvil */}
                      <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                        <Link href={product.ctaHref} className="w-full">
                          <button
                            type="button"
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                          >
                            <span>{product.cta}</span>
                            <ArrowRight size={14} />
                          </button>
                        </Link>
                        <a
                          href={`https://wa.me/5491136248967?text=${encodeURIComponent(
                            product.whatsappMessage
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center py-2 text-[11px] font-semibold text-slate-600 hover:text-[#2563EB] transition-colors"
                        >
                          Hacer una consulta directa por WhatsApp →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLUMNA DERECHA: Mini-Landing Expandida (Desktop >= lg) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-24">
            <div
              key={activeProduct.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in zoom-in-[0.99]"
            >
              {/* Header de la Mini-Landing */}
              <div className="p-7 sm:p-8 pb-6 border-b border-slate-100">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        activeProduct.statusType === "production"
                          ? "bg-emerald-500"
                          : "bg-amber-500 animate-pulse"
                      }`}
                    />
                    {activeProduct.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Ecosistema NAXAD
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151A21] mb-2 tracking-tight">
                  {activeProduct.name}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {activeProduct.fullDesc}
                </p>
              </div>

              {/* Cuerpo: Mockup Real del Dashboard */}
              <div className="p-7 sm:p-8 pt-6 flex-1 flex flex-col">
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 mb-6 shadow-sm group">
                  {/* Barra de ventana estilo navegador / SO */}
                  <div className="bg-slate-100/90 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
                    </div>
                    <span className="text-[11px] truncate max-w-[280px]">
                      {activeProduct.urlMock}
                    </span>
                    <span className="text-[10px] text-slate-400 font-sans uppercase tracking-wider font-semibold">
                      Live Preview
                    </span>
                  </div>

                  {/* Imagen real en producción */}
                  <div className="relative overflow-hidden bg-slate-100">
                    <Image
                      src={activeProduct.image}
                      alt={`${activeProduct.name} Dashboard en producción`}
                      width={activeProduct.imgWidth}
                      height={activeProduct.imgHeight}
                      quality={95}
                      sizes="(max-width: 1024px) 100vw, 650px"
                      priority
                      className="w-full h-auto object-cover max-h-72 transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                {/* Resalte de arquitectura */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6 flex items-start gap-2.5">
                  <ShieldCheck
                    size={16}
                    className="text-[#2563EB] shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-[#151A21]">
                      Criterio de ingeniería:
                    </strong>{" "}
                    {activeProduct.highlight}
                  </span>
                </div>

                {/* Lista de Características */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Capacidades clave del sistema
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProduct.features.map((feature, idx) => {
                      const FeatIcon = feature.icon;
                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100"
                        >
                          <FeatIcon
                            size={16}
                            className="text-[#2563EB] shrink-0 mt-0.5"
                          />
                          <span className="leading-snug">{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* CTA Específico */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link href={activeProduct.ctaHref} className="w-full sm:w-auto">
                    <button
                      type="button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>{activeProduct.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>

                  <a
                    href={`https://wa.me/5491136248967?text=${encodeURIComponent(
                      activeProduct.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-600 hover:text-[#2563EB] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare size={14} className="text-[#2563EB]" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cierre de sección: Filosofía de producto */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
            <strong className="text-[#151A21]">Así trabajamos:</strong> si tu
            rubro ya tiene su sistema en el ecosistema, lo adoptás y empezás de
            inmediato. Si no, lo construimos a tu medida — y si tiene sentido de
            escala, se convierte en el próximo producto.
          </p>
          <Link href="/contacto" className="shrink-0">
            <span className="text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-blue-700 inline-flex items-center gap-1 transition-colors">
              Hablemos de tu caso <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
