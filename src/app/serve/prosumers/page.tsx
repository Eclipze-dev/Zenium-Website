import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
  ServeAudienceOverviewSection,
} from "../components/ServeAudienceSections";
import { prosumersContent } from "../components/serveData";

export default function ProsumersPage() {
  return (
    <>
      <ServeAudienceOverviewSection content={prosumersContent} />
      <ServeAudienceCapabilitiesSection
        content={prosumersContent}
        layout="wide-bottom"
      />
      <ServeAudienceCtaSection content={prosumersContent} />
    </>
  );
}
