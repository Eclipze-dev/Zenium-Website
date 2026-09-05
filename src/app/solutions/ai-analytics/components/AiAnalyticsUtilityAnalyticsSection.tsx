import SectionIntro from "@/app/home/components/SectionIntro";
import OptimizedImage from "@/components/OptimizedImage";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import { utilityAnalyticsItems } from "./aiAnalyticsData";

const AiAnalyticsUtilityAnalyticsSection = () => {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro centered singleLine eyebrow="UTILITY ANALYTICS">
          Intelligence across the{" "}
          <span className="text-orange text-h2 shimmer-text">utility value chain.</span>
        </SectionIntro>

        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 xl:grid-cols-3">
          {utilityAnalyticsItems.map((item) => (
            <article
              key={item.title}
              className={surfaceCardClass(
                "flex h-full flex-col items-stretch gap-[18px] rounded-[8px] p-6 xl:p-8",
              )}
            >
              <div className="relative h-[240px] overflow-hidden rounded-[8px] bg-white">
                <OptimizedImage
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-contain"
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
};

export default AiAnalyticsUtilityAnalyticsSection;
