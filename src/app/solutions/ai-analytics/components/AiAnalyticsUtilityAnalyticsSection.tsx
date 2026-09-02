import SectionIntro from "@/app/home/components/SectionIntro";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import { utilityAnalyticsItems } from "./aiAnalyticsData";

export default function AiAnalyticsUtilityAnalyticsSection() {
  const topRow = utilityAnalyticsItems.slice(0, 3);
  const bottomRow = utilityAnalyticsItems.slice(3, 6);

  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
      <SectionIntro centered eyebrow="UTILITY ANALYTICS" singleLine>
        Intelligence across the{" "}
        <span className="text-orange">utility value chain.</span>
      </SectionIntro>

        {/* Top row - image shifts up inside the box */}
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 xl:grid-cols-3">
          {topRow.map((item) => (
            <article
              key={item.title}
              className={surfaceCardClass(
                "flex h-full flex-col items-stretch gap-[18px] rounded-[8px] p-6 xl:p-8",
              )}
            >
              <div className="h-[240px] w-full overflow-hidden rounded-[8px] bg-white">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full -translate-y-6 object-contain"
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

        {/* Bottom row - image shifts down inside the box */}
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 xl:grid-cols-3">
          {bottomRow.map((item) => (
            <article
              key={item.title}
              className={surfaceCardClass(
                "flex h-full flex-col items-stretch gap-[18px] rounded-[8px] p-6 xl:p-8",
              )}
            >
              <div className="h-[240px] w-full overflow-hidden rounded-[8px] bg-white">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full translate-y-6 object-contain"
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