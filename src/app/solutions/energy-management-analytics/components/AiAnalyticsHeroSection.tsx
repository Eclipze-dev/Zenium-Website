import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
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
          <StaggerContainer className="flex flex-col items-center justify-center gap-5 text-center" stagger={0.1}>
            <StaggerItem>
              <SectionBadge>ENERGY MANAGEMENT & ANALYTICS</SectionBadge>
            </StaggerItem>
            <StaggerItem>
              <h1 id="ai-analytics-hero-title" className="text-h1 m-0">
                Smart Grid & Meter Data Analytics{" "}
                <ShimmerText>Software</ShimmerText>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-auto text-p1 text-muted">
                Meter data analytics software turns interval readings into
                operational insight for utilities. Zenium covers transformer load
                profiling, non-technical loss analytics, and feeder balance
                monitoring, on a Head-End System (HES) and Meter Data Management
                System (MDMS) foundation.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-wrap justify-center gap-[10px] pt-2.5">
                <Button href="/contact">Request a Demo</Button>
                <Button href={SOLUTION_PATHS.ami} outline>
                  Explore Advanced Metering Infrastructure (AMI)
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
