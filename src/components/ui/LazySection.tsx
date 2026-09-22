"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  minHeight?: string;
  rootMargin?: string;
  delay?: number;
}

export function LazySection({
  children,
  className,
  delay = 0,
}: LazySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}

export const ScrollReveal = LazySection;
export default LazySection;
