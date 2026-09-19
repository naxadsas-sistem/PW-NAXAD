export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Cómo trabajamos", href: "/como-trabajamos" },
  { label: "Para quién", href: "/para-quien" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];
