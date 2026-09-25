'use client';

import React from 'react';
import { Search, Network, Cpu, Users, TrendingUp } from 'lucide-react';

const principles = [
  {
    number: '01',
    title: 'Diagnóstico',
    subtitle: 'Decidimos con datos, no con suposiciones',
    description: 'Antes de proponer o presupuestar software, relevamos cómo opera hoy tu empresa en la práctica. Cada recomendación técnica se apoya en flujos reales, no en teorías de desarrollo.',
    takeaway: 'Cero líneas de código sin relevar los procesos reales primero.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Visión Integral',
    subtitle: 'Vemos la empresa como un sistema completo',
    description: 'Un problema de caja suele originarse en un desfasaje de stock en depósito o en ventas mal registradas. Buscamos siempre la causa raíz del cuello de botella, no un parche superficial.',
    takeaway: 'Trazabilidad de punta a punta entre áreas operativas.',
    icon: Network,
  },
  {
    number: '03',
    title: 'Tecnología Pragmática',
    subtitle: 'Usamos la tecnología que el problema necesita',
    description: 'Inteligencia artificial y modelos multimodales cuando aportan una ventaja competitiva real. Automatizaciones y bases de datos relacionales simples cuando alcanzan. Cero modas innecesarias.',
    takeaway: 'Soberanía técnica: código 100% propio sin licencias por usuario.',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Adopción Humana',
    subtitle: 'Diseñamos para quien usa el sistema',
    description: 'Si tu equipo rechaza el software o le resulta engorroso en el día a día, la inversión no sirve de nada. Por eso involucramos a los operadores reales desde el primer prototipo.',
    takeaway: 'Capacitación personalizada y 90%+ de adopción asegurada.',
    icon: Users,
  },
  {
    number: '05',
    title: 'Retorno Medible',
    subtitle: 'Medimos el impacto antes y después',
    description: 'Cada proyecto define indicadores objetivos de éxito desde el día cero: horas semanales ahorradas en carga manual, reducción de errores de stock o cobros conciliados a tiempo.',
    takeaway: 'Métricas operativas claras que justifican la inversión.',
    icon: TrendingUp,
  },
];

export function PrincipiosCascada() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32 bg-white overflow-hidden border-b border-slate-200/80">
      {/* Fondo sutil de degradado vertical (La "Cascada" de luz) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>Principios Operativos · Criterio de Decisión</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.14] mb-6">
            No construimos software para acumular funciones.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Diseñamos con un criterio estricto de administración de empresas para resolver cuellos de botella operativos reales.
          </p>
        </div>

        {/* CASCADA DE PRINCIPIOS */}
        <div className="relative">
          {/* Línea conectora vertical (La espina dorsal de la cascada en desktop) */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden lg:block" />
          
          {/* Línea móvil (solo izquierda) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 lg:hidden" />

          <div className="space-y-12 lg:space-y-16">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              // Calculamos el delay para el efecto cascada (0.1s, 0.2s, 0.3s...)
              const delayClass = `delay-${(index + 1) * 100}`;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={principle.number} 
                  className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start animate-fade-in-up ${delayClass}`}
                >
                  {/* Nodo central de la línea (Solo desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center hidden lg:flex top-6">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-xs group-hover:border-blue-500 transition-colors">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  {/* Tarjeta del Principio */}
                  <div className={`flex-1 w-full lg:w-1/2 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                    <div className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-200 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
                      
                      {/* Número de fondo decorativo */}
                      <div className={`absolute -top-4 ${isEven ? '-right-4 lg:-right-auto lg:-left-4' : '-right-4'} text-8xl font-bold text-slate-200/30 select-none pointer-events-none group-hover:text-blue-100/50 transition-colors duration-500 font-mono`}>
                        {principle.number}
                      </div>

                      <div className="relative z-10">
                        {/* Icono móvil */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Principio {principle.number}</span>
                        </div>

                        {/* Título y Subtítulo */}
                        <div className={`flex flex-col ${isEven ? 'lg:items-end' : 'lg:items-start'} mb-4`}>
                          <span className="hidden lg:block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 font-mono">
                            Principio {principle.number}
                          </span>
                          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                            {principle.subtitle}
                          </h3>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                            {principle.title}
                          </span>
                        </div>

                        {/* Descripción */}
                        <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                          {principle.description}
                        </p>

                        {/* La "Cascada" final: El Takeaway destacado */}
                        <div className="relative p-4 rounded-xl bg-blue-50/80 border border-blue-100">
                          <div className={`absolute top-4 ${isEven ? 'left-0 lg:left-auto lg:right-0 rounded-r-full lg:rounded-r-none lg:rounded-l-full' : 'left-0 rounded-r-full'} w-1 h-8 bg-blue-500`} />
                          <p className={`text-sm font-bold text-blue-900 leading-snug ${isEven ? 'pl-6 lg:pl-0 lg:pr-4 lg:text-right' : 'pl-6'}`}>
                            {principle.takeaway}
                          </p>
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
  );
}

export default PrincipiosCascada;
