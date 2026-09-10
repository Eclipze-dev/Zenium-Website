import { cn } from "@/lib/cn";
import ShimmerText from "@/components/ShimmerText";

type PrivacySectionHeadingProps = {
  id: string;
  title: string;
  accent: string;
  /** Applied to the heading; defaults to text-h1. */
  className?: string;
  /** Passed to ShimmerText size; defaults to text-h2. */
  textClassName?: string;
};

export default function PrivacySectionHeading({
  id,
  title,
  accent,
  className = "text-h1",
  textClassName,
}: PrivacySectionHeadingProps) {
  return (
    <h2 id={id} className={cn("m-0 text-common", className)}>
      {title}{" "}
      <ShimmerText textClassName={textClassName}>{accent}</ShimmerText>
    </h2>
  );
}
