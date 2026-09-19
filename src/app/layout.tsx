import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NAXAD — SaaS propios y sistemas de gestión a medida",
  description:
    "Construimos productos y sistemas de gestión a partir de cómo opera tu negocio en la vida real. DentalDesk, Reyna Desk y Pharmalized AI.",
  keywords: [
    "sistemas de gestion a medida",
    "saas clinicas dentales dentaldesk",
    "software nutricion reyna desk",
    "inteligencia de stock farmacias pharmalized",
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
      "El sistema que tu negocio necesita, no el que le sobra. DentalDesk · Reyna Desk · Pharmalized AI.",
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
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-white text-[#151A21] selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
        {children}
      </body>
    </html>
  );
}
