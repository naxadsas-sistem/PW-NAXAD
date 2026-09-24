"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Stethoscope,
  Apple,
  Pill,
  Sparkles,
  Layers,
} from "lucide-react";

interface MegaMenuProduct {
  id: string;
  name: string;
  badge: string;
  status: string;
  statusColor: "emerald" | "amber";
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  iconGradient: string;
  borderHover: string;
  href: string;
}

const ECOSYSTEM_PRODUCTS: MegaMenuProduct[] = [
  {
    id: "dentaldesk",
    name: "DentalDesk",
    badge: "SaaS Clínico",
    status: "En vivo en clínicas",
    statusColor: "emerald",
    desc: "Agenda sincronizada, fichas odontológicas, caja diaria y liquidación de honorarios con seguridad RLS.",
    icon: Stethoscope,
    iconGradient: "from-blue-500/20 via-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200/80",
    borderHover: "hover:border-blue-300 hover:bg-blue-50/40",
    href: "/#ecosistema",
  },
  {
    id: "lautaronutricion",
    name: "LautaroNutrición",
    badge: "IA & Salud",
    status: "En uso diario",
    statusColor: "emerald",
    desc: "Portal de pacientes con visión por IA para estimación de calorías y macros en segundos desde fotos de platos.",
    icon: Apple,
    iconGradient: "from-emerald-500/20 via-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/80",
    borderHover: "hover:border-emerald-300 hover:bg-emerald-50/40",
    href: "/#ecosistema",
  },
  {
    id: "pharmalyze",
    name: "Pharmalyze AI",
    badge: "Próximo SaaS",
    status: "Piloto CABA",
    statusColor: "amber",
    desc: "Inteligencia de stock farmacéutico, monitor FEFO predictivo de vencimientos y arbitraje de precios.",
    icon: Pill,
    iconGradient: "from-amber-500/20 via-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/80",
    borderHover: "hover:border-amber-300 hover:bg-amber-50/40",
    href: "/#ecosistema",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const scrolledRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${Math.min(100, Math.max(0, currentProgress))}%`;
      }

      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnterMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] py-2.5"
          : "bg-white/75 backdrop-blur-md border-b border-slate-200/50 py-3.5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo with descriptor */}
          <div className="flex items-center">
            <Logo withDescriptor />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                pathname === "/"
                  ? "text-[#2563EB] font-semibold bg-blue-50/50"
                  : "text-slate-600 hover:text-[#151A21] hover:bg-slate-50"
              )}
            >
              Inicio
            </Link>

            {/* Mega-menu Trigger: Ecosistema */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterMegaMenu}
              onMouseLeave={handleMouseLeaveMegaMenu}
            >
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                aria-expanded={megaMenuOpen}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer",
                  megaMenuOpen
                    ? "text-[#2563EB] bg-blue-50/70 font-semibold"
                    : "text-slate-600 hover:text-[#151A21] hover:bg-slate-50"
                )}
              >
                <span>Ecosistema</span>
                <ChevronDown
                  size={13}
                  className={cn(
                    "transition-transform duration-200 opacity-70",
                    megaMenuOpen ? "rotate-180 text-[#2563EB]" : ""
                  )}
                />
              </button>

              {/* Mega-Menu Dropdown Panel */}
              {megaMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[560px] z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseEnter={handleMouseEnterMegaMenu}
                  onMouseLeave={handleMouseLeaveMegaMenu}
                >
                  <div className="bg-white/98 backdrop-blur-2xl rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.15)] p-4 overflow-hidden">
                    {/* Header del Mega-menu */}
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-blue-50 text-[#2563EB]">
                          <Layers size={13} />
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                          Productos Activos & Próximos
                        </span>
                      </div>
                      <span className="text-[11px] text-[#2563EB] font-semibold">
                        3 Soluciones Clave
                      </span>
                    </div>

                    {/* Lista de los 3 productos insignia */}
                    <div className="space-y-1.5">
                      {ECOSYSTEM_PRODUCTS.map((prod) => {
                        const Icon = prod.icon;
                        return (
                          <Link
                            key={prod.id}
                            href={prod.href}
                            onClick={() => setMegaMenuOpen(false)}
                            className={cn(
                              "group flex items-start gap-3.5 p-3 rounded-xl border border-transparent transition-all",
                              prod.borderHover
                            )}
                          >
                            <div
                              className={cn(
                                "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0 shadow-2xs border transition-transform duration-200 group-hover:scale-105",
                                prod.iconGradient
                              )}
                            >
                              <Icon size={19} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm font-bold text-[#151A21] group-hover:text-[#2563EB] transition-colors">
                                    {prod.name}
                                  </h4>
                                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                    {prod.badge}
                                  </span>
                                </div>

                                {/* Status pulse badge */}
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-600">
                                  <span className="relative flex h-2 w-2">
                                    <span
                                      className={cn(
                                        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                                        prod.statusColor === "emerald"
                                          ? "bg-emerald-400"
                                          : "bg-amber-400"
                                      )}
                                    />
                                    <span
                                      className={cn(
                                        "relative inline-flex rounded-full h-2 w-2",
                                        prod.statusColor === "emerald"
                                          ? "bg-emerald-500"
                                          : "bg-amber-500"
                                      )}
                                    />
                                  </span>
                                  <span className="hidden sm:inline-block text-[10px]">
                                    {prod.status}
                                  </span>
                                </span>
                              </div>

                              <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                                {prod.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Footer del Mega-menu */}
                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <Link
                        href="/#ecosistema"
                        onClick={() => setMegaMenuOpen(false)}
                        className="inline-flex items-center gap-1.5 font-bold text-[#2563EB] hover:text-blue-700 transition-colors"
                      >
                        <span>Explorar el Bento Grid completo</span>
                        <ArrowRight size={13} />
                      </Link>

                      <Link
                        href="/soluciones"
                        onClick={() => setMegaMenuOpen(false)}
                        className="text-slate-500 hover:text-slate-800 transition-colors text-[11px]"
                      >
                        ¿Software a medida? Cotizar →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rest of Navigation Items */}
            {MAIN_NAV.filter((item) => item.href !== "/" && item.href !== "/contacto").map(
              (item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                      isActive
                        ? "text-[#2563EB] font-semibold bg-blue-50/50"
                        : "text-slate-600 hover:text-[#151A21] hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
            )}
          </nav>

          {/* Primary Distinctive CTA Button (Stripe Style) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/contacto" className="group">
              <div className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-transform duration-200 active:scale-[0.98] group-hover:scale-[1.02]">
                {/* Glow ring sutil de fondo */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                <button
                  type="button"
                  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white text-xs font-semibold shadow-[0_4px_16px_rgba(37,99,235,0.32)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.48)] transition-all cursor-pointer"
                >
                  <Sparkles size={12} className="text-blue-200" />
                  <span>Contanos tu caso</span>
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/contacto" className="sm:hidden">
              <span className="min-h-[44px] inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#2563EB] text-white shadow-xs active:scale-95 transition-transform touch-manipulation">
                Contacto
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-700 hover:text-[#151A21] hover:bg-slate-100 border border-slate-200/80 active:scale-95 transition-all touch-manipulation flex items-center justify-center cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Menu
                  size={20}
                  className={cn(
                    "absolute transition-all duration-200 transform",
                    mobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  )}
                />
                <X
                  size={20}
                  className={cn(
                    "absolute transition-all duration-200 transform",
                    mobileMenuOpen ? "opacity-100 rotate-0 scale-100 text-[#2563EB]" : "opacity-0 -rotate-90 scale-75"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Transition */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out origin-top",
            mobileMenuOpen
              ? "max-h-[620px] opacity-100 mt-3 pt-2 pb-1 pointer-events-auto"
              : "max-h-0 opacity-0 mt-0 pt-0 pb-0 pointer-events-none"
          )}
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 flex flex-col gap-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "min-h-[44px] text-sm font-medium px-3.5 rounded-xl flex items-center transition-colors active:bg-slate-100 touch-manipulation",
                pathname === "/"
                  ? "bg-blue-50 text-[#2563EB] font-semibold"
                  : "text-slate-700 hover:text-[#151A21] hover:bg-slate-50"
              )}
            >
              Inicio
            </Link>

            {/* Acordeón Ecosistema en Mobile */}
            <div className="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/60">
              <button
                type="button"
                onClick={() => setMobileEcosystemOpen(!mobileEcosystemOpen)}
                className="w-full min-h-[44px] flex items-center justify-between py-2.5 px-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-100/70 active:bg-slate-100 transition-colors cursor-pointer touch-manipulation"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  <span>Ecosistema de Productos</span>
                </div>
                <ChevronDown
                  size={16}
                  className={cn(
                    "text-slate-500 transition-transform duration-200",
                    mobileEcosystemOpen ? "rotate-180 text-[#2563EB]" : ""
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  mobileEcosystemOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-2 space-y-1 bg-white border-t border-slate-200/70">
                  {ECOSYSTEM_PRODUCTS.map((prod) => {
                    const Icon = prod.icon;
                    return (
                      <Link
                        key={prod.id}
                        href={prod.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileEcosystemOpen(false);
                        }}
                        className="min-h-[48px] flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors touch-manipulation"
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0 border",
                            prod.iconGradient
                          )}
                        >
                          <Icon size={15} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-[#151A21]">
                              {prod.name}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              · {prod.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {prod.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Rest of links on Mobile */}
            {MAIN_NAV.filter((item) => item.href !== "/" && item.href !== "/contacto").map(
              (item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "min-h-[44px] text-sm font-medium px-3.5 rounded-xl flex items-center transition-colors active:bg-slate-100 touch-manipulation",
                      isActive
                        ? "bg-blue-50 text-[#2563EB] font-semibold"
                        : "text-slate-700 hover:text-[#151A21] hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
            )}

            {/* CTA Destacado dentro del Menú */}
            <div className="pt-2.5 mt-1 border-t border-slate-100">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <button
                  type="button"
                  className="w-full min-h-[48px] h-12 flex items-center justify-center gap-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer touch-manipulation"
                >
                  <Sparkles size={16} className="text-blue-200 animate-pulse" />
                  <span>Contanos tu caso</span>
                  <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Indicador Visual de Scroll / Lectura en el borde inferior del Navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-200/40 overflow-hidden pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400 transition-[width] duration-75 ease-out"
          style={{ width: "0%" }}
        />
      </div>
    </header>
  );
}
