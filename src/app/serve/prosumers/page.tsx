import {
  ServeAudienceCapabilitiesSection,
  ServeAudienceCtaSection,
} from "../components/ServeAudienceSections";
import { prosumersContent } from "../components/serveData";

export default function ProsumersPage() {
  return (
    <>
      <ServeAudienceCapabilitiesSection
        content={prosumersContent}
        layout="wide-bottom"
      />
      <ServeAudienceCtaSection content={prosumersContent} />
    </>
  );
}
