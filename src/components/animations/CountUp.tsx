"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { revealEase } from "@/lib/animations/variants";

const STAT_PATTERN = /^(\d+(?:\.\d+)?)( Million\+| Million| Cities|M\+|M|K\+|%)$/;

export type ParsedStat = {
  value: number;
  suffix: string;
  decimals: number;
};

/** Parse a whole statistic label. Returns null for prose, dates, and non-metrics. */
export function parseStatDisplay(text: string): ParsedStat | null {
  const match = text.trim().match(STAT_PATTERN);
  if (!match) return null;
  const raw = match[1];
  const decimals = raw.includes(".") ? (raw.split(".")[1]?.length ?? 0) : 0;
  return { value: Number(raw), suffix: match[2], decimals };
}

function formatCount(value: number, decimals: number) {
  if (decimals > 0) return value.toFixed(decimals);
  return String(Math.round(value));
}

function durationFor(value: number) {
  const magnitude = Math.abs(value);
  if (magnitude <= 12) return 1.4;
  if (magnitude <= 100) return 1.6;
  return 1.8;
}

type CountUpProps = {
  value: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  /** Replay when the number re-enters the viewport. */
  replay?: boolean;
  className?: string;
};

export default function CountUp({
  value,
  from = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration,
  replay = false,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: !replay,
    amount: "some",
    margin: "0px 0px 140px 0px",
  });
  const finalText = `${prefix}${formatCount(value, decimals)}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !inView) {
      node.textContent = finalText;
      return;
    }

    const controls = animate(from, value, {
      duration: duration ?? durationFor(value),
      ease: revealEase,
      onUpdate: (latest) => {
        node.textContent = `${prefix}${formatCount(latest, decimals)}${suffix}`;
      },
      onComplete: () => {
        node.textContent = finalText;
      },
    });

    return () => controls.stop();
  }, [decimals, duration, finalText, from, inView, prefix, suffix, value]);

  return (
    <span ref={ref} className={className ? `tabular-nums ${className}` : "tabular-nums"}>
      {finalText}
    </span>
  );
}

/** Renders a count-up when the full string is a statistic. Otherwise leaves the text unchanged. */
export function StatValue({ text, className }: { text: string; className?: string }) {
  const parsed = parseStatDisplay(text);
  if (!parsed) {
    return <span className={className}>{text}</span>;
  }
  return (
    <CountUp
      className={className}
      value={parsed.value}
      suffix={parsed.suffix}
      decimals={parsed.decimals}
    />
  );
}
