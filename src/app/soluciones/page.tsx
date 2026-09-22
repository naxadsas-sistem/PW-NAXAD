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
  Compass,
  LayoutDashboard,
  Code2,
  Workflow,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soluciones de Gestión y Consultoría Tecnológica | NAXAD",
  description:
    "Diseñamos e implementamos soluciones que acompañan la operación de tu negocio: consultoría, sistemas de gestión, desarrollo a medida y automatización.",
};

export default function SolucionesPage() {
  const solutions = [
    {
      id: "consultoria",
      icon: Compass,
      title: "Consultoría tecnológica y diagnóstico operativo",
      problem:
        "Desconocimiento de dónde están las fugas de tiempo, herramientas contratadas que nadie usa o dudas sobre qué tecnología conviene incorporar primero.",
      includes: [
        "Mapeo de flujos y procesos cotidianos del equipo.",
        "Detección de cuellos de botella e ineficiencias de carga manual.",
        "Auditoría de herramientas actuales y costos operativos.",
        "Plan de acción priorizado por impacto y retorno práctico.",
      ],
      usefulFor:
        "Organizaciones que sienten desorden o fricción operativa y necesitan claridad estratégica antes de gastar en software.",
    },
    {
      id: "sistemas",
      icon: LayoutDashboard,
      title: "Sistemas de gestión y productos SaaS",
      problem:
        "Información dispersa en planillas, falta de seguimiento de clientes, cobros desordenados y agendas que se superponen.",
      includes: [
        "Módulos centralizados de clientes, pacientes o cuentas.",
        "Control de agendas, turnos y asignación de tareas.",
        "Seguimiento de presupuestos, cobros y estados de cuenta.",
        "Paneles de indicadores clave para toma de decisiones.",
      ],
      usefulFor:
        "Clínicas, consultorios, farmacias (Naxad Pharmalyzed IA) y organizaciones que necesitan centralizar su operación en una sola pantalla confiable y tomar decisiones con datos reales.",
    },
    {
      id: "desarrollo",
      icon: Code2,
      title: "Desarrollo de sistemas a medida",
      problem:
        "Herramientas comerciales genéricas que obligan a cambiar la forma de trabajar o que tienen 100 funciones inútiles pero les falta la que vos necesitás.",
      includes: [
        "Arquitectura pensada 100% para tu forma de operar.",
        "Interfaces limpias, rápidas y sin elementos de relleno.",
        "Bases de datos seguras y preparadas para escalar.",
        "Panel web accesible desde cualquier dispositivo.",
      ],
      usefulFor:
        "Negocios con procesos particulares, reglas de negocio específicas o que buscan crear una ventaja competitiva propia.",
    },
    {
      id: "automatizacion",
      icon: Workflow,
      title: "Automatización e integración de procesos",
      problem:
        "Personal pasando datos a mano de una planilla a un sistema, mensajes repetitivos de confirmación y falta de conexión entre apps.",
      includes: [
        "Conexión de formularios web con sistemas de gestión interna.",
        "Envío automático de confirmaciones y recordatorios a clientes.",
        "Sincronización periódica de movimientos y bases de datos.",
        "Alertas operativas ante eventos críticos del negocio.",
      ],
      usefulFor:
        "Equipos que pierden horas diarias en tareas de copia y pegue administrativo y quieren eliminar el error humano.",
    },
    {
      id: "implementacion",
      icon: GraduationCap,
      title: "Implementación, capacitación y acompañamiento",
      problem:
        "Miedo a comprar un sistema y que el equipo no lo use, generando frustración, resistencia y dinero tirado a la basura.",
      includes: [
        "Capacitación personalizada según el rol de cada usuario.",
        "Puesta en marcha asistida con soporte directo.",
        "Ajustes continuos sobre la práctica operativa real.",
        "Documentación clara y directa sin lenguaje técnico incomprensible.",
      ],
      usefulFor:
        "Toda organización que entienda que la tecnología solo funciona si las personas la adoptan con naturalidad.",
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
              Nuestras Soluciones
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#151A21] tracking-tight leading-tight">
              Soluciones tecnológicas para una gestión más clara.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Cada organización tiene una forma propia de trabajar. Por eso, combinamos consultoría y tecnología para diseñar soluciones que acompañen la operación, en lugar de obligar a la operación a adaptarse a una herramienta.
            </p>
          </div>

          {/* Listado Detallado de Soluciones */}
          <div className="space-y-6">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <Card
                  key={sol.id}
                  id={sol.id}
                  className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    {/* Columna Izquierda */}
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                          <Icon size={20} />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#151A21]">
                          {sol.title}
                        </h2>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-xs font-mono uppercase text-[#E76F73] font-semibold tracking-wider">
                          Qué problema ayuda a resolver:
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {sol.problem}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-xs font-mono uppercase text-[#2563EB] font-semibold tracking-wider">
                          Para qué situación resulta útil:
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {sol.usefulFor}
                        </p>
                      </div>
                    </div>

                    {/* Columna Derecha */}
                    <div className="lg:w-80 shrink-0 flex flex-col justify-between p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <div>
                        <div className="text-xs font-mono text-[#151A21] font-bold uppercase tracking-wider mb-3">
                          Qué puede incluir:
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {sol.includes.map((inc, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-[#2563EB] shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 mt-5 border-t border-slate-200">
                        <Link href={`/contacto?servicio=${sol.id}`}>
                          <Button variant="primary" size="sm" className="w-full text-xs group bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm">
                            Quiero evaluar esta solución
                            <ArrowRight size={13} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Banner de Cierre */}
          <div className="mt-14 p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-[#151A21]">
              ¿No estás seguro de cuál es la solución indicada para tu negocio?
            </h3>
            <p className="text-sm text-slate-600">
              No te preocupes. Justamente nuestro trabajo inicial consiste en escucharte, analizar tu operatoria y decirte con total honestidad qué conviene hacer.
            </p>
            <div className="pt-2">
              <Link href="/contacto">
                <Button variant="primary" size="md" className="bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm">
                  Coordinar conversación de diagnóstico
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
