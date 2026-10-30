import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  BarChart3, 
  Globe, 
  Cpu, 
  Users, 
  TrendingUp, 
  MapPin, 
  GraduationCap,
  Handshake,
  Target,
  Calendar,
  ArrowRight,
  MessageCircle,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Metodología de Decisión y Principios",
  description:
    "Principios concretos que aplicamos en cada diagnóstico, desarrollo e implementación. Equipo de Consultoría y Desarrollo de NAXAD.",
  openGraph: {
    title: "Sobre Nosotros — Metodología y Principios | NAXAD",
    description:
      "Principios concretos que aplicamos en cada diagnóstico, desarrollo e implementación. Conocé al equipo detrás de NAXAD.",
  },
};

const principles = [
  {
    number: "01",
    tag: "01 · DIAGNÓSTICO",
    title: "Decidimos con datos, no con suposiciones",
    description: "Antes de proponer o presupuestar software, relevamos cómo opera hoy tu empresa en la práctica. Cada recomendación técnica se apoya en flujos reales, no en teorías de desarrollo.",
    rule: "Cero líneas de código sin relevar los procesos reales primero.",
    icon: BarChart3,
    span: "md:col-span-3", // Fila superior (1 de 2)
  },
  {
    number: "02",
    tag: "02 · VISIÓN INTEGRAL",
    title: "Vemos la empresa como un sistema completo",
    description: "Un problema de caja suele originarse en un desfasaje de stock en depósito o en ventas mal registradas. Buscamos siempre la causa raíz del cuello de botella, no un parche superficial.",
    rule: "Trazabilidad de punta a punta entre áreas operativas.",
    icon: Globe,
    span: "md:col-span-3", // Fila superior (2 de 2)
  },
  {
    number: "03",
    tag: "03 · TECNOLOGÍA PRAGMÁTICA",
    title: "Usamos la tecnología que el problema necesita",
    description: "Inteligencia artificial y modelos multimodales cuando aportan una ventaja competitiva real. Automatizaciones y bases de datos relacionales simples cuando alcanzan. Cero modas innecesarias.",
    rule: "Soberanía técnica: código 100% propio sin licencias por usuario.",
    icon: Cpu,
    span: "md:col-span-2", // Fila inferior (1 de 3)
  },
  {
    number: "04",
    tag: "04 · ADOPCIÓN HUMANA",
    title: "Diseñamos para quien usa el sistema",
    description: "Si tu equipo rechaza el software o le resulta engorroso en el día a día, la inversión no sirve de nada. Por eso involucramos a los operadores reales desde el primer prototipo.",
    rule: "Capacitación personalizada y 90%+ de adopción asegurada.",
    icon: Users,
    span: "md:col-span-2", // Fila inferior (2 de 3)
  },
  {
    number: "05",
    tag: "05 · RETORNO MEDIBLE",
    title: "Medimos el impacto antes y después",
    description: "Cada proyecto define indicadores objetivos de éxito desde el día cero: horas semanales ahorradas en carga manual, reducción de errores de stock o cobros conciliados a tiempo.",
    rule: "Métricas operativas claras que justifican la inversión.",
    icon: TrendingUp,
    span: "md:col-span-2", // Fila inferior (3 de 3)
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/70 text-[#151A21]">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION: ORDENADO, DIRECTIVO Y CON ESCALA CONSISTENTE */}
        <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-white border-b border-slate-200/80">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            {/* Kicker Editorial Monospace */}
            <div className="inline-flex items-center gap-2 mb-4 text-slate-500 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="font-semibold text-slate-700">Principios Operativos</span>
              <span className="text-slate-300 hidden sm:inline">&middot;</span>
              <span className="text-slate-500 hidden sm:inline">Criterio de Decisión</span>
            </div>

            {/* Titular H1 Proporcional y Equilibrado */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#151A21] tracking-tight leading-[1.14] mb-5">
              Principios concretos que aplicamos en{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#2563EB] via-indigo-600 to-[#2563EB] bg-clip-text text-transparent">
                cada diagnóstico, desarrollo e implementación.
              </span>
            </h1>

            {/* Subtítulo Claro */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              No construimos software para acumular funciones. Diseñamos con un criterio estricto de administración de empresas para resolver cuellos de botella operativos reales.
            </p>
          </div>
        </section>

        {/* 2. GRID DISCIPLINADO DE PRINCIPIOS (2 + 3 SIMÉTRICO Y ORDENADO) */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.number}
                    className={`bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-blue-400/40 ${principle.span}`}
                  >
                    <div>
                      {/* Header de la tarjeta */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-[11px] font-mono font-semibold text-[#2563EB] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100/80">
                          {principle.tag}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-600 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#2563EB]" />
                        </div>
                      </div>

                      {/* Título del Principio */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-2.5">
                        {principle.title}
                      </h3>

                      {/* Descripción */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {principle.description}
                      </p>
                    </div>

                    {/* Regla operativa en el footer */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{principle.rule}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 3. SECCIÓN INSTITUCIONAL: FILOSOFÍA DE DIRECCIÓN OPERATIVA */}
        <section className="py-16 sm:py-20 bg-white text-[#151A21] border-t border-slate-200/80 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-slate-50/60 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xs relative">
              {/* Header Editorial / Kicker */}
              <div className="flex items-center justify-between gap-4 mb-7 pb-5 border-b border-slate-200/70">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Criterio de Decisión &middot; Dirección Operativa
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>

              {/* Cita Editorial */}
              <div className="relative my-2 sm:my-4 pl-5 sm:pl-7 border-l-2 border-[#2563EB]">
                <blockquote className="font-serif italic text-lg sm:text-xl md:text-[22px] text-slate-800 leading-[1.65] tracking-tight font-normal">
                  &ldquo;En NAXAD no partimos de la programación aislada, sino de la administración de empresas y la ingeniería de procesos. Por eso no empezamos preguntando qué funciones te gustan, sino{" "}
                  <span className="not-italic font-semibold text-[#151A21] underline decoration-[#2563EB]/40 decoration-1 underline-offset-4">
                    dónde pierde tiempo y recursos tu operación
                  </span>
                  . La tecnología es la herramienta; la rentabilidad de tu negocio es el objetivo.&rdquo;
                </blockquote>
              </div>

              {/* Perfil Institucional y Principios de Valor */}
              <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Identidad Institucional */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#151A21] text-white flex items-center justify-center text-xs font-mono font-bold tracking-tight shrink-0 shadow-xs ring-4 ring-white">
                    NX
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#151A21]">Dirección de Operaciones & Tecnología</h3>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs font-semibold text-[#2563EB]">NAXAD</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Ingeniería de Procesos & Administración</span>
                    </div>
                  </div>
                </div>

                {/* Pilares Clave Integrados */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80">
                    <Handshake className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#151A21]">Acompañamiento directo</span>
                      <span className="text-slate-400 mx-1">·</span>
                      <span className="text-slate-500">Sin intermediarios</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80">
                    <Target className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#151A21]">Rentabilidad</span>
                      <span className="text-slate-400 mx-1">·</span>
                      <span className="text-slate-500">Adopción real</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Llamada a la Acción de Conversión */}
              <div className="mt-8 pt-7 border-t border-slate-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#151A21] tracking-tight">
                    ¿Hablamos de la gestión de tu empresa?
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Contanos cómo trabajás hoy y te decimos qué resolver primero.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                  <Link
                    href="/contacto"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#2563EB] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Agendar diagnóstico</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                  <a
                    href="https://wa.me/5491136248967?text=Hola%20equipo%20de%20NAXAD!%20Me%20gustar%C3%ADa%20conversar%20sobre%20la%20gesti%C3%B3n%20de%20mi%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-[#151A21] border border-slate-200/90 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-all shadow-2xs"
                    aria-label="Hablar por WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
