"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { heroPhrases } from "./homeData";

const firstPhrase = heroPhrases[0];

export default function HeroTypewriter() {
  const [text, setText] = useState(firstPhrase);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const stateRef = useRef({
    phase: "pausing" as "typing" | "pausing" | "deleting" | "switching",
    start: 0,
    charCount: firstPhrase.length,
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const phrase = heroPhrases[phraseIndex];
    const s = stateRef.current;
    let rafId = 0;
    const tick = (now: number) => {
      if (!s.start) s.start = now;
      const elapsed = now - s.start;
      if (s.phase === "typing") {
        const duration = phrase.length * 55;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 2);
        const chars = Math.round(eased * phrase.length);
        if (chars !== s.charCount) {
          s.charCount = chars;
          setText(phrase.slice(0, chars));
        }
        if (progress >= 1) {
          s.phase = "pausing";
          s.start = now;
        }
      } else if (s.phase === "pausing") {
        if (elapsed >= 1800) {
          s.phase = "deleting";
          s.start = now;
        }
      } else if (s.phase === "deleting") {
        setIsFading(true);
        const duration = phrase.length * 30;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress * progress;
        const chars = Math.round((1 - eased) * phrase.length);
        if (chars !== s.charCount) {
          s.charCount = chars;
          setText(phrase.slice(0, chars));
        }
        if (progress >= 1) {
          s.phase = "switching";
          s.start = now;
        }
      } else if (s.phase === "switching") {
        if (elapsed >= 300) {
          setPhraseIndex((i) => (i + 1) % heroPhrases.length);
          s.phase = "typing";
          s.start = 0;
          s.charCount = 0;
          setText("");
          setIsFading(false);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phraseIndex]);

  return (
    <strong
      className={cn(
        "block text-h2 min-w-[25ch] whitespace-nowrap text-orange transition-opacity duration-500 ease-in-out max-lg:min-w-0 max-lg:whitespace-normal max-lg:leading-[1.08] max-sm:min-w-0 max-sm:text-[0.92em]",
        isFading ? "opacity-40" : "opacity-100",
      )}
    >
      {text}
      <span
        className="inline-block w-[0.05em] ml-[0.04em] animate-caret-flow motion-reduce:animate-none"
        aria-hidden="true"
      >
        &nbsp;
      </span>
    </strong>
  );
}
