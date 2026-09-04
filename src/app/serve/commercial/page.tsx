import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
  ServeAudienceOverviewSection,
} from "../components/ServeAudienceSections";
import { commercialContent } from "../components/serveData";

export default function CommercialPage() {
  return (
    <>
      <ServeAudienceOverviewSection content={commercialContent} />
      <ServeAudienceCapabilitiesSection content={commercialContent} />
      <ServeAudienceCtaSection content={commercialContent} />
    </>
  );
}
