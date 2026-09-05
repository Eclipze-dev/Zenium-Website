import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionFeatureGrid from "@/components/solutions/SolutionFeatureGrid";
import { deploymentFeatures } from "./mdmData";

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
          <span className="text-orange text-h2 shimmer-text">deployment-flexible</span>
        </SectionIntro>

        <SolutionFeatureGrid items={deploymentFeatures} />
      </div>
    </section>
  );
}
