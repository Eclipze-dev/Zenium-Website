import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionFeatureGrid from "@/components/solutions/SolutionFeatureGrid";
import { operationalTeams } from "./mdmData";

export default function MdmOperationalVisibilitySection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro
          centered
          eyebrow="OPERATIONAL VISIBILITY"
          text="Configurable dashboards, widgets and reports allow different teams to see the information relevant to their work."
        >
          Clear information for{" "}
          <span className="text-orange text-h2 shimmer-text">every team</span>
        </SectionIntro>

        <SolutionFeatureGrid items={operationalTeams} />
      </div>
    </section>
  );
}
