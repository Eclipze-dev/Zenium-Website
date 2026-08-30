import { journey } from "./homeData";
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
          From meter to insight. From insight to <strong>action.</strong>
        </SectionIntro>
        <div className="grid grid-cols-4 gap-[10px] mt-[75px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {journey.map(({ label, title, text, icon: Icon }) => (
            <article
              key={label}
              className="min-w-0 bg-card rounded-[8px] p-[42px] min-h-[280px] transition-all duration-250 hover:bg-hover-surface hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0"
            >
              <Icon className="text-orange w-7 h-7 mb-[20px]" />
              <span className="text-supporting text-muted block">{label}</span>
              <h3 className="text-card-title my-[12px] mx-0 mb-[16px]">
                {title}
              </h3>
              <p className="text-muted text-body m-0">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
