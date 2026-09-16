"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
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
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);
  const [listMinHeight, setListMinHeight] = useState<number>();

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = () => {
      if (window.matchMedia("(max-width: 639px)").matches) {
        setListMinHeight(undefined);
        return;
      }

      const rows = Array.from(
        list.querySelectorAll<HTMLElement>("[data-faq-row]"),
      );
      const answers = Array.from(
        list.querySelectorAll<HTMLElement>("[data-faq-answer]"),
      );

      const rowsHeight = rows.reduce((sum, row) => sum + row.offsetHeight, 0);
      const maxAnswerHeight = answers.reduce(
        (max, answer) => Math.max(max, answer.scrollHeight),
        0,
      );

      const borders = rows.length;
      setListMinHeight(rowsHeight + maxAnswerHeight + borders);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

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

        <div
          ref={listRef}
          className="min-w-0 border-t border-[#152D48] [overflow-anchor:none]"
          style={listMinHeight ? { minHeight: listMinHeight } : undefined}
        >
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
                        "absolute h-[14px] w-[2px] rounded-full bg-current",
                        isOpen
                          ? "rotate-90"
                          : "rotate-0 transition-transform duration-300 ease-out",
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
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      data-faq-answer
                      className={cn(
                        "m-0 pb-[20px] pl-10 text-p1 text-muted transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-1 opacity-0",
                      )}
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
