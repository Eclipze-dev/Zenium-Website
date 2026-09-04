import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionFeatureGrid from "@/components/solutions/SolutionFeatureGrid";
import { utilitiesContent } from "../../components/serveData";

export default function UtilitiesOverviewSection() {
  return (
    <section className="pb-[80px] pt-[40px] max-sm:pb-[28px] max-sm:pt-[28px]">
      <div className="container">
        <SectionIntro
          eyebrow={utilitiesContent.eyebrow}
          text={utilitiesContent.description}
          fullWidth
        >
          {utilitiesContent.title}{" "}
          <span className="text-orange text-h1 !mt-[10px]">{utilitiesContent.accent}</span>
        </SectionIntro>
      </div>
    </section>
  );
}

export function UtilitiesJourneySection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <h2 className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
          {utilitiesContent.journeyTitle}{" "}
          <span className="text-h1 text-orange">
            {utilitiesContent.journeyAccent}
          </span>
        </h2>

        <SolutionFeatureGrid items={utilitiesContent.journeySteps} />
      </div>
    </section>
  );
}
