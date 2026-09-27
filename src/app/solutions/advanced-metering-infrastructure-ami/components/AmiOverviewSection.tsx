import SectionIntro from "@/app/home/components/SectionIntro";
import { ContentLink } from "@/components/seo/ContentLink";
import ShimmerText from "@/components/ShimmerText";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import { SOLUTION_PATHS } from "@/lib/seo/paths";
import { amiArchitecture, amiCapabilities } from "./amiData";

export default function AmiOverviewSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-12">
        <div className="mx-auto max-w-auto text-center">
          <SectionIntro centered singleLine fullWidth eyebrow="AMI ARCHITECTURE">
            End-to-end Advanced Metering Infrastructure{" "}
            <ShimmerText>(AMI)</ShimmerText>
          </SectionIntro>
          <p className="mt-5 text-p1 text-muted">
            A utility-grade Advanced Metering Infrastructure (AMI) architecture
            connects smart field devices through multi-technology communication
            networks to a{" "}
            <ContentLink href={SOLUTION_PATHS.hes}>
              Head-End System (HES)
            </ContentLink>{" "}
            and a{" "}
            <ContentLink href={SOLUTION_PATHS.mdms}>
              Meter Data Management System (MDMS)
            </ContentLink>
            , with{" "}
            <ContentLink href={SOLUTION_PATHS.analytics}>
              advanced meter data analytics software for transformer load profiling
            </ContentLink>{" "}
            built on trusted interval data.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {[...amiArchitecture, ...amiCapabilities].map(([Icon, title, body]) => (
            <SurfaceFeatureCard
              key={title}
              icon={Icon}
              title={title}
              text={body}
              spacing="stack"
              className="max-sm:min-h-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
