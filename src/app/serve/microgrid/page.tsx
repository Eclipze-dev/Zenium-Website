import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { microgridContent } from "../components/serveData";

export default function MicrogridPage() {
  return (
    <>
      <ServeAudienceCapabilitiesSection content={microgridContent} />
      <ServeAudienceCtaSection content={microgridContent} />
    </>
  );
}
