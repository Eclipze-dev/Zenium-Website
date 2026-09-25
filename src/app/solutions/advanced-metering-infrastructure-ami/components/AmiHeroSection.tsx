import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";
import ShimmerText from "@/components/ShimmerText";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function AmiHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="ami-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px]">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <SectionBadge>ADVANCED METERING INFRASTRUCTURE (AMI)</SectionBadge>
            <h1 id="ami-hero-title" className="text-h1 m-0">
              Advanced Metering Infrastructure (AMI) Software{" "}
              <ShimmerText>Solutions</ShimmerText>
            </h1>
            <p className="max-w-3xl text-p1 text-muted">
              Scalable Advanced Metering Infrastructure (AMI) software platform.
              Hardware-agnostic Head-End System (HES), Meter Data Management
              System (MDMS), and analytics for smart grid distribution utilities.
            </p>
            <div className="flex flex-wrap justify-center gap-[10px] pt-2.5">
              <Button href="/contact">Request a Demo</Button>
              <Button href={SOLUTION_PATHS.hes} outline>
                Explore Head-End System (HES)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
