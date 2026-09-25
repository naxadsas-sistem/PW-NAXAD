'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, X, ArrowRight, Check, ShieldCheck, 
  Activity, Calendar, BrainCircuit, PackageSearch, Code2, 
  Terminal, Database, MessageCircle, ExternalLink, PlayCircle,
  Stethoscope, Clock, CheckCircle2, ChevronRight, Server, Lock, Cpu
} from 'lucide-react';

interface Product {
  id: string;
  category: 'saas' | 'ia' | 'infra';
  title: string;
  type: string;
  status: string;
  statusColor: string;
  headline: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  simulationType: 'agenda' | 'nutrition' | 'pharmacy' | 'code';
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  benefits: string[];
  gradientAura: string;
}

const products: Product[] = [
  {
    id: 'dentaldesk',
    category: 'saas',
    title: 'DentalDesk',
    type: 'SaaS Clínico · Multi-sede',
    status: 'En producción activa',
    statusColor: 'bg-emerald-500',
    headline: 'Centralizá pacientes, agendas y liquidaciones odontológicas en un solo software',
    shortDesc: 'Agenda médica en tiempo real, fichas clínicas digitales y recordatorios automáticos por WhatsApp con arquitectura multi-tenant.',
    fullDesc: 'Eliminá planillas desactualizadas, superposiciones de turnos y fugas de cobro. Una plataforma diseñada específicamente para clínicas odontológicas que unifica sucursales y garantiza el secreto médico mediante políticas PostgreSQL RLS.',
    tags: ['Agenda en Tiempo Real', '20 Tablas RLS', 'WhatsApp Cloud API'],
    simulationType: 'agenda',
    ctaPrimary: 'Pedir demo clínica',
    ctaPrimaryHref: '/contacto?solucion=dentaldesk&interes=dentaldesk',
    ctaSecondary: 'Consultar detalles por WhatsApp',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20equipo%20de%20NAXAD!%20Me%20interesa%20conocer%20DentalDesk%20para%20mi%20cl%C3%ADnica%20u%20odontolog%C3%ADa.',
    benefits: [
      'Agenda médica visual con sincronización de sillones y profesionales en tiempo real.',
      'Recordatorios y confirmaciones automáticas de citas vía WhatsApp oficial.',
      'Liquidación automatizada de honorarios por profesional y prestación realizada.',
      'Aislamiento estricto de datos de pacientes con 20 tablas PostgreSQL RLS auditadas.'
    ],
    gradientAura: 'from-blue-600/15 via-indigo-500/10 to-sky-400/20'
  },
  {
    id: 'lautaronutricion',
    category: 'ia',
    title: 'LautaroNutrición',
    type: 'IA Clínica · Visión Multimodal',
    status: 'En vivo en producción',
    statusColor: 'bg-emerald-500',
    headline: 'Automatizá la nutrición clínica con visión computacional y alertas predictivas',
    shortDesc: 'Estimación instantánea de calorías y macronutrientes por foto de plato y detección preventiva de abandono de tratamiento.',
    fullDesc: 'Desarrollado para el consultorio del Dr. Lautaro Reyna. Permite a los pacientes registrar sus comidas con una simple foto, analizada al instante por modelos de visión multimodal, mientras el profesional monitorea la adherencia y recibe alertas tempranas de deserción.',
    tags: ['Visión Multimodal IA', 'Portal Paciente', 'Alertas Preventivas'],
    simulationType: 'nutrition',
    ctaPrimary: 'Pedir desarrollo con IA',
    ctaPrimaryHref: '/contacto?solucion=lautaronutricion&interes=lautaronutricion',
    ctaSecondary: 'Ver caso clínico por WhatsApp',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20equipo%20de%20NAXAD!%20Vi%20el%20caso%20de%20LautaroNutrici%C3%B3n%20y%20quiero%20consultar%20por%20un%20sistema%20similar.',
    benefits: [
      'Reconocimiento fotográfico de alimentos y cálculo instantáneo de calorías y macros.',
      'Alertas predictivas para evitar el abandono de pacientes entre consultas.',
      'Portal interactivo para el paciente con evolución antropométrica en tiempo real.',
      'Plataforma propietaria adaptada al método específico del especialista.'
    ],
    gradientAura: 'from-rose-500/15 via-orange-400/10 to-amber-300/20'
  },
  {
    id: 'pharmalyze',
    category: 'saas',
    title: 'Pharmalyze AI',
    type: 'Próximo SaaS · Piloto CABA',
    status: 'Piloto activo',
    statusColor: 'bg-amber-500',
    headline: 'Inteligencia predictiva de stock y control de vencimientos FEFO para farmacias',
    shortDesc: 'Monitoreo preventivo de lotes farmacéuticos (First Expired, First Out) y comparador inteligente de bonificaciones entre droguerías.',
    fullDesc: 'Se acopla directamente sobre el sistema POS comercial existente de la farmacia. Detecta medicamentos próximos a vencer con 90, 60 y 30 días de anticipación y optimiza los pedidos cruzando bonificaciones y plazos de pago entre Suizo, Monroe, Del Sud y Marcas Propias.',
    tags: ['Monitor FEFO Activo', 'Comparador Droguerías', 'Sobre POS Existente'],
    simulationType: 'pharmacy',
    ctaPrimary: 'Sumarse al piloto en CABA',
    ctaPrimaryHref: '/contacto?solucion=pharmalyze&interes=pharmalyze',
    ctaSecondary: 'Consultar integración con POS',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20equipo%20de%20NAXAD!%20Me%20interesa%20sumarme%20al%20piloto%20de%20Pharmalyze%20AI.',
    benefits: [
      'Monitor de vencimientos por lote FEFO con alertas preventivas automatizadas.',
      'Comparador algorítmico de precios y bonificaciones entre múltiples droguerías.',
      'Integración no invasiva sobre tu sistema POS actual, sin migraciones complejas.',
      'Reducción directa de pérdidas por medicamentos vencidos y desabastecimiento.'
    ],
    gradientAura: 'from-amber-500/15 via-emerald-400/10 to-teal-400/20'
  },
  {
    id: 'amedida',
    category: 'infra',
    title: 'Sistemas a Medida & APIs',
    type: 'Ingeniería Dedicada · TypeScript',
    status: 'Soberanía Técnica',
    statusColor: 'bg-violet-500',
    headline: 'Desarrollo de software a medida con código propio y seguridad PostgreSQL RLS',
    shortDesc: 'Desarrollo integral con TypeScript, Next.js y PostgreSQL. Código 100% propio de tu empresa sin atarte a licencias mensuales por usuario.',
    fullDesc: 'Construimos la herramienta de software exacta que tu operación necesita cuando los programas genéricos del mercado quedan chicos. Arquitectura sólida con aislamiento de datos, trazabilidad completa e integraciones con WhatsApp Cloud API, pasarelas de pago y AFIP.',
    tags: ['Next.js 16 + Supabase', 'Auditado RLS', '99.9% Uptime SLA'],
    simulationType: 'code',
    ctaPrimary: 'Cotizar arquitectura a medida',
    ctaPrimaryHref: '/contacto?solucion=desarrollo&interes=amedida',
    ctaSecondary: 'Hablar con el equipo de ingeniería',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20equipo%20de%20NAXAD!%20Quiero%20cotizar%20un%20sistema%20a%20medida%20para%20mi%20empresa.',
    benefits: [
      'Software 100% de tu propiedad: tu empresa es dueña del código y de sus bases de datos.',
      'Políticas de aislamiento Row Level Security (RLS) auditadas a nivel de base de datos.',
      'Integración fluida con WhatsApp Cloud API, sistemas de facturación y pasarelas.',
      'SLA de disponibilidad del 99.9% y arquitectura cloud escalable sin costos ocultos.'
    ],
    gradientAura: 'from-violet-500/15 via-indigo-500/10 to-slate-800/15'
  }
];

