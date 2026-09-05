import type { LucideIcon } from "@/components/icons/lucideIcons";
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
    const isFive = items.length === 5;

    return (
      <div
        className={cn(
          "grid border border-box p-10 bg-box rounded-[16px]",
          isFive
            ? "grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
            : "grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1",
        )}
      >
        {items.map(([, value, description], i) => (
          <div
            key={`ruled-${value}`}
            className={cn(
              "min-w-0 px-5 py-3",
              i > 0 && "border-l border-line",
              isFive
                ? [
                    "max-lg:[&:nth-child(3n+1)]:border-l-0 max-lg:[&:nth-child(n+4)]:border-t max-lg:[&:nth-child(n+4)]:border-line",
                    "max-md:[&:nth-child(odd)]:border-l-0 max-md:[&:nth-child(n+3)]:border-t max-md:[&:nth-child(n+3)]:border-line",
                  ]
                : [
                    "max-lg:[&:nth-child(odd)]:border-l-0 max-lg:[&:nth-child(n+3)]:border-t max-lg:[&:nth-child(n+3)]:border-line",
                  ],
              "max-sm:border-l-0 max-sm:border-t max-sm:pt-5 max-sm:first:border-t-0 max-sm:first:pt-3",
            )}
          >
            <span className="block text-center text-h5 !font-normal text-zen-text whitespace-nowrap">
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
