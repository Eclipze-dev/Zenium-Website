import SectionIntro from "@/app/home/components/SectionIntro";
import { capabilities } from "./mdmData";

export default function MdmCapabilitiesSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <SectionIntro centered eyebrow="CORE CAPABILITIES">
          From raw readings to <span className="text-orange text-h1">usable information.</span>
        </SectionIntro>

        <div className="grid grid-cols-3 gap-[10px]">
          {capabilities.map(([Icon, title, description, additionalDescription]) => (
            <article
              key={title}
              className="flex h-full flex-col items-start gap-[18px] rounded-[8px] bg-box p-8 transition-all duration-250 hover:bg-hover-surface hover:-translate-y-1 xl:p-[42px]"
            >
              <Icon className="h-7 w-7 text-orange" strokeWidth={1.8} />
              <h3 className="text-h3 uppercase m-0">{title}</h3>
              <p className="text-button text-muted m-0">{description}</p>
              {additionalDescription && (
                <p className="text-button text-muted m-0">{additionalDescription}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
