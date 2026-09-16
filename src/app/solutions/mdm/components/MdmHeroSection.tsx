import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./mdmData";
import ShimmerText from "@/components/ShimmerText";

export default function MdmHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="mdm-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px] pb-[40px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <SectionBadge>METER DATA MANAGEMENT</SectionBadge>
            <h1
              id="mdm-hero-title"
              className="text-h1 m-0"
            >
              Make every reading{" "}
              <ShimmerText>trustworthy.</ShimmerText>
            </h1>
            <p className="max-w-full text-p1 text-muted text-center">
              Zenium Meter Data Management System transforms meter data into trusted information for billing, prepaid operations and consumer services.
            </p>
            <div className="flex flex-wrap gap-[10px] pt-2.5">
              <Button href="/contact">Request a Demo</Button>
              <Button href="/solutions/hes" outline>
                Explore HES
              </Button>
            </div>
          </div>


        </div>

        <SolutionHeroStats
          items={statistics}
          variant="ruled"
          desktopRows="3-2"
          rowGapClassName="lg:gap-y-6 gap-y-4"
          boxClassName="p-10 max-lg:p-4"
          itemClassName="px-10 py-3 max-lg:px-2 max-lg:py-2"
          // bottomItemClassName="!py-6 max-lg:!py-4"
        />
      </div>
    </section>
  );
}
