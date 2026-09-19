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
  Briefcase,
  Users,
  Stethoscope,
  Store,
  Compass,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Para Quién Trabajamos | Profesionales, Salud y PyMEs | NAXAD",
  description:
    "Soluciones de gestión y tecnología pensadas para clínicas, centros de salud, profesionales y PyMEs que necesitan ordenar su operatoria.",
};

export default function ParaQuienPage() {
  const profiles = [
    {
      icon: Stethoscope,
      title: "Clínicas dentales y centros médicos",
      description:
        "Consultorios y centros de salud que necesitan coordinar turnos de pacientes, disponibilidad de profesionales, historias clínicas e insumos críticos con máxima precisión y resguardo de datos (ej. DentalDesk).",
    },
    {
      icon: Briefcase,
      title: "Profesionales de la salud y nutrición",
      description:
        "Nutricionistas, terapeutas y especialistas que precisan un portal de pacientes interactivo, seguimiento de tratamientos y herramientas de registro automatizado sin perder tiempo administrativo (ej. Reyna Desk).",
    },
    {
      icon: Store,
      title: "Farmacias y comercios especializados",
      description:
        "Negocios con control estricto de lotes, vencimientos y reposición periódica con proveedores, que necesitan capas de inteligencia sobre su punto de venta existente (ej. Pharmalized AI).",
    },
    {
      icon: Users,
      title: "Equipos que necesitan centralizar información",
      description:
        "Organizaciones donde varias personas atienden a los mismos clientes o intervienen en los mismos procesos. Necesitan que cualquier miembro del equipo pueda saber en 10 segundos en qué estado se encuentra cada gestión.",
    },
    {
      icon: Compass,
      title: "PyMEs en crecimiento con procesos propios",
      description:
        "Empresas que aumentaron su volumen de clientes y descubrieron que las planillas de cálculo ya no alcanzan, pero no quieren amoldarse a un ERP genérico y rígido que nadie adopta.",
    },
  ];

  const signals = [
    "La información de tu negocio está repartida entre planillas de cálculo, chats de WhatsApp, cuadernos y correos.",
    "Gran parte de la operación cotidiana depende de que una persona recuerde mentalmente qué tiene que hacer cada día.",
    "Tu equipo repite tareas administrativas manuales de carga de datos una y otra vez en distintos lugares.",
    "Es difícil ver con rapidez qué está pasando en el negocio: qué cobros están pendientes o qué clientes requieren seguimiento.",
    "La tecnología que utilizás hoy genera más fricción y quejas en tu equipo que orden y alivio en la práctica.",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#151A21]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <Container>
          {/* Header de Página */}
          <div className="max-w-3xl mb-14 space-y-4">
            <Badge variant="coral" size="md">
              Para Quién
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#151A21] tracking-tight leading-tight">
              Cuando la gestión necesita una mejor herramienta.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Trabajamos con personas y equipos que reconocen que su operación puede ser más clara, ágil y ordenada.
            </p>
          </div>

          {/* Grilla de Perfiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {profiles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 sm:p-7 bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E76F73] mb-5">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-lg font-bold text-[#151A21] mb-2.5">
                      {p.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bloque de Señales: Puede ser el momento de hablar si... */}
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto space-y-7">
            <div className="space-y-2 text-center sm:text-left">
              <Badge variant="blue" size="sm">
                Diagnóstico Rápido
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151A21]">
                Puede ser el momento de hablar si…
              </h2>
              <p className="text-sm text-slate-600">
                Si te identificás con una o más de estas situaciones cotidianas, una conversación inicial puede ayudarte a ver con claridad qué conviene ordenar:
              </p>
            </div>

            <div className="space-y-2.5">
              {signals.map((sig, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                >
                  <AlertCircle size={16} className="text-[#E76F73] shrink-0 mt-0.5" />
                  <span>{sig}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <span className="text-xs text-slate-600 text-center sm:text-left">
                Evaluemos juntos cómo transformar estos puntos de fricción en procesos ordenados.
              </span>
              <Link href="/contacto">
                <Button variant="primary" size="md" className="group bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm">
                  Contanos tu desafío
                  <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-1" />
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
