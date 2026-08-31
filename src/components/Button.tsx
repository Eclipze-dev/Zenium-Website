import { cn } from "@/lib/cn";

export default function Button({
  children,
  outline = false,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  outline?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-[6px] rounded-[3px] border px-[13px] py-[9px] text-button transition-all duration-200 hover:-translate-y-0.5 [&>svg]:block [&>svg]:shrink-0",
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
