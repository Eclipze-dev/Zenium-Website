import { CircleCheck } from "@/components/icons/lucideIcons";
import SectionIntro from "@/app/home/components/SectionIntro";
import OptimizedImage from "@/components/OptimizedImage";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import { analyticsApplications, analyticsFoundationQuote } from "./mdmData";

export default function MdmAudienceSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard className="gap-[40px]">
          <div className="grid w-full items-center gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:gap-[40px]">
            <div className="relative h-full max-h-[540px] min-h-[280px] w-full overflow-hidden rounded-[20px]">
              <OptimizedImage
                src="/image.png"
                alt="Connected energy infrastructure"
                fill
                sizes="(max-width: 1280px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-5">
              <SectionIntro eyebrow="ENERGY ANALYTICS">
                The foundation for{" "}
                <span className="text-orange text-h2 shimmer-text">energy analytics</span>
              </SectionIntro>

              <p className="text-p1 text-muted m-0">
                Once meter data is validated and organised, it can support a wider
                range of operational and business intelligence.
              </p>

              <h3 className="text-p2 m-0 text-white/70">Analytics Applications</h3>

              <ul className="flex flex-col gap-[14px] p-0 m-0 list-none">
                {analyticsApplications.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span className="text-p1 text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-auto rounded-[10px] bg-[#F07F25] px-8 py-[10px]">
            <p className="text-p3 m-0 text-center italic text-zen-text">
              {analyticsFoundationQuote}
            </p>
          </div>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
