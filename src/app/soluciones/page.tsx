import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ScanSearch, 
  LayoutDashboard, 
  Code2, 
  Workflow, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soluciones de Gestión y Consultoría Tecnológica | NAXAD",
  description:
    "Diseñamos e implementamos soluciones que acompañan la operación de tu negocio: consultoría, sistemas de gestión, desarrollo a medida, automatización y acompañamiento.",
};

const solutions = [
  {
    id: "consultoria",
    icon: ScanSearch,
    title: "Consultoría tecnológica y diagnóstico operativo",
    shortDesc: "Claridad estratégica antes de invertir en software.",
    problem: "Desconocimiento de fugas de tiempo, herramientas subutilizadas o dudas sobre qué tecnología priorizar.",
    useCase: "Organizaciones con fricción operativa que necesitan un mapa de ruta claro y objetivo.",
    features: [
      "Mapeo de flujos y procesos cotidianos del equipo.",
      "Detección de cuellos de botella e ineficiencias manuales.",
      "Auditoría de herramientas actuales y costos operativos.",
      "Plan de acción priorizado por impacto y retorno práctico."
    ],
    color: "blue"
  },
  {
    id: "saas",
    icon: LayoutDashboard,
    title: "Sistemas de gestión y productos SaaS",
    shortDesc: "Centralización de tu operación en una sola pantalla confiable.",
    problem: "Información dispersa en planillas, agendas superpuestas y cobros desordenados.",
    useCase: "Clínicas, consultorios, farmacias (Naxad Pharmalyze AI) y organizaciones que necesitan decidir con datos reales.",
    features: [
      "Módulos centralizados de clientes, pacientes o cuentas.",
      "Control de agendas, turnos y asignación de tareas en tiempo real.",
      "Seguimiento de presupuestos, cobros y estados de cuenta.",
      "Paneles de indicadores clave (KPIs) para la toma de decisiones."
    ],
    color: "indigo"
  },
  {
    id: "medida",
    icon: Code2,
    title: "Desarrollo de sistemas a medida",
    shortDesc: "Arquitectura pensada 100% para tu ventaja competitiva.",
    problem: "Software genérico que te obliga a cambiar tu forma de trabajar o carece de funciones críticas.",
    useCase: "Negocios con procesos particulares, reglas de negocio específicas o que buscan escalar con propiedad.",
    features: [
      "Arquitectura y UX diseñadas exclusivamente para tu operación.",
      "Interfaces limpias, rápidas y sin elementos de relleno.",
      "Bases de datos seguras, escalables y con propiedad de tus datos.",
      "Panel web accesible y optimizado para cualquier dispositivo."
    ],
    color: "violet"
  },
  {
    id: "automatizacion",
    icon: Workflow,
    title: "Automatización e integración de procesos",
    shortDesc: "Elimina el error humano y las tareas de 'copiar y pegar'.",
    problem: "Personal perdiendo horas diarias pasando datos entre sistemas o enviando mensajes repetitivos.",
    useCase: "Equipos administrativos que buscan multiplicar su productividad sin aumentar la planta de personal.",
    features: [
      "Conexión de formularios web con sistemas de gestión interna (APIs/Webhooks).",
      "Envío automático de confirmaciones y recordatorios a clientes.",
      "Sincronización periódica y bidireccional de bases de datos.",
      "Alertas operativas inmediatas ante eventos críticos del negocio."
    ],
    color: "emerald"
  },
  {
    id: "implementacion",
    icon: Users,
    title: "Implementación, capacitación y acompañamiento",
    shortDesc: "Tecnología que tu equipo realmente adopta y usa.",
    problem: "Miedo a comprar un sistema que genere resistencia, frustración y quede como 'dinero tirado'.",
    useCase: "Toda organización que entiende que el éxito tecnológico depende 100% de la adopción humana.",
    features: [
      "Capacitación personalizada y práctica según el rol de cada usuario.",
      "Puesta en marcha asistida con soporte directo y sin intermediarios.",
      "Ajustes continuos basados en la práctica operativa real.",
      "Documentación clara, directa y sin lenguaje técnico incomprensible."
    ],
    color: "orange"
  }
];

export default function SolucionesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#151A21]">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION ESPECÍFICO */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4" />
              Ecosistema Naxad
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Soluciones tecnológicas para una <span className="text-blue-600">gestión más clara.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Cada organización tiene una forma propia de trabajar. Combinamos consultoría y tecnología para diseñar soluciones que acompañen la operación, en lugar de obligarla a adaptarse.
            </p>
          </div>
        </section>

        {/* 2. GRID DE SOLUCIONES (Estilo Bento / Premium Cards) */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                // Mapeo de colores para un toque dinámico pero profesional
                const colorMap: Record<string, string> = {
                  blue: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white",
                  indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white",
                  violet: "bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white",
                  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white",
                  orange: "bg-orange-50 text-orange-600 border-orange-100 group-hover:bg-orange-600 group-hover:text-white",
                };
                const iconClass = colorMap[solution.color] || colorMap.blue;
                const isLastSingle = index === solutions.length - 1 && solutions.length % 2 !== 0;

                return (
                  <article 
                    key={solution.id}
                    id={solution.id}
                    className={`group relative bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30 flex flex-col ${
                      isLastSingle ? "lg:col-span-2" : ""
                    }`}
                  >
                    {/* Header de Tarjeta */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`w-14 h-14 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${iconClass}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {solution.title}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-1 font-medium">
                          {solution.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Separador sutil */}
                    <div className="w-full h-px bg-slate-100 mb-8 group-hover:bg-blue-100 transition-colors"></div>

                    {/* Detalles en Grid interno */}
                    <div className={`space-y-6 flex-1 ${isLastSingle ? "grid md:grid-cols-3 gap-6 space-y-0" : ""}`}>
                      {/* Problema */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">El problema que resuelve</h3>
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{solution.problem}</p>
                      </div>

                      {/* Caso de uso */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-blue-500 shrink-0" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Ideal para</h3>
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{solution.useCase}</p>
                      </div>

                      {/* Características */}
                      <div className="space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Qué incluye</h3>
                        <ul className="space-y-2.5">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Contextual */}
                    <div className="mt-10 pt-6 border-t border-slate-100">
                      <Link 
                        href={`/contacto?solucion=${solution.id}&interes=${solution.id}`}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-200 group/btn shadow-sm"
                      >
                        Solicitar diagnóstico para esta solución
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. CIERRE / CTA FINAL */}
        <section className="bg-gradient-to-b from-white via-slate-50 to-blue-50/30 text-[#151A21] py-20 lg:py-28 relative overflow-hidden border-t border-slate-200/80">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-[#151A21]">
              ¿No estás seguro de cuál de estas soluciones necesitas?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
              No te pedimos que lo sepas. Nuestro trabajo comienza con un diagnóstico gratuito de 30 minutos para identificar exactamente dónde está la fricción y qué camino es el más rentable para tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contacto"
                className="w-full sm:w-auto bg-[#2563EB] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25 inline-flex items-center justify-center gap-2"
              >
                <span>Agendar diagnóstico gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="https://wa.me/5491136248967?text=Hola%20Gabriel!%20Me%20gustar%C3%ADa%20conversar%20sobre%20las%20soluciones%20tecnol%C3%B3gicas%20de%20NAXAD."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white border border-slate-200/90 text-[#151A21] px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xs inline-flex items-center justify-center gap-2"
              >
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
