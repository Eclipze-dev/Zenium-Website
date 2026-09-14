import { cn } from "@/lib/cn";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Orange status pill with blinking dot — reusable page/section eyebrow.
 */
export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-[4px] border border-[rgba(240,127,37,0.35)] bg-[rgba(240,127,37,0.06)] px-3 py-1.5 max-sm:gap-1.5 max-sm:px-2.5 max-sm:py-1",
        className,
      )}
    >
      <span
        className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F07F25] animate-blink motion-reduce:animate-none max-sm:h-1 max-sm:w-1"
        aria-hidden
      />
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F07F25] max-sm:text-[9px] max-sm:tracking-[0.14em]">
        {children}
      </span>
    </div>
  );
}
