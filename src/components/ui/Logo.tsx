import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * - 'brand' | 'image': El nuevo logotipo oficial NAXAD con isotipo y tipografía corporativa
   * - 'isotype': Isotipo oficial NAXAD (icono / símbolo)
   * - 'glow': Logotipo con halo resplandeciente azul eléctrico
   * - 'solid': Renderizado estándar
   */
  variant?: "brand" | "image" | "glow" | "solid" | "isotype";
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
  asLink?: boolean;
  withDescriptor?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-5 w-auto",             // 20px de alto
  md: "h-6 sm:h-[26px] w-auto", // 26px de alto (sutil, estilizado y equilibrado)
  lg: "h-8 sm:h-9 w-auto",      // 32-36px de alto
  xl: "h-10 sm:h-12 w-auto",    // 40-48px de alto
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
  const isIsotype = variant === "isotype";

  const logoSrc = isIsotype
    ? "/brand/naxad-isotipo.webp"
    : isDark
    ? "/brand/naxad-logotipo-white.webp"
    : "/brand/naxad-logotipo.webp";

  const imgWidth = isIsotype ? 328 : 546;
  const imgHeight = isIsotype ? 327 : 93;

  const content = (
    <>
      <Image
        src={logoSrc}
        alt="NAXAD"
        width={imgWidth}
        height={imgHeight}
        priority
        className={cn(
          "object-contain transition-all duration-200 group-hover:scale-[1.02]",
          sizeClasses[size],
          variant === "glow" && "drop-shadow-[0_0_16px_rgba(0,71,255,0.35)]"
        )}
      />

      {withDescriptor && !isIsotype && (
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
