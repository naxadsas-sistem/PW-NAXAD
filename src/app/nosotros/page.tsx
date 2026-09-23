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
  Quote, 
  MapPin, 
  GraduationCap,
  Handshake,
  Target,
  Calendar,
  ArrowRight,
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Metodología de Decisión y Principios | NAXAD",
  description:
    "Principios concretos que aplicamos en cada diagnóstico, desarrollo e implementación. Gabriel Zambrano, Fundador de NAXAD.",
};

const principles = [
  {
    number: "01",
    title: "Decidimos con datos, no con suposiciones",
    description: "Antes de proponer, relevamos. Cada recomendación se apoya en cómo opera hoy tu empresa.",
    icon: BarChart3,
    size: "md:col-span-2 md:row-span-2", // Tarjeta grande destacada
  },
  {
    number: "02",
    title: "Vemos la empresa completa",
    description: "Un problema de caja suele empezar en ventas o en compras. Buscamos el origen, no el síntoma.",
    icon: Globe,
    size: "md:col-span-1 md:row-span-1", // Tarjeta superior derecha
  },
  {
    number: "03",
    title: "Usamos la tecnología que el problema necesita",
    description: "Inteligencia artificial y automatización cuando suman. Soluciones simples cuando alcanzan.",
    icon: Cpu,
    size: "md:col-span-1 md:row-span-1", // Tarjeta media derecha
  },
  {
    number: "04",
    title: "Diseñamos para quien usa el sistema",
    description: "Si tu equipo no lo adopta, no sirve. Por eso lo construimos con ellos.",
    icon: Users,
    size: "md:col-span-1 md:row-span-1", // Tarjeta inferior izquierda
  },
  {
    number: "05",
    title: "Medimos el antes y el después",
    description: "Cada proyecto define qué tiene que mejorar: horas, errores, cobros o stock.",
    icon: TrendingUp,
    size: "md:col-span-2 md:row-span-1", // Tarjeta ancha inferior derecha
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#151A21]">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-xs">
              <Target className="w-4 h-4" />
              Nuestra Metodología de Decisión
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Principios concretos que aplicamos en <br className="hidden sm:block" />
              <span className="text-blue-600">cada diagnóstico, desarrollo e implementación.</span>
            </h1>
          </div>
        </section>

        {/* 2. BENTO GRID DE PRINCIPIOS */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.number}
                    className={`group relative bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30 flex flex-col justify-between ${principle.size}`}
                  >
                    {/* Número gigante de fondo estilo editorial / Linear */}
                    <div className="absolute -right-4 -bottom-8 text-[120px] lg:text-[160px] font-bold text-slate-100/50 leading-none select-none pointer-events-none group-hover:text-blue-500/10 transition-colors duration-500">
                      {principle.number}
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                            Principio {principle.number}
                          </span>
                          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                          {principle.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN FUNDADOR: EDITORIAL DE ALTA GAMA */}
        <section className="py-16 sm:py-20 bg-slate-50/50 text-[#151A21] border-t border-b border-slate-200/80 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12 shadow-[0_2px_16px_-4px_rgba(15,23,42,0.04)] relative">
              {/* Header Editorial / Kicker */}
              <div className="flex items-center justify-between gap-4 mb-7 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Criterio de Dirección &middot; Fundador
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>

              {/* Cita Editorial */}
              <div className="relative my-2 sm:my-4 pl-5 sm:pl-7 border-l-2 border-[#2563EB]">
                <blockquote className="font-serif italic text-lg sm:text-xl md:text-[22px] text-slate-800 leading-[1.65] tracking-tight font-normal">
                  &ldquo;No vengo de la programación, vengo de la administración de empresas. Por eso no empiezo preguntando qué funciones querés, sino{" "}
                  <span className="not-italic font-semibold text-[#151A21] underline decoration-[#2563EB]/40 decoration-1 underline-offset-4">
                    dónde perdés tiempo y plata
                  </span>
                  . La tecnología es la herramienta; tu negocio es el objetivo.&rdquo;
                </blockquote>
              </div>

              {/* Perfil del Fundador y Principios de Valor */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Identidad Gabriel */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#151A21] text-white flex items-center justify-center text-xs font-mono font-bold tracking-tight shrink-0 shadow-xs ring-4 ring-slate-100">
                    GZ
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#151A21]">Gabriel Zambrano</h3>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs font-semibold text-[#2563EB]">Fundador</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Administración de Empresas (IPCAC)</span>
                    </div>
                  </div>
                </div>

                {/* Pilares Clave Integrados */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-200/80">
                    <Handshake className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#151A21]">Acompañamiento directo</span>
                      <span className="text-slate-400 mx-1">·</span>
                      <span className="text-slate-500">Sin intermediarios</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-200/80">
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
              <div className="mt-8 pt-7 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
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
                    href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20conversar%20sobre%20la%20gesti%C3%B3n%20de%20mi%20empresa."
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
