import SectionIntro from "./SectionIntro";
import { metrics } from "./homeData";
import { cn } from "@/lib/cn";

export default function MetricsSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      id="solutions"
    >
      <div className="container relative z-[2]">
        <SectionIntro centered eyebrow="PROVEN AT UTILITY SCALE">
          Built on real-world utility{` `}<span className="text-orange text-h1">experience.</span>
        </SectionIntro>
        <div className="mt-[75px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-6 max-sm:grid-cols-1">
          {metrics.map(([Icon, value, label], i) => (
            <div
              key={value}
              className={cn(
                "min-w-0 px-[24px] border-l border-line max-md:border-l-0 max-md:border-t max-md:px-0 max-md:pt-[20px] max-md:[&:nth-child(-n+2)]:border-t-0 max-md:[&:nth-child(-n+2)]:pt-0",
                i === 0 && "border-l-0 pl-0",
              )}
            >
              <Icon className="h-7 w-7 text-orange" strokeWidth={1.8} />
              <b className="text-h3 text-white mt-5 block">
                {value}
              </b>
              <span className="text-p1 text-muted mt-[14px] block">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
