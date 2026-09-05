"use client";

import { memo, useCallback, useEffect, useId, useState } from "react";
import { cn } from "@/lib/cn";
import { capabilities } from "./homeData";
import SectionIntro from "./SectionIntro";
import ZeniumDataFlow, { type StageId } from "./ZeniumDataFlow";

const STAGE_CYCLE: StageId[] = ["meter", "hes", "mdms", "analytics"];

const CapabilityItem = memo(function CapabilityItem({
  title,
  text,
  icon: Icon,
  index,
  active,
  paused,
  progressKey,
  onSelect,
  onPause,
  onResume,
}: {
  title: string;
  text: string;
  icon: (typeof capabilities)[number][0];
  index: number;
  active: boolean;
  paused: boolean;
  progressKey: number;
  onSelect: (index: number) => void;
  onPause: () => void;
  onResume: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={active}
      onClick={() => onSelect(index)}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      onFocus={onPause}
      onBlur={onResume}
      className={cn(
        "capability-item block w-full border-0 bg-transparent pb-[28px] mb-[10px] text-left text-zen-text",
        paused && "capability-paused",
      )}
    >
      <span className="capability-rule relative mb-[26px] block h-px bg-line">
        {active && <span key={progressKey} className="capability-progress" />}
      </span>
      <span className="mb-3 flex items-center gap-3">
        <Icon className="h-6 w-6 shrink-0 text-orange" strokeWidth={1.8} />
        <b
          className={cn(
            "text-p1 transition-colors duration-300",
            active ? "text-zen-text" : "text-muted",
          )}
        >
          {title}
        </b>
      </span>
      <span
        className={cn(
          "capability-copy grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out",
          active
            ? "grid-rows-[1fr] opacity-100 mt-[9px]"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <span className="min-h-0 overflow-hidden text-muted text-p1">{text}</span>
      </span>
    </button>
  );
});

export default function ZeniumEdgeSection() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [capabilityPaused, setCapabilityPaused] = useState(false);

  const pauseCarousel = useCallback(() => setCapabilityPaused(true), []);
  const resumeCarousel = useCallback(() => setCapabilityPaused(false), []);
  const selectCapability = useCallback(
    (index: number) => setActiveCapability(index),
    [],
  );

  useEffect(() => {
    if (capabilityPaused) return;

    const timer = window.setInterval(() => {
      setActiveCapability((current) => (current + 1) % capabilities.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [capabilityPaused]);

  const activeStage = STAGE_CYCLE[activeCapability % STAGE_CYCLE.length];

  return (
    <section className="py-[80px] max-sm:py-[70px]" id="resources">
      <div className="container grid grid-cols-[minmax(0,1fr)_minmax(360px,1.05fr)] gap-[60px] items-stretch max-lg:grid-cols-1 max-lg:gap-[40px] max-sm:gap-[30px]">
        <div className="min-w-0">
          <SectionIntro
            eyebrow="THE ZENIUM EDGE"
            text="Zenium combines proven utility technology with an architecture designed for scale, interoperability and operational reliability."
          >
            Engineered for the{` `}
            <span className="text-orange text-h2 shimmer-text">complexity</span>
            {` `}of modern utilities.
          </SectionIntro>
          <div className="mt-[80px] max-md:mt-[60px] max-sm:mt-[50px]">
            {capabilities.map(([Icon, title, text], index) => (
              <CapabilityItem
                key={title}
                title={title}
                text={text}
                icon={Icon}
                index={index}
                active={activeCapability === index}
                paused={capabilityPaused}
                progressKey={activeCapability}
                onSelect={selectCapability}
                onPause={pauseCarousel}
                onResume={resumeCarousel}
              />
            ))}
          </div>
        </div>

        <div className="flex h-full min-h-0 w-full items-center justify-center max-lg:min-h-[520px] max-sm:min-h-[420px] max-sm:max-w-[460px] max-sm:mx-auto">
          <ZeniumDataFlow
            fit
            activeStage={activeStage}
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
