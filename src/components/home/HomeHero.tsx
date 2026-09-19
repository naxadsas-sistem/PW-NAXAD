import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HeroMockup3D } from "@/components/home/HeroMockup3D";

export function HomeHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-slate-200 overflow-hidden">
      {/* Luz ambiental sutil superior (100% tema claro) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.06),rgba(255,255,255,0))]" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
            <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
            <span>NAXAD — SaaS propios y sistemas a medida</span>
          </div>

          {/* H1 en texto sólido grafito, SIN gradiente de ningún tipo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#151A21] tracking-tight leading-[1.12] max-w-3xl">
            El sistema que tu negocio necesita, no el que le sobra.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
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
                className="w-full sm:w-auto text-sm px-6 py-3 font-medium text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-[#151A21]"
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
      </Container>
    </section>
  );
}
