import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PrincipiosCascada } from "@/components/principios-cascada";
import { CascadaContenido } from "@/components/cascada-contenido";
import { 
  MapPin, 
  GraduationCap,
  Handshake,
  Target,
  Calendar,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Metodología de Decisión y Principios | NAXAD",
  description:
    "Principios concretos que aplicamos en cada diagnóstico, desarrollo e implementación. Equipo de Consultoría y Desarrollo de NAXAD.",
};

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/70 text-[#151A21]">
      <Navbar />

      <main className="flex-1">
        {/* 1. PRINCIPIOS OPERATIVOS */}
        <PrincipiosCascada />

        {/* 2. CASCADA DE CONTENIDO Y CASOS DE ÉXITO (ESTILO STRIPE) */}
        <CascadaContenido />

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
