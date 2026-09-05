import SectionIntro from "./SectionIntro";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { metrics } from "./homeData";

export default function MetricsSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]" id="solutions">
      <div className="container relative z-[2]">
        <SectionIntro centered eyebrow="PROVEN AT UTILITY SCALE">
          Built on real-world utility{` `}
          <span className="text-orange text-h2 shimmer-text">experience.</span>
        </SectionIntro>
        <div className="mt-[75px]">
          <SolutionHeroStats items={metrics} variant="ruled" />
        </div>
      </div>
    </section>
  );
}
