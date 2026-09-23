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

        {/* 3. SECCIÓN FUNDADOR: SPOTLIGHT (Autoridad y Conexión) */}
        <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
          {/* Efecto Aurora sutil de fondo */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              
              {/* Columna Izquierda: Identidad Visual */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Avatar / Iniciales con borde brillante */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-4xl font-bold text-white border-4 border-slate-800 shadow-2xl font-mono">
                    GZ
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-1">Gabriel Zambrano</h2>
                <p className="text-blue-400 font-medium mb-4">Fundador</p>
                
                <div className="flex flex-col gap-3 text-slate-400 text-sm">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Administración de Empresas (IPCAC)</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Cita y Valores */}
              <div className="lg:col-span-3">
                <Quote className="w-10 h-10 text-blue-500/50 mb-6" />
                <blockquote className="text-2xl lg:text-3xl font-medium text-slate-100 leading-relaxed mb-8">
                  &ldquo;No vengo de la programación, vengo de la administración de empresas. Por eso no empiezo preguntando qué funciones querés, sino <span className="text-blue-400 font-semibold">dónde perdés tiempo y plata</span>. La tecnología es la herramienta; tu negocio es el objetivo.&rdquo;
                </blockquote>

                {/* Tarjetas de Valor */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-blue-500/50 transition-colors shadow-xs">
                    <Handshake className="w-6 h-6 text-blue-400 mb-3" />
                    <h4 className="font-semibold text-white mb-1">Acompañamiento directo</h4>
                    <p className="text-sm text-slate-400">En cada proyecto, sin intermediarios.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-blue-500/50 transition-colors shadow-xs">
                    <Target className="w-6 h-6 text-blue-400 mb-3" />
                    <h4 className="font-semibold text-white mb-1">Enfoque en rentabilidad</h4>
                    <p className="text-sm text-slate-400">Y adopción real por parte del equipo.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Cierre / Llamada a la Acción de Conversión */}
            <div className="mt-16 pt-12 border-t border-slate-800 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                ¿Hablamos de tu empresa?
              </h3>
              <p className="text-slate-300 text-base mb-8">
                Contanos cómo trabajás hoy y te decimos qué resolver primero.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contacto"
                  className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 overflow-hidden"
                >
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span>Agendar mi diagnóstico sin costo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
                <a
                  href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20conversar%20sobre%20la%20gesti%C3%B3n%20de%20mi%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-800 text-slate-200 border border-slate-700 px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-700 hover:border-slate-600 hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Hablar por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
