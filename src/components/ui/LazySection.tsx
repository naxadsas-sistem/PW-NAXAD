"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  minHeight?: string;
  rootMargin?: string;
}

export function LazySection({
  children,
  fallback,
  className,
  minHeight = "min-h-[240px]",
  rootMargin = "120px",
}: LazySectionProps) {
  const { ref, isInView } = useInView({ once: true, rootMargin });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        !isInView && minHeight,
        className
      )}
    >
      {isInView ? (
        children
      ) : (
        fallback || (
          <div className="w-full flex items-center justify-center py-20 text-slate-300">
            <div className="w-6 h-6 rounded-full border-2 border-slate-200 border-t-blue-500 animate-spin opacity-50" />
          </div>
        )
      )}
    </div>
  );
}
