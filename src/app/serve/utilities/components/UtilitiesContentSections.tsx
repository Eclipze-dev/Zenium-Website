import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionFeatureGrid from "@/components/solutions/SolutionFeatureGrid";
import { utilitiesContent } from "../../components/serveData";
import ShimmerText from "@/components/ShimmerText";

export default function UtilitiesOverviewSection() {
  return (
    <section className="py-[40px] max-lg:py-[32px] max-sm:py-[28px]">
      <div className="container">
        <SectionIntro
          eyebrow={utilitiesContent.eyebrow}
          text={utilitiesContent.description}
          fullWidth
        >
          {utilitiesContent.title}{" "}
          <ShimmerText className="!mt-[10px]">{utilitiesContent.accent}</ShimmerText>
        </SectionIntro>
      </div>
    </section>
  );
}

export function UtilitiesJourneySection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px] max-lg:gap-[36px]">
        <h2 className="text-h5 m-0">
          {utilitiesContent.journeyTitle}{" "}
          <span className="text-h5 text-orange">
            {utilitiesContent.journeyAccent}
          </span>
        </h2>

        <SolutionFeatureGrid items={utilitiesContent.journeySteps} />
      </div>
    </section>
  );
}
