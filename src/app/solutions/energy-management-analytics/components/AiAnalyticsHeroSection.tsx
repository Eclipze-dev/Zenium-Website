import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";
import ShimmerText from "@/components/ShimmerText";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function AiAnalyticsHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="ai-analytics-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px]">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <SectionBadge>ENERGY MANAGEMENT & ANALYTICS</SectionBadge>
            <h1 id="ai-analytics-hero-title" className="text-h1 m-0">
              Smart Grid & Meter Data Analytics{" "}
              <ShimmerText>Software</ShimmerText>
            </h1>
            <p className="max-w-auto text-p1 text-muted">
              Turn interval meter data into actionable intelligence. Transformer
              load profiling, non-technical loss analytics, and feeder balance
              monitoring — built on Zenium&apos;s Head-End System (HES) and Meter
              Data Management System (MDMS) foundation.
            </p>
            <div className="flex flex-wrap justify-center gap-[10px] pt-2.5">
              <Button href="/contact">Request a Demo</Button>
              <Button href={SOLUTION_PATHS.ami} outline>
                Explore Advanced Metering Infrastructure (AMI)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
