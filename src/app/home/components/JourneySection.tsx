import { journey } from "./homeData";
import SectionIntro from "./SectionIntro";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";

export default function JourneySection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container relative z-[2]">
        <SectionIntro
          centered
          singleLine
          fullWidth
          eyebrow="ONE CONNECTED INTELLIGENCE JOURNEY"
          text="Zenium connects the utility data journey end to end — collecting data through HES, creating a trusted foundation in MDM, and building toward deeper analytics and intelligence."
        >
          From meter to insight. From insight to{` `}<span className="text-orange text-h2 shimmer-text">action.</span>
        </SectionIntro>
        <div className="mt-[75px] grid grid-cols-4 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {journey.map(({ label, title, text, icon }) => (
            <SurfaceFeatureCard
              key={label}
              icon={icon}
              label={label}
              title={title}
              text={text}
              className="min-h-[280px] max-sm:min-h-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
