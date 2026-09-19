import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "highlight" | "light";
}

export function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-200",
        variant === "default" &&
          "bg-white border-slate-200 text-[#151A21] shadow-sm hover:border-slate-300",
        variant === "subtle" &&
          "bg-slate-50 border-slate-200 text-[#151A21]",
        variant === "highlight" &&
          "bg-white border-[#2563EB] text-[#151A21] shadow-sm",
        variant === "light" &&
          "bg-slate-50 border-slate-200 text-[#151A21]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
