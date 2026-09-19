import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { MAIN_NAV } from "@/config/navigation";
import { MessageSquare, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-12 text-slate-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Brand, Descriptor & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-[#2563EB] font-mono tracking-tight font-medium">
              Ecosistema de SaaS y sistemas a medida
            </p>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Construimos productos y sistemas de gestión a partir de cómo opera tu negocio en la vida real. DentalDesk, LautaroNutrición y Pharmalyze AI son la prueba de nuestro método.
            </p>
            <div className="pt-1 text-xs font-semibold text-[#151A21] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E76F73]" />
              “El sistema que tu negocio necesita, no el que le sobra.”
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin size={13} className="text-[#2563EB]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#151A21]">
              Navegación
            </div>
            <ul className="space-y-2 text-xs">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#2563EB] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Channels */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#151A21]">
              Contacto directo
            </div>
            <div className="space-y-2.5 text-xs">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#151A21] hover:text-[#2563EB] transition-colors font-medium"
              >
                <MessageSquare size={14} className="text-[#2563EB]" />
                <span>WhatsApp de consulta</span>
              </a>
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-600 hover:text-[#151A21] transition-colors block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-[#2563EB] transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-slate-300">·</span>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-[#E76F73] transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} NAXAD. Fundada por Gabriel Zambrano. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-500">
              Buenos Aires, Argentina
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
