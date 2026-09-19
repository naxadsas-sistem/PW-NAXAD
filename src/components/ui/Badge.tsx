import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "coral" | "sky" | "neutral" | "gradient";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors",
        size === "sm" && "px-2.5 py-0.5 text-[11px] leading-tight",
        size === "md" && "px-3 py-1 text-xs leading-tight",
        variant === "blue" &&
          "bg-blue-50 text-[#2563EB] border-blue-200",
        variant === "coral" &&
          "bg-rose-50 text-[#E76F73] border-rose-200",
        variant === "sky" &&
          "bg-sky-50 text-sky-800 border-sky-200",
        variant === "neutral" &&
          "bg-slate-100 text-slate-700 border-slate-200",
        variant === "gradient" &&
          "bg-slate-50 text-[#151A21] border-slate-200",
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variant === "blue" && "bg-[#2563EB]",
            variant === "coral" && "bg-[#E76F73]",
            variant === "sky" && "bg-sky-600",
            variant === "neutral" && "bg-slate-500",
            variant === "gradient" && "bg-[#2563EB]"
          )}
        />
      )}
      {children}
    </span>
  );
}