const filters = [
  { id: 'all', label: 'Todos (4)' },
  { id: 'saas', label: 'SaaS Clínico & Farmacia (2)' },
  { id: 'ia', label: 'IA & Visión (1)' },
  { id: 'infra', label: 'A Medida & Infra (1)' },
];

// --- VISTA PREVIA VISUAL DE CADA PRODUCTO PARA LA TARJETA (ESTILO STRIPE) ---
function CardMockupPreview({ id }: { id: string }) {
  if (id === 'dentaldesk') {
    return (
      <div className="w-full max-w-sm rounded-xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-slate-200/80 text-left transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">Centro Odontológico</p>
              <p className="text-[10px] text-slate-400">Belgrano · Sillón 1</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            92% Ocupación
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
            <span className="font-semibold text-slate-700">10:30 hs · Dra. Rossi</span>
            <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">WhatsApp OK</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
            <span className="font-semibold text-slate-700">11:15 hs · Dr. Gómez</span>
            <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">En Sillón 2</span>
          </div>
        </div>
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Facturado hoy</span>
          <span className="font-bold text-slate-900">$840.000</span>
        </div>
      </div>
    );
  }

  if (id === 'lautaronutricion') {
    return (
      <div className="w-full max-w-sm rounded-xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-slate-200/80 text-left transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">Visión Multimodal IA</p>
              <p className="text-[10px] text-slate-400">Dr. Lautaro Reyna</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
            Adherencia 98%
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-xl shrink-0 shadow-xs">
            🥗
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-800 truncate">Bowl de Salmón & Quinoa</p>
            <p className="text-sm font-bold text-rose-600">580 kcal</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[11px] pt-1">
          <div className="p-1.5 rounded bg-slate-50 border border-slate-100"><span className="text-slate-400 block text-[9px]">PROT</span><strong className="text-slate-700">38g</strong></div>
          <div className="p-1.5 rounded bg-slate-50 border border-slate-100"><span className="text-slate-400 block text-[9px]">CARB</span><strong className="text-slate-700">42g</strong></div>
          <div className="p-1.5 rounded bg-slate-50 border border-slate-100"><span className="text-slate-400 block text-[9px]">GRASA</span><strong className="text-slate-700">22g</strong></div>
        </div>
      </div>
    );
  }

  if (id === 'pharmalyze') {
    return (
      <div className="w-full max-w-sm rounded-xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-slate-200/80 text-left transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
              <PackageSearch className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">Monitor FEFO Activo</p>
              <p className="text-[10px] text-slate-400">Control de Lotes & Droguerías</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
            Piloto CABA
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="p-2 rounded-lg bg-red-50/70 border border-red-100 flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-slate-800">Insulina NPH 100 UI</p>
              <p className="text-[10px] text-slate-400">Lote #L-77312 · Suizo</p>
            </div>
            <span className="text-[10px] font-bold text-red-600 bg-red-100/80 px-2 py-0.5 rounded font-mono">16 días</span>
          </div>
          <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-slate-800">Amoxicilina 500mg</p>
              <p className="text-[10px] text-slate-400">Monroe vs Del Sud</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100/80 px-2 py-0.5 rounded">-14.2% bonif.</span>
          </div>
        </div>
      </div>
    );
  }

  // Sistemas a medida
  return (
    <div className="w-full max-w-sm rounded-xl bg-slate-900 text-slate-300 p-4 shadow-xl border border-slate-800 text-left font-mono text-xs transition-transform duration-300 group-hover:scale-[1.02]">
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-slate-400">schema-core.sql</span>
        </div>
        <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
          RLS Auditado
        </span>
      </div>
      <div className="mt-3 space-y-1 text-[11px] leading-relaxed text-slate-400">
        <div><span className="text-violet-400">CREATE POLICY</span> <span className="text-emerald-300">&quot;tenant_isolation&quot;</span></div>
        <div className="pl-2"><span className="text-slate-500">ON</span> <span className="text-blue-300">clinical_records</span></div>
        <div className="pl-2"><span className="text-violet-400">USING</span> (tenant_id = auth.jwt()-&gt;&gt;<span className="text-amber-300">&apos;clinic_id&apos;</span>);</div>
      </div>
      <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
        <span>Código 100% Propio</span>
        <span className="text-blue-400">99.9% Uptime</span>
      </div>
    </div>
  );
}

