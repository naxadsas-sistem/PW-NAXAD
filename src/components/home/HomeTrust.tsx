import React from "react";
import { Container } from "@/components/ui/Container";
import { Quote, MapPin, ShieldCheck } from "lucide-react";

export function HomeTrust() {
  const metrics = [
    {
      value: "3",
      label: "Sistemas en el ecosistema",
      desc: "Dos en producción, uno en desarrollo activo.",
    },
    {
      value: "31",
      label: "Tablas de base de datos auditadas",
      desc: "20 en DentalDesk + 11 en Pharmalyze AI, con políticas de acceso revisadas.",
    },
    {
      value: "3",
      label: "Rubros resueltos",
      desc: "Clínicas dentales, nutrición y farmacias — mismo método, contextos distintos.",
    },
    {
      value: "CABA",
      label: "Soporte directo",
      desc: "Presencia en Buenos Aires para acompañamiento en Argentina y la región.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <Container>
        {/* Barra de 4 Métricas Reales en Grafito y Azul */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-slate-200">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5 font-mono">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151A21] tracking-tight">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#2563EB]">
                {m.label}
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed pt-0.5">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Declaración del Fundador & Credenciales Reales */}
        <div className="pt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-7 sm:p-10 shadow-sm relative">
            <Quote size={36} className="text-[#2563EB]/30 mb-5" />

            <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-[#151A21] leading-relaxed tracking-tight mb-8">
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600 shrink-0 self-start sm:self-auto">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Seguridad y RLS auditadas</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
