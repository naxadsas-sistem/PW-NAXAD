import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "coral" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-xl transition-all duration-200 cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Sizes
          size === "sm" && "h-9 px-3.5 text-xs",
          size === "md" && "h-11 px-5 text-sm font-semibold",
          size === "lg" && "h-12 px-6 text-base font-semibold",
          // Variants
          variant === "primary" &&
            "bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm active:scale-[0.99]",
          variant === "coral" &&
            "bg-[#E76F73] text-white hover:bg-rose-600 shadow-sm active:scale-[0.99]",
          variant === "secondary" &&
            "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200",
          variant === "outline" &&
            "bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 hover:text-[#151A21]",
          variant === "ghost" &&
            "bg-transparent text-slate-600 hover:text-[#151A21] hover:bg-slate-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
