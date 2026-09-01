import { journey } from "./homeData";
import {
  surfaceCardClass,
  surfaceCardLabel,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import SectionIntro from "./SectionIntro";

export default function JourneySection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container relative z-[2]">
        <SectionIntro
          centered
          eyebrow="ONE CONNECTED INTELLIGENCE JOURNEY"
          text="Zenium connects the utility data journey end to end — collecting data through HES, creating a trusted foundation in MDM, and building toward deeper analytics and intelligence."
        >
          From meter to insight. From insight to{` `}<span className="text-orange text-h1">action.</span>
        </SectionIntro>
        <div className="grid grid-cols-4 gap-[10px] mt-[75px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {journey.map(({ label, title, text, icon: Icon }) => (
            <article
              key={label}
              className={surfaceCardClass(
                "min-w-0 rounded-[8px] p-[42px] min-h-[280px] max-sm:p-[28px] max-sm:min-h-0",
              )}
            >
              <Icon className="mb-[20px] h-6 w-6 text-orange" strokeWidth={1.8} />
              <span className={`block text-button uppercase text-muted ${surfaceCardLabel}`}>
                {label}
              </span>
              <h3 className={`text-h3 my-[12px] mx-0 mb-[16px] ${surfaceCardTitle}`}>
                {title}
              </h3>
              <p className={`text-button text-muted m-0 ${surfaceCardMuted}`}>
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
