import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contanos cómo opera tu negocio y evaluamos qué sistema de gestión necesitás. Escribinos a NAXAD y coordinamos una primera conversación.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
