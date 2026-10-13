import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { CircleCheck } from "@/components/icons/lucideIcons";
import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import SolutionPanelImage from "@/components/solutions/SolutionPanelImage";
import { analyticsApplications, analyticsFoundationQuote } from "./mdmData";
import ShimmerText from "@/components/ShimmerText";

export default function MdmAudienceSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard className="gap-[40px]">
          <div className="grid w-full items-stretch gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:gap-[40px]">
            <ScrollReveal direction="right" className="min-w-0">
              <SolutionPanelImage
                src="/solutions/mdm-energy-analytics.webp"
                alt="MDM energy analytics"
                sizes="(max-width: 1280px) 100vw, 600px"
              />
            </ScrollReveal>
            <div className="flex min-w-0 flex-col gap-5">
              <SectionIntro eyebrow="ENERGY ANALYTICS">
                The foundation for{" "}
                <ShimmerText>energy analytics</ShimmerText>
              </SectionIntro>

              <ScrollReveal>
                <p className="text-p1 text-muted m-0">
                  Once meter data is validated and organised, it can support a
                  wider range of operational and business intelligence.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h3 className="text-p2 m-0 text-white/70">Analytics Applications</h3>
              </ScrollReveal>

              <StaggerContainer as="ul" className="flex flex-col gap-[14px] p-0 m-0 list-none">
                {analyticsApplications.map((item) => (
                  <StaggerItem as="li" key={item} className="flex items-start gap-3">
                    <CircleCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span className="text-p1 text-muted">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          <ScrollReveal className="w-auto rounded-[10px] bg-[#F07F25] px-8 py-[10px]">
            <p className="text-p3 m-0 text-center italic text-zen-text">
              {analyticsFoundationQuote}
            </p>
          </ScrollReveal>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
