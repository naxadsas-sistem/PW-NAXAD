import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { X, Check } from "lucide-react";

export function HomeComparison() {
  const comparisonRows = [
    {
      feature: "Punto de partida",
      generico: "Funciones fijas que tu negocio tiene que aceptar tal cual",
      freelancer: "Empieza de cero cada vez, sin base probada",
      naxad: "Parte de un ecosistema ya construido y en producción",
    },
    {
      feature: "Ajuste a tu operación",
      generico: "Cero — vos te adaptás al software",
      freelancer: "Total, pero sin garantía de calidad ni continuidad",
      naxad: "A medida, sobre una base que ya funcionó en otro rubro similar",
    },
    {
      feature: "Riesgo de abandono",
      generico: "Bajo (la empresa sigue existiendo) pero sin roadmap para vos",
      freelancer: "Alto — si el freelancer desaparece, el sistema queda huérfano",
      naxad: "Bajo — Naxad sostiene y evoluciona lo que construye",
    },
    {
      feature: "Camino a futuro",
      generico: "Ninguno — pagás upgrades o te quedás estancado",
      freelancer: "Ninguno definido — cada cambio se cotiza de cero",
      naxad: "Puede evolucionar de sistema a medida a producto propio (como Pharmalized AI)",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="coral" size="sm" className="mb-3">
            Por qué elegir Naxad
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151A21] leading-tight">
            No es más barato. Es la única opción que no empieza de cero.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Comparado con software genérico o contratar a alguien suelto, así se ve la diferencia real:
          </p>
        </div>

        {/* Tabla Comparativa en Modo Claro */}
        <div className="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 w-1/4">
                    Criterio
                  </th>
                  <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 w-1/4">
                    Software genérico
                  </th>
                  <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 w-1/4">
                    Freelancer suelto
                  </th>
                  <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50/70 border-l border-r border-blue-100 border-t-2 border-t-[#2563EB] w-1/4">
                    <span className="flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      Naxad
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#151A21]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{row.generico}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#151A21] font-medium bg-blue-50/40 border-l border-r border-blue-100">
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{row.naxad}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs font-medium text-slate-600">
            El software genérico te obliga a adaptarte. Un freelancer suelto te obliga a arrancar de cero. Naxad parte de un sistema que ya funciona y lo ajusta al tuyo.
          </div>
        </div>
      </Container>
    </section>
  );
}
