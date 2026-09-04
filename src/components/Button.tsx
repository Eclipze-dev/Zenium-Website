import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "@/components/icons/icons";

export default function Button({
  children,
  outline = false,
  href,
  onClick,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  outline?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** News-style orange text + arrow. Default keeps the filled/outline button. */
  variant?: "default" | "text";
}) {
  if (variant === "text") {
    const textClasses = cn(
      "inline-flex items-center gap-1.5 text-body font-medium !text-orange transition-colors duration-200",
      className,
    );

    const content = (
      <>
        {children}
        <ArrowRightIcon
          width={16}
          height={16}
          className="transition-transform duration-200"
        />
      </>
    );

    if (href) {
      return (
        <a href={href} className={textClasses}>
          {content}
        </a>
      );
    }

    return (
      <button type="button" onClick={onClick} className={textClasses}>
        {content}
      </button>
    );
  }

  const classes = cn(
    "inline-flex items-center justify-center gap-[6px] rounded-[3px] border px-[13px] py-[9px] text-button transition-all duration-200 [&>svg]:block [&>svg]:shrink-0",
    outline ? "button-secondary" : "button-primary",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
