import SectionIntro from "@/app/home/components/SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import { capabilities } from "./mdmData";

export default function MdmCapabilitiesSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro centered singleLine eyebrow="CORE CAPABILITIES">
          From raw readings to <span className="text-orange text-h1">usable information.</span>
        </SectionIntro>

        <div className="grid grid-cols-3 gap-[10px]">
          {capabilities.map(([Icon, title, description, additionalDescription]) => (
            <SurfaceFeatureCard
              key={title}
              icon={Icon}
              title={title}
              text={description}
              additionalText={additionalDescription}
              spacing="stack"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
