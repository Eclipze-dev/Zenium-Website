import Button from "./Button";
import HeroTypewriter from "./HeroTypewriter";
import ZeniumDataFlow from "./ZeniumDataFlow";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center min-h-[100svh] pt-0 pb-[80px] bg-[radial-gradient(ellipse_at_70%_45%,var(--hero-glow),transparent_40%),var(--bg-gradient)] overflow-hidden max-md:pt-[32px] max-md:pb-[50px] max-sm:pt-[24px] max-sm:pb-[40px]"
      aria-labelledby="hero-title"
    >
      <div className="container grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(20px,4vw,60px)] items-center max-lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] max-lg:gap-[30px] max-md:grid-cols-1 max-md:gap-[40px]">
        <div className="min-w-0 max-w-[680px] relative z-[2] max-md:max-w-full">
          <p className="text-p tracking-eyebrow mb-[clamp(12px,1.5vw,20px)] text-zen-text font-normal">
            {/* ENERGY INTELLIGENCE */}
          </p>
          <h1
            id="hero-title"
            className="text-hero font-normal tracking-hero m-0 max-w-full max-sm:text-[clamp(32px,7vw,40px)]"
          >
            Turn energy data into intelligence.
            <HeroTypewriter />
          </h1>
          <p className="text-muted text-p2 mt-[clamp(14px,1.8vw,22px)] max-w-[560px] max-sm:text-body">
            Building smart-grid intelligence on a trusted HES and MDM
            foundation.
          </p>
          <div className="flex flex-wrap gap-[10px] mt-[clamp(18px,2.5vw,30px)]">
            <Button>Request a Demo</Button>
            <Button outline>Explore Zenium</Button>
          </div>
        </div>

        {/* Hero Data Flow Graphic */}
        <div
          className="relative w-full min-w-0 flex items-center justify-center max-md:max-w-[460px] max-md:mx-auto"
          aria-label="Zenium intelligence pipeline animation"
        >
          <ZeniumDataFlow />
        </div>
      </div>
    </section>
  );
}
