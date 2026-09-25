import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";
import ShimmerText from "@/components/ShimmerText";
import { ContentLink } from "@/components/seo/ContentLink";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function MdmOverviewSection() {
  return (
    <SolutionFeaturePanel
      eyebrow="ZENIUM MDMS"
      image="/solutions/zenium-mdm.webp"
      imageAlt="Zenium Meter Data Management System (MDMS)"
      title={
        <>
          Trusted data for <ShimmerText as="p">energy operations.</ShimmerText>
        </>
      }
    >
      <p>
        Smart-metering programmes generate large volumes of data from different
        meters, systems and time intervals. Its value depends on whether the data
        is complete, consistent and ready to use.
      </p>
      <p>
        Zenium Meter Data Management System (MDMS) receives data from multiple{" "}
        <ContentLink href={SOLUTION_PATHS.hes}>
          Head-End System (HES)
        </ContentLink>{" "}
        platforms and other authorised sources, applies Validation, Editing, and
        Estimation (VEE) quality controls, and makes trusted information available
        to billing, customer, operational and{" "}
        <ContentLink href={SOLUTION_PATHS.analytics}>
          advanced meter data analytics software for transformer load profiling
        </ContentLink>
        . When needed, automated disconnection commands are dispatched directly
        down to field devices through our{" "}
        <ContentLink href={SOLUTION_PATHS.hes}>
          Head-End System (HES)
        </ContentLink>
        .
      </p>
    </SolutionFeaturePanel>
  );
}
