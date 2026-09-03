import SectionIntro from "@/app/home/components/SectionIntro";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import { utilityAnalyticsItems } from "./aiAnalyticsData";

export default function AiAnalyticsUtilityAnalyticsSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro centered singleLine eyebrow="UTILITY ANALYTICS">
          Intelligence across the{" "}
          <span className="text-orange text-h1">utility value chain.</span>
        </SectionIntro>

        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 xl:grid-cols-3">
          {utilityAnalyticsItems.map((item) => (
            <article
              key={item.title}
              className={surfaceCardClass(
                "flex h-full flex-col items-stretch gap-[18px] rounded-[8px] p-6 xl:p-8",
              )}
            >
              <div className="overflow-hidden rounded-[8px] bg-white">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-[240px] w-full object-contain"
                />
              </div>
              <h3 className={`text-h3 m-0 ${surfaceCardTitle}`}>{item.title}</h3>
              <p className={`text-button m-0 text-muted ${surfaceCardMuted}`}>
                {item.description}
              </p>
              {"additionalDescription" in item && item.additionalDescription && (
                <p className={`text-button m-0 text-muted ${surfaceCardMuted}`}>
                  {item.additionalDescription}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}