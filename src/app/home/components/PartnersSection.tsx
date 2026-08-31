import { Network, Radio, ShieldCheck } from "lucide-react";
import { partners } from "./homeData";
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
          {partners.map(([title, text], index) => {
            const PartnerIcon = [Radio, Network, ShieldCheck][index];
            return (
              <article
                key={title}
                className="min-w-0 bg-box rounded-[8px] p-[42px] min-h-[300px] transition-all duration-250 hover:bg-hover-surface hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0"
              >
                <PartnerIcon className="text-orange w-7 h-7 mb-[20px]" />
                <h3 className="text-h3 my-[12px] mx-0 mb-[16px]">
                  {title}
                </h3>
                <p className="text-muted text-button m-0">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
