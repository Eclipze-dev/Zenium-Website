import SectionBadge from "@/components/SectionBadge";
import { cn } from "@/lib/cn";

export default function SectionIntro({
  eyebrow,
  children,
  text,
  centered = false,
  singleLine = false,
  fullWidth = false,
  badge = false,
  heading = "h2",
  headingId,
}: {
  eyebrow: string;
  children: React.ReactNode;
  text?: string;
  centered?: boolean;
  singleLine?: boolean;
  /** Override section-heading max-width so text can span the full container. */
  fullWidth?: boolean;
  /** Use SectionBadge for the eyebrow (home Who We Serve); default keeps text style. */
  badge?: boolean;
  heading?: "h1" | "h2";
  headingId?: string;
}) {
  return (
    <header
      className={cn(
        "section-heading",
        centered && "mx-auto text-center",
        fullWidth && "max-w-none w-full",
      )}
    >
      {badge ? (
        <SectionBadge className="mb-[clamp(12px,1.5vw,10px)] max-sm:mb-[10px]">
          {eyebrow}
        </SectionBadge>
      ) : (
        <p className="text-h4 tracking-eyebrow mb-[clamp(12px,1.5vw,10px)] text-zen-text max-sm:mb-[10px]">
          {eyebrow}
        </p>
      )}
      {heading === "h1" ? (
        <h1
          id={headingId}
          className={cn(
            "tracking-[0] m-0 [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold",
            singleLine
              ? "text-[clamp(24px,3.2vw,40px)] whitespace-nowrap max-lg:whitespace-normal max-lg:text-h1"
              : "text-h1",
          )}
        >
          {children}
        </h1>
      ) : (
        <h2
          className={cn(
            "tracking-[0] m-0 [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold",
            singleLine
              ? "text-[clamp(24px,3.2vw,40px)] whitespace-nowrap max-lg:whitespace-normal max-lg:text-h1"
              : "text-h1",
          )}
        >
          {children}
        </h2>
      )}
      {text && (
        <p className="text-muted text-p1 mt-[20px] max-sm:mt-[14px] max-sm:text-[14px] max-sm:leading-[1.5]">
          {text}
        </p>
      )}
    </header>
  );
}
