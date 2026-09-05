"use client";

import { memo, useCallback, useState } from "react";
import SectionIntro from "./SectionIntro";
import { cn } from "@/lib/cn";

const STORY_SLIDE_COUNT = 5;

const StorySlideDot = memo(function StorySlideDot({
  slide,
  active,
  onSelect,
}: {
  slide: number;
  active: boolean;
  onSelect: (slide: number) => void;
}) {
  return (
    <button
      onClick={() => onSelect(slide)}
      className={cn(
        "h-[6px] p-0 border-0 rounded-[50%] bg-zen-text transition-all",
        active ? "w-[30px] rounded-[4px]" : "w-[6px]",
      )}
      aria-label={`Show story ${slide + 1}`}
    />
  );
});

export default function CustomerStorySection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const selectSlide = useCallback((slide: number) => {
    setActiveSlide(slide);
  }, []);

  return (
    <section className="py-[80px] text-center">
      <div className="container">
        <SectionIntro centered fullWidth eyebrow="CUSTOMER STORY">
          <p className="text-h1 font-normal tracking-display m-0 [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold">
            Proven in the field. One of <span className="text-orange text-h2 shimmer-text">India's large-scale</span>{" "}
            electricity deployments.
          </p>
        </SectionIntro>
        <p className="text-muted text-p1 my-[20px] mb-[60px] max-sm:text-caption">
          Punjab electricity deployment{" "}
          <i className="not-italic text-orange px-2 font-bold max-sm:px-[3px]">
            ·
          </i>{" "}
          5 million meter-point MDM{" "}
          <i className="not-italic text-orange px-2 font-bold max-sm:px-[3px]">
            ·
          </i>{" "}
          2 million+ meters onboarded
        </p>
        <article className="max-w-[995px] mx-auto bg-card rounded-[8px] border border-line text-zen-text p-[45px_60px] flex flex-col items-center gap-6 max-md:p-[32px_24px] max-sm:p-[28px_20px] light-card">
          <div className="text-h3 text-[#2d5e9f] light-card-heading">
            Punjab
            <span className="block text-button text-orange">
              Power
            </span>
          </div>
          <blockquote className="text-p1 max-w-[850px] m-0 max-sm:text-base-lg max-sm:leading-[1.5]">
            "ZENIUM has helped us modernize our utility operations with a
            technology platform that is reliable, scalable, and built around our
            real-world requirements. Their understanding of utility workflows
            and focus on seamless implementation made the entire deployment much
            more efficient."
          </blockquote>
          <div className="gap-2 flex flex-col items-center">
            <b className="text-orange text-p2">Rajesh Kumar</b>
            <span className="text-button text-muted light-card-subtitle">
              Chief Technology Officer · Punjab State Power Utility
            </span>
          </div>
        </article>
        <div className="flex justify-center gap-[6px] mt-[28px]">
          {Array.from({ length: STORY_SLIDE_COUNT }, (_, slide) => (
            <StorySlideDot
              key={slide}
              slide={slide}
              active={activeSlide === slide}
              onSelect={selectSlide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
