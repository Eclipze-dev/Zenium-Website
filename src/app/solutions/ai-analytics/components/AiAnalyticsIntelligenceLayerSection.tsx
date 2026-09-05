import SectionIntro from "@/app/home/components/SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import { intelligenceLayerItems } from "./aiAnalyticsData";

export default function AiAnalyticsIntelligenceLayerSection() {
  const topRow = intelligenceLayerItems.slice(0, 3);
  const bottomRow = intelligenceLayerItems.slice(3);

  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro
          centered
          fullWidth
          eyebrow="THE INTELLIGENCE LAYER"
          text="Zenium brings together meter, consumer, asset, network and operational data into a structured intelligence layer designed for analysis, prediction and decision support."
        >
          One intelligence layer for connected{" "}
          <span className="text-orange text-h2 shimmer-text">utility operations.</span>
        </SectionIntro>

        <div className="flex flex-col gap-[10px]">
          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3">
            {topRow.map(([Icon, title, description]) => (
              <SurfaceFeatureCard
                key={title}
                icon={Icon}
                title={title}
                text={description}
                spacing="stack"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
            {bottomRow.map(([Icon, title, description]) => (
              <SurfaceFeatureCard
                key={title}
                icon={Icon}
                title={title}
                text={description}
                spacing="stack"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
