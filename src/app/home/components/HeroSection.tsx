import Button from "@/components/Button";
import OptimizedImage from "@/components/OptimizedImage";
import HeroTypewriter from "./HeroTypewriter";
import HeroStats from "./HeroStats";
import { metrics } from "./homeData";
import SectionIntro from "./SectionIntro";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center min-h-[100svh] overflow-hidden pt-0 pb-[80px] max-md:pt-[32px] max-md:pb-[50px] max-sm:pt-[24px] max-sm:pb-[40px]"
      aria-labelledby="hero-title"
    >
      <OptimizedImage
        src="/zenium-cover.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      {/* Readability scrim over the photo */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="container relative z-[2]">
        <div className="min-w-0 max-w-[680px]">
          <p className="text-h4 tracking-eyebrow mb-[clamp(12px,1.5vw,20px)] text-zen-text font-normal">
            ENERGY INTELLIGENCE
          </p>
          <p
            id="hero-title"
            className="text-h1 m-0 max-w-full max-sm:text-[clamp(32px,7vw,40px)]"
          >
            Turn energy data into intelligence.
            <HeroTypewriter />
          </p>
          <p className="text-muted text-p1 mt-[clamp(14px,1.8vw,22px)] max-w-[560px] max-sm:text-body">
            Building smart-grid intelligence on a trusted HES and MDM
            foundation.
          </p>
          <div className="flex flex-wrap gap-[10px] mt-[clamp(18px,2.5vw,30px)]">
            <Button href="/contact">Request a Demo</Button>
            <Button outline>Explore Zenium</Button>
          </div>
        </div>
        <div className="mt-[75px]">
          <HeroStats items={metrics} />
        </div>
        <div className="text-muted text-p1 font-light uppercase tracking-[0.08em] max-w-auto max-sm:text-body mt-[20px]">Built on real-world utility experience.</div>
      </div>
    </section>
  );
}
