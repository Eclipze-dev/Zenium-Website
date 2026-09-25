import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";
import ShimmerText from "@/components/ShimmerText";

export default function AiAnalyticsFinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-lg:py-[48px] max-sm:py-[80px]"
      aria-labelledby="ai-analytics-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2
          id="ai-analytics-final-cta-title"
          className="text-h1 m-0"
        >
          Turn utility data into better{" "}
          <ShimmerText>utility decisions.</ShimmerText>
        </h2>
        <p className="text-muted text-intro mx-auto mt-[clamp(18px,2vw,26px)] max-w-auto">
          See how Zenium Analytics &amp; AI can help turn connected utility data into intelligence
          for revenue, assets and operations.
        </p>
        <div className="mt-[40px] max-lg:mt-[32px] flex flex-wrap justify-center gap-[10px]">
          <Button href="/contact">Request a Demo</Button>
        </div>
      </div>
    </section>
  );
}
