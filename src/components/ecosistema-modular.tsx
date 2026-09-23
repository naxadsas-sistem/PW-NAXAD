'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, BrainCircuit, PackageSearch, Code2, 
  ShieldCheck, Activity, CheckCircle2, Terminal, Database,
  ArrowRight, ExternalLink, PlayCircle, MessageCircle, LucideIcon
} from 'lucide-react';

interface ProductFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Product {
  id: string;
  category: 'saas' | 'ia' | 'infra';
  title: string;
  type: string;
  status: string;
  statusColor: string;
  description: string;
  tags: string[];
  simulationType: 'agenda' | 'nutrition' | 'pharmacy' | 'code';
  ctaPrimary: string;
  ctaPrimaryHref?: string;
  ctaSecondary: string;
  ctaSecondaryHref?: string;
  targets?: string[];
  features: ProductFeature[];
}

// --- DATOS DE LOS PRODUCTOS ---
const products: Product[] = [
  {
    id: 'dentaldesk',
    category: 'saas',
    title: 'DentalDesk',
    type: 'SaaS Clínico',
    status: 'En vivo',
    statusColor: 'bg-emerald-500',
    description: 'Turnos, fichas médicas, caja diaria y briefing de ocupación para consultorios y clínicas odontológicas multi-sede.',
    tags: ['Agenda en Tiempo Real', '20 Tablas RLS'],
    simulationType: 'agenda',
    ctaPrimary: 'Pedir demo clínica',
    ctaPrimaryHref: '/contacto?solucion=dentaldesk&interes=dentaldesk',
    ctaSecondary: 'Hablar por WhatsApp',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20DentalDesk%20y%20su%20arquitectura.',
    features: [
      { icon: Calendar, title: 'Multi-sede', desc: 'Gestión unificada de varias sucursales.' },
      { icon: ShieldCheck, title: 'Seguridad RLS', desc: 'Aislamiento de datos por profesional.' },
      { icon: Activity, title: 'Ocupación 92%', desc: 'Briefing automático de sillones.' }
    ]
  },
  {
    id: 'lautaronutricion',
    category: 'ia',
    title: 'LautaroNutrición',
    type: 'IA Clínica',
    status: 'En vivo',
    statusColor: 'bg-emerald-500',
    description: 'Portal de pacientes con visión computacional por IA: estimación de calorías y macros desde fotos de platos y alertas de retención.',
    tags: ['Visión Multimodal IA', 'Portal Paciente'],
    simulationType: 'nutrition',
    ctaPrimary: 'Pedir desarrollo a medida →',
    ctaPrimaryHref: '/contacto?solucion=lautaronutricion&interes=lautaronutricion',
    ctaSecondary: 'Ver caso clínico',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20Gabriel!%20Vi%20el%20caso%20de%20LautaroNutrici%C3%B3n%20y%20quiero%20consultar%20por%20un%20sistema%20similar.',
    features: [
      { icon: BrainCircuit, title: 'Visión Computacional', desc: 'Reconocimiento de alimentos por foto.' },
      { icon: Activity, title: 'Alertas Preventivas', desc: 'Detección de abandono de tratamiento.' },
      { icon: CheckCircle2, title: 'Adherencia', desc: 'Seguimiento continuo entre consultas.' }
    ]
  },
  {
    id: 'pharmalyze',
    category: 'saas',
    title: 'Pharmalyze AI',
    type: 'Próximo SaaS',
    status: 'Piloto CABA',
    statusColor: 'bg-amber-500',
    description: 'Inteligencia de reposición de stock para farmacias: monitor de vencimientos por lote FEFO y comparativa de droguerías.',
    tags: ['Monitor FEFO Activo', 'Integración POS'],
    simulationType: 'pharmacy',
    targets: ['Farmacias independientes', 'Múltiples droguerías', 'Control FEFO', 'Sobre POS comercial existente'],
    ctaPrimary: 'Sumarse al piloto →',
    ctaPrimaryHref: '/contacto?solucion=pharmalyze&interes=pharmalyze',
    ctaSecondary: 'Hablar por WhatsApp',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20interesa%20sumarme%20al%20piloto%20de%20Pharmalyze%20AI.',
    features: [
      { icon: PackageSearch, title: 'Control FEFO', desc: 'First Expired, First Out automatizado.' },
      { icon: Database, title: 'Comparativa', desc: 'Análisis de bonificaciones entre droguerías.' },
      { icon: ShieldCheck, title: 'Sin reemplazar POS', desc: 'Se integra sobre tu sistema actual.' }
    ]
  },
  {
    id: 'amedida',
    category: 'infra',
    title: 'Sistemas a Medida & APIs',
    type: 'Ingeniería Dedicada',
    status: 'TypeScript Puro',
    statusColor: 'bg-violet-500',
    description: 'Desarrollo integral con TypeScript, Next.js y bases de datos relacionales. Código 100% propio sin atarte a licencias mensuales por usuario.',
    tags: ['Next.js 16 + Supabase', 'Auditado RLS', '99.9% Uptime SLA'],
    simulationType: 'code',
    ctaPrimary: 'Cotizar sistema',
    ctaPrimaryHref: '/contacto?solucion=desarrollo&interes=amedida',
    ctaSecondary: 'Hablar con Gabriel',
    ctaSecondaryHref: 'https://wa.me/5491136248967?text=Hola%20Gabriel!%20Quiero%20cotizar%20un%20sistema%20a%20medida%20para%20mi%20empresa.',
    features: [
      { icon: Code2, title: 'Código Propio', desc: 'Sin licencias mensuales por usuario.' },
      { icon: ShieldCheck, title: 'Tenant Isolation', desc: 'Políticas estrictas a nivel de base de datos.' },
      { icon: Terminal, title: 'Cero costos ocultos', desc: 'Infraestructura escalable y transparente.' }
    ]
  }
];

