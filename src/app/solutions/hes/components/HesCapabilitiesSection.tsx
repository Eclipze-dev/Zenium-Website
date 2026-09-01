import SectionIntro from "@/app/home/components/SectionIntro";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import { capabilities } from "./hesData";

export default function HesCapabilitiesSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro centered eyebrow="CORE CAPABILITIES">
          Connect, collect and <span className="text-orange text-h1">control.</span>
        </SectionIntro>

        <div className="grid grid-cols-3 gap-[10px]">
          {capabilities.map(([Icon, title, description, additionalDescription]) => (
            <article
              key={title}
              className={surfaceCardClass(
                "flex h-full flex-col items-start gap-[18px] rounded-[8px] p-8 xl:p-[42px]",
              )}
            >
              <Icon className="h-6 w-6 text-orange" strokeWidth={1.8} />
              <h3 className={`text-h3 m-0 ${surfaceCardTitle}`}>{title}</h3>
              <p className={`text-button text-muted m-0 ${surfaceCardMuted}`}>{description}</p>
              {additionalDescription && (
                <p className={`text-button text-muted m-0 ${surfaceCardMuted}`}>
                  {additionalDescription}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
