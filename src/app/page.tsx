import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/home/HomeHero";
import DiagnosticoOperativo from "@/components/DiagnosticoOperativo";
import { HomeEcosystem } from "@/components/home/HomeEcosystem";
import { HomeValue } from "@/components/home/HomeValue";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeComparison } from "@/components/home/HomeComparison";
import { HomeTrust } from "@/components/home/HomeTrust";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { LazySection } from "@/components/ui/LazySection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://naxad.com/#organization",
      "name": "NAXAD",
      "url": "https://naxad.com",
      "description":
        "Consultoría tecnológica, SaaS propios y desarrollo de sistemas de gestión a medida.",
      "founder": {
        "@type": "Person",
        "name": "Gabriel Zambrano",
        "jobTitle": "Fundador y Consultor Principal",
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://naxad.com/#website",
      "url": "https://naxad.com",
      "name": "NAXAD",
      "publisher": {
        "@id": "https://naxad.com/#organization",
      },
      "inLanguage": "es-AR",
    },
    {
      "@type": "SoftwareApplication",
      "name": "DentalDesk",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description":
        "Sistema de gestión integral para clínicas odontológicas, turnos y fichas clínicas.",
      "provider": {
        "@id": "https://naxad.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "name": "LautaroNutrición",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description":
        "Plataforma de gestión clínica y seguimiento antropométrico para nutricionistas (Dr. Lautaro Reyna).",
      "provider": {
        "@id": "https://naxad.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "name": "Pharmalyze AI",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description":
        "Inteligencia predictiva de reposición y stock crítico para farmacias (NaxadSistem).",
      "provider": {
        "@id": "https://naxad.com/#organization",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#151A21]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <HomeHero />

        {/* 2. Diagnóstico Operativo (The Pain Mirror) */}
        <DiagnosticoOperativo />

        {/* 3. Ecosistema de Productos (DentalDesk, LautaroNutrición, Pharmalyze AI) */}
        <HomeEcosystem />

        {/* 4. Propuesta / Solución (Criterio de negocio, arquitectura) */}
        <LazySection>
          <HomeValue />
        </LazySection>

        {/* 5. Metodología (3 pasos claros sin métricas inventadas) */}
        <LazySection>
          <HomeProcess />
        </LazySection>

        {/* 6. Comparativa (Software genérico vs Freelancer vs NAXAD) */}
        <LazySection>
          <HomeComparison />
        </LazySection>

        {/* 7. Métricas reales y credencial de Gabriel Zambrano */}
        <LazySection>
          <HomeTrust />
        </LazySection>

        {/* 8. CTA Final con Fondo Animado Premium */}
        <LazySection>
          <HomeFinalCTA />
        </LazySection>
      </main>

      <Footer />
    </div>
  );
}
