import { Mail } from "@/components/icons/lucideIcons";
import Button from "@/components/Button";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import { careersCvCta } from "./careersData";

export default function CareersCvCtaSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard className="!flex-row !items-center !justify-between !gap-[24px] p-[32px] max-lg:p-[28px] max-md:!flex-col max-md:!items-start max-sm:gap-[20px] max-sm:p-[24px]">
          <div className="flex min-w-0 flex-1 items-center gap-[46px] max-lg:gap-[28px] max-sm:items-start max-sm:gap-[16px]">
            <span
              className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#152D48B2] max-sm:h-[48px] max-sm:w-[48px]"
              aria-hidden="true"
            >
              <Mail className="h-6 w-6 text-zen-text max-sm:h-5 max-sm:w-5" strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <h2 className="m-0 text-h3 font-semibold text-zen-text">
                {careersCvCta.title}
              </h2>
              <p className="m-0 mt-[20px] text-p1 text-muted max-sm:mt-[12px] max-sm:text-[14px] max-sm:leading-[1.5]">
                {careersCvCta.description}
              </p>
            </div>
          </div>

          <Button href={careersCvCta.href} className="shrink-0 max-sm:w-full">
            {careersCvCta.cta}
          </Button>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
