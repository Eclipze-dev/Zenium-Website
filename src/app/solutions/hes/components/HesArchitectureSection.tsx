import SectionIntro from "@/app/home/components/SectionIntro";
import { deploymentFeatures } from "./hesData";

export default function HesArchitectureSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro
          centered
          eyebrow="ARCHITECTURE AND DEPLOYMENT"
          text="Built on a microservices-based, containerised architecture, Zenium HES can be deployed in cloud, on-premise or hybrid environments. Its distributed architecture supports growing meter populations and data volumes, while high availability, load balancing, failover and disaster recovery help maintain continuous operations."
        >
          Open, scalable and{" "}
          <span className="text-orange text-h1">deployment-flexible</span>
        </SectionIntro>

        <div className="grid rounded-[10px] border border-line bg-box p-[20px] md:grid-cols-2 xl:grid-cols-4">
          {deploymentFeatures.map(([Icon, title, description]) => (
            <article
              key={title}
              className="flex min-h-[230px] flex-col justify-center gap-[15px] border-[#FFFFFF]/35 px-[30px] md:border-l md:first:border-l-0 max-md:min-h-0 max-md:border-t max-md:border-line max-md:px-0 max-md:py-8 max-md:first:border-t-0 max-md:first:pt-0"
            >
              <Icon className="h-[38px] w-[38px] text-orange" strokeWidth={1.8} />
              <h3 className="text-h3 m-0 text-white/70">{title}</h3>
              <p className="text-button text-muted m-0">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
