import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";
import ShimmerText from "@/components/ShimmerText";
import { ContentLink } from "@/components/seo/ContentLink";

export default function MdmOverviewSection() {
  return (
    <SolutionFeaturePanel
      eyebrow="ZENIUM MDM"
      image="/solutions/zenium-mdm.webp"
      imageAlt="Zenium Meter Data Management System"
      title={
        <>
            Trusted data for {" "}
          <ShimmerText as="p">energy operations.</ShimmerText>
        </>
      }
    >
      <p>Smart-metering programmes generate large volumes of data from different meters, systems and time intervals. 
        Its value depends on whether the data is complete, consistent and ready to use.</p>
      <p>
        Zenium MDM receives data from multiple{" "}
        <ContentLink href="/solutions/hes">HES</ContentLink> platforms and other authorised sources, applies 
        quality controls and makes trusted information available to billing, customer, 
        operational and{" "}
        <ContentLink href="/solutions/ai-analytics">analytics</ContentLink> applications. 
      </p>
    </SolutionFeaturePanel>
  );
}
