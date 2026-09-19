"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo with descriptor */}
          <div className="flex items-center">
            <Logo withDescriptor />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium transition-colors",
                    isActive
                      ? "text-[#2563EB] font-semibold"
                      : "text-slate-600 hover:text-[#151A21]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/contacto">
              <Button size="sm" variant="primary" className="group text-xs font-semibold px-4 py-2 shadow-sm bg-[#2563EB] text-white hover:bg-blue-700">
                Contanos tu caso
                <ArrowRight size={13} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/contacto" className="sm:hidden">
              <Button size="sm" variant="primary" className="text-xs px-3 bg-[#2563EB] text-white">
                Contacto
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#151A21] hover:bg-slate-100 border border-slate-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 bg-white rounded-xl p-4 shadow-xl border border-slate-200 flex flex-col gap-2">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 px-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-blue-50 text-[#2563EB] font-semibold"
                      : "text-slate-700 hover:text-[#151A21] hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full text-xs font-semibold bg-[#2563EB] text-white" size="md">
                  Contanos tu caso
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
