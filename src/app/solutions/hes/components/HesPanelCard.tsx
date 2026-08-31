import { cn } from "@/lib/cn";

export default function HesPanelCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[75px] self-stretch rounded-[20px] border border-[#152D48] bg-[#0A1725] p-[30px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
