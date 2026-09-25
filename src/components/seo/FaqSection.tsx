"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import ShimmerText from "@/components/ShimmerText";
import type { FaqItem } from "@/lib/seo/jsonld";

export default function FaqSection({
  title = "Frequently asked",
  accent = "questions",
  items,
  titleId = "faq-title",
}: {
  title?: string;
  accent?: string;
  items: readonly FaqItem[];
  titleId?: string;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="pt-[80px] pb-[50px] max-lg:py-[48px] max-sm:py-[70px]"
      aria-labelledby={titleId}
    >
      <div className="container grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-[60px] max-lg:grid-cols-1 max-lg:gap-[36px]">
        <h2 id={titleId} className="text-h1 m-0 max-w-auto">
          {title}{" "}
          <ShimmerText>{accent}</ShimmerText>
        </h2>

        <div className="min-w-0 border-t border-[#152D48] [overflow-anchor:none]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div
                key={item.question}
                className="border-b border-[#152D48] [overflow-anchor:none]"
              >
                <button
                  id={buttonId}
                  type="button"
                  data-faq-row
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="group flex w-full items-start gap-4 py-[20px] text-left"
                >
                  <span
                    className={cn(
                      "relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-zen-text transition-transform duration-300 ease-out",
                      !isOpen && "group-hover:rotate-90",
                    )}
                    aria-hidden="true"
                  >
                    <span className="absolute h-[2px] w-[14px] rounded-full bg-current" />
                    <span
                      className={cn(
                        "absolute h-[14px] w-[2px] rounded-full bg-current transition-transform duration-300 ease-out",
                        isOpen ? "rotate-90" : "rotate-0",
                      )}
                    />
                  </span>
                  <span className="text-p2 font-semibold text-zen-text">
                    {item.question}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      data-faq-answer
                      className="m-0 pb-[20px] pl-10 text-p1 text-muted"
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
