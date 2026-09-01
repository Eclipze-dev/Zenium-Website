import { partners } from "./homeData";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import SectionIntro from "./SectionIntro";

export default function PartnersSection() {
  return (
    <section
      className="py-[80px] text-center max-sm:py-[70px]"
      id="partners"
    >
      <div className="container">
        <SectionIntro
          centered
          eyebrow="PARTNERS"
          text="Utility transformation takes an ecosystem. Zenium works with technology and implementation partners to bring together the capabilities required to deliver complex utility programs at scale."
        >
          Better utility transformation, <span className="text-orange text-h1">together.</span>
        </SectionIntro>
        <div className="grid grid-cols-3 gap-[10px] mt-[75px] text-left max-md:grid-cols-2 max-sm:grid-cols-1">
          {partners.map(([Icon, title, text]) => (
            <article
              key={title}
              className={surfaceCardClass(
                "min-w-0 rounded-[8px] p-[42px] min-h-[300px] max-sm:p-[28px] max-sm:min-h-0",
              )}
            >
              <Icon className="mb-[20px] h-6 w-6 text-orange" strokeWidth={1.8} />
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
