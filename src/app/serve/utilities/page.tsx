import { UtilitiesJourneySection } from "./components/UtilitiesContentSections";
import {
  UtilitiesAmiNextSection,
  UtilitiesPrioritiesSection,
  UtilitiesSolutionsSection,
} from "./components/UtilitiesClosingSections";

export default function UtilitiesPage() {
  return (
    <>
      <UtilitiesJourneySection />
      <UtilitiesSolutionsSection />
      <UtilitiesPrioritiesSection />
      <UtilitiesAmiNextSection />
    </>
  );
}
