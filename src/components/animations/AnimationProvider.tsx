"use client";

import { MotionConfig } from "motion/react";
import { useEffect, type ReactNode } from "react";

const FALLBACK_MS = 3200;

/**
 * Public-site motion settings. Mount this only outside /admin so CMS
 * screens never inherit animation configuration.
 *
 * A slow fallback shows a reveal only if it has been on screen for several
 * seconds and is still fully transparent. It does not run on each scroll
 * frame, so in-progress fades and staggers are left alone.
 */
export default function AnimationProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const enteredAt = new WeakMap<HTMLElement, number>();
    const timer = window.setInterval(() => {
      const now = performance.now();
      document.querySelectorAll<HTMLElement>("[data-motion-reveal]").forEach((node) => {
        const rect = node.getBoundingClientRect();
        const inView = rect.bottom > 0 && rect.top < window.innerHeight * 0.9;
        if (!inView) {
          enteredAt.delete(node);
          return;
        }
        const start = enteredAt.get(node) ?? now;
        enteredAt.set(node, start);
        if (now - start < FALLBACK_MS) return;
        if (getComputedStyle(node).opacity !== "0") return;
        node.style.opacity = "1";
        node.style.transform = "none";
      });
    }, 500);

    return () => window.clearInterval(timer);
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
