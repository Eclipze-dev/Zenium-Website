import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionFeatureGrid from "@/components/solutions/SolutionFeatureGrid";
import { deploymentFeatures } from "./hesData";

export default function HesArchitectureSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro
          centered
          singleLine
          eyebrow="ARCHITECTURE AND DEPLOYMENT"
          text="Built on a microservices-based, containerised architecture, Zenium HES can be deployed in cloud, on-premise or hybrid environments. Its distributed architecture supports growing meter populations and data volumes, while high availability, load balancing, failover and disaster recovery help maintain continuous operations."
        >
          Open, scalable and{" "}
          <span className="text-orange text-h1">deployment-flexible</span>
        </SectionIntro>

        <SolutionFeatureGrid items={deploymentFeatures} />
      </div>
    </section>
  );
}
