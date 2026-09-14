import type { LucideIcon } from "@/components/icons/lucideIcons";
import { cn } from "@/lib/cn";

/**
 * Home hero–only stats strip.
 * Duplicate of SolutionHeroStats (ruled) so CSS here does not affect
 * Metrics, HES, MDM, Partners, or other solution pages.
 */
export default function HeroStats({
  items,
}: {
  items: ReadonlyArray<readonly [LucideIcon, string, string]>;
}) {
  const lastIndex = items.length - 1;

  return (
    <div className="hero-stats inline-flex max-w-full flex-wrap items-stretch gap-y-4 rounded-[8px] border border-black/80 bg-black/80 backdrop-blur-[0.5px] p-5 max-lg:grid max-lg:w-full max-lg:grid-cols-5 max-lg:gap-x-0 max-lg:p-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-y-0 max-sm:p-5">
      {items.map(([, value, description], i) => {
        const isOdd = i % 2 === 1;
        const isSecondRowMd = i >= 2;
        const isLast = i === lastIndex;
        const isOddCountLast = isLast && items.length % 2 === 1;

        return (
          <div
            key={`hero-stat-${value}`}
            className={cn(
              "hero-stats__item shrink-0 px-5 py-2 first:pl-2 last:pr-2",
              // Tablet 5-col — equal px so border-l sits mid-gutter between cells
              "max-lg:px-2.5 max-lg:py-2 max-lg:first:pl-2.5 max-lg:last:pr-2.5",
              // Phone 2-col / stack
              "max-md:px-4 max-md:py-4 max-sm:w-full max-sm:px-2 max-sm:py-4",
              isOddCountLast && "max-md:col-span-2 max-sm:col-span-1",
              // Vertical dividers (desktop + tablet 5-col)
              i > 0 && "border-l border-line",
              // md 2-col: reset, then left on odd cells + top on row 2
              "max-md:border-l-0",
              isOdd && !isOddCountLast && "max-md:border-l max-md:border-line",
              isSecondRowMd && "max-md:border-t max-md:border-line",
              // Mobile stack: top dividers only
              "max-sm:border-l-0 max-sm:col-span-1",
              i > 0 && "max-sm:border-t max-sm:border-line",
            )}
          >
            <span className="hero-stats__value block whitespace-nowrap text-left text-h3 !font-normal text-zen-text max-lg:text-center max-lg:whitespace-normal max-lg:text-[clamp(14px,1.9vw,18px)] max-lg:leading-[1.2] max-md:text-left max-md:text-[20px] max-md:leading-[1.25] max-sm:text-[18px] max-sm:leading-[1.25]">
              {value}
            </span>
            <p className="hero-stats__label mt-[10px] text-left text-button text-muted max-lg:mt-1.5 max-lg:text-center max-lg:text-[11px] max-lg:leading-[1.35] max-md:mt-[10px] max-md:text-left max-md:text-button max-sm:mt-1.5 max-sm:text-[12px] max-sm:leading-[1.4]">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
