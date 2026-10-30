import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ComoTrabajamosContent from "@/components/ComoTrabajamosContent";

export const metadata: Metadata = {
  title: "Cómo Trabajamos | Metodología de Gestión y Tecnología",
  description:
    "Primero entendemos. Después construimos. Conocé nuestra metodología de 4 fases para ordenar y digitalizar la operación de tu negocio.",
  openGraph: {
    title: "Cómo Trabajamos — Metodología de 4 Fases | NAXAD",
    description:
      "Primero entendemos. Después construimos. Metodología de 4 fases para ordenar y digitalizar la operación de tu negocio.",
  },
};

export default function ComoTrabajamosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-[#151A21]">
      <Navbar />
      <ComoTrabajamosContent />
      <Footer />
    </div>
  );
}