const filters = [
  { id: 'all', label: 'Todos (6)' },
  { id: 'saas', label: 'SaaS Propios (2)' },
  { id: 'ia', label: 'A Medida & IA (2)' },
  { id: 'infra', label: 'Infraestructura (2)' },
];

// --- COMPONENTE DE SIMULACIÓN (El "Wow" Factor) ---
function SimulationWindow({ type }: { type: string }) {
  if (type === 'agenda') {
    return (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Agenda del Día - Clínica Central</h4>
          <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">En vivo</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-center min-w-[60px]">
              <div className="text-lg font-bold text-white">10:30</div>
              <div className="text-xs text-slate-400">hs</div>
            </div>
            <div className="flex-1 border-l border-slate-700 pl-4">
              <div className="font-semibold text-white">Dra. Valeria Rossi</div>
              <div className="text-sm text-slate-400">Limpieza & Caries</div>
            </div>
            <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full border border-blue-500/20">Confirmado WhatsApp</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-center min-w-[60px]">
              <div className="text-lg font-bold text-white">11:15</div>
              <div className="text-xs text-slate-400">hs</div>
            </div>
            <div className="flex-1 border-l border-slate-700 pl-4">
              <div className="font-semibold text-white">Dr. Martín Gómez</div>
              <div className="text-sm text-slate-400">Implante sector 1.4</div>
            </div>
            <span className="text-xs bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-full border border-amber-500/20">En Sillón 2</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
            <div className="text-xs text-slate-400 mb-1">Cobrado Hoy</div>
            <div className="text-2xl font-bold text-emerald-400">$840.000</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
            <div className="text-xs text-slate-400 mb-1">Ocupación</div>
            <div className="text-2xl font-bold text-blue-400">92%</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'nutrition') {
    return (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Análisis Nutricional por IA</h4>
          <BrainCircuit className="w-5 h-5 text-violet-400" />
        </div>
        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-2xl">🥗</div>
            <div className="flex-1">
              <div className="font-semibold text-white">Almuerzo: Bowl de salmón & quinoa</div>
              <div className="text-3xl font-bold text-violet-400 mt-1">580 kcal</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-700/50">
            <div className="text-center"><div className="text-xs text-slate-400">Prot</div><div className="font-bold text-white">38g</div></div>
            <div className="text-center"><div className="text-xs text-slate-400">Carbs</div><div className="font-bold text-white">42g</div></div>
            <div className="text-center"><div className="text-xs text-slate-400">Grasas</div><div className="font-bold text-white">22g</div></div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-emerald-300">Alerta preventiva</div>
            <div className="text-xs text-emerald-400/70">0 abandonos de tratamiento este mes.</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'pharmacy') {
    return (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Monitor de Stock & Vencimientos</h4>
          <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded border border-amber-500/20">FEFO Activo</span>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-white">Insulina NPH 100 UI</span>
              <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded border border-red-500/20 font-mono">16 días para vencer</span>
            </div>
            <div className="text-sm text-slate-400">Lote #L-77312 · Drog. Suizo</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-white">Amoxicilina 500mg</span>
              <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">Reponer</span>
            </div>
            <div className="text-sm text-slate-400 mb-2">Drog. Monroe vs Del Sud</div>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
              <Activity className="w-4 h-4" /> -14.2% bonificación
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'code') {
    return (
      <div className="p-0 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
          <Terminal className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-mono text-slate-300">schema-core.sql</span>
        </div>
        <div className="p-6 bg-slate-950 font-mono text-sm leading-relaxed overflow-x-auto">
          <div className="text-slate-500 mb-2">-- Política estricta de aislamiento de tenant por sucursal</div>
          <div>
            <span className="text-violet-400">CREATE POLICY</span> <span className="text-emerald-400">"tenant_isolation"</span> <span className="text-slate-300">ON</span> <span className="text-blue-400">financial_records</span>
          </div>
          <div>
            <span className="text-violet-400">FOR ALL</span> <span className="text-violet-400">USING</span> <span className="text-slate-300">(</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">tenant_id</span> <span className="text-violet-400">=</span> <span className="text-amber-400">auth</span><span className="text-slate-300">.</span><span className="text-amber-400">jwt</span><span className="text-slate-300">()</span><span className="text-violet-400">-&gt;&gt;</span><span className="text-emerald-400">'clinic_id'</span>
          </div>
          <div><span className="text-slate-300">);</span></div>
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>RLS Auditado · 99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// --- COMPONENTE PRINCIPAL ---
export function EcosistemaModular() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const selectedProduct = products.find(p => p.id === activeProduct);

  const handleBack = () => {
    setActiveProduct(null);
    if (typeof window !== 'undefined') {
      const el = document.getElementById('ecosistema');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 🌟 VISTA DE MINI-LANDING DE PRODUCTO (CON ANIMACIÓN)
  if (selectedProduct) {
    return (
      <section id="ecosistema" className="py-16 sm:py-20 bg-slate-50 min-h-screen scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          {/* Contenedor principal con animación de entrada suave */}
          <div className="animate-fade-in-up">
            
            {/* Botón Volver */}
            <button 
              onClick={handleBack}
              className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al ecosistema NAXAD
            </button>

            {/* Hero del Producto (con retraso en cascada) */}
            <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{selectedProduct.type}</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  <span className={`w-1.5 h-1.5 rounded-full ${selectedProduct.statusColor} ${selectedProduct.status === 'En vivo' ? 'animate-pulse' : ''}`} />
                  {selectedProduct.status}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">{selectedProduct.title}</h2>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">{selectedProduct.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedProduct.tags.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                    <ShieldCheck className="w-4 h-4" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulación Interactiva (con retraso en cascada) */}
            <div className="mb-12 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-slate-900/20 overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Simulación en Vivo</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
              </div>
              <SimulationWindow type={selectedProduct.simulationType} />
            </div>

            {/* Features Grid (con retraso en cascada) */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {selectedProduct.features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Targets (Solo si existen) */}
            {selectedProduct.targets && selectedProduct.targets.length > 0 && (
              <div className="mb-12 p-6 rounded-xl bg-slate-100 border border-slate-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Pensado para:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProduct.targets.map((target, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {target}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs Finales (con retraso en cascada) */}
            <div className="flex flex-col sm:flex-row gap-4 p-8 rounded-2xl bg-slate-900 text-white items-center justify-between animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div>
                <h3 className="text-xl font-bold mb-1">¿Listo para implementar {selectedProduct.title}?</h3>
                <p className="text-slate-400 text-sm">Hablemos sobre cómo se adapta a tu operación.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  href={selectedProduct.ctaPrimaryHref || `/contacto?solucion=${selectedProduct.id}`}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25"
                >
                  <span>{selectedProduct.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={selectedProduct.ctaSecondaryHref || `https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20${encodeURIComponent(selectedProduct.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{selectedProduct.ctaSecondary}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // VISTA DE CATÁLOGO (GRID)
  return (
    <section id="ecosistema" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Suite Modular · Ecosistema NAXAD</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Soluciones flexibles para cualquier modelo de negocio.
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Adoptá un producto probado listo para operar o construí un sistema a tu medida exacta. 
            Todas nuestras soluciones comparten la misma ingeniería de datos, seguridad PostgreSQL RLS y sincronización en tiempo real.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => {
                setActiveProduct(product.id);
                if (typeof window !== 'undefined') {
                  const el = document.getElementById('ecosistema');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group cursor-pointer relative bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{product.type}</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${product.statusColor} ${product.status === 'En vivo' ? 'animate-pulse' : ''}`} />
                      {product.status}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{product.title}</h4>
                </div>
                <div className="p-2 rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EcosistemaModular;
