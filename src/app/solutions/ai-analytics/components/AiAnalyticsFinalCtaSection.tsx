import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";

export default function AiAnalyticsFinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-sm:py-[80px]"
      aria-labelledby="ai-analytics-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2
          id="ai-analytics-final-cta-title"
          className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,42px)]"
        >
          Turn utility data into better{" "}
          <span className="text-orange text-h2 shimmer-text">utility decisions.</span>
        </h2>
        <p className="text-muted text-intro mx-auto mt-[clamp(18px,2vw,26px)] max-w-auto">
          See how Zenium Analytics &amp; AI can help turn connected utility data into intelligence
          for revenue, assets and operations.
        </p>
        <div className="mt-[40px] flex flex-wrap justify-center gap-[10px]">
          <Button href="/contact">Request a Demo</Button>
        </div>
      </div>
    </section>
  );
}
