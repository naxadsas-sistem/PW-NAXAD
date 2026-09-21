import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HeroMockup3D } from "@/components/home/HeroMockup3D";
import { StripeGradientBackground } from "@/components/home/HeroDynamicBackground";

export function HomeHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Background dinámico: Canvas interactivo Stripe WebGL + Parallax + Malla */}
      <StripeGradientBackground intensity="medium" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>NAXAD — SaaS propios y sistemas a medida</span>
          </div>

          {/* H1 con texto gradiente animado estilo Stripe */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] max-w-3xl">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              El sistema que tu negocio necesita
            </span>{" "}
            <span className="text-[#151A21]">no el que le sobra.</span>
          </h1>

          {/* Subtítulo alineado a la izquierda */}
          <p className="text-left text-base sm:text-lg md:text-xl text-slate-600 leading-loose max-w-2xl w-full font-normal">
            Construimos productos y sistemas de gestión a partir de cómo opera tu negocio en la vida real. Ya funcionan en una clínica, un consultorio y una farmacia — el próximo puede ser el tuyo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-3 w-full sm:w-auto">
            <a
              href="#ecosistema"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm px-6 py-3 font-semibold bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                Ver el ecosistema
                <ArrowDown size={15} className="ml-2" />
              </Button>
            </a>
            <Link href="/contacto" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm px-6 py-3 font-medium text-slate-700 bg-white/80 backdrop-blur-xs border-slate-300 hover:bg-slate-50 hover:text-[#151A21]"
              >
                Contanos tu caso
                <ArrowRight size={15} className="ml-2 text-slate-500" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mockup Interactivo 3D con selector del ecosistema */}
        <div className="mt-12 sm:mt-16 w-full">
          <HeroMockup3D />
        </div>

        {/* Indicador de scroll animado hacia el ecosistema */}
        <div className="pt-10 flex justify-center">
          <a
            href="#ecosistema"
            aria-label="Ir al ecosistema"
            className="group flex flex-col items-center gap-1.5 text-[11px] font-mono font-medium text-slate-500 hover:text-[#2563EB] transition-colors"
          >
            <div className="w-5 h-9 rounded-full border border-slate-300 group-hover:border-[#2563EB] flex items-start justify-center p-1.5 transition-colors bg-white/70 backdrop-blur-xs shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-scroll-pill" />
            </div>
            <span>Explorar</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
