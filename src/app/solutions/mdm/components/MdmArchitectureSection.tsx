import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionFeatureGrid from "@/components/solutions/SolutionFeatureGrid";
import { deploymentFeatures } from "./mdmData";
import ShimmerText from "@/components/ShimmerText";

export default function MdmArchitectureSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro
          centered
          singleLine
          fullWidth
          eyebrow="ARCHITECTURE AND DEPLOYMENT"
          text="Built on a microservices-based, containerised architecture, Zenium MDM can be deployed in cloud, on-premise or hybrid environments. The platform supports growing meter populations and historical data volumes, while high availability and disaster recovery help protect business-critical operations."
        >
          Open, scalable and{" "}
          <ShimmerText>deployment-flexible</ShimmerText>
        </SectionIntro>

        <SolutionFeatureGrid items={deploymentFeatures} />
      </div>
    </section>
  );
}
