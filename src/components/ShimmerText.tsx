import { cn } from "@/lib/cn";

type ShimmerTextProps = {
  children: React.ReactNode;
  className?: string;
  /** Defaults to text-h2. Pass e.g. text-h5 to override size on a single page. */
  textClassName?: string;
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
  textClassName = "text-h2",
  as: Tag = "span",
}: ShimmerTextProps) {
  return (
    <Tag
      className={cn(
        "text-orange",
        textClassName,
        Tag === "p" && "inline",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
