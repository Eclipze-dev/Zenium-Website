import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import {
  amispSupportParagraphs,
  amispSupportTags,
  partnerWithItems,
} from "./partnersData";

export default function PartnersEcosystemSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container grid grid-cols-1 gap-[50px] xl:grid-cols-2">
        <SolutionPanelCard className="items-stretch !gap-0 p-[42px] max-sm:p-[28px] bg-[#0D2B4B]">
          <p className="text-button uppercase tracking-[0.08em] text-muted">
            WHO WE PARTNER WITH
          </p>
          <h3 className="text-h3 m-0 mt-4 text-zen-text">
            Built for the <span className="text-orange">AMI ecosystem</span>
          </h3>

          <div className="mt-8 space-y-8">
            {partnerWithItems.map((item) => (
              <div key={item.title}>
                <h4 className="text-p1 m-0 font-normal text-zen-text">{item.title}</h4>
                <p className="mt-3 text-p1 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </SolutionPanelCard>

        <SolutionPanelCard className="h-full items-stretch !gap-0 p-[42px] max-sm:p-[28px] bg-[#0D2B4B]">
          <p className="text-button uppercase tracking-[0.08em] text-muted">FOR AMISPS</p>
          <h3 className="text-h3 m-0 mt-4 text-zen-text">
            From technical evaluation to{" "}
            <span className="text-orange">AMI delivery</span>
          </h3>

          <div className="mt-8 flex flex-1 flex-col gap-5">
            {amispSupportParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-p1 text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-full bg-white px-6 py-4 text-center max-sm:px-4">
            <p className="m-0 text-button italic text-[#152D48]">
              {amispSupportTags.join(" · ")}
            </p>
          </div>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
