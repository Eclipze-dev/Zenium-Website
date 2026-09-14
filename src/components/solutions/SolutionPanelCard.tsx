import { cn } from "@/lib/cn";

export default function SolutionPanelCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[75px] self-stretch rounded-[20px] border border-[#152D48] bg-[#0A1725] p-[30px] max-lg:gap-[36px] max-lg:p-[24px] max-sm:gap-[28px] max-sm:rounded-[16px] max-sm:p-[18px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