// --- VENTANA DE SIMULACIÓN INTERACTIVA DE ALTA FIDELIDAD (DENTRO DEL MODAL) ---
function SimulationWindow({ type }: { type: string }) {
  if (type === 'agenda') {
    return (
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Agenda Clínica en Vivo · Sucursal Belgrano</h4>
          <span className="text-xs bg-emerald-500/15 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            En vivo
          </span>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="text-center min-w-[55px]">
              <div className="text-base font-bold text-white">10:30</div>
              <div className="text-[10px] text-slate-400 uppercase">hs</div>
            </div>
            <div className="flex-1 border-l border-slate-700 pl-3.5">
              <div className="font-semibold text-white text-sm">Dra. Valeria Rossi</div>
              <div className="text-xs text-slate-400">Limpieza & Caries · Paciente: Juan Gómez</div>
            </div>
            <span className="text-xs bg-blue-500/15 text-blue-400 px-3 py-1 rounded-full border border-blue-500/25">WhatsApp OK</span>
          </div>
          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="text-center min-w-[55px]">
              <div className="text-base font-bold text-white">11:15</div>
              <div className="text-[10px] text-slate-400 uppercase">hs</div>
            </div>
            <div className="flex-1 border-l border-slate-700 pl-3.5">
              <div className="font-semibold text-white text-sm">Dr. Martín Gómez</div>
              <div className="text-xs text-slate-400">Implante sector 1.4 · Paciente: Laura Méndez</div>
            </div>
            <span className="text-xs bg-amber-500/15 text-amber-400 px-3 py-1 rounded-full border border-amber-500/25">En Sillón 2</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <div className="text-xs text-slate-400 mb-0.5">Cobrado Hoy</div>
            <div className="text-xl font-bold text-emerald-400">$840.000</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <div className="text-xs text-slate-400 mb-0.5">Ocupación Sillones</div>
            <div className="text-xl font-bold text-blue-400">92%</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'nutrition') {
    return (
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Análisis Nutricional por IA Multimodal</h4>
          <BrainCircuit className="w-5 h-5 text-rose-400" />
        </div>
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-3xl shadow-md">🥗</div>
            <div className="flex-1">
              <div className="font-semibold text-white text-base">Almuerzo: Bowl de salmón & quinoa</div>
              <div className="text-2xl font-bold text-rose-400 mt-0.5">580 kcal</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-700/60 text-center">
            <div className="p-2 rounded-lg bg-slate-900/50"><div className="text-[10px] text-slate-400 uppercase">Proteínas</div><div className="font-bold text-white text-sm">38g</div></div>
            <div className="p-2 rounded-lg bg-slate-900/50"><div className="text-[10px] text-slate-400 uppercase">Carbohidratos</div><div className="font-bold text-white text-sm">42g</div></div>
            <div className="p-2 rounded-lg bg-slate-900/50"><div className="text-[10px] text-slate-400 uppercase">Grasas</div><div className="font-bold text-white text-sm">22g</div></div>
          </div>
        </div>
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs font-semibold text-emerald-300">Alerta preventiva de retención</div>
            <div className="text-xs text-emerald-400/80">0 abandonos de tratamiento registrados este mes.</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'pharmacy') {
    return (
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Monitor FEFO & Comparador de Droguerías</h4>
          <span className="text-xs bg-amber-500/15 text-amber-400 px-2.5 py-1 rounded-full border border-amber-500/30">FEFO Activo</span>
        </div>
        <div className="space-y-2.5">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex justify-between items-start mb-1">
              <span className="font-semibold text-white text-sm">Insulina NPH 100 UI</span>
              <span className="text-xs bg-red-500/15 text-red-400 px-2.5 py-0.5 rounded border border-red-500/25 font-mono">16 días para vencer</span>
            </div>
            <div className="text-xs text-slate-400">Lote #L-77312 · Droguería Suizo Argentina</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex justify-between items-start mb-1">
              <span className="font-semibold text-white text-sm">Amoxicilina 500mg</span>
              <span className="text-xs bg-emerald-500/15 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/25 font-mono">-14.2% bonif.</span>
            </div>
            <div className="text-xs text-slate-400">Comparativa Drog. Monroe vs Drog. Del Sud</div>
          </div>
        </div>
      </div>
    );
  }

  // code
  return (
    <div className="p-0 overflow-hidden font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-slate-400" />
          <span className="text-slate-300">schema-core.sql</span>
        </div>
        <span className="text-emerald-400 text-[11px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
          RLS Nativo
        </span>
      </div>
      <div className="p-5 bg-slate-950 leading-relaxed overflow-x-auto text-slate-300">
        <div className="text-slate-500 mb-2">-- Aislamiento estricto de datos con Row Level Security</div>
        <div><span className="text-violet-400">CREATE POLICY</span> <span className="text-emerald-400">&quot;tenant_isolation&quot;</span> <span className="text-slate-300">ON</span> <span className="text-blue-400">financial_records</span></div>
        <div className="pl-4"><span className="text-violet-400">FOR ALL USING</span> (</div>
        <div className="pl-8"><span className="text-blue-400">tenant_id</span> <span className="text-violet-400">=</span> <span className="text-amber-400">auth</span>.<span className="text-amber-400">jwt</span>()-&gt;&gt;<span className="text-emerald-400">&apos;clinic_id&apos;</span></div>
        <div className="pl-4">);</div>
        <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2 text-emerald-400 text-xs">
          <CheckCircle2 className="w-4 h-4" />
          <span>RLS Auditado · 99.9% Uptime SLA en Producción</span>
        </div>
      </div>
    </div>
  );
}

// --- ESPECIFICACIONES TÉCNICAS Y SEGURIDAD RLS (PESTAÑA EN EL MODAL) ---
function ArchitectureSpecsWindow({ id }: { id: string }) {
  if (id === 'dentaldesk') {
    return (
      <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">PostgreSQL 16 · Supabase Core</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              RLS Activo (20 Tablas)
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
              99.9% Uptime SLA
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 text-[11px] leading-relaxed overflow-x-auto text-slate-300">
          <div className="text-slate-500 mb-2">-- Aislamiento estricto multi-clínica en historias clínicas</div>
          <div><span className="text-violet-400">CREATE POLICY</span> <span className="text-emerald-300">&quot;tenant_isolation_clinical_records&quot;</span></div>
          <div className="pl-3"><span className="text-slate-400">ON</span> <span className="text-sky-300">public.clinical_records</span></div>
          <div className="pl-3"><span className="text-violet-400">FOR ALL USING</span> (</div>
          <div className="pl-6"><span className="text-sky-300">tenant_id</span> <span className="text-violet-400">=</span> (<span className="text-amber-300">auth</span>.<span className="text-amber-300">jwt</span>() -&gt;&gt; <span className="text-emerald-300">&apos;clinic_id&apos;</span>)::<span className="text-blue-300">uuid</span></div>
          <div className="pl-3">);</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Cifrado Datos</span>
            <strong className="text-white text-xs">AES-256 / TLS 1.3</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Latencia p95</span>
            <strong className="text-emerald-400 text-xs">&lt; 78ms query</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">WhatsApp Cloud</span>
            <strong className="text-white text-xs">Webhooks v19.0</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Backups</span>
            <strong className="text-blue-400 text-xs">PITR Continuo</strong>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'lautaronutricion') {
    return (
      <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-rose-400" />
            <span className="text-white font-semibold">FastAPI + GPT-4o Multimodal + pgvector</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30">
              Zero Retention Logs
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
              &lt; 1.4s Inferencia
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 text-[11px] leading-relaxed overflow-x-auto text-slate-300">
          <div className="text-slate-500 mb-2"># Pipeline de clasificación nutricional automatizado</div>
          <div><span className="text-violet-400">async def</span> <span className="text-sky-300">analyze_dish</span>(image_payload: <span className="text-amber-300">ImageTensor</span>) -&gt; <span className="text-emerald-300">MacroEstimate</span>:</div>
          <div className="pl-3">embeddings = <span className="text-violet-400">await</span> vector_store.similarity_search(image_payload)</div>
          <div className="pl-3">validated_macros = nutrition_engine.calibrate(embeddings, argenfoods_db)</div>
          <div className="pl-3"><span className="text-violet-400">return</span> validated_macros <span className="text-slate-500"># SLA: 98% concordancia clínica</span></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Modelo Visual</span>
            <strong className="text-white text-xs">GPT-4o Vision</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Base Vectorial</span>
            <strong className="text-rose-400 text-xs">pgvector HNSW</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Tokens de Sesión</span>
            <strong className="text-white text-xs">JWT 15m Rotativo</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Disponibilidad</span>
            <strong className="text-emerald-400 text-xs">99.9% Uptime</strong>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'pharmalyze') {
    return (
      <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-amber-400" />
            <span className="text-white font-semibold">PostgreSQL 16 + Redis Cache + GiST Index</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
              ANMAT Audit-Ready
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              FEFO Optimizer
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 text-[11px] leading-relaxed overflow-x-auto text-slate-300">
          <div className="text-slate-500 mb-2">-- Consulta GiST optimizada: lotes críticos &lt; 90 días</div>
          <div><span className="text-violet-400">SELECT</span> lot_number, exp_date, wholesale_price, discount_pct</div>
          <div className="pl-3"><span className="text-violet-400">FROM</span> pharmacy_inventory</div>
          <div className="pl-3"><span className="text-violet-400">WHERE</span> exp_date &lt;= (<span className="text-sky-300">CURRENT_DATE</span> + <span className="text-amber-300">INTERVAL &apos;90 days&apos;</span>)</div>
          <div className="pl-3"><span className="text-violet-400">ORDER BY</span> exp_date <span className="text-violet-400">ASC</span>, discount_pct <span className="text-violet-400">DESC</span>;</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Indexación</span>
            <strong className="text-white text-xs">GiST + B-Tree</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Latencia Cache</span>
            <strong className="text-emerald-400 text-xs">&lt; 12ms Redis</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Integración ERP</span>
            <strong className="text-white text-xs">EDI / JSON REST</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 block mb-1">Trazabilidad</span>
            <strong className="text-amber-400 text-xs">Log Inmutable</strong>
          </div>
        </div>
      </div>
    );
  }

  // Sistemas a medida
  return (
    <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-emerald-400" />
          <span className="text-white font-semibold">Arquitectura Cloud-Native · Propiedad 100% Cliente</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            Sin Lock-in
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
            99.9% Uptime SLA
          </span>
        </div>
      </div>

      <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 text-[11px] leading-relaxed overflow-x-auto text-slate-300">
        <div className="text-slate-500 mb-2"># Pipeline CI/CD con SAST & Despliegue Zero-Downtime</div>
        <div><span className="text-sky-300">stages</span>: [audit, test, build, deploy_production]</div>
        <div><span className="text-sky-300">security_scan</span>:</div>
        <div className="pl-3">run: naxad-security-audit --strict --rls-check</div>
        <div><span className="text-sky-300">zero_downtime_deploy</span>:</div>
        <div className="pl-3">strategy: blue-green-traffic-shift</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <span className="text-[10px] uppercase text-slate-400 block mb-1">Código Fuente</span>
          <strong className="text-emerald-400 text-xs">Propiedad Total</strong>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <span className="text-[10px] uppercase text-slate-400 block mb-1">Infraestructura</span>
          <strong className="text-white text-xs">AWS / GCP Propio</strong>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <span className="text-[10px] uppercase text-slate-400 block mb-1">Monitoreo</span>
          <strong className="text-white text-xs">24/7 Datadog/Sentry</strong>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <span className="text-[10px] uppercase text-slate-400 block mb-1">Garantía</span>
          <strong className="text-blue-400 text-xs">SLA Contractual</strong>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL DEL ECOSISTEMA ---
export function EcosistemaModular() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [modalTab, setModalTab] = useState<'simulation' | 'specs'>('simulation');

  const handleOpenProduct = (id: string) => {
    setSelectedProductId(id);
    setModalTab('simulation');
  };

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const selectedProduct = products.find(p => p.id === selectedProductId);

  // Bloquear scroll de la página cuando el modal esté abierto
  useEffect(() => {
    if (selectedProductId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProductId]);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProductId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="ecosistema" className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/60 scroll-mt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Encabezado de la Suite Modular */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>Suite Modular · Ecosistema NAXAD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Soluciones operativas listas para implementar.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Adoptá un sistema probado para tu rubro o construí una plataforma a tu medida exacta. 
            Todas nuestras herramientas comparten la misma arquitectura de datos y seguridad PostgreSQL RLS.
          </p>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de Productos (Patrón Stripe de Tarjeta con Previsualización + Expandir [⛶]) */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleOpenProduct(product.id)}
              className="group cursor-pointer relative bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:border-blue-400/40"
            >
              {/* Parte Superior: Kicker, Botón Expandir y Título */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{product.type}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${product.statusColor}`} />
                      {product.status}
                    </span>
                  </div>

                  {/* Botón de Expansión [⛶] Estilo Stripe */}
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenProduct(product.id);
                    }}
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-100/80 hover:bg-blue-50 text-slate-500 hover:text-[#2563EB] transition-colors border border-slate-200/60 shadow-2xs shrink-0 cursor-pointer"
                    aria-label={`Ver detalles de ${product.title}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                  {product.headline}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {product.shortDesc}
                </p>
              </div>

              {/* Parte Inferior: Mockup Visual con Aura Ambiental de Gradientes Fluidos */}
              <div className={`relative w-full rounded-2xl overflow-hidden p-6 sm:p-8 bg-gradient-to-br ${product.gradientAura} border border-slate-200/50 flex items-center justify-center min-h-[200px] sm:min-h-[220px]`}>
                <CardMockupPreview id={product.id} />
              </div>

              {/* Botón táctil en el footer de la card */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Explorar especificaciones y demo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL / BOTTOM SHEET DEEP-DIVE (IDÉNTICO A LA CAPTURA DE STRIPE) --- */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
            
            {/* Backdrop con Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProductId(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Contenedor del Modal / Sheet */}
            <motion.div
              initial={{ y: "100%", opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative z-10 w-full sm:max-w-2xl lg:max-w-3xl max-h-[90vh] sm:max-h-[88vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-y-auto flex flex-col p-6 sm:p-8 lg:p-10 border border-slate-200/80"
            >
              {/* Grab Handle para Mobile */}
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden shrink-0" />

              {/* Header: Cierre y Tipo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{selectedProduct.type}</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedProduct.statusColor}`} />
                    {selectedProduct.status}
                  </span>
                </div>
                
                {/* Botón de Cierre [X] */}
                <button
                  onClick={() => setSelectedProductId(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Título Principal y Subtítulo */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug tracking-tight mb-3">
                {selectedProduct.headline}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {selectedProduct.fullDesc}
              </p>

              {/* Stack de Botones de Conversión Inmediata (Estilo Stripe: Primario Sólido + Secundario Outline) */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href={selectedProduct.ctaPrimaryHref}
                  className="flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer"
                >
                  <span>{selectedProduct.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <a
                  href={selectedProduct.ctaSecondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium py-3.5 px-6 rounded-xl text-sm sm:text-base border border-slate-200 transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{selectedProduct.ctaSecondary}</span>
                </a>
              </div>

              {/* Checklist de 4 Beneficios de Alto Impacto (Checks Circulares Corales Idénticos a Stripe) */}
              <div className="space-y-3.5 mb-8 pb-4 border-b border-slate-100">
                {selectedProduct.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-50 text-rose-500 border border-rose-200/90 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-sm sm:text-base text-slate-700 font-medium leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Selector de Pestañas: Simulación vs Arquitectura */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-4 border border-slate-200/80 w-fit">
                <button
                  type="button"
                  onClick={() => setModalTab('simulation')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    modalTab === 'simulation'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <PlayCircle className={`w-3.5 h-3.5 ${modalTab === 'simulation' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>Simulación en Vivo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab('specs')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    modalTab === 'specs'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Terminal className={`w-3.5 h-3.5 ${modalTab === 'specs' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>Arquitectura & Seguridad RLS</span>
                </button>
              </div>

              {/* Contenedor Dark Mode de Alta Fidelidad */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden mb-6">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/60 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    {modalTab === 'simulation' ? (
                      <>
                        <PlayCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Simulación Operativa en Vivo</span>
                      </>
                    ) : (
                      <>
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Especificaciones Técnicas & Auditoría RLS</span>
                      </>
                    )}
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/60" />
                  </div>
                </div>

                {modalTab === 'simulation' ? (
                  <SimulationWindow type={selectedProduct.simulationType} />
                ) : (
                  <ArchitectureSpecsWindow id={selectedProduct.id} />
                )}
              </div>

              {/* Botón inferior discreto para cerrar */}
              <div className="text-center pt-2">
                <button
                  onClick={() => setSelectedProductId(null)}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  Volver al catálogo de productos
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default EcosistemaModular;
