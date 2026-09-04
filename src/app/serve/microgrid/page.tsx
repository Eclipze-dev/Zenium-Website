import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
  ServeAudienceOverviewSection,
} from "../components/ServeAudienceSections";
import { microgridContent } from "../components/serveData";

export default function MicrogridPage() {
  return (
    <>
      <ServeAudienceOverviewSection content={microgridContent} />
      <ServeAudienceCapabilitiesSection content={microgridContent} />
      <ServeAudienceCtaSection content={microgridContent} />
    </>
  );
}
