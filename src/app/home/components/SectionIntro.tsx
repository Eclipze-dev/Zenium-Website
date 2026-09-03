import { cn } from "@/lib/cn";

export default function SectionIntro({
  eyebrow,
  children,
  text,
  centered = false,
  singleLine = false,
  fullWidth = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  text?: string;
  centered?: boolean;
  singleLine?: boolean;
  /** Override section-heading max-width so text can span the full container. */
  fullWidth?: boolean;
}) {
  return (
    <header
      className={cn(
        "section-heading",
        centered && "mx-auto text-center",
        fullWidth && "max-w-none w-full",
      )}
    >
      <p className="text-h4 tracking-eyebrow mb-[clamp(12px,1.5vw,10px)] text-zen-text">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "tracking-[0] m-0 max-sm:text-[clamp(28px,7vw,36px)] [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold",
          singleLine
            ? "text-[clamp(24px,3.2vw,40px)] whitespace-nowrap max-sm:whitespace-normal"
            : "text-h1",
        )}
      >
        {children}
      </h2>
      {text && <p className="text-muted text-p1 mt-[20px]">{text}</p>}
    </header>
  );
}
