import type { LucideIcon } from "lucide-react";
import { surfaceCardClass } from "@/lib/surfaceCard";
import { cn } from "@/lib/cn";

export default function SolutionHeroStats({
  items,
  variant = "cards",
}: {
  items: ReadonlyArray<readonly [LucideIcon, string, string]>;
  variant?: "cards" | "ruled";
}) {
  if (variant === "ruled") {
    return (
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {items.map(([, value, description], i) => (
          <div
            key={`ruled-${value}`}
            className={cn(
              "min-w-0 px-5 py-3",
              i > 0 && "border-l border-line",
              "max-lg:[&:nth-child(odd)]:border-l-0 max-lg:[&:nth-child(n+3)]:border-t max-lg:[&:nth-child(n+3)]:border-line",
              "max-sm:border-l-0 max-sm:border-t max-sm:pt-5 max-sm:first:border-t-0 max-sm:first:pt-3",
            )}
          >
            <span className="block text-center text-p2 text-zen-text">
              {value}
            </span>
            <p className="mt-[14px] text-center text-button text-muted">
              {description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-flow-row grid-cols-2 grid-rows-[minmax(0,4fr)_minmax(0,4fr)] gap-x-[25px] gap-y-[25px] flex-1 self-stretch">
      {items.map(([Icon, value, description]) => (
        <div
          key={value}
          className={surfaceCardClass(
            "flex min-h-[118px] flex-col justify-center rounded-[10px] p-[25px]",
          )}
        >
          <Icon className="h-6 w-6 text-orange" strokeWidth={1.8} />
          <span className="mt-5 text-h3 text-zen-text">{value}</span>
          <p className="mt-5 text-button text-zen-text">{description}</p>
        </div>
      ))}
    </div>
  );
}
