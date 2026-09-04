import UtilitiesOverviewSection, {
  UtilitiesJourneySection,
} from "./components/UtilitiesContentSections";
import {
  UtilitiesAmiNextSection,
  UtilitiesPrioritiesSection,
  UtilitiesSolutionsSection,
} from "./components/UtilitiesClosingSections";

export default function UtilitiesPage() {
  return (
    <>
      <UtilitiesOverviewSection />
      <UtilitiesJourneySection />
      <UtilitiesSolutionsSection />
      <UtilitiesPrioritiesSection />
      <UtilitiesAmiNextSection />
    </>
  );
}
