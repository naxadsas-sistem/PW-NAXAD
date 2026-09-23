import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import {
  BarChart3,
  Layers,
  Cpu,
  Users,
  TrendingUp,
  GraduationCap,
  MapPin,
  ArrowRight,
  MessageCircle,
  Calendar,
  Sparkles,
  Quote,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Propósito, Visión y Metodología | NAXAD",
  description:
    "Por qué existe Naxad: construimos sistemas de gestión a partir de la operación real de cada empresa. Conocé nuestro propósito, principios y quién está detrás.",
};

const workingPrinciples = [
  {
    num: "01",
    icon: BarChart3,
    title: "Decidimos con datos, no con suposiciones",
    desc: "Antes de proponer, relevamos. Cada recomendación se apoya en cómo opera hoy tu empresa.",
    badgeClass: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    num: "02",
    icon: Layers,
    title: "Vemos la empresa completa",
    desc: "Un problema de caja suele empezar en ventas o en compras. Buscamos el origen, no el síntoma.",
    badgeClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    num: "03",
    icon: Cpu,
    title: "Usamos la tecnología que el problema necesita",
    desc: "Inteligencia artificial y automatización cuando suman. Soluciones simples cuando alcanzan.",
    badgeClass: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    num: "04",
    icon: Users,
    title: "Diseñamos para quien usa el sistema",
    desc: "Si tu equipo no lo adopta, no sirve. Por eso lo construimos con ellos.",
    badgeClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Medimos el antes y el después",
    desc: "Cada proyecto define qué tiene que mejorar: horas, errores, cobros o stock.",
    badgeClass: "bg-amber-50 text-amber-600 border-amber-100",
  },
];

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#151A21]">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION: POR QUÉ EXISTE NAXAD */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Nuestra Historia y Razón de Ser</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Por qué existe <span className="text-blue-600">Naxad</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium mb-6 max-w-3xl mx-auto">
              Naxad nació de un patrón que se repite: empresas que crecen, pero se siguen gestionando con planillas, chats y la memoria de pocas personas. Los sistemas del mercado no se adaptan a cómo trabajan, y desarrollar uno desde cero es caro e incierto.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Por eso construimos sistemas a partir de la operación real de cada cliente. Así nacieron <strong className="font-semibold text-slate-900">DentalDesk</strong> para una clínica odontológica, <strong className="font-semibold text-slate-900">LautaroNutrición</strong> para un consultorio de nutrición y <strong className="font-semibold text-slate-900">Pharmalyze AI</strong> para una farmacia.
            </p>

            {/* Badges de Soluciones Nacidas de la Operación Real */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>DentalDesk · Clínica odontológica</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>LautaroNutrición · Consultorio de nutrición</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Pharmalyze AI · Farmacia</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROPÓSITO Y VISIÓN (Bento Cards Duales) */}
        <section className="py-16 lg:py-24 bg-white border-y border-slate-200/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Tarjeta 1: Nuestro Propósito */}
              <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                    Nuestro Propósito
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                    Que las empresas dejen de depender de planillas y de personas imprescindibles para funcionar.
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    Ayudamos a profesionales y pymes a ordenar su operación con sistemas de gestión construidos a partir de cómo trabajan. Cada sistema tiene un objetivo medible: menos horas en tareas manuales, menos errores y mejores decisiones.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/80 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">✓ Menos horas manuales</span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">✓ Menos errores</span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">✓ Mejores decisiones</span>
                </div>
              </div>

              {/* Tarjeta 2: Hacia Dónde Vamos */}
              <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/70 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                    Hacia Dónde Vamos
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-indigo-600 transition-colors">
                    Que cualquier pyme pueda gestionarse con la claridad de una gran empresa, sin pagar por un software que no se adapta a ella.
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    Cada sistema que construimos para un cliente puede convertirse en la solución de todo su sector. Así nacieron DentalDesk y Pharmalyze AI, y así queremos seguir creciendo: rubro por rubro, problema por problema.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/80">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
                    Rubro por rubro · Problema por problema
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. CÓMO TRABAJAMOS (5 Principios Operativos) */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Nuestra Metodología de Decisión
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-4 mb-4">
                Cómo trabajamos
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Principios concretos que aplicamos en cada diagnóstico, desarrollo e implementación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workingPrinciples.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === workingPrinciples.length - 1;

                return (
                  <div
                    key={item.num}
                    className={`group bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30 flex flex-col justify-between ${
                      isLast ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {item.num}
                        </span>
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${item.badgeClass}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. QUIÉN ESTÁ DETRÁS (Founder Card) */}
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar / Iniciales */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-mono font-bold text-3xl flex items-center justify-center shrink-0 shadow-md">
                  GZ
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
                      Quién está detrás
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      Gabriel Zambrano
                    </h2>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-sm text-slate-500 font-medium">
                      <span className="inline-flex items-center gap-1.5 text-slate-700">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        Fundador · Administración de Empresas (IPCAC)
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {siteConfig.location}
                      </span>
                    </div>
                  </div>

                  {/* Cita Textual de Gabriel Zambrano */}
                  <div className="pt-2">
                    <blockquote className="relative p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-base sm:text-lg italic leading-relaxed">
                      <Quote className="w-6 h-6 text-blue-500 mb-2 opacity-40 not-italic inline-block mr-2" />
                      &ldquo;No vengo de la programación, vengo de la administración de empresas. Por eso no empiezo preguntando qué funciones querés, sino dónde perdés tiempo y plata. La tecnología es la herramienta; tu negocio es el objetivo.&rdquo;
                    </blockquote>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Acompañamiento directo en cada proyecto
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Enfoque en rentabilidad y adopción
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CIERRE / CTA FINAL: ¿Hablamos de tu empresa? */}
        <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              ¿Hablamos de tu empresa?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Contanos cómo trabajás hoy y te decimos qué resolver primero.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Agendar mi diagnóstico sin costo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <a
                href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20conversar%20sobre%20la%20gesti%C3%B3n%20de%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-slate-200 border border-slate-800 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-slate-800 hover:border-slate-700 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
