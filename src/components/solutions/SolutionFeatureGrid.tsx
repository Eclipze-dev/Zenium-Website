import type { LucideIcon } from "@/components/icons/lucideIcons";
import { cn } from "@/lib/cn";

export default function SolutionFeatureGrid({
  items,
  bare = false,
}: {
  items: ReadonlyArray<readonly [LucideIcon, string, string]>;
  /** Skip the grid's own border/bg/padding, e.g. when nesting inside another card. */
  bare?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-2 xl:grid-cols-4",
        !bare && "rounded-[10px] border-line bg-box p-[20px] max-lg:p-4",
      )}
    >
      {items.map(([Icon, title, description]) => (
        <article
          key={title}
          className={cn(
            "relative flex min-h-[230px] flex-col justify-center gap-[15px] px-[30px] max-lg:min-h-0 max-lg:gap-3 max-lg:px-[18px] max-lg:py-6",
            "max-md:min-h-0 max-md:border-t max-md:border-line max-md:px-0 max-md:py-8 max-md:first:border-t-0 max-md:first:pt-0",
            // 2-col (md–xl): left rule on even cells, top rule on row 2
            "md:max-xl:[&:nth-child(even)]:before:absolute md:max-xl:[&:nth-child(even)]:before:bottom-[10%] md:max-xl:[&:nth-child(even)]:before:left-0 md:max-xl:[&:nth-child(even)]:before:top-[10%] md:max-xl:[&:nth-child(even)]:before:w-px md:max-xl:[&:nth-child(even)]:before:bg-[#FFFFFF]/35 md:max-xl:[&:nth-child(even)]:before:content-['']",
            "md:max-xl:[&:nth-child(n+3)]:border-t md:max-xl:[&:nth-child(n+3)]:border-line",
            // 4-col (xl+): left rule on every cell after the first
            "xl:[&:not(:first-child)]:before:absolute xl:[&:not(:first-child)]:before:bottom-[10%] xl:[&:not(:first-child)]:before:left-0 xl:[&:not(:first-child)]:before:top-[10%] xl:[&:not(:first-child)]:before:w-px xl:[&:not(:first-child)]:before:bg-[#FFFFFF]/35 xl:[&:not(:first-child)]:before:content-['']",
          )}
        >
          <Icon className="h-6 w-6 text-orange max-sm:h-5 max-sm:w-5" strokeWidth={1.8} />
          <h3 className="text-h3 m-0 text-white/70 max-lg:text-[18px] max-lg:leading-[1.25] max-sm:text-[16px]">
            {title}
          </h3>
          <p className="text-button text-muted m-0 max-lg:text-[13px] max-lg:leading-[1.45] max-sm:text-[12px] max-sm:leading-[1.45]">
            {description}
          </p>
        </article>
      ))}
    </div>
  );
}
