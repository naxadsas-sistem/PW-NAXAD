import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withDescriptor?: boolean;
}

export function Logo({ className, size = "md", withDescriptor = false }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 group", className)}>
      <div className="flex items-center tracking-wider font-extrabold font-sans">
        <span
          className={cn(
            "text-[#151A21] tracking-tight",
            size === "sm" && "text-lg",
            size === "md" && "text-xl",
            size === "lg" && "text-2xl"
          )}
        >
          NA
        </span>
        {/* Distinctive X connecting business, processes, people & tech */}
        <span
          className={cn(
            "relative inline-block text-transparent bg-clip-text bg-gradient-to-tr from-[#2563EB] to-[#E76F73] font-black transition-transform group-hover:scale-105",
            size === "sm" && "text-lg px-0.5",
            size === "md" && "text-xl px-0.5",
            size === "lg" && "text-2xl px-1"
          )}
        >
          X
        </span>
        <span
          className={cn(
            "text-[#151A21] tracking-tight",
            size === "sm" && "text-lg",
            size === "md" && "text-xl",
            size === "lg" && "text-2xl"
          )}
        >
          AD
        </span>
      </div>

      {withDescriptor && (
        <span className="hidden sm:inline-block pl-2.5 text-[11px] font-mono text-slate-500 border-l border-slate-200 leading-tight">
          SaaS & sistemas a medida
        </span>
      )}
    </Link>
  );
}
