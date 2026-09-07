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
        "inline-flex items-center gap-2 rounded-[4px] border border-[rgba(240,127,37,0.35)] bg-[rgba(240,127,37,0.06)] px-3 py-1.5",
        className,
      )}
    >
      <span
        className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F07F25] animate-blink motion-reduce:animate-none"
        aria-hidden
      />
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F07F25]">
        {children}
      </span>
    </div>
  );
}
