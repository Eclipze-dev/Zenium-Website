import { cn } from "@/lib/cn";

type ShimmerTextProps = {
  children: React.ReactNode;
  className?: string;
  /** Defaults to span; use "p" when the accent must be a paragraph. */
  as?: "span" | "p";
};

/**
 * Shared orange shimmer accent used in section titles.
 * Change styles here to update all pages at once.
 */
export default function ShimmerText({
  children,
  className,
  as: Tag = "span",
}: ShimmerTextProps) {
  return (
    <Tag
      className={cn(
        "text-orange text-h2",
        Tag === "p" && "inline",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
