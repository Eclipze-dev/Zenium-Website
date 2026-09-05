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
  return (
    <div className="hero-stats inline-flex max-w-full flex-wrap items-stretch gap-y-4 rounded-[8px] border border-black/80 bg-black/80 backdrop-blur-[0.5px] p-5 max-sm:flex-col max-sm:gap-y-0">
      {items.map(([, value, description], i) => (
        <div
          key={`hero-stat-${value}`}
          className={cn(
            "hero-stats__item shrink-0 px-5 py-2 first:pl-2 last:pr-2 max-sm:w-full max-sm:px-2 max-sm:py-4",
            i > 0 && "border-l border-line max-sm:border-l-0 max-sm:border-t",
          )}
        >
          <span className="hero-stats__value block whitespace-nowrap text-left text-h3 !font-normal text-zen-text">
            {value}
          </span>
          <p className="hero-stats__label mt-[10px] text-left text-button text-muted">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}
