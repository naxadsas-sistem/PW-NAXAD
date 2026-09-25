"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Container } from "@/components/ui/Container";
import {
  Stethoscope,
  Apple,
  Pill,
  Code2,
  Workflow,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  MessageSquare,
  Activity,
  BrainCircuit,
  Clock,
  ChevronRight,
  Eye,
  SlidersHorizontal,
} from "lucide-react";

type CategoryFilter = "all" | "saas" | "custom" | "infra";

export interface BentoProduct {
  id: string;
  name: string;
  category: "saas" | "custom" | "infra";
  badge: string;
  badgeColor: string;
  status: string;
  statusType: "production" | "development";
  headline: string;
  shortDesc: string;
  fullDesc: string;
  urlMock: string;
  image?: string;
  imgWidth?: number;
  imgHeight?: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  techStack: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  targetAudience?: {
    title: string;
    items: string[];
  };
  architectureHighlight: string;
  ctaText: string;
  ctaHref: string;
  whatsappMessage: string;
}

export const BENTO_PRODUCTS: BentoProduct[] = [
  {
    id: "dentaldesk",
    name: "DentalDesk",
    category: "saas",
    badge: "SaaS Multi-tenant",
    badgeColor: "bg-blue-50 text-[#2563EB] border-blue-200",
    status: "En producción activa",
    statusType: "production",
    headline: "Gestión clínica integral, turnos sincronizados y liquidaciones para clínicas odontológicas",
    shortDesc: "Centralizá pacientes, fichas clínicas, caja diaria y recordatorios automáticos por WhatsApp en una sola plataforma multi-sede.",
    fullDesc: "Un producto de nivel empresarial diseñado para consultorios y clínicas odontológicas. Elimina planillas desactualizadas y superposiciones de turnos con una arquitectura multi-tenant segura que aísla los datos médicos de cada clínica mediante políticas RLS en PostgreSQL.",
    urlMock: "dentaldesk.app · Centro Odontológico Belgrano",
    image: "/dashboard-dental.jpg",
    imgWidth: 3006,
    imgHeight: 1736,
    icon: Stethoscope,
    techStack: ["Next.js 16", "PostgreSQL RLS", "Supabase", "Tailwind CSS", "WhatsApp Cloud API"],
    metrics: [
      { label: "Ocupación de sillones", value: "92%" },
      { label: "Sobreturnos evitados", value: "100%" },
      { label: "Tablas con seguridad RLS", value: "20" },
    ],
    features: [
      "Agenda médica visual con sincronización de sillones y profesionales en tiempo real.",
      "Historial clínico digital con odontograma interactivo y adjunto de radiografías.",
      "Liquidación automatizada de honorarios por odontólogo y prestación realizada.",
      "Recordatorios y confirmaciones automáticas de citas vía WhatsApp oficial.",
      "Aislamiento estricto de datos con Row Level Security para cada sucursal o clínica.",
    ],
    architectureHighlight: "Arquitectura multi-tenant nativa en PostgreSQL con políticas RLS auditadas para secreto médico.",
    ctaText: "Quiero esto para mi clínica",
    ctaHref: "/contacto?solucion=dentaldesk",
    whatsappMessage: "Hola equipo de NAXAD! Me interesa conocer DentalDesk para mi consultorio o clínica odontológica.",
  },
  {
    id: "lautaronutricion",
    name: "LautaroNutrición",
    category: "custom",
    badge: "Sistema a Medida & IA",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    status: "En uso diario en consultorio",
    statusType: "production",
    headline: "Portal de pacientes con visión computacional por IA para análisis instantáneo de comidas",
    shortDesc: "El paciente fotografía su plato y la IA calcula calorías y macros en segundos, disparando alertas de adherencia para el nutricionista.",
    fullDesc: "Construido a la medida exacta de la metodología de consulta del Dr. Lautaro Reyna. Sustituye los registros en papel o chats de WhatsApp dispersos por un portal interactivo donde el paciente registra peso, fotos de comidas y evolución antropométrica con bioimpedancia.",
    urlMock: "lautaronutricion.com · Dr. Lautaro Reyna",
    image: "/lautaronutricion-dashboard.jpg",
    imgWidth: 2048,
    imgHeight: 1196,
    icon: Apple,
    techStack: ["React 19", "Gemini Vision IA", "PostgreSQL", "Next.js", "Chart.js"],
    metrics: [
      { label: "Adherencia mensual", value: "94%" },
      { label: "Tiempo de registro", value: "< 15s" },
      { label: "Retención de pacientes", value: "+38%" },
    ],
    features: [
      "Estimación inmediata de calorías y macronutrientes desde fotos de platos con visión artificial.",
      "Portal accesible desde el móvil del paciente para carga de peso diario y adherencia.",
      "Detección automática de pacientes en riesgo de abandono para re-contacto a tiempo.",
      "Gráficos de bioimpedancia, masa muscular y porcentaje graso en cada consulta.",
    ],
    architectureHighlight: "Pipeline de análisis multimodal con IA integrado directamente a la ficha clínica del paciente.",
    ctaText: "Ver caso de estudio y pedir demo",
    ctaHref: "/contacto?solucion=lautaronutricion",
    whatsappMessage: "Hola equipo de NAXAD! Vi el caso de LautaroNutrición y quiero consultar por un sistema a medida con IA para mi especialidad.",
  },
  {
    id: "pharmalyze",
    name: "Pharmalyze AI",
    category: "saas",
    badge: "Próximo SaaS",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    status: "Piloto activo en CABA",
    statusType: "development",
    headline: "Inteligencia de stock farmacéutico, monitor FEFO predictivo y arbitraje de droguerías",
    shortDesc: "Control estricto de vencimientos por lote y comparación en tiempo real de precios entre droguerías sin cambiar tu sistema POS.",
    fullDesc: "Nace como una solución a medida para Farmacia Internacional (CABA) y evoluciona hacia un SaaS especializado. Se conecta de forma no invasiva al punto de venta existente para predecir cuándo reponer, qué lote sacar primero y con qué droguería conviene comprar.",
    urlMock: "pharmalyze.ai · Farmacia Internacional (CABA)",
    image: "/pharmalyze-dashboard.jpg",
    imgWidth: 2048,
    imgHeight: 1196,
    icon: Pill,
    techStack: ["Next.js", "Algoritmos FEFO", "PostgreSQL", "Python Analytics", "POS Bridge"],
    metrics: [
      { label: "Reducción de mermas", value: "98%" },
      { label: "Ahorro en compras", value: "14.2%" },
      { label: "Droguerías comparadas", value: "Tiempo real" },
    ],
    features: [
      "Semáforo predictivo de vencimientos con ordenamiento estricto FEFO (First Expired, First Out).",
      "Comparación cruzada de listas de precios y bonificaciones comerciales entre droguerías.",
      "Cálculo de días de cobertura según velocidad de venta promedio de los últimos 30 días.",
      "Conector no invasivo: funciona sobre el sistema de facturación actual sin reemplazarlo.",
    ],
    targetAudience: {
      title: "Naxad Pharmalyzed IA está pensado para:",
      items: [
        "Farmacias independientes",
        "Farmacias con múltiples proveedores",
        "Organizaciones que necesitan mayor control de inventario",
        "Operaciones que ya utilizan un sistema comercial",
        "Equipos que necesitan mejorar trazabilidad",
        "Farmacias que quieren transformar sus datos operativos en información útil para decidir",
      ],
    },
    architectureHighlight: "Motor de análisis de stock con sincronización continua y conector local para puntos de venta.",
    ctaText: "Sumarme al piloto de farmacias",
    ctaHref: "/contacto?solucion=pharmalyze",
    whatsappMessage: "Hola equipo de NAXAD! Me interesa sumarme al piloto de Pharmalyze AI para farmacias.",
  },
  {
    id: "desarrollo-medida",
    name: "Sistemas a Medida",
    category: "custom",
    badge: "Ingeniería NAXAD",
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
    status: "Arquitectura Cloud Dedicada",
    statusType: "production",
    headline: "Desarrollo de software a medida con TypeScript, Next.js y bases de datos dedicadas",
    shortDesc: "Para empresas con procesos propios que no encajan en ningún software enlatado comercial. Código limpio y 100% tuyo.",
    fullDesc: "No vendemos plantillas prefabricadas ni sistemas hinchados con 50 funciones inútiles. Analizamos tus cuellos de botella operativos y construimos una aplicación web rápida, segura y hecha exactamente para tu flujo de trabajo diario.",
    urlMock: "api.naxad.com/v1/core · Enterprise Cloud",
    icon: Code2,
    techStack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "Docker", "REST / GraphQL"],
    metrics: [
      { label: "Uptime de sistemas", value: "99.9%" },
      { label: "Propiedad del código", value: "100%" },
      { label: "Costo por usuario fantasma", value: "$0" },
    ],
    features: [
      "Modelado de base de datos relacional ajustado a las entidades exactas de tu operación.",
      "Interfaces de usuario diseñadas para velocidad de carga y cero fricción en el equipo.",
      "APIs tipadas de punta a punta que garantizan integridad y prevención de errores.",
      "Capacitación directa al equipo para asegurar que el sistema se adopte con éxito.",
    ],
    architectureHighlight: "Arquitectura moderna orientada a eventos, escalable y sin ataduras a licencias mensuales prohibitivas.",
    ctaText: "Cotizar mi sistema a medida",
    ctaHref: "/contacto?solucion=desarrollo",
    whatsappMessage: "Hola equipo de NAXAD! Quiero consultar por el desarrollo de un sistema a medida para mi empresa.",
  },
  {
    id: "automatizaciones",
    name: "Integraciones & Automatización",
    category: "infra",
    badge: "Conectividad Operativa",
    badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
    status: "Conectores sin fricción",
    statusType: "production",
    headline: "Integración no invasiva de procesos: conectá tus planillas, POS y WhatsApp Oficial",
    shortDesc: "Eliminá la doble carga administrativa y los errores humanos conectando las herramientas que tu equipo ya utiliza a diario.",
    fullDesc: "La automatización con criterio de negocio no busca reemplazar a las personas, sino librarlas de tareas de copia y pegue. Conectamos tus formularios web, sistemas POS, pasarelas de cobro y mensajería en un flujo automático continuo y supervisado.",
    urlMock: "webhooks.naxad.com/dispatch · Events Hub",
    icon: Workflow,
    techStack: ["Webhooks", "WhatsApp Business API", "Zapier / Make", "Microservicios Node", "AFIP / Facturación"],
    metrics: [
      { label: "Horas manuales ahorradas", value: "15h/sem" },
      { label: "Tiempo de respuesta", value: "1.2 seg" },
      { label: "Error de transcripción", value: "0%" },
    ],
    features: [
      "Disparadores automáticos de mensajes y confirmaciones ante eventos en tu sistema.",
      "Sincronización bidireccional entre hojas de cálculo, bases de datos y paneles de gestión.",
      "Alertas operativas inmediatas en WhatsApp o correo ante desvíos críticos de inventario o caja.",
      "Implementación en paralelo sin detener la operación diaria de tu negocio.",
    ],
    architectureHighlight: "Capa de orquestación segura con reintentos automáticos y auditoría de eventos de integración.",
    ctaText: "Automatizar mis procesos",
    ctaHref: "/contacto?solucion=automatizacion",
    whatsappMessage: "Hola equipo de NAXAD! Quiero consultar cómo conectar y automatizar los procesos y sistemas de mi negocio.",
  },
  {
    id: "consultoria",
    name: "Consultoría y Diagnóstico",
    category: "infra",
    badge: "Equipo Técnico",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    status: "Sesión Estratégica con el Equipo",
    statusType: "production",
    headline: "Diagnóstico operativo y consultoría técnica con el equipo de NAXAD",
    shortDesc: "Sin intermediarios comerciales ni vendedores. Nuestro equipo de arquitectura evalúa dónde están las fugas de tiempo y qué tecnología realmente conviene sumar.",
    fullDesc: "Antes de gastar un solo peso en programar software, es fundamental entender si el problema es de procesos, de capacitación o de herramientas. Realizamos una auditoría exhaustiva de tus flujos de trabajo cotidianos y te presentamos un plan de acción concreto y honesto.",
    urlMock: "naxad.com/diagnostico · Buenos Aires",
    icon: Compass,
    techStack: ["Auditoría de Procesos", "Evaluación de ROI", "Arquitectura de Software", "Capacitación Operativa"],
    metrics: [
      { label: "Atención", value: "Equipo Directo" },
      { label: "Claridad de diagnóstico", value: "48 hs" },
      { label: "Compromiso de honestidad", value: "100%" },
    ],
    features: [
      "Mapeo de flujos y detección precisa de cuellos de botella en la operación actual.",
      "Auditoría técnica de costos en licencias de software que quizás no se están aprovechando.",
      "Definición clara: qué conviene resolver con un SaaS existente y qué amerita desarrollo a medida.",
      "Acompañamiento en la toma de decisiones para proteger el capital del negocio.",
    ],
    architectureHighlight: "Criterio de ingeniería aplicado a la rentabilidad y eficiencia real de la pequeña y mediana empresa.",
    ctaText: "Agendar conversación de 20 min",
    ctaHref: "/contacto?solucion=consultoria",
    whatsappMessage: "Hola equipo de NAXAD! Me gustaría coordinar un diagnóstico operativo inicial para mi empresa.",
  },
];

