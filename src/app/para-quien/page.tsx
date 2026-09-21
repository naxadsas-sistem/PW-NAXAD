import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RubrosShowcase } from "@/components/RubrosShowcase";
import {
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Para Quién Trabajamos | Clínicas, Nutrición, Farmacias y PyMEs | NAXAD",
  description:
    "Soluciones de gestión y tecnología pensadas para clínicas, centros de salud, profesionales y PyMEs que necesitan ordenar su operatoria.",
};

export default function ParaQuienPage() {
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

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        {/* Sección Interactiva de Rubros con Dinamismo Premium */}
        <RubrosShowcase />

        <Container className="mt-8 sm:mt-12">
          {/* Bloque de Señales: Puede ser el momento de hablar si... */}
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto space-y-7 shadow-xs">
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
