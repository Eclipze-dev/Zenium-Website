import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./partnersData";

export default function PartnersStatsSection() {
  return (
    <section className="pb-[20px] max-md:pb-[48px]">
      <div className="container">
        <SolutionHeroStats items={statistics} variant="ruled" />
      </div>
    </section>
  );
}
