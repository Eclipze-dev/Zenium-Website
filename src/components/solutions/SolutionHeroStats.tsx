import type { LucideIcon } from "lucide-react";

export default function SolutionHeroStats({
  items,
}: {
  items: ReadonlyArray<readonly [LucideIcon, string, string]>;
}) {
  return (
    <div className="grid grid-flow-row grid-cols-2 grid-rows-[minmax(0,4fr)_minmax(0,4fr)] gap-x-[25px] gap-y-[25px] flex-1 self-stretch">
      {items.map(([Icon, value, description]) => (
        <div
          key={value}
          className="flex min-h-[118px] flex-col justify-center rounded-[10px] bg-box p-[25px] transition-all duration-250 hover:bg-hover-surface"
        >
          <Icon className="h-7 w-7 text-orange" strokeWidth={1.8} />
          <span className="mt-5 text-h3 text-zen-text">{value}</span>
          <p className="mt-5 text-button text-zen-text">{description}</p>
        </div>
      ))}
    </div>
  );
}
