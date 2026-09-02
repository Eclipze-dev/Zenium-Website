import SectionIntro from "@/app/home/components/SectionIntro";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import { intelligenceLayerItems } from "./aiAnalyticsData";

export default function AiAnalyticsIntelligenceLayerSection() {
  const topRow = intelligenceLayerItems.slice(0, 3);
  const bottomRow = intelligenceLayerItems.slice(3);

  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro
          centered
          eyebrow="THE INTELLIGENCE LAYER"
          text="Zenium brings together meter, consumer, asset, network and operational data into a structured intelligence layer designed for analysis, prediction and decision support."
        >
          One intelligence layer for connected{" "}
          <span className="text-orange text-h1">utility operations.</span>
        </SectionIntro>

        <div className="flex flex-col gap-[10px]">
          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3">
            {topRow.map(([Icon, title, description]) => (
              <article
                key={title}
                className={surfaceCardClass(
                  "flex h-full flex-col items-start gap-[18px] rounded-[8px] p-8 xl:p-[42px]",
                )}
              >
                <Icon className="h-6 w-6 text-orange" strokeWidth={1.8} />
                <h3 className={`text-h3 m-0 uppercase ${surfaceCardTitle}`}>{title}</h3>
                <p className={`text-button m-0 text-muted ${surfaceCardMuted}`}>{description}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
            {bottomRow.map(([Icon, title, description]) => (
              <article
                key={title}
                className={surfaceCardClass(
                  "flex h-full flex-col items-start gap-[18px] rounded-[8px] p-8 xl:p-[42px]",
                )}
              >
                <Icon className="h-6 w-6 text-orange" strokeWidth={1.8} />
                <h3 className={`text-h3 m-0 uppercase ${surfaceCardTitle}`}>{title}</h3>
                <p className={`text-button m-0 text-muted ${surfaceCardMuted}`}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
