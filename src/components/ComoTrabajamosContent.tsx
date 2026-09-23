'use client';

import React, { useState } from "react";
import { 
  Search, 
  Map, 
  Code2, 
  Headphones, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Users, 
  ArrowRight,
  Quote
} from "lucide-react";
import Link from "next/link";

const phases = [
  {
    number: "01",
    title: "Descubrimiento y relevamiento",
    subtitle: "Escuchamos la realidad de tu operación cotidiana.",
    icon: Search,
    objective: "Comprender en profundidad cómo trabaja tu equipo, qué herramientas utilizan hoy y dónde están las frustraciones.",
    activities: [
      "Entrevistas con quienes ejecutan las tareas.",
      "Revisión de planillas, documentos y sistemas en uso.",
      "Mapeo de flujos de atención y procesos de cobro."
    ],
    deliverable: "Mapa de situación operativa y resumen de oportunidades.",
    duration: "Primeros días tras la sesión inicial.",
    yourCommitment: "30 minutos de tu tiempo para una conversación honesta."
  },
  {
    number: "02",
    title: "Diagnóstico y camino estratégico",
    subtitle: "Evaluamos si adoptás un SaaS existente o construimos a medida.",
    icon: Map,
    objective: "Identificar cuellos de botella críticos y definir la hoja de ruta técnica más eficiente.",
    activities: [
      "Análisis de impacto vs. esfuerzo de cada mejora.",
      "Definición de qué conviene ordenar antes de automatizar.",
      "Evaluación de base técnica (DentalDesk, Pharmalyze AI o nuevo desarrollo)."
    ],
    deliverable: "Diagnóstico claro con hoja de ruta y especificación funcional.",
    duration: "Presentación de la propuesta dentro de la primera semana.",
    yourCommitment: "Leer la propuesta y tomar la decisión."
  },
  {
    number: "03",
    title: "Configuración o desarrollo ágil",
    subtitle: "Construimos sobre bases técnicas probadas en producción.",
    icon: Code2,
    objective: "Poner en funcionamiento herramientas claras, seguras y sin funciones superfluas.",
    activities: [
      "Configuración del SaaS o desarrollo del sistema a medida.",
      "Migración ordenada de planillas y datos existentes.",
      "Integración de automatizaciones y canales de comunicación.",
      "Pruebas con usuarios clave antes del lanzamiento general."
    ],
    deliverable: "Sistema operativo funcionando en producción, no una maqueta.",
    duration: "Semanas, no meses, gracias a la arquitectura modular.",
    yourCommitment: "Que alguien de tu equipo pruebe los avances y nos diga qué no cierra."
  },
  {
    number: "04",
    title: "Acompañamiento y soporte continuo",
    subtitle: "Garantizamos la adopción real de la tecnología.",
    icon: Headphones,
    objective: "Asegurar que el equipo utilice la herramienta con total confianza y realizar ajustes finos.",
    activities: [
      "Capacitaciones prácticas según la función de cada usuario.",
      "Canal de soporte y consultas directas en Buenos Aires.",
      "Seguimiento periódico de indicadores de uso y rendimiento.",
      "Evolución del sistema y nuevas funciones a medida que crecés."
    ],
    deliverable: "Equipo autónomo operando con fluidez y soporte técnico sostenido.",
    duration: "Acompañamiento continuo y revisiones periódicas.",
    yourCommitment: "Un par de horas de capacitación inicial."
  }
];

export default function ComoTrabajamosContent() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <main className="flex-1 bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-xs">
            <Clock className="w-4 h-4" />
            Nuestra Metodología
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Primero entendemos. <br className="hidden sm:block" />
            <span className="text-blue-600">Después construimos.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Una solución útil no comienza con una herramienta; comienza con una conversación sobre cómo funciona realmente tu organización.
          </p>
        </div>
      </section>

      {/* 2. TIMELINE INTERACTIVA */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative">
            {/* Línea conectora vertical (visible solo en desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isEven = index % 2 === 0;

                return (
                  <div 
                    key={phase.number}
                    className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                    onMouseEnter={() => setActivePhase(index)}
                    onMouseLeave={() => setActivePhase(null)}
                  >
                    {/* Nodo central de la línea de tiempo */}
                    <div className="absolute left-1/2 -translate-x-1/2 items-center justify-center hidden lg:flex top-8 z-10">
                      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                        activePhase === index 
                          ? 'bg-blue-600 border-blue-100 shadow-lg shadow-blue-600/30 scale-110' 
                          : 'bg-white border-slate-200 shadow-sm'
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${
                          activePhase === index ? 'text-white' : 'text-slate-400'
                        }`} />
                      </div>
                    </div>

                    {/* Tarjeta de Contenido */}
                    <div className={`flex-1 w-full lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className={`group relative bg-white rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30 ${
                        activePhase === index ? 'border-blue-500/30 shadow-xl shadow-slate-200/50' : 'border-slate-200'
                      }`}>
                        
                        {/* Icono móvil */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                            activePhase === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-bold text-slate-400 tracking-wider">FASE {phase.number}</span>
                        </div>

                        {/* Número de fase desktop */}
                        <div className="hidden lg:block text-xs font-bold text-slate-400 tracking-wider mb-2 font-mono">
                          FASE {phase.number}
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {phase.title}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-6 font-medium">
                          {phase.subtitle}
                        </p>

                        <div className="space-y-4">
                          {/* Objetivo */}
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Objetivo</h3>
                            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{phase.objective}</p>
                          </div>

                          {/* Actividades */}
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Actividades clave</h3>
                            <ul className="space-y-2">
                              {phase.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Entregable y Duración */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 mt-4">
                            <div className="flex items-start gap-2.5">
                              <FileText className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase">Entregable</p>
                                <p className="text-sm text-slate-700 font-medium">{phase.deliverable}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase">Duración</p>
                                <p className="text-sm text-slate-700 font-medium">{phase.duration}</p>
                              </div>
                            </div>
                          </div>

                          {/* El "Hack" de UX: Lo que ponés vos */}
                          <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100/90 flex items-start gap-3">
                            <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Lo que ponés vos</p>
                              <p className="text-sm text-blue-950 font-medium leading-snug">{phase.yourCommitment}</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    
                    {/* Espacio vacío para el layout alternado en desktop */}
                    <div className="hidden lg:block flex-1 w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CIERRE DE CONFIANZA (Founder Quote) */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-60" />
          <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
            &ldquo;Cada proyecto puede tener un alcance distinto, pero el criterio es siempre el mismo: <span className="text-blue-400 font-semibold">generar mejoras aplicables y sostenibles.</span>&rdquo;
          </blockquote>
          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            No forzamos etapas burocráticas innecesarias. Adaptamos la profundidad del proceso a la realidad y urgencia de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contacto"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 inline-flex items-center justify-center gap-2 group"
            >
              <span>Coordinar conversación inicial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20conversar%20sobre%20c%C3%B3mo%20trabajan%20en%20NAXAD."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border border-slate-700 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-slate-800 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
