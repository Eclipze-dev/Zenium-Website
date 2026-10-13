import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./partnersData";
import ShimmerText from "@/components/ShimmerText";

export default function PartnersHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[40px] pt-[50px] max-lg:pb-[32px] max-lg:pt-[40px] max-md:pt-24"
      aria-labelledby="partners-hero-title"
    >
      <div className="container">
        <StaggerContainer className="flex flex-col items-center justify-center gap-5 text-center pb-[40px]" stagger={0.1}>
          <StaggerItem>
            <SectionBadge>PARTNERS</SectionBadge>
          </StaggerItem>
          <StaggerItem>
            <h1
              id="partners-hero-title"
              className="text-h1 m-0"
            >
              Build stronger{" "}
              <ShimmerText>energy solutions</ShimmerText> together.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-[1250px] text-p1 text-muted">
              Zenium works with AMISPs, meter manufacturers and system integrators to connect smart-meter 
              infrastructure, manage trusted data and support the evolution towards AMI 2.0.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-wrap justify-center gap-[10px] pt-2.5">
              <Button href="/contact">Become a partner</Button>
              <Button href="/contact" outline>
                Talk to our team
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
        <SolutionHeroStats
          items={statistics}
          variant="ruled"
          className="!py-4 !px-8 max-lg:!px-4 max-lg:!py-3"
          itemClassName="px-5 py-3 max-lg:px-2 max-lg:py-2"
        />
      </div>
    </section>
  );
}
