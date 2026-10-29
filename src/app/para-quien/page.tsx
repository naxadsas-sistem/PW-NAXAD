import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RubrosShowcase } from "@/components/RubrosShowcase";

export const metadata: Metadata = {
  title: "Para quién trabajamos | Clínicas, farmacias y PyMEs",
  description:
    "Soluciones de gestión y tecnología para clínicas, centros de salud, profesionales, farmacias y PyMEs.",
};

export default function ParaQuienPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#151A21]">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        {/* Sección Interactiva de Rubros con Dinamismo Premium */}
        <RubrosShowcase />
      </main>

      <Footer />
    </div>
  );
}
