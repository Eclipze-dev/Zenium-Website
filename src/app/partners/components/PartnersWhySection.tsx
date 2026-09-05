import SectionIntro from "@/app/home/components/SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import { whySteps } from "./partnersData";

export default function PartnersWhySection() {
  return (
    <section className="py-[80px] max-sm:py-[70px] bg-zenbg" id="why-zenium">
      <div className="container grid grid-cols-[450px_1fr] gap-[60px] items-center max-lg:grid-cols-1 max-lg:gap-[40px]">
        <div className="min-w-0">
          <SectionIntro eyebrow="WHY ZENIUM">
            Proven technology.{" "}
            <span className="text-orange text-h2 shimmer-text">Practical partnership.</span>
          </SectionIntro>
          <p className="text-muted text-p1 my-[20px] mb-[26px]">
            Successful smart-metering programmes depend on technology that
            works across products, providers and operating environments.
            Zenium combines proven HES and MDM capabilities with
            utility-domain knowledge gained through experience in complex,
            large-scale smart-metering environments.
          </p>
        </div>

        <div className="min-w-0 grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
          {whySteps.map(({ label, title, text, icon }) => (
            <SurfaceFeatureCard
              key={label}
              icon={icon}
              label={label}
              title={title}
              text={text}
              className="min-h-[260px] p-[35px] max-sm:min-h-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}