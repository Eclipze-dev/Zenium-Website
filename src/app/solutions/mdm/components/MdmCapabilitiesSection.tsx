import SectionIntro from "@/app/home/components/SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import { capabilities } from "./mdmData";
import ShimmerText from "@/components/ShimmerText";

export default function MdmCapabilitiesSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro centered eyebrow="CORE CAPABILITIES">
          From meter data to <ShimmerText>revenue and consumer services</ShimmerText>
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
