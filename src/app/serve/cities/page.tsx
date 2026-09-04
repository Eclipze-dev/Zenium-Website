import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
  ServeAudienceOverviewSection,
} from "../components/ServeAudienceSections";
import { citiesContent } from "../components/serveData";

export default function CitiesPage() {
  return (
    <>
      <ServeAudienceOverviewSection content={citiesContent} />
      <ServeAudienceCapabilitiesSection content={citiesContent} />
      <ServeAudienceCtaSection content={citiesContent} />
    </>
  );
}
