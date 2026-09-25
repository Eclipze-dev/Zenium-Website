import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";
import ShimmerText from "@/components/ShimmerText";

export default function MdmFinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-lg:py-[48px] max-sm:py-[80px]"
      aria-labelledby="mdm-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2
          id="mdm-final-cta-title"
          className="text-h1 m-0"
        >
          Build on data you can{" "}
          <ShimmerText>trust.</ShimmerText>
        </h2>
        <p className="text-muted text-intro mx-auto mt-[clamp(18px,2vw,26px)] max-w-[680px]">
          Discover how Zenium MDM can strengthen your meter-data operations.
        </p>
        <div className="mt-[40px] max-lg:mt-[32px] flex flex-wrap justify-center gap-[10px]">
          <Button href="/contact">Talk to our team</Button>
          <Button href="/solutions/head-end-system-hes" outline>
            Explore Zenium HES
          </Button>
        </div>
      </div>
    </section>
  );
}
