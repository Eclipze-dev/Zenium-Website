import SectionIntro from "@/app/home/components/SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import { capabilities } from "./hesData";
import ShimmerText from "@/components/ShimmerText";

export default function HesCapabilitiesSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px] max-lg:gap-[36px]">
        <SectionIntro centered eyebrow="CORE CAPABILITIES">
          Connect, collect and <ShimmerText>control.</ShimmerText>
        </SectionIntro>

        <div className="grid grid-cols-3 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {capabilities.map(([Icon, title, description, additionalDescription]) => (
            <SurfaceFeatureCard
              key={title}
              icon={Icon}
              title={title}
              text={description}
              additionalText={additionalDescription}
              spacing="stack"
              className="max-sm:min-h-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
