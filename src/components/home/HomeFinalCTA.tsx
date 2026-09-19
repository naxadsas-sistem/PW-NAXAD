import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageSquare, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export function HomeFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <Container className="relative z-10">
        {/* Contenedor con borde sutil y fondo blanco */}
        <div className="rounded-2xl p-[1px] bg-gradient-to-r from-[#2563EB]/40 via-slate-200 to-[#E76F73]/40 shadow-sm">
          <div className="rounded-[15px] bg-white p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <Badge variant="coral" size="md">
                Conversación Inicial
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151A21] leading-[1.15]">
                Menos caos operativo.{" "}
                <span className="text-[#2563EB]">
                  Más control para decidir.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Contanos cómo funciona hoy tu empresa. Coordinemos una primera conversación de 30 minutos para analizar tus procesos y devolverte una propuesta de ordenamiento sin costo.
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
                <Link href="/contacto" className="w-full sm:w-auto">
                  <Button size="lg" variant="primary" className="w-full sm:w-auto group px-7 py-3.5 text-sm font-semibold bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm">
                    Solicitar diagnóstico sin costo
                    <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-sm text-slate-700 border-slate-300 hover:bg-slate-50">
                    <MessageSquare size={16} className="text-emerald-600" />
                    Escribinos por WhatsApp
                  </Button>
                </a>
              </div>

              {/* Garantías de Transparencia */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#2563EB]" />
                  Respuesta en &lt; 24hs hábiles
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-600" />
                  Sin compromiso comercial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#E76F73]" />
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