export function HomeEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [modalProduct, setModalProduct] = useState<BentoProduct | null>(null);
  const [modalTab, setModalTab] = useState<"overview" | "specs" | "impact">("overview");

  // Estado para alternar entre simulación interactiva y vista previa de captura de pantalla
  const [cardModes, setCardModes] = useState<Record<string, "sim" | "screenshot">>({
    dentaldesk: "sim",
    lautaronutricion: "sim",
    pharmalyze: "sim",
  });

  const toggleCardMode = (productId: string, mode: "sim" | "screenshot") => {
    setCardModes((prev) => ({
      ...prev,
      [productId]: mode,
    }));
  };

  // Manejo de tecla Escape para cerrar modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalProduct(null);
      }
    };
    if (modalProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalProduct]);

  return (
    <section
      id="ecosistema"
      className="py-28 sm:py-32 md:py-36 lg:py-40 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-16 relative overflow-hidden"
    >
      {/* Fondo con textura sutil de cuadrícula de puntos estilo Stripe */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        {/* ========================================================================= */}
        {/* 1. HEADER ESTILO STRIPE */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span>Suite Modular · Ecosistema NAXAD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151A21] leading-[1.12]">
              Soluciones flexibles para cualquier modelo de negocio.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-loose max-w-2xl">
              Adoptá un producto probado listo para operar o construí un sistema a tu medida exacta. Todas nuestras soluciones comparten la misma ingeniería de datos, seguridad PostgreSQL RLS y sincronización en tiempo real.
            </p>
          </div>

          {/* Filtros de Píldoras Rápidas (Stripe Pill Filter) con Touch Targets optimizados */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 backdrop-blur-md rounded-2xl border border-slate-300/80 self-start md:self-end">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`min-h-[44px] sm:min-h-0 px-3.5 py-2 sm:py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center ${
                selectedCategory === "all"
                  ? "bg-white text-[#151A21] shadow-xs"
                  : "text-slate-600 hover:text-[#151A21]"
              }`}
            >
              Todos ({BENTO_PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("saas")}
              className={`min-h-[44px] sm:min-h-0 px-3.5 py-2 sm:py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center ${
                selectedCategory === "saas"
                  ? "bg-white text-[#2563EB] shadow-xs"
                  : "text-slate-600 hover:text-[#151A21]"
              }`}
            >
              SaaS Propios (2)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("custom")}
              className={`min-h-[44px] sm:min-h-0 px-3.5 py-2 sm:py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center ${
                selectedCategory === "custom"
                  ? "bg-white text-emerald-700 shadow-xs"
                  : "text-slate-600 hover:text-[#151A21]"
              }`}
            >
              A Medida & IA (2)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("infra")}
              className={`min-h-[44px] sm:min-h-0 px-3.5 py-2 sm:py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center ${
                selectedCategory === "infra"
                  ? "bg-white text-indigo-700 shadow-xs"
                  : "text-slate-600 hover:text-[#151A21]"
              }`}
            >
              Infraestructura (2)
            </button>
          </div>
        </div>

        {/* Indicador sutil de Swipe en Mobile */}
        <div className="flex lg:hidden items-center justify-between text-xs text-slate-500 mb-3 px-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            Deslizá para explorar soluciones
          </span>
          <span className="text-[11px] font-mono font-semibold text-slate-400">↔ Swipe horizontal</span>
        </div>

        {/* ========================================================================= */}
        {/* 2. BENTO GRID MODULAR CON SWIPE HORIZONTAL TÁCTIL EN MOBILE */}
        {/* ========================================================================= */}
        <div className="flex lg:grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 xl:gap-12 items-stretch overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-6 lg:pb-0 mb-16">
          {/* ----------------------------------------------------------------------- */}
          {/* TARJETA 1: DENTALDESK (Featured Grande - col-span-7 en desktop) */}
          {/* ----------------------------------------------------------------------- */}
          {(selectedCategory === "all" || selectedCategory === "saas") && (
            <div className="min-w-[86vw] max-w-[88vw] sm:min-w-[500px] sm:max-w-[540px] lg:min-w-0 lg:max-w-none snap-center shrink-0 lg:shrink lg:col-span-7 flex flex-col">
              <div className="stripe-bento-card stripe-gradient-border h-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.24)] hover:border-blue-300 transition-all duration-300">
                {/* Cabecera de la tarjeta */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icono con gradiente sutil */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-indigo-500/15 text-[#2563EB] flex items-center justify-center border border-blue-200/80 shadow-xs group-hover:scale-105 transition-transform">
                        <Stethoscope size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#151A21] tracking-tight">
                            DentalDesk
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#2563EB] border border-blue-200">
                            SaaS Clínico
                          </span>
                          {/* Badge animado En Vivo con radar ping */}
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            En vivo
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Botón expandir [↗] estilo Stripe dialog entry */}
                    <button
                      type="button"
                      onClick={() => {
                        setModalProduct(BENTO_PRODUCTS[0]);
                        setModalTab("overview");
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#2563EB] text-slate-500 group-hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0"
                      title="Ver detalles completos de DentalDesk"
                      aria-label="Abrir detalles de DentalDesk"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-loose mb-5 font-normal">
                    Turnos, fichas médicas, caja diaria y briefing de ocupación para consultorios y clínicas odontológicas multi-sede.
                  </p>

                  {/* Micro-UI / Interactive Preview Container */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/95 overflow-hidden mb-6 p-4 shadow-2xs font-sans transition-all duration-300">
                    {/* Barra de ventana estilo Stripe con Switcher [Simulación / Captura HD] */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 text-[11px] font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold text-slate-700">
                          {cardModes["dentaldesk"] === "screenshot"
                            ? "Captura Real en Producción"
                            : "Agenda en Tiempo Real"}
                        </span>
                      </div>

                      {/* Pill Switcher */}
                      <div className="flex items-center p-0.5 rounded-lg bg-slate-200/80 text-[10px]">
                        <button
                          type="button"
                          onClick={() => toggleCardMode("dentaldesk", "sim")}
                          className={`px-2 py-0.5 rounded-md font-sans transition-all cursor-pointer flex items-center gap-1 ${
                            cardModes["dentaldesk"] !== "screenshot"
                              ? "bg-white font-bold text-slate-800 shadow-2xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <SlidersHorizontal size={10} />
                          <span>Simulación</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleCardMode("dentaldesk", "screenshot")}
                          className={`px-2 py-0.5 rounded-md font-sans transition-all cursor-pointer flex items-center gap-1 ${
                            cardModes["dentaldesk"] === "screenshot"
                              ? "bg-blue-600 font-bold text-white shadow-2xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <Eye size={10} />
                          <span>Captura HD</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                        </button>
                      </div>
                    </div>

                    {/* VISTA 1: CAPTURA DE PANTALLA EXPANDIDA EN HOVER */}
                    {cardModes["dentaldesk"] === "screenshot" ? (
                      <div
                        className="relative rounded-xl overflow-hidden border border-slate-200 bg-white group/preview cursor-pointer"
                        onClick={() => {
                          setModalProduct(BENTO_PRODUCTS[0]);
                          setModalTab("overview");
                        }}
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                          <ImageWithSkeleton
                            src="/dashboard-dental.jpg"
                            alt="DentalDesk Dashboard en Vivo"
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover/preview:opacity-40 transition-opacity" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                            <span className="font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                              Vista general de turnos y sillones
                            </span>
                            <span className="bg-[#2563EB] px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 shadow-sm">
                              <span>Inspeccionar</span>
                              <Maximize2 size={11} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* VISTA 2: MICRO-UI EN TIEMPO REAL */
                      <div>
                        {/* Fila de Agenda 1 */}
                        <div className="space-y-2 mb-3.5">
                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs shadow-2xs hover:border-blue-200 transition-colors">
                            <div className="flex items-center gap-3">
                              <span className="font-mono font-bold text-[#2563EB] px-2 py-1 rounded bg-blue-50">
                                10:30 hs
                              </span>
                              <div>
                                <span className="font-semibold text-slate-800">Dra. Valeria Rossi</span>
                                <span className="text-slate-400 mx-1.5">·</span>
                                <span className="text-slate-600">Limpieza & Caries</span>
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 size={11} /> Confirmado WhatsApp
                            </span>
                          </div>

                          {/* Fila de Agenda 2 */}
                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs shadow-2xs hover:border-blue-200 transition-colors">
                            <div className="flex items-center gap-3">
                              <span className="font-mono font-bold text-slate-700 px-2 py-1 rounded bg-slate-100">
                                11:15 hs
                              </span>
                              <div>
                                <span className="font-semibold text-slate-800">Dr. Martín Gómez</span>
                                <span className="text-slate-400 mx-1.5">·</span>
                                <span className="text-slate-600">Implante sector 1.4</span>
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                              <Activity size={11} /> En Sillón 2
                            </span>
                          </div>
                        </div>

                        {/* Resumen de Métricas Rápidas */}
                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/70 text-center mb-3">
                          <div className="p-2 rounded-lg bg-white/80 border border-slate-100">
                            <div className="text-[10px] text-slate-500 font-mono uppercase">Cobrado Hoy</div>
                            <div className="text-xs sm:text-sm font-bold text-[#151A21] font-mono">$840.000</div>
                          </div>
                          <div className="p-2 rounded-lg bg-white/80 border border-slate-100">
                            <div className="text-[10px] text-slate-500 font-mono uppercase">Ocupación</div>
                            <div className="text-xs sm:text-sm font-bold text-emerald-600 font-mono">92%</div>
                          </div>
                          <div className="p-2 rounded-lg bg-white/80 border border-slate-100">
                            <div className="text-[10px] text-slate-500 font-mono uppercase">Seguridad</div>
                            <div className="text-xs sm:text-sm font-bold text-[#2563EB] font-mono">20 Tablas RLS</div>
                          </div>
                        </div>

                        {/* Banner Teaser Expandible al Hover */}
                        <button
                          type="button"
                          onClick={() => toggleCardMode("dentaldesk", "screenshot")}
                          className="w-full p-2 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/40 text-left flex items-center justify-between text-[11px] text-slate-600 transition-all cursor-pointer group/peek shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-6 rounded-md overflow-hidden relative border border-slate-200 shrink-0 shadow-xs">
                              <Image
                                src="/dashboard-dental.jpg"
                                alt="Miniatura Dashboard"
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-slate-700 group-hover/peek:text-[#2563EB] transition-colors">
                              Ver captura real de pantalla del sistema
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-[#2563EB] flex items-center gap-1">
                            <span>Expandir</span>
                            <ChevronRight size={13} className="group-hover/peek:translate-x-0.5 transition-transform" />
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer de Tarjeta con CTAs directos */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      setModalProduct(BENTO_PRODUCTS[0]);
                      setModalTab("overview");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span>Ver capturas en producción y arquitectura</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link href="/contacto?solucion=dentaldesk">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-2xs">
                      Pedir demo clínica
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TARJETA 2: LAUTARONUTRICIÓN (Mediana - col-span-5 en desktop) */}
          {/* ----------------------------------------------------------------------- */}
          {(selectedCategory === "all" || selectedCategory === "custom") && (
            <div className="min-w-[86vw] max-w-[88vw] sm:min-w-[500px] sm:max-w-[540px] lg:min-w-0 lg:max-w-none snap-center shrink-0 lg:shrink lg:col-span-5 flex flex-col">
              <div className="stripe-bento-card stripe-gradient-border h-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(5,150,105,0.24)] hover:border-emerald-300 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icono con gradiente sutil esmeralda */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-teal-500/15 text-emerald-600 flex items-center justify-center border border-emerald-200/80 shadow-xs group-hover:scale-105 transition-transform">
                        <Apple size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#151A21] tracking-tight">
                            LautaroNutrición
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                            IA Clínica
                          </span>
                          {/* Badge animado En Vivo con radar ping */}
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            En vivo
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setModalProduct(BENTO_PRODUCTS[1]);
                        setModalTab("overview");
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-emerald-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0"
                      title="Ver detalles completos de LautaroNutrición"
                      aria-label="Abrir detalles de LautaroNutrición"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-loose mb-5 font-normal">
                    Portal de pacientes con visión computacional por IA: estimación de calorías y macros desde fotos de platos y alertas de retención.
                  </p>

                  {/* Micro-UI / Interactive Preview Container */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/95 p-4 mb-6 shadow-2xs font-sans transition-all duration-300">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-2.5 mb-2.5 border-b border-slate-200/80">
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                        <BrainCircuit size={13} />{" "}
                        {cardModes["lautaronutricion"] === "screenshot"
                          ? "Portal del Paciente en Producción"
                          : "Visión Multimodal IA"}
                      </span>

                      {/* Pill Switcher */}
                      <div className="flex items-center p-0.5 rounded-lg bg-slate-200/80 text-[10px]">
                        <button
                          type="button"
                          onClick={() => toggleCardMode("lautaronutricion", "sim")}
                          className={`px-2 py-0.5 rounded-md font-sans transition-all cursor-pointer flex items-center gap-1 ${
                            cardModes["lautaronutricion"] !== "screenshot"
                              ? "bg-white font-bold text-slate-800 shadow-2xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <SlidersHorizontal size={10} />
                          <span>Simulación</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleCardMode("lautaronutricion", "screenshot")}
                          className={`px-2 py-0.5 rounded-md font-sans transition-all cursor-pointer flex items-center gap-1 ${
                            cardModes["lautaronutricion"] === "screenshot"
                              ? "bg-emerald-600 font-bold text-white shadow-2xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <Eye size={10} />
                          <span>Captura HD</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        </button>
                      </div>
                    </div>

                    {cardModes["lautaronutricion"] === "screenshot" ? (
                      <div
                        className="relative rounded-xl overflow-hidden border border-slate-200 bg-white group/preview cursor-pointer"
                        onClick={() => {
                          setModalProduct(BENTO_PRODUCTS[1]);
                          setModalTab("overview");
                        }}
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                          <ImageWithSkeleton
                            src="/lautaronutricion-dashboard.jpg"
                            alt="LautaroNutrición Dashboard en Vivo"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover/preview:opacity-40 transition-opacity" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                            <span className="font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                              Registro diario y evolución
                            </span>
                            <span className="bg-emerald-600 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 shadow-sm">
                              <span>Inspeccionar</span>
                              <Maximize2 size={11} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {/* Card de comida analizada */}
                        <div className="p-3 rounded-xl bg-white border border-slate-200/80 mb-3 space-y-2 shadow-2xs hover:border-emerald-200 transition-colors">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-800">Almuerzo: Bowl de salmón & quinoa</span>
                            <span className="font-mono text-emerald-600 font-bold text-xs">580 kcal</span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600">
                            <span className="px-1.5 py-0.5 rounded bg-slate-100">Prot: 38g</span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-100">Carbs: 42g</span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-100">Grasas: 22g</span>
                          </div>
                        </div>

                        {/* Alert trigger */}
                        <div className="flex items-center gap-2 text-[11px] text-slate-600 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100 mb-3">
                          <Sparkles size={13} className="text-emerald-600 shrink-0" />
                          <span>Alerta preventiva: 0 abandonos de tratamiento este mes.</span>
                        </div>

                        {/* Banner Teaser Expandible */}
                        <button
                          type="button"
                          onClick={() => toggleCardMode("lautaronutricion", "screenshot")}
                          className="w-full p-2 rounded-xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/40 text-left flex items-center justify-between text-[11px] text-slate-600 transition-all cursor-pointer group/peek shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-6 rounded-md overflow-hidden relative border border-slate-200 shrink-0 shadow-xs">
                              <Image
                                src="/lautaronutricion-dashboard.jpg"
                                alt="Miniatura Portal"
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-slate-700 group-hover/peek:text-emerald-700 transition-colors">
                              Ver portal clínico en vivo
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                            <span>Expandir</span>
                            <ChevronRight size={13} className="group-hover/peek:translate-x-0.5 transition-transform" />
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer de Tarjeta */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      setModalProduct(BENTO_PRODUCTS[1]);
                      setModalTab("overview");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>Ver caso clínico y capturas</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link href="/contacto?solucion=lautaronutricion">
                    <span className="text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors">
                      Pedir a medida →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TARJETA 3: PHARMALYZE AI (col-span-5 en desktop) */}
          {/* ----------------------------------------------------------------------- */}
          {(selectedCategory === "all" || selectedCategory === "saas") && (
            <div className="min-w-[86vw] max-w-[88vw] sm:min-w-[500px] sm:max-w-[540px] lg:min-w-0 lg:max-w-none snap-center shrink-0 lg:shrink lg:col-span-5 flex flex-col">
              <div className="stripe-bento-card stripe-gradient-border h-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(217,119,6,0.24)] hover:border-amber-300 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icono con gradiente sutil ámbar */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-orange-500/15 text-amber-600 flex items-center justify-center border border-amber-200/80 shadow-xs group-hover:scale-105 transition-transform">
                        <Pill size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#151A21] tracking-tight">
                            Pharmalyze AI
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                            Próximo SaaS
                          </span>
                          {/* Badge animado Próximamente con ping ámbar */}
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                            </span>
                            Piloto CABA
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setModalProduct(BENTO_PRODUCTS[2]);
                        setModalTab("overview");
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-amber-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0"
                      title="Ver detalles de Pharmalyze AI"
                      aria-label="Abrir detalles de Pharmalyze AI"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-loose mb-5 font-normal">
                    Inteligencia de reposición de stock para farmacias: monitor de vencimientos por lote FEFO y comparativa de droguerías.
                  </p>

                  {/* Micro-UI / Interactive Preview Container */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/95 p-4 mb-6 shadow-2xs font-sans transition-all duration-300">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-2.5 mb-2.5 border-b border-slate-200/80">
                      <span className="flex items-center gap-1.5 font-semibold text-amber-800">
                        <Clock size={13} />{" "}
                        {cardModes["pharmalyze"] === "screenshot"
                          ? "Monitor FEFO en Producción"
                          : "Monitor FEFO Activo"}
                      </span>

                      {/* Pill Switcher */}
                      <div className="flex items-center p-0.5 rounded-lg bg-slate-200/80 text-[10px]">
                        <button
                          type="button"
                          onClick={() => toggleCardMode("pharmalyze", "sim")}
                          className={`px-2 py-0.5 rounded-md font-sans transition-all cursor-pointer flex items-center gap-1 ${
                            cardModes["pharmalyze"] !== "screenshot"
                              ? "bg-white font-bold text-slate-800 shadow-2xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <SlidersHorizontal size={10} />
                          <span>Simulación</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleCardMode("pharmalyze", "screenshot")}
                          className={`px-2 py-0.5 rounded-md font-sans transition-all cursor-pointer flex items-center gap-1 ${
                            cardModes["pharmalyze"] === "screenshot"
                              ? "bg-amber-600 font-bold text-white shadow-2xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          <Eye size={10} />
                          <span>Captura HD</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                        </button>
                      </div>
                    </div>

                    {cardModes["pharmalyze"] === "screenshot" ? (
                      <div
                        className="relative rounded-xl overflow-hidden border border-slate-200 bg-white group/preview cursor-pointer"
                        onClick={() => {
                          setModalProduct(BENTO_PRODUCTS[2]);
                          setModalTab("overview");
                        }}
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                          <ImageWithSkeleton
                            src="/pharmalyze-dashboard.jpg"
                            alt="Pharmalyze AI Dashboard en Vivo"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover/preview:opacity-40 transition-opacity" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                            <span className="font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                              Semáforo de vencimientos y droguerías
                            </span>
                            <span className="bg-amber-600 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 shadow-sm">
                              <span>Inspeccionar</span>
                              <Maximize2 size={11} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {/* Item de medicamento con caducidad inminente */}
                        <div className="p-2.5 rounded-xl bg-white border border-red-200/70 mb-2 flex items-center justify-between text-xs shadow-2xs hover:border-red-300 transition-colors">
                          <div>
                            <div className="font-bold text-slate-800">Insulina NPH 100 UI</div>
                            <div className="text-[10px] font-mono text-slate-500">Lote #L-77312 · Drog. Suizo</div>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                              16 días para vencer
                            </span>
                          </div>
                        </div>

                        {/* Arbitraje de compras */}
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs shadow-2xs hover:border-amber-200 transition-colors mb-3">
                          <div>
                            <div className="font-bold text-slate-800">Amoxicilina 500mg (Reponer)</div>
                            <div className="text-[10px] text-slate-500">Drog. Monroe vs Del Sud</div>
                          </div>
                          <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            -14.2% bonificación
                          </span>
                        </div>

                        {/* Banner Teaser Expandible */}
                        <button
                          type="button"
                          onClick={() => toggleCardMode("pharmalyze", "screenshot")}
                          className="w-full p-2 rounded-xl bg-white border border-slate-200/90 hover:border-amber-300 hover:bg-amber-50/40 text-left flex items-center justify-between text-[11px] text-slate-600 transition-all cursor-pointer group/peek shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-6 rounded-md overflow-hidden relative border border-slate-200 shrink-0 shadow-xs">
                              <Image
                                src="/pharmalyze-dashboard.jpg"
                                alt="Miniatura Dashboard Farmacia"
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-slate-700 group-hover/peek:text-amber-800 transition-colors">
                              Ver monitor FEFO y compras en vivo
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-amber-800 flex items-center gap-1">
                            <span>Expandir</span>
                            <ChevronRight size={13} className="group-hover/peek:translate-x-0.5 transition-transform" />
                          </span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Para quién es - Mini tags */}
                  <div className="mb-4">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold mb-1.5">
                      Pensado para:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 font-medium">
                        Farmacias independientes
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 font-medium">
                        Múltiples droguerías
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 font-medium">
                        Control FEFO
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                        Sobre POS comercial existente
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer de Tarjeta */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      setModalProduct(BENTO_PRODUCTS[2]);
                      setModalTab("overview");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    <span>Ver monitor FEFO y piloto CABA</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link href="/contacto?solucion=pharmalyze">
                    <span className="text-xs font-semibold text-slate-600 hover:text-amber-700 transition-colors">
                      Sumarse al piloto →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TARJETA 4: SISTEMAS A MEDIDA & ARQUITECTURA CLOUD (col-span-7 en desktop) */}
          {/* ----------------------------------------------------------------------- */}
          {(selectedCategory === "all" || selectedCategory === "custom") && (
            <div className="min-w-[86vw] max-w-[88vw] sm:min-w-[500px] sm:max-w-[540px] lg:min-w-0 lg:max-w-none snap-center shrink-0 lg:shrink lg:col-span-7 flex flex-col">
              <div className="stripe-bento-card stripe-gradient-border h-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(79,70,229,0.24)] hover:border-indigo-300 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icono con gradiente índigo */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-indigo-500/10 to-purple-500/15 text-indigo-600 flex items-center justify-center border border-indigo-200/80 shadow-xs group-hover:scale-105 transition-transform">
                        <Code2 size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#151A21] tracking-tight">
                            Sistemas a Medida & APIs
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-800 border border-indigo-200">
                            Ingeniería Dedicada
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            TypeScript Puro
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setModalProduct(BENTO_PRODUCTS[3]);
                        setModalTab("overview");
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-indigo-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0"
                      title="Ver arquitectura técnica"
                      aria-label="Abrir detalles de Sistemas a Medida"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-loose mb-5 font-normal">
                    Desarrollo integral con TypeScript, Next.js y bases de datos relacionales. Código 100% propio sin atarte a licencias mensuales por usuario.
                  </p>

                  {/* Micro-UI: Snippet de Arquitectura y Seguridad PostgreSQL */}
                  <div className="rounded-2xl border border-slate-800 bg-[#0B0F17] p-4 mb-6 shadow-md font-mono text-xs text-slate-300">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-slate-400">schema-core.sql</span>
                      </div>
                      <span className="text-emerald-400 text-[10px]">Auditado RLS</span>
                    </div>

                    <div className="space-y-1 text-[11px] sm:text-xs">
                      <div className="text-slate-500">-- Política estricta de aislamiento de tenant por sucursal</div>
                      <div>
                        <span className="text-purple-400">CREATE POLICY</span>{" "}
                        <span className="text-blue-300">&quot;tenant_isolation&quot;</span>{" "}
                        <span className="text-purple-400">ON</span>{" "}
                        <span className="text-yellow-200">financial_records</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">FOR ALL USING</span> (
                        <span className="text-blue-200">tenant_id</span> ={" "}
                        <span className="text-emerald-300">auth.jwt()</span>-&gt;&gt;
                        <span className="text-amber-300">&apos;clinic_id&apos;</span>
                        );
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                      <span>✓ 99.9% Uptime SLA</span>
                      <span>✓ Cero costos mensuales ocultos</span>
                      <span className="text-blue-400">Next.js 16 + Supabase</span>
                    </div>
                  </div>
                </div>

                {/* Footer de Tarjeta */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      setModalProduct(BENTO_PRODUCTS[3]);
                      setModalTab("specs");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-800 transition-colors cursor-pointer"
                  >
                    <span>Explorar stack técnico y entregables</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link href="/contacto?solucion=desarrollo">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-2xs">
                      Cotizar sistema
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TARJETA 5: AUTOMATIZACIONES & CONECTORES (col-span-6 en desktop) */}
          {/* ----------------------------------------------------------------------- */}
          {(selectedCategory === "all" || selectedCategory === "infra") && (
            <div className="min-w-[86vw] max-w-[88vw] sm:min-w-[500px] sm:max-w-[540px] lg:min-w-0 lg:max-w-none snap-center shrink-0 lg:shrink lg:col-span-6 flex flex-col">
              <div className="stripe-bento-card stripe-gradient-border h-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(8,145,178,0.24)] hover:border-cyan-300 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icono con gradiente cian */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-blue-500/15 text-cyan-600 flex items-center justify-center border border-cyan-200/80 shadow-xs group-hover:scale-105 transition-transform">
                        <Workflow size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#151A21] tracking-tight">
                            Automatización No Invasiva
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-cyan-800 border border-cyan-200">
                            Conectividad
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            Hub Activo
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setModalProduct(BENTO_PRODUCTS[4]);
                        setModalTab("overview");
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-cyan-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0"
                      title="Ver detalles de automatizaciones"
                      aria-label="Abrir detalles de automatizaciones"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-loose mb-5 font-normal">
                    Conectamos tus sistemas de facturación actuales, planillas y WhatsApp Oficial sin obligarte a cambiar de herramientas.
                  </p>

                  {/* Micro-UI: Diagrama de pipeline activo */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/95 p-4 mb-6 shadow-2xs">
                    <div className="text-[11px] font-mono text-slate-500 pb-2 mb-3 border-b border-slate-200/80 flex items-center justify-between">
                      <span>Flujo de Integración en Vivo</span>
                      <span className="text-emerald-700 font-bold">1.2s latencia</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                      <div className="w-full sm:w-auto p-2 rounded-xl bg-white border border-slate-200 text-center font-medium text-slate-700 shadow-2xs">
                        POS / Planilla
                      </div>
                      <ChevronRight size={16} className="text-cyan-600 shrink-0 rotate-90 sm:rotate-0" />
                      <div className="w-full sm:w-auto p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-center font-bold text-emerald-900 shadow-2xs">
                        WhatsApp API
                      </div>
                    </div>

                    <div className="mt-3 text-[11px] text-slate-500 bg-white/70 p-2 rounded-lg border border-slate-100 flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>Zero downtime: el personal sigue usando su interfaz habitual.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      setModalProduct(BENTO_PRODUCTS[4]);
                      setModalTab("overview");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 hover:text-cyan-900 transition-colors cursor-pointer"
                  >
                    <span>Ver conectores disponibles</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link href="/contacto?solucion=automatizacion">
                    <span className="text-xs font-semibold text-slate-600 hover:text-cyan-700 transition-colors">
                      Consultar integración →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TARJETA 6: CONSULTORÍA & DIAGNÓSTICO CON EQUIPO (col-span-6 en desktop) */}
          {/* ----------------------------------------------------------------------- */}
          {(selectedCategory === "all" || selectedCategory === "infra") && (
            <div className="min-w-[86vw] max-w-[88vw] sm:min-w-[500px] sm:max-w-[540px] lg:min-w-0 lg:max-w-none snap-center shrink-0 lg:shrink lg:col-span-6 flex flex-col">
              <div className="stripe-bento-card stripe-gradient-border h-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(30,41,59,0.2)] hover:border-slate-400 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icono con gradiente grafito */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600/20 via-slate-500/10 to-zinc-600/15 text-slate-700 flex items-center justify-center border border-slate-300/80 shadow-xs group-hover:scale-105 transition-transform">
                        <Compass size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#151A21] tracking-tight">
                            Diagnóstico Operativo
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-300">
                            Equipo de Consultoría
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                            </span>
                            Equipo Directo
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setModalProduct(BENTO_PRODUCTS[5]);
                        setModalTab("overview");
                      }}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-slate-800 text-slate-500 group-hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0"
                      title="Ver detalles de consultoría"
                      aria-label="Abrir detalles de consultoría"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-loose mb-5 font-normal">
                    Conversación directa con nuestro equipo de arquitectura y procesos, sin vendedores en el medio. Evaluamos cuellos de botella y retorno práctico de inversión.
                  </p>

                  {/* Micro-UI: Tarjeta de Diagnóstico Rápido */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/95 p-4 mb-6 shadow-2xs space-y-2.5 text-xs">
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" />
                      <span>Auditoría de planillas y fugas de horas administrativas.</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" />
                      <span>Criterio honesto: te decimos si te conviene un SaaS o desarrollo a medida.</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" />
                      <span>Plan priorizado con impacto medible en 48 horas.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <a
                    href="https://wa.me/5491136248967?text=Hola%20equipo%20de%20NAXAD!%20Me%20gustar%C3%ADa%20coordinar%20un%20diagn%C3%B3stico%20operativo%20inicial%20para%20mi%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#2563EB] transition-colors"
                  >
                    <MessageSquare size={13} className="text-[#2563EB]" />
                    <span>WhatsApp directo</span>
                  </a>

                  <Link href="/contacto?solucion=consultoria">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-2xs">
                      Agendar 20 min
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. BANNER DE FILOSOFÍA DE PRODUCTO ESTILO STRIPE */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-[#151A21]">
              ¿Tu rubro necesita algo específico que todavía no existe?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-loose">
              Así trabajamos: si tu industria ya tiene su sistema en el ecosistema, lo adoptás y empezás de inmediato. Si no, lo construimos a tu medida — y si tiene sentido de escala sectorial, se convierte en el próximo SaaS.
            </p>
          </div>

          <Link href="/contacto" className="shrink-0 w-full md:w-auto">
            <button
              type="button"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-sm cursor-pointer"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 4. MODAL DIALOG DEEP-DIVE ESTILO STRIPE (INSPECCIÓN COMPLETA) */}
      {/* ========================================================================= */}
      {modalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in zoom-in-[0.98]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar del Modal */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100">
                  <modalProduct.icon size={18} />
                </div>
                <div>
                  <h3 id="modal-product-title" className="text-lg font-bold text-[#151A21] leading-tight">
                    {modalProduct.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    {modalProduct.urlMock}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${modalProduct.badgeColor}`}>
                  {modalProduct.badge}
                </span>
                <button
                  type="button"
                  onClick={() => setModalProduct(null)}
                  className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Selector de Pestañas Internas del Modal */}
            <div className="flex items-center border-b border-slate-200 px-6 bg-white gap-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setModalTab("overview")}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  modalTab === "overview"
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Visión General & Pantalla
              </button>
              <button
                type="button"
                onClick={() => setModalTab("specs")}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  modalTab === "specs"
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Arquitectura & Stack
              </button>
              <button
                type="button"
                onClick={() => setModalTab("impact")}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  modalTab === "impact"
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Impacto en Negocio & Métricas
              </button>
            </div>

            {/* Contenido scrolleable del modal */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              {modalTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#151A21] mb-2 leading-tight">
                      {modalProduct.headline}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-loose">
                      {modalProduct.fullDesc}
                    </p>
                  </div>

                  {/* Captura de pantalla real si está disponible */}
                  {modalProduct.image && (
                    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm">
                      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="ml-2 font-sans font-medium text-slate-700">Entorno de Producción</span>
                        </div>
                        <span className="text-[11px] text-emerald-600 font-bold">● Activo</span>
                      </div>
                      <ImageWithSkeleton
                        src={modalProduct.image}
                        alt={`${modalProduct.name} Dashboard en vivo`}
                        width={modalProduct.imgWidth || 2048}
                        height={modalProduct.imgHeight || 1200}
                        quality={95}
                        className="w-full h-auto object-cover max-h-96"
                      />
                    </div>
                  )}

                  {/* Lista de Capacidades Clave */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Capacidades operativas incluidas
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {modalProduct.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                        >
                          <CheckCircle2 size={15} className="text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Para quién está pensado (si está disponible) */}
                  {modalProduct.targetAudience && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                      <div className="flex items-center gap-2 mb-3.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 font-mono">
                          {modalProduct.targetAudience.title}
                        </h5>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {modalProduct.targetAudience.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-amber-200/70 text-xs text-slate-800 shadow-2xs"
                          >
                            <CheckCircle2 size={14} className="text-amber-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {modalTab === "specs" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#151A21] mb-2">
                      Especificaciones de Ingeniería y Seguridad
                    </h4>
                    <p className="text-sm text-slate-600 leading-loose">
                      Construido con las mejores prácticas de la industria: TypeScript estricto, bases de datos auditadas con RLS y despliegues en infraestructura global de baja latencia.
                    </p>
                  </div>

                  {/* Highlight de arquitectura */}
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 flex items-start gap-3">
                    <ShieldCheck size={20} className="text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm font-bold text-[#151A21] mb-1">
                        Criterio de Arquitectura
                      </strong>
                      <span>{modalProduct.architectureHighlight}</span>
                    </div>
                  </div>

                  {/* Stack Tecnológico */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Tecnologías y herramientas utilizadas
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {modalProduct.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lista de Capacidades */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Seguridad y Resiliencia de Datos
                    </h5>
                    <p className="text-xs text-slate-600 leading-loose">
                      Copias de seguridad automatizadas diarias, cifrado en reposo y en tránsito (SSL/TLS), y roles de acceso granulares para que cada operador vea únicamente lo que le corresponde.
                    </p>
                  </div>
                </div>
              )}

              {modalTab === "impact" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#151A21] mb-2">
                      Impacto en la Operación y Métricas Reales
                    </h4>
                    <p className="text-sm text-slate-600 leading-loose">
                      El software solo tiene sentido si ahorra tiempo, erradica errores de carga y aporta claridad financiera al final de cada mes.
                    </p>
                  </div>

                  {/* Tarjetas de Métricas */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {modalProduct.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center"
                      >
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] font-mono mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-600 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm font-bold text-emerald-900 mb-1">
                        Garantía de Acompañamiento
                      </strong>
                      <span>
                        No te dejamos con un manual de 80 páginas. Capacitamos a tu personal directamente y ajustamos el sistema sobre la marcha para asegurar una adopción natural.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer con CTAs */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/5491136248967?text=${encodeURIComponent(
                  modalProduct.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:text-[#2563EB] hover:border-blue-300 transition-colors cursor-pointer"
              >
                <MessageSquare size={14} className="text-[#2563EB]" />
                <span>Consultar por WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link href={modalProduct.ctaHref} className="w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setModalProduct(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>{modalProduct.ctaText}</span>
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
