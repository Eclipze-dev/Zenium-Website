import SectionIntro from "@/app/home/components/SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import { intelligenceLayerItems } from "./aiAnalyticsData";
import ShimmerText from "@/components/ShimmerText";

export default function AiAnalyticsIntelligenceLayerSection() {
  const topRow = intelligenceLayerItems.slice(0, 3);
  const bottomRow = intelligenceLayerItems.slice(3);

  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px] max-lg:gap-[36px]">
        <SectionIntro
          centered
          fullWidth
          eyebrow="THE INTELLIGENCE LAYER"
          text="Zenium brings together meter, consumer, asset, network and operational data into a structured intelligence layer designed for analysis, prediction and decision support."
        >
          One intelligence layer for connected{" "}
          <ShimmerText>utility operations.</ShimmerText>
        </SectionIntro>

        <div className="flex flex-col gap-[10px]">
          {/* Desktop: 3 + 2 */}
          <div className="hidden gap-[10px] lg:grid lg:grid-cols-3">
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
          <div className="hidden gap-[10px] lg:grid lg:grid-cols-2">
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

          {/* Tablet only: 2 × 2 × 1 (last card full width) */}
          <div className="hidden max-lg:grid max-sm:hidden grid-cols-2 gap-[10px]">
            {intelligenceLayerItems.map(([Icon, title, description], index) => (
              <SurfaceFeatureCard
                key={`tablet-${title}`}
                icon={Icon}
                title={title}
                text={description}
                spacing="stack"
                className={
                  index === intelligenceLayerItems.length - 1
                    ? "col-span-2"
                    : undefined
                }
              />
            ))}
          </div>

          {/* Mobile only: one column for all cards */}
          <div className="grid grid-cols-1 gap-[10px] sm:hidden">
            {intelligenceLayerItems.map(([Icon, title, description]) => (
              <SurfaceFeatureCard
                key={`mobile-${title}`}
                icon={Icon}
                title={title}
                text={description}
                spacing="stack"
                className="min-h-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
