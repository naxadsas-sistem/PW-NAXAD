import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * - 'brand': El diseño insignia de NAXAD (letras base en grafito/blanco con la 'X' en gradiente azul-coral)
   * - 'gradient': Todo el texto NAXAD en gradiente azul-índigo-coral
   * - 'glow': Gradiente de impacto con sombra de neón (ideal para hero o tarjetas oscuras)
   * - 'solid': Monocromático (se adapta al tema o hereda color)
   */
  variant?: "brand" | "gradient" | "glow" | "solid";
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
  asLink?: boolean;
  withDescriptor?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "text-lg tracking-wider",
  md: "text-xl tracking-[0.12em]",
  lg: "text-3xl tracking-[0.16em]",
  xl: "text-5xl md:text-6xl tracking-[0.2em]",
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

  const renderText = () => {
    if (variant === "brand") {
      return (
        <span className={cn("font-extrabold select-none", isDark ? "text-white" : "text-[#151A21]")}>
          NA
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-tr from-[#2563EB] to-[#E76F73] font-black px-0.5 transition-transform duration-200 group-hover:scale-110">
            X
          </span>
          AD
        </span>
      );
    }

    if (variant === "gradient") {
      return (
        <span className="font-extrabold select-none bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#E76F73] bg-clip-text text-transparent">
          NAXAD
        </span>
      );
    }

    if (variant === "glow") {
      return (
        <span className="font-extrabold select-none relative bg-gradient-to-r from-[#3B82F6] via-[#818CF8] to-[#E76F73] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(37,99,235,0.45)]">
          NAXAD
        </span>
      );
    }

    // Variante 'solid'
    return (
      <span className={cn("font-extrabold select-none", isDark ? "text-white" : "text-[#151A21]")}>
        NAXAD
      </span>
    );
  };

  const content = (
    <>
      <span className={cn("font-sans leading-none flex items-center", sizeMap[size])}>
        {renderText()}
      </span>

      {withDescriptor && (
        <span
          className={cn(
            "hidden sm:inline-block pl-2.5 text-[11px] font-mono leading-tight border-l",
            isDark
              ? "text-slate-400 border-slate-700"
              : "text-slate-500 border-slate-200"
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
