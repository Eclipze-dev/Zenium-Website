import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { citiesContent } from "../components/serveData";

export default function CitiesPage() {
  return (
    <>
      <ServeAudienceCapabilitiesSection content={citiesContent} />
      <ServeAudienceCtaSection content={citiesContent} />
    </>
  );
}
