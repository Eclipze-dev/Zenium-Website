"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionIntro from "@/app/home/components/SectionIntro";
import { whySteps } from "./partnersData";

type WhyStep = (typeof whySteps)[number];

function PartnersWhyTimelineItem({
  step,
  index,
  lineProgress,
  isLast,
  separatorRef,
}: {
  step: WhyStep;
  index: number;
  lineProgress: number;
  isLast: boolean;
  separatorRef: (element: HTMLElement | null) => void;
}) {
  return (
    <article data-index={index} className="relative">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:gap-x-14">
      <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[16px] max-lg:aspect-[16/11] max-sm:aspect-[4/3]">
          <img
            src={step.image}
            alt={step.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        
        
        <div className="flex min-w-0 flex-col">
          <div>
            <p className="text-h4 uppercase tracking-[0.08em] text-muted">{step.label}</p>
            <h3 className="m-0 mt-3 text-h3 font-bold text-zen-text">{step.title}</h3>
            <p className="mt-4 max-w-[56ch] text-p1 text-muted">{step.text}</p>
          </div>

          {!isLast && (
            <div
              ref={separatorRef}
              className="relative mt-5 mb-6 h-[248px] max-lg:h-[128px] max-sm:mt-4 max-sm:mb-5 max-sm:h-[104px]"
              aria-hidden="true"
            >
              <span className="absolute inset-y-0 left-0 block w-px bg-line" />
              <span
                className="absolute inset-y-0 left-0 block w-[2px] origin-top bg-white motion-reduce:transition-none"
                style={{ transform: `scaleY(${lineProgress})` }}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PartnersWhySection() {
  const separatorCount = whySteps.length - 1;
  const separatorRefs = useRef<(HTMLElement | null)[]>([]);
  const [lineProgress, setLineProgress] = useState<number[]>(() =>
    Array.from({ length: separatorCount }, () => 0),
  );

  const updateLineProgress = useCallback(() => {
    const center = window.innerHeight / 2;
    const next = separatorRefs.current.map((separator) => {
      if (!separator) return 0;

      const { top, height } = separator.getBoundingClientRect();
      if (height <= 0) return 0;

      return Math.min(1, Math.max(0, (center - top) / height));
    });

    setLineProgress((previous) => {
      if (previous.every((value, index) => Math.abs(value - next[index]) < 0.001)) {
        return previous;
      }

      return next;
    });
  }, []);

  useEffect(() => {
    updateLineProgress();

    let frameId = 0;
    const onScrollOrResize = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateLineProgress();
      });
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [updateLineProgress]);

  return (
    <section className="py-[80px] max-sm:py-[70px]" id="why-zenium">
      <div className="container">
        <SectionIntro
          centered
          fullWidth
          eyebrow="WHY ZENIUM"
          text="Successful smart-metering programmes depend on technology that works across products, providers and operating environments. Zenium combines proven HES and MDM capabilities with utility-domain knowledge gained through experience in complex, large-scale smart-metering environments."
        >
          Proven technology.{" "}
          <span className="text-orange text-h1">Practical partnership.</span>
        </SectionIntro>

        <div className="mt-[75px] max-md:mt-[60px]">
          {whySteps.map((step, index) => (
            <PartnersWhyTimelineItem
              key={step.label}
              step={step}
              index={index}
              lineProgress={lineProgress[index] ?? 0}
              isLast={index === whySteps.length - 1}
              separatorRef={(element) => {
                separatorRefs.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
