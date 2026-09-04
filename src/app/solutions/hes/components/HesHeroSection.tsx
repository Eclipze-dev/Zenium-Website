import Button from "@/components/Button";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./hesData";

export default function HesHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="hes-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px] pb-[40px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-h4 tracking-eyebrow text-zen-text">HEAD-END SYSTEM</p>
            <h1
              id="hes-hero-title"
              className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
            >
              Connect every{" "}
              <span className="text-orange text-h1">meter.</span>
            </h1>
            <p className="max-w-full text-p1 text-muted text-center">
              Zenium Head-End System connects smart meters and communication networks
              to utility operations — automating data acquisition, enabling secure
              remote operations and providing visibility across the metering network.
            </p>
            <div className="flex flex-wrap gap-[10px] pt-2.5">
              <Button href="/contact">Request a Demo</Button>
              <Button href="/solutions/mdm" outline>
                Explore Zenium MDM
              </Button>
            </div>
          </div>
        </div>
        <SolutionHeroStats items={statistics} variant="ruled" />
      </div>
    </section>
  );
}
