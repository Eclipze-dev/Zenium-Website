import { Mail } from "lucide-react";
import Button from "@/components/Button";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import { careersCvCta } from "./careersData";

export default function CareersCvCtaSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard className="!flex-row !items-center !justify-between !gap-[24px] p-[32px] max-md:!flex-col max-md:!items-start max-sm:p-[24px]">
          <div className="flex min-w-0 flex-1 items-center gap-[46px] max-sm:items-start">
            <span
              className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#152D48B2]"
              aria-hidden="true"
            >
              <Mail className="h-6 w-6 text-zen-text" strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <h2 className="m-0 text-h3 font-semibold text-zen-text">
                {careersCvCta.title}
              </h2>
              <p className="m-0 mt-[20px] text-p1 text-muted">
                {careersCvCta.description}
              </p>
            </div>
          </div>

          <Button href={careersCvCta.href} className="shrink-0">
            {careersCvCta.cta}
          </Button>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
