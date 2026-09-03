import Button from "@/components/Button";

export default function AiAnalyticsHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="ai-analytics-hero-title"
    >
      <div className="container">
        <div className="grid items-start gap-12 xl:gap-[50px]">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <p className="text-h4 tracking-eyebrow text-zen-text">ANALYTICS &amp; AI</p>
            <h1
              id="ai-analytics-hero-title"
              className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
            >
              Turn utility data into{" "}
              <span className="text-orange text-h1">actionable intelligence.</span>
            </h1>
            <p className="max-w-auto text-p1 text-muted">
              Transform meter, consumer, asset and network data into intelligence that helps
              utilities identify losses, protect revenue, understand asset health and make better
              operational decisions. Built on Zenium&apos;s HES and MDM foundation, Analytics &amp; AI
              connects utility data to uncover patterns, identify anomalies, surface emerging risks
              and turn insight into action.
            </p>
            <div className="flex flex-wrap justify-center gap-[10px] pt-2.5">
              <Button href="/contact">Request a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
