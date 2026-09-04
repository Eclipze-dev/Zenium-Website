import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { commercialContent } from "../components/serveData";

export default function CommercialPage() {
  return (
    <>
      <ServeAudienceCapabilitiesSection content={commercialContent} />
      <ServeAudienceCtaSection content={commercialContent} />
    </>
  );
}
