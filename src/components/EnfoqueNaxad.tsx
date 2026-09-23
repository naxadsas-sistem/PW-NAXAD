'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Headphones, 
  Code2, 
  Users, 
  ArrowRight, 
  FileText,
  Settings,
  GraduationCap,
  Sparkles,
  Clock
} from 'lucide-react';

const fases = [
  {
    id: 1,
    numero: '01',
    titulo: 'Escuchamos antes de proponer software',
    subtitulo: 'Diagnóstico profundo',
    descripcion: 'Relevamos cómo opera tu equipo hoy. Identificamos los cuellos de botella reales, las fuentes de error y las tareas que pueden automatizarse sin alterar lo que ya funciona bien.',
    icono: Headphones,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    entregable: 'Diagnóstico operativo documentado',
    entregableIcon: FileText,
    duracion: 'Primeros días',
    metricas: [
      { label: 'Entrevistas con el equipo', valor: '100%' },
      { label: 'Procesos mapeados', valor: '3-5' },
      { label: 'Cuellos de botella identificados', valor: '3+' },
    ],
  },
  {
    id: 2,
    numero: '02',
    titulo: 'Criterio de negocio, no solo código',
    subtitulo: 'Ingeniería + administración de empresas',
    descripcion: 'No diseñamos sistemas solo desde la lógica de desarrollo. Cada decisión —qué automatizar, qué dejar manual, cómo medir el resultado— pasa primero por un criterio de gestión de negocio, no solo por lo que es técnicamente posible.',
    icono: Code2,
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    entregable: 'Arquitectura técnica validada',
    entregableIcon: Settings,
    duracion: 'Semanas 2-4',
    metricas: [
      { label: 'Decisiones con criterio de negocio', valor: '100%' },
      { label: 'Métricas de éxito definidas', valor: '5+' },
      { label: 'Sprints de desarrollo', valor: '2-4' },
    ],
  },
  {
    id: 3,
    numero: '03',
    titulo: 'Adopción real y acompañamiento continuo',
    subtitulo: 'Implementación asistida',
    descripcion: 'El éxito de un sistema no es terminarlo, sino que tu equipo lo use todos los días con naturalidad. Capacitamos a cada persona, medimos el uso y ajustamos la operatoria.',
    icono: Users,
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    entregable: 'Equipo capacitado y usando el sistema',
    entregableIcon: GraduationCap,
    duracion: 'Continuo',
    metricas: [
      { label: 'Adopción del equipo', valor: '90%+' },
      { label: 'Capacitaciones realizadas', valor: '100%' },
      { label: 'Soporte post-lanzamiento', valor: '24/7' },
    ],
  },
];

export default function EnfoqueNaxad() {
  const [faseActiva, setFaseActiva] = useState(0);
  const faseActual = fases[faseActiva];
  const IconoEntregable = faseActual.entregableIcon;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden border-b border-slate-200">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 mb-6">
            <Sparkles size={14} />
            <span>El Enfoque NAXAD</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#151A21] tracking-tight mb-4">
            Tecnología con criterio de negocio{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#E76F73] bg-clip-text text-transparent">
              y foco en las personas
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Las empresas no necesitan más sistemas complejos: necesitan claridad. En NAXAD ordenamos procesos, conectamos datos y desarrollamos sistemas que los equipos adoptan con entusiasmo.
          </p>
        </motion.div>

        {/* Layout Principal: Stepper + Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMNA IZQUIERDA: Stepper Interactivo */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {fases.map((fase, idx) => {
                const isActive = faseActiva === idx;
                const Icon = fase.icono;

                return (
                  <motion.button
                    key={fase.id}
                    onClick={() => setFaseActiva(idx)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 group relative overflow-hidden cursor-pointer ${
                      isActive 
                        ? 'bg-white border-transparent shadow-xl shadow-slate-900/5 scale-[1.02]' 
                        : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {/* Indicador lateral de color */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${fase.color} rounded-r-full transition-all duration-500 ${
                      isActive ? 'scale-y-100' : 'scale-y-0'
                    }`} />

                    <div className="flex items-start gap-4">
                      {/* Número de fase */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm transition-all duration-500 ${
                        isActive 
                          ? `bg-gradient-to-br ${fase.color} text-white shadow-lg` 
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {fase.numero}
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon 
                            size={16} 
                            className={`transition-all duration-500 ${
                              isActive ? fase.textColor : 'text-slate-400'
                            }`} 
                          />
                          <h3 className={`text-sm font-bold truncate ${
                            isActive ? 'text-[#151A21]' : 'text-slate-700'
                          }`}>
                            {fase.subtitulo}
                          </h3>
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isActive ? 'text-slate-700' : 'text-slate-500'
                        }`}>
                          {fase.titulo}
                        </p>
                      </div>

                      {/* Indicador de activo */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex-shrink-0"
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${fase.color} flex items-center justify-center`}>
                            <ArrowRight size={12} className="text-white" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}

              {/* Línea de progreso temporal */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-slate-200"
              >
                <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  <span>Inicio</span>
                  <div className="flex-1 mx-3 h-px bg-slate-200 relative">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((faseActiva + 1) / fases.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span>Continuo</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Panel Dinámico */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={faseActual.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="h-full"
              >
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden h-full flex flex-col">
                  
                  {/* Header del Panel */}
                  <div className={`p-8 pb-6 border-b border-slate-100 bg-gradient-to-br ${faseActual.bgColor} to-white`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${faseActual.bgColor} ${faseActual.textColor} text-xs font-semibold border ${faseActual.borderColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        FASE {faseActual.numero}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                        <Clock size={12} />
                        {faseActual.duracion}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151A21] mb-2 leading-tight">
                      {faseActual.titulo}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {faseActual.descripcion}
                    </p>
                  </div>

                  {/* Cuerpo del Panel */}
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Entregable destacado */}
                    <div className={`p-5 rounded-2xl ${faseActual.bgColor} border ${faseActual.borderColor} mb-6`}>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-white shadow-sm">
                          <IconoEntregable size={20} className={faseActual.textColor} />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Entregable concreto
                          </p>
                          <p className={`text-sm font-semibold ${faseActual.textColor}`}>
                            {faseActual.entregable}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Métricas de la fase */}
                    <div className="space-y-4 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Resultados esperados
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {faseActual.metricas.map((metrica, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center"
                          >
                            <div className={`text-2xl font-extrabold bg-gradient-to-r ${faseActual.color} bg-clip-text text-transparent mb-1 font-mono`}>
                              {metrica.valor}
                            </div>
                            <p className="text-[10px] text-slate-600 leading-tight">
                              {metrica.label}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA contextual */}
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500">
                          {faseActiva < fases.length - 1 
                            ? 'Continuá al siguiente paso' 
                            : 'Comenzá tu proyecto con NAXAD'
                          }
                        </p>
                        {faseActiva < fases.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => setFaseActiva(faseActiva + 1)}
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${faseActual.color} text-white text-xs font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer`}
                          >
                            <span>Siguiente fase</span>
                            <ArrowRight size={14} />
                          </button>
                        ) : (
                          <Link
                            href="/contacto"
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${faseActual.color} text-white text-xs font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer`}
                          >
                            <span>Hablemos</span>
                            <ArrowRight size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer de la sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-slate-500">
            Cada fase se adapta a tu contexto. No seguimos un script rígido, seguimos tu operación.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { EnfoqueNaxad };
