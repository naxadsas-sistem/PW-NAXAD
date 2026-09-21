import React from "react";
import { Container } from "@/components/ui/Container";
import { Quote, MapPin, ShieldCheck } from "lucide-react";
import { StatsCommandCenter } from "./StatsCommandCenter";

export function HomeTrust() {
  return (
    <section className="bg-white border-b border-slate-200 overflow-hidden">
      {/* 1. Bento Grid con Contadores Animados */}
      <StatsCommandCenter />

      {/* 2. Declaración del Fundador & Credenciales Reales */}
      <div className="pb-24 sm:pb-28 md:pb-32 bg-gradient-to-b from-white to-slate-50/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm relative hover:shadow-md transition-shadow">
              <Quote size={36} className="text-[#2563EB]/30 mb-5" />

              <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-[#151A21] leading-loose tracking-tight mb-8">
                &ldquo;No vengo de la ingeniería de software, vengo de la gestión. Dirijo el desarrollo con inteligencia artificial y modelos de lenguaje, pero cada decisión de qué construir y cómo medirlo pasa primero por un criterio de administración de empresas — no por lo que es técnicamente posible.&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <div>
                  <div className="font-bold text-[#151A21] text-base">
                    Gabriel Zambrano
                  </div>
                  <div className="text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                    <span>Fundador de Naxad</span>
                    <span className="hidden sm:inline text-slate-300">·</span>
                    <span>Administración de Empresas (IPCAC)</span>
                    <span className="hidden sm:inline text-slate-300">·</span>
                    <span>Desarrollo dirigido con IA y LLMs</span>
                    <span className="hidden sm:inline text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-[#2563EB] font-medium">
                      <MapPin size={12} /> Buenos Aires, Argentina
                    </span>
                  </div>
                </div>

                {/* Badge de Seguridad y Auditoría */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 shrink-0 self-start sm:self-auto">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Seguridad y RLS auditadas</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
