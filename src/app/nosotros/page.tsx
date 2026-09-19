import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import {
  Ear,
  ShieldCheck,
  Cpu,
  UserCheck,
  Layers,
  MapPin,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export function generateMetadata() {
  return {
    title: "Sobre Nosotros — NAXAD",
    description:
      "Conocé la historia y los valores de NAXAD. Fundada por Gabriel Zambrano en Buenos Aires, combinando criterio de negocio y desarrollo dirigido con IA.",
  };
}

export default function NosotrosPage() {
  const values = [
    {
      num: "01",
      icon: Ear,
      title: "Escucha activa antes que código",
      desc: "No imponemos recetas universales. Relevamos cómo trabaja tu equipo hoy para entender qué tareas generan cuellos de botella y qué herramientas realmente aportan valor.",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Honestidad operativa",
      desc: "Si tu necesidad se resuelve con un producto que ya existe en el ecosistema, te recomendamos adoptarlo. Si requiere desarrollo a medida, te decimos exactamente qué alcance tiene.",
    },
    {
      num: "03",
      icon: Cpu,
      title: "Criterio de negocio",
      desc: "Dirigimos el desarrollo con modelos de lenguaje e inteligencia artificial, pero la definición de qué automatizar siempre responde a la lógica de gestión de empresas, no a la moda técnica.",
    },
    {
      num: "04",
      icon: UserCheck,
      title: "Acompañar la adopción",
      desc: "Un sistema nuevo genera dudas. Estamos presentes capacitando al personal y ajustando la interfaz para que el cambio sea una mejora concreta y sin rechazo.",
    },
    {
      num: "05",
      icon: Layers,
      title: "Construir sobre bases probadas",
      desc: "No arrancamos de cero cada vez. Partimos de una base arquitectónica robusta y segura (como las 20 tablas auditadas de DentalDesk) para garantizar estabilidad y rapidez.",
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
              Sobre Nosotros
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#151A21] tracking-tight leading-tight">
              SaaS y sistemas creados desde la realidad de la gestión.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              NAXAD nace con una convicción clara: las empresas no necesitan más software complejo que nadie usa. Necesitan herramientas claras, prácticas y adaptadas a su forma real de trabajar.
            </p>
          </div>

          {/* Bloque del Fundador */}
          <div className="mb-20">
            <Card className="p-8 sm:p-12 bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Iniciales / Identidad */}
                <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-2xl font-mono font-bold text-[#2563EB] shrink-0 shadow-sm">
                  GZ
                </div>

                <div className="space-y-4 text-center md:text-left">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase text-[#E76F73] font-bold tracking-wider">
                      Fundador de Naxad
                    </span>
                    <h2 className="text-2xl font-bold text-[#151A21]">
                      {siteConfig.founder}
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-[#2563EB] font-medium">
                        <GraduationCap size={14} /> Administración de Empresas (IPCAC)
                      </span>
                      <span className="hidden sm:inline text-slate-300">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-slate-400" />
                        <span>{siteConfig.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Gabriel Zambrano dirige el desarrollo de sistemas y productos propios con inteligencia artificial y modelos de lenguaje. No proviene de la ingeniería de software tradicional, sino de la administración de empresas: por eso, cada decisión de arquitectura y automatización responde primero a un criterio de rentabilidad, claridad y adopción del equipo humano.
                  </p>

                  <div className="pt-2 text-xs font-mono text-[#2563EB] flex items-center justify-center md:justify-start gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-[#2563EB]" />
                    <span>Acompañamiento directo en cada proyecto del ecosistema</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bloque de Valores */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="text-center sm:text-left space-y-2">
              <Badge variant="coral" size="sm">
                Nuestros Principios
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151A21]">
                Los valores que guían el ecosistema
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <Card
                    key={val.num}
                    className="p-6 bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {val.num}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2563EB]">
                          <Icon size={16} />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-[#151A21] mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA de Cierre */}
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-[#151A21]">
              ¿Querés conversar sobre la gestión de tu organización?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Coordinemos una llamada inicial sin compromiso para conocer tus procesos y evaluar si DentalDesk, LautaroNutrición, Pharmalyze AI o un sistema a medida tienen sentido para vos.
            </p>
            <div>
              <Link href="/contacto">
                <Button variant="primary" size="lg" className="group bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm">
                  Contanos tu caso
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
