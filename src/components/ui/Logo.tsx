import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * - 'brand' | 'image': El logotipo oficial NAXAD con la 'X' en rosa/coral y nodos de conexión
   * - 'glow': Logotipo con halo resplandeciente coral
   * - 'solid': Renderizado estándar
   */
  variant?: "brand" | "image" | "glow" | "solid";
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
  asLink?: boolean;
  withDescriptor?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-6 w-auto",          // 24px de alto
  md: "h-7 sm:h-[30px] w-auto", // 28-30px de alto (proporción áurea para Navbar y Footer)
  lg: "h-9 sm:h-10 w-auto",    // 36-40px de alto
  xl: "h-12 sm:h-14 w-auto",   // 48-56px de alto
};

export function Logo({
  variant = "brand",
  size = "md",
  theme = "light",
  asLink = true,
  withDescriptor = false,
  className,
}: LogoProps) {
  const isDark = theme === "dark";
  const logoSrc = isDark
    ? "/brand/naxad-logo-white.webp"
    : "/brand/naxad-logo.webp";

  const content = (
    <>
      <Image
        src={logoSrc}
        alt="NAXAD"
        width={476}
        height={112}
        priority
        className={cn(
          "object-contain transition-all duration-200 group-hover:scale-[1.02]",
          sizeClasses[size],
          variant === "glow" && "drop-shadow-[0_0_16px_rgba(244,63,94,0.35)]"
        )}
      />

      {withDescriptor && (
        <span
          className={cn(
            "hidden sm:inline-block pl-3 text-[11px] font-mono leading-tight border-l",
            isDark
              ? "text-slate-400 border-slate-700"
              : "text-slate-500 border-slate-300"
          )}
        >
          SaaS & sistemas a medida
        </span>
      )}
    </>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="NAXAD - Inicio"
        className={cn(
          "inline-flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm",
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-2 group", className)}>
      {content}
    </div>
  );
}

export const NaxadLogo = Logo;
export default Logo;
