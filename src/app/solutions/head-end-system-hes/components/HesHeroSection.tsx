import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./hesData";
import ShimmerText from "@/components/ShimmerText";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function HesHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="hes-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px] pb-[40px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <SectionBadge>HEAD-END SYSTEM (HES)</SectionBadge>
            <h1 id="hes-hero-title" className="text-h1 m-0 text-center">
              Head-End System (HES) Software for{" "}
              <ShimmerText>Smart Metering</ShimmerText>
            </h1>
            <p className="max-w-full text-p1 text-muted text-center">
              Enterprise Head-End System (HES) software for large-scale Advanced
              Metering Infrastructure (AMI) rollouts. Vendor-agnostic DLMS/COSEM
              support, RF Mesh, and Cellular connectivity — automating data
              acquisition and enabling secure remote operations.
            </p>
            <div className="flex flex-wrap gap-[10px] pt-2.5">
              <Button href="/contact">Request a Demo</Button>
              <Button href={SOLUTION_PATHS.mdms} outline>
                Explore Meter Data Management System (MDMS)
              </Button>
            </div>
          </div>
        </div>
        <SolutionHeroStats items={statistics} variant="ruled" />
      </div>
    </section>
  );
}
