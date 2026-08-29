"use client";

import { useState } from "react";
import SectionIntro from "./SectionIntro";

export default function CustomerStorySection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-[80px] text-center">
      <div className="container">
        <SectionIntro centered eyebrow="CUSTOMER STORY">
          <p className="text-display-heading font-normal tracking-display m-0 [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold">
            Proven in the field. One of <strong>India's large-scale</strong>{" "}
            electricity deployments.
          </p>
        </SectionIntro>
        <p className="text-muted text-body my-[20px] mb-[60px] max-sm:text-caption">
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
          <div className="text-card-title font-bold text-[#2d5e9f] tracking-[0.04em] light-card-heading">
            PUNJAB
            <span className="block text-[10px] text-orange tracking-[0.2em]">
              POWER
            </span>
          </div>
          <blockquote className="text-quote font-light max-w-[850px] m-0 max-sm:text-base-lg max-sm:leading-[1.5]">
            "ZENIUM has helped us modernize our utility operations with a
            technology platform that is reliable, scalable, and built around our
            real-world requirements. Their understanding of utility workflows
            and focus on seamless implementation made the entire deployment much
            more efficient."
          </blockquote>
          <b className="text-orange text-base-lg">Rajesh Kumar</b>
          <span className="text-body light-card-subtitle">
            Chief Technology Officer · Punjab State Power Utility
          </span>
        </article>
        <div className="flex justify-center gap-[6px] mt-[28px]">
          {[0, 1, 2, 3, 4].map((slide) => (
            <button
              key={slide}
              onClick={() => setActiveSlide(slide)}
              className={`h-[6px] p-0 border-0 rounded-[50%] bg-zen-text transition-all ${activeSlide === slide ? "w-[30px] rounded-[4px]" : "w-[6px]"}`}
              aria-label={`Show story ${slide + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
