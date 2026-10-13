import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./mdmData";
import ShimmerText from "@/components/ShimmerText";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function MdmHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="mdm-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px] pb-[40px]">
          <StaggerContainer className="flex flex-col items-center justify-center gap-5" stagger={0.1}>
            <StaggerItem>
              <SectionBadge>METER DATA MANAGEMENT SYSTEM (MDMS)</SectionBadge>
            </StaggerItem>
            <StaggerItem>
              <h1 id="mdm-hero-title" className="text-h1 m-0 text-center">
                Enterprise Meter Data Management System{" "}
                <ShimmerText>(MDMS)</ShimmerText>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-full text-p1 text-muted text-center">
                A Meter Data Management System (MDMS) is software that validates,
                stores, and prepares smart-meter data for billing and utility
                operations. Zenium&apos;s MDMS automates Validation, Editing, and
                Estimation (VEE), meter-to-cash billing, prepayment, and energy
                theft detection.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-wrap gap-[10px] pt-2.5">
                <Button href="/contact">Request a Demo</Button>
                <Button href={SOLUTION_PATHS.hes} outline>
                  Explore Head-End System (HES)
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <SolutionHeroStats
          items={statistics}
          variant="ruled"
          desktopRows="3-2"
          rowGapClassName="lg:gap-y-6 gap-y-4"
          boxClassName="p-10 max-lg:p-4"
          itemClassName="px-10 py-3 max-lg:px-2 max-lg:py-2"
        />
      </div>
    </section>
  );
}
