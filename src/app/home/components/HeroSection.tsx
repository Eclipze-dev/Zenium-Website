import Button from "@/components/Button";
import OptimizedImage from "@/components/OptimizedImage";
import SectionBadge from "@/components/SectionBadge";
import HeroTypewriter from "./HeroTypewriter";
import HeroStats from "./HeroStats";
import { metrics } from "./homeData";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center min-h-[100svh] overflow-hidden pt-0 pb-[80px] max-lg:min-h-0 max-lg:pt-[48px] max-lg:pb-[48px] max-md:pt-[32px] max-md:pb-[50px] max-sm:pt-[24px] max-sm:pb-[40px]"
      aria-labelledby="hero-title"
    >
      <OptimizedImage
        src="/zenium-cover.webp"
        alt="Connected utility infrastructure for Zenium energy intelligence"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Readability scrim over the photo */}
      <div
        className="pointer-events-none absolute inset-0 md:!bg-black/50 lg:!bg-black/0"
        aria-hidden
      />

      <div className="container relative z-[2]">
        <div className="min-w-0 max-w-[680px]">
          <SectionBadge className="mb-[clamp(12px,1.5vw,20px)]">
            ENERGY INTELLIGENCE
          </SectionBadge>
          <h1
            id="hero-title"
            className="text-h1 m-0 max-w-full"
          >
            Turn energy data into intelligence.
            <HeroTypewriter />
          </h1>
          <p className="text-muted text-p1 mt-[clamp(14px,1.8vw,22px)] max-w-[560px] max-sm:text-body">
            Building smart-grid intelligence on a trusted HES and MDM
            foundation.
          </p>
          <div className="flex flex-wrap gap-[10px] mt-[clamp(18px,2.5vw,30px)]">
            <Button href="/contact">Request a Demo</Button>
            <Button outline href="/solutions/head-end-system-hes">Explore Zenium</Button>
          </div>
        </div>
        <div className="mt-[75px] max-lg:mt-[40px] max-sm:mt-[40px]">
          <HeroStats items={metrics} />
        </div>
        <div className="text-muted text-p1 font-light uppercase tracking-[0.08em] max-w-auto mt-[20px] max-lg:text-[13px] max-lg:leading-[1.4] max-lg:tracking-[0.06em] max-sm:text-caption max-sm:tracking-[0.05em]">
          Built on real-world utility experience.
        </div>
      </div>
    </section>
  );
}
