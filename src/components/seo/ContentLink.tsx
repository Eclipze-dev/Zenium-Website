import Link from "next/link";
import { cn } from "@/lib/cn";

export function ContentLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "!text-inherit !underline decoration-orange/50 underline-offset-2 transition-colors duration-200 hover:!text-orange",
        className,
      )}
    >
      {children}
    </Link>
  );
}
