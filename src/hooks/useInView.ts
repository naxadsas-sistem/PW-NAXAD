"use client";

import { useState, useEffect, useRef } from "react";

export interface UseInViewOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { once = true, rootMargin = "-60px", threshold = 0.1 } = options;
  const [isInView, setIsInView] = useState(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      return true;
    }
    return false;
  });
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return { ref, isInView };
}
