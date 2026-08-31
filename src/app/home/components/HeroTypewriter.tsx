"use client";

import { useEffect, useRef, useState } from "react";
import { heroPhrases } from "./homeData";

export default function HeroTypewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const stateRef = useRef({
    phase: "typing" as "typing" | "pausing" | "deleting" | "switching",
    start: 0,
    charCount: 0,
  });

  useEffect(() => {
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
      className={`block text-h1 min-w-[25ch] whitespace-nowrap font-normal text-orange transition-opacity duration-500 ease-in-out max-sm:min-w-0 max-sm:text-[0.92em] ${isFading ? "opacity-40" : "opacity-100"}`}
    >
      {text}
      <span
        className="inline-block w-[0.05em] bg-orange ml-[0.04em] animate-caret-flow"
        aria-hidden="true"
      >
        &nbsp;
      </span>
    </strong>
  );
}
