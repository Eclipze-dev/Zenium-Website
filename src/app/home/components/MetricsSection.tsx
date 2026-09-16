import SectionIntro from "./SectionIntro";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { metrics } from "./homeData";
import ShimmerText from "@/components/ShimmerText";

export default function MetricsSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]" id="solutions">
      <div className="container relative z-[2]">
        <SectionIntro centered eyebrow="PROVEN AT UTILITY SCALE">
          Zenium by the{" "}
          <ShimmerText>Numbers</ShimmerText>
        </SectionIntro>
        <div className="mt-[75px] max-lg:mt-[40px]">
          <SolutionHeroStats items={metrics} variant="ruled" />
        </div>
      </div>
    </section>
  );
}
