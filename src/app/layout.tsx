import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NAXAD — SaaS propios y sistemas de gestión a medida",
  description:
    "Construimos productos y sistemas de gestión a partir de cómo opera tu negocio en la vida real. DentalDesk, LautaroNutrición y Pharmalyze AI.",
  keywords: [
    "sistemas de gestion a medida",
    "saas clinicas dentales dentaldesk",
    "software nutricion lautaronutricion",
    "inteligencia de stock farmacias pharmalyze",
    "consultoria gestion buenos aires",
  ],
  authors: [{ name: "NAXAD · Gabriel Zambrano" }],
  openGraph: {
    title: "NAXAD — SaaS propios y sistemas a medida",
    description:
      "El sistema que tu negocio necesita, no el que le sobra. Conoce nuestro ecosistema de productos y desarrollos a medida.",
    url: "https://naxad.com",
    siteName: "NAXAD",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAXAD — SaaS propios y sistemas a medida",
    description:
      "El sistema que tu negocio necesita, no el que le sobra. DentalDesk · LautaroNutrición · Pharmalyze AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`h-full antialiased scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#151A21] font-sans selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
        {children}
      </body>
    </html>
  );
}
