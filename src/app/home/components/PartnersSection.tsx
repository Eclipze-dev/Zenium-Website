import { partners } from "./homeData";
import SectionIntro from "./SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";

export default function PartnersSection() {
  return (
    <section
      className="py-[80px] text-center max-sm:py-[70px]"
      id="partners"
    >
      <div className="container">
        <SectionIntro
          centered
          fullWidth
          eyebrow="PARTNERS"
          text="Utility transformation takes an ecosystem. Zenium works with technology and implementation partners to bring together the capabilities required to deliver complex utility programs at scale."
        >
          Better utility transformation, <span className="text-orange text-h2 shimmer-text">together.</span>
        </SectionIntro>
        <div className="mt-[75px] grid grid-cols-3 gap-[10px] text-left max-md:grid-cols-2 max-sm:grid-cols-1">
          {partners.map(([Icon, title, text]) => (
            <SurfaceFeatureCard
              key={title}
              icon={Icon}
              title={title}
              text={text}
              className="min-h-[300px] max-sm:min-h-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
