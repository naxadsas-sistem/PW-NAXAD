import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Ear,
  Search,
  PenTool,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Trabajamos | Metodología de Gestión y Tecnología | NAXAD",
  description:
    "Primero entendemos. Después construimos. Conocé nuestra metodología para ordenar y digitalizar tu operación.",
};

export default function ComoTrabajamosPage() {
  const phases = [
    {
      num: "01",
      icon: Ear,
      title: "Descubrimiento y relevamiento",
      subtitle: "Escuchamos la realidad de tu operación cotidiana",
      objective:
        "Comprender en profundidad cómo trabaja tu equipo, qué herramientas utilizan hoy, qué tareas les consumen más tiempo y dónde están las principales frustraciones.",
      activities: [
        "Entrevistas individuales o grupales con quienes ejecutan las tareas.",
        "Revisión de planillas, documentos, mensajes y sistemas en uso.",
        "Mapeo general de clientes, flujos de atención y procesos de cobro.",
      ],
      deliverable:
        "Mapa de situación operativa y resumen de oportunidades de mejora detectadas.",
      duration:
        "Primeros días de trabajo conjunto tras la sesión inicial.",
    },
    {
      num: "02",
      icon: Search,
      title: "Diagnóstico y camino estratégico",
      subtitle: "Evaluamos si adoptás un SaaS existente o construimos a medida",
      objective:
        "Identificar los cuellos de botella críticos y definir si tu rubro ya cuenta con un sistema en nuestro ecosistema o si conviene desarrollar una solución propia.",
      activities: [
        "Análisis de impacto vs. esfuerzo de cada oportunidad de mejora.",
        "Definición de qué conviene ordenar antes de automatizar.",
        "Evaluación de base técnica (DentalDesk, Reyna Desk, Pharmalized AI o nuevo desarrollo).",
      ],
      deliverable:
        "Diagnóstico claro con hoja de ruta y especificación funcional.",
      duration:
        "Presentación de la propuesta dentro de la primera semana.",
    },
    {
      num: "03",
      icon: PenTool,
      title: "Configuración o desarrollo ágil",
      subtitle: "Construimos sobre bases técnicas probadas en producción",
      objective:
        "Poner en funcionamiento herramientas claras, seguras y sin funciones superfluas, adaptadas al flujo de trabajo real de tu equipo.",
      activities: [
        "Configuración del SaaS o desarrollo del sistema de gestión.",
        "Migración ordenada de planillas y datos existentes.",
        "Integración de automatizaciones y canales de comunicación.",
        "Pruebas con usuarios clave antes del lanzamiento general.",
      ],
      deliverable:
        "Sistema operativo funcionando en producción, no una maqueta.",
      duration:
        "Semanas, no meses, gracias a la arquitectura modular existente.",
    },
    {
      num: "04",
      icon: Repeat,
      title: "Acompañamiento y soporte continuo",
      subtitle: "Garantizamos la adopción real de la tecnología",
      objective:
        "Asegurar que el equipo utilice la herramienta con total confianza, disipar dudas sobre la marcha y realizar ajustes finos sobre la práctica cotidiana.",
      activities: [
        "Capacitaciones prácticas para cada persona según su función.",
        "Canal de soporte y consultas directas en Buenos Aires.",
        "Seguimiento periódico de indicadores de uso y rendimiento.",
        "Evolución del sistema y nuevas funciones a medida que crecés.",
      ],
      deliverable:
        "Equipo autónomo operando con fluidez y soporte técnico sostenido.",
      duration:
        "Acompañamiento continuo y revisiones periódicas de evolución.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#151A21]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container>
          {/* Header de Página */}
          <div className="max-w-3xl mb-14 space-y-4">
            <Badge variant="blue" size="md">
              Nuestra Metodología
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#151A21] tracking-tight leading-tight">
              Primero entendemos. Después construimos.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Una solución útil no comienza con una herramienta; comienza con una conversación sobre cómo funciona realmente tu organización.
            </p>
          </div>

          {/* 4 Fases Detalladas */}
          <div className="space-y-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <Card
                  key={phase.num}
                  className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    {/* Info Central */}
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                          FASE {phase.num}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2563EB]">
                          <Icon size={16} />
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#151A21]">
                          {phase.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-[#2563EB] mt-0.5">
                          {phase.subtitle}
                        </p>
                      </div>

                      <div className="space-y-1 pt-1">
                        <span className="text-xs font-mono uppercase text-[#E76F73] font-semibold tracking-wider">
                          Objetivo:
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {phase.objective}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-xs font-mono uppercase text-[#151A21] font-semibold tracking-wider">
                          Actividades principales:
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                          {phase.activities.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-[#2563EB] shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Entregable & Duración */}
                    <div className="lg:w-80 shrink-0 flex flex-col justify-between p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-[#151A21] font-bold uppercase tracking-wider">
                          Entregable esperado:
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {phase.deliverable}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200 space-y-1.5">
                        <div className="text-xs font-mono text-[#2563EB] font-semibold flex items-center gap-1.5">
                          <Clock size={13} />
                          Duración orientativa:
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {phase.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Cierre Institucional & CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-5">
            <h3 className="text-xl font-bold text-[#151A21]">
              &ldquo;Cada proyecto puede tener un alcance distinto, pero el criterio es siempre el mismo: generar mejoras aplicables y sostenibles.&rdquo;
            </h3>
            <p className="text-sm text-slate-600">
              No forzamos etapas burocráticas innecesarias. Adaptamos la profundidad del proceso a la realidad y urgencia de tu negocio.
            </p>
            <div className="pt-2">
              <Link href="/contacto">
                <Button variant="primary" size="lg" className="group bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm">
                  Coordiná una conversación inicial
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
