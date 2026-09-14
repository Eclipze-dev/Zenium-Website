import { partners } from "./homeData";
import SectionIntro from "./SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import ShimmerText from "@/components/ShimmerText";

export default function PartnersSection() {
  return (
    <section
      className="py-[80px] text-center max-lg:py-[48px] max-sm:py-[70px]"
      id="partners"
    >
      <div className="container">
        <SectionIntro
          centered
          fullWidth
          eyebrow="PARTNERS"
          text="Utility transformation takes an ecosystem. Zenium works with technology and implementation partners to bring together the capabilities required to deliver complex utility programs at scale."
        >
          Better utility transformation, <ShimmerText>together.</ShimmerText>
        </SectionIntro>
        <div className="mt-[75px] grid grid-cols-3 gap-[10px] text-left max-lg:mt-[40px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {partners.map(([Icon, title, text]) => (
            <SurfaceFeatureCard
              key={title}
              icon={Icon}
              title={title}
              text={text}
              className="min-h-[300px] max-lg:min-h-[240px] max-sm:min-h-0 max-lg:last:col-span-2 max-sm:last:col-span-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
