import type { LucideIcon } from "@/components/icons/lucideIcons";
import { cn } from "@/lib/cn";
import {
  surfaceCardClass,
  surfaceCardLabel,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";

export default function SurfaceFeatureCard({
  icon: Icon,
  label,
  labelTone = "muted",
  title,
  text,
  additionalText,
  spacing = "journey",
  className,
  children,
}: {
  icon?: LucideIcon;
  label?: string;
  /** Journey uses muted labels; Insights uses orange type labels. */
  labelTone?: "muted" | "orange";
  title: string;
  text?: string;
  additionalText?: string;
  /**
   * journey — icon/title margins like the home Journey cards
   * stack — equal flex gaps like HES/MDM/AI capability cards
   */
  spacing?: "journey" | "stack";
  /** Use for grid spans, min-height, padding overrides, etc. */
  className?: string;
  children?: React.ReactNode;
}) {
  const isStack = spacing === "stack";

  return (
    <article
      className={surfaceCardClass(
        "min-w-0 rounded-[8px] p-[42px] max-lg:p-[32px] max-sm:p-[22px]",
        isStack &&
          "flex h-full flex-col items-start gap-[18px] p-8 max-sm:gap-[14px] max-sm:p-[22px] xl:p-[42px]",
        className,
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "h-6 w-6 shrink-0 text-orange max-sm:h-5 max-sm:w-5",
            !isStack && "mb-[20px] max-sm:mb-[14px]",
          )}
          strokeWidth={1.8}
        />
      )}

      {label && (
        <span
          className={cn(
            "block text-button uppercase max-sm:text-[12px]",
            labelTone === "orange"
              ? "pb-4 text-orange max-sm:pb-3"
              : cn("text-muted", surfaceCardLabel),
          )}
        >
          {label}
        </span>
      )}

      <h3
        className={cn(
          "text-h3 mx-0 max-lg:text-[20px] max-lg:leading-[1.25] max-sm:text-[18px] max-sm:leading-[1.25]",
          isStack ? "m-0" : "my-[12px] mb-[16px] max-sm:my-[10px] max-sm:mb-[12px]",
          surfaceCardTitle,
        )}
      >
        {title}
      </h3>

      {text && (
        <p
          className={cn(
            "text-button m-0 text-muted max-sm:text-[13px] max-sm:leading-[1.45]",
            surfaceCardMuted,
            children && "flex-1",
          )}
        >
          {text}
        </p>
      )}

      {additionalText && (
        <p
          className={cn(
            "text-button m-0 text-muted max-sm:text-[13px] max-sm:leading-[1.45]",
            surfaceCardMuted,
          )}
        >
          {additionalText}
        </p>
      )}

      {children}
    </article>
  );
}
