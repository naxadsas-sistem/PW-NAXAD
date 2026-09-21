import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  Ear,
  Wrench,
  UserCheck,
  Database,
  CheckCircle2,
} from "lucide-react";

export function HomeValue() {
  const pillars = [
    {
      num: "01",
      icon: Ear,
      title: "Escuchamos antes de proponer software",
      desc: "Relevamos cómo opera tu equipo hoy. Identificamos los cuellos de botella reales, las fuentes de error y las tareas que pueden automatizarse sin alterar lo que ya funciona bien.",
      tag: "Diagnóstico profundo",
    },
    {
      num: "02",
      icon: Wrench,
      title: "Criterio de negocio, no solo código",
      desc: "No diseñamos sistemas solo desde la lógica de desarrollo. Cada decisión —qué automatizar, qué dejar manual, cómo medir el resultado— pasa primero por un criterio de gestión de negocio, no solo por lo que es técnicamente posible.",
      tag: "Ingeniería + administración de empresas",
    },
    {
      num: "03",
      icon: UserCheck,
      title: "Adopción real y acompañamiento continuo",
      desc: "El éxito de un sistema no es terminarlo, sino que tu equipo lo use todos los días con naturalidad. Capacitamos a cada persona, medimos el uso y ajustamos la operatoria.",
      tag: "Implementación asistida",
    },
  ];

  return (
    <section className="py-28 sm:py-32 md:py-36 lg:py-40 bg-slate-50 border-b border-slate-200 relative">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="blue" size="sm" className="mb-3">
            El Enfoque NAXAD
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151A21] leading-tight">
            Tecnología con criterio de negocio y foco en las personas.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-loose">
            Las empresas no necesitan más sistemas complejos: necesitan claridad. En NAXAD ordenamos procesos, conectamos datos y desarrollamos sistemas que los equipos adoptan con entusiasmo.
          </p>
        </div>

        {/* 3 Pilares con tarjetas blancas y shadow-sm */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-semibold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      FASE {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2563EB]">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#151A21] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-loose">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 text-xs font-mono text-[#2563EB] flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={14} className="text-[#2563EB]" />
                  {pillar.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagrama Arquitectónico en fondo claro */}
        <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 mb-6 gap-2">
            <div>
              <div className="text-xs font-mono text-[#2563EB] uppercase tracking-wider font-semibold">
                Arquitectura de Gestión Unificada
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#151A21] mt-0.5">
                De herramientas aisladas a un flujo sincronizado
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Sincronización Bidireccional
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-center font-mono">
            {/* Fuentes / Inputs */}
            <div className="space-y-2.5">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-sans font-medium">
                Fuentes & Canales
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>E-commerce (Tiendanube / Woo)</span>
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>Facturación & AFIP (CAE)</span>
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>Cobranzas (Mercado Pago / Bancos)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>WhatsApp Comercial & Pedidos</span>
                <span className="w-2 h-2 rounded-full bg-[#E76F73]" />
              </div>
            </div>

            {/* Núcleo Central: NAXAD Engine */}
            <div className="p-6 rounded-xl bg-blue-50/60 border-2 border-blue-200 text-center">
              <div className="w-11 h-11 mx-auto rounded-lg bg-[#2563EB] text-white flex items-center justify-center mb-3 shadow-sm">
                <Database size={20} />
              </div>
              <h4 className="text-base font-bold text-[#151A21] mb-1">
                Motor de Gestión NAXAD
              </h4>
              <p className="text-xs text-slate-600 leading-loose mb-4">
                Reglas de negocio, validación automática de datos y trazabilidad operativa.
              </p>
              <div className="space-y-1.5 text-[11px] text-slate-700 bg-white p-3 rounded-lg border border-blue-100 text-left">
                <div>✔ Conciliación automática</div>
                <div>✔ Actualización de stock multicanal</div>
                <div>✔ Alertas tempranas de margen</div>
              </div>
            </div>

            {/* Resultados / Output */}
            <div className="space-y-2.5">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-sans font-medium">
                Salidas & Control
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>Tablero Directivo en Tiempo Real</span>
                <span className="text-[#2563EB] font-bold">100% al día</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>Cero Reingreso Manual de Planillas</span>
                <span className="text-emerald-700 font-bold">Ahorro continuo</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>Stock Sincronizado por Sucursal</span>
                <span className="text-[#2563EB] font-bold">Cero desfasaje</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-800">
                <span>Equipo con Roles Claros</span>
                <span className="text-emerald-700 font-bold">Adopción total</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
