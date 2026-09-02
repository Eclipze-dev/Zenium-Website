import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionFeatureGrid from "@/components/solutions/SolutionFeatureGrid";
import { outcomes } from "./aiAnalyticsData";

export default function AiAnalyticsOutcomesSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <div className="flex flex-col gap-[50px] rounded-[10px] border border-line bg-[#0A1725] p-[40px] max-sm:p-[24px]">
          <SectionIntro centered eyebrow="OUTCOMES">
            Better intelligence. Better decisions.{" "}
            <span className="text-orange text-h1">
              Better utility performance.
            </span>
          </SectionIntro>

          <SolutionFeatureGrid items={outcomes} bare />
        </div>
      </div>
    </section>
  );
}
