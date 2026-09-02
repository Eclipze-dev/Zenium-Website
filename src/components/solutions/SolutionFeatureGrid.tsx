import type { LucideIcon } from "lucide-react";
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
        !bare && "rounded-[10px] border border-line bg-box p-[20px]",
      )}
    >
      {items.map(([Icon, title, description]) => (
        <article
          key={title}
          className={cn(
            "relative flex min-h-[230px] flex-col justify-center gap-[15px] px-[30px]",
            "max-md:min-h-0 max-md:border-t max-md:border-line max-md:px-0 max-md:py-8 max-md:first:border-t-0 max-md:first:pt-0",
            "md:[&:not(:first-child)]:before:absolute md:[&:not(:first-child)]:before:left-0 md:[&:not(:first-child)]:before:top-[10%] md:[&:not(:first-child)]:before:bottom-[10%] md:[&:not(:first-child)]:before:w-px md:[&:not(:first-child)]:before:bg-[#FFFFFF]/35 md:[&:not(:first-child)]:before:content-['']",
          )}
        >
          <Icon className="h-6 w-6 text-orange" strokeWidth={1.8} />
          <h3 className="text-h3 m-0 text-white/70">{title}</h3>
          <p className="text-button text-muted m-0">{description}</p>
        </article>
      ))}
    </div>
  );
}
