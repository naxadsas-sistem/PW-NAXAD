"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageWithSkeletonProps extends ImageProps {
  wrapperClassName?: string;
  skeletonClassName?: string;
}

export function ImageWithSkeleton({
  className,
  wrapperClassName,
  skeletonClassName,
  alt,
  onLoad,
  fill,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill ? "w-full h-full" : "inline-block",
        wrapperClassName
      )}
    >
      {/* Skeleton Shimmer Loading Placeholder */}
      {!isLoaded && (
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center bg-slate-100/90 animate-shimmer select-none pointer-events-none",
            skeletonClassName
          )}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400 opacity-60">
            <div className="w-7 h-7 rounded-lg bg-slate-300/60" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Cargando
            </span>
          </div>
        </div>
      )}

      {/* Next.js Optimized Image */}
      <Image
        {...props}
        fill={fill}
        alt={alt}
        className={cn(
          "transition-opacity duration-500 ease-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}
