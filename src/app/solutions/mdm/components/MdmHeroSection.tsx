import Button from "@/components/Button";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./mdmData";

export default function MdmHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="mdm-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px] pb-[40px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-h4 tracking-eyebrow text-zen-text">METER DATA MANAGEMENT</p>
            <h1
              id="mdm-hero-title"
              className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
            >
              Connect every{" "}
              <span className="text-orange text-h2 shimmer-text">meter.</span>
            </h1>
            <p className="max-w-full text-p1 text-muted text-center">
              Zenium Meter Data Management System brings meter data together, improves its quality and prepares it for billing, operations and analytics—creating one trusted data foundation across the energy ecosystem.
            </p>
            <div className="flex flex-wrap gap-[10px] pt-2.5">
              <Button href="/contact">Request a Demo</Button>
              <Button href="/solutions/hes" outline>
                Explore HES
              </Button>
            </div>
          </div>


        </div>

        <SolutionHeroStats items={statistics} variant="ruled" />
      </div>
    </section>
  );
}
