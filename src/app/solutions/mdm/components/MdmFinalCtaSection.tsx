import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";

export default function MdmFinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-sm:py-[80px]"
      aria-labelledby="mdm-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2
          id="mdm-final-cta-title"
          className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,42px)]"
        >
          Build on data you can{" "}
          <span className="text-orange text-h1">trust.</span>
        </h2>
        <p className="text-muted text-intro mx-auto mt-[clamp(18px,2vw,26px)] max-w-[680px]">
          Discover how Zenium MDM can strengthen your meter-data operations.
        </p>
        <div className="mt-[40px] flex flex-wrap justify-center gap-[10px]">
          <Button href="/contact">Talk to our team</Button>
          <Button href="/solutions/hes" outline>
            Explore Zenium HES
          </Button>
        </div>
      </div>
    </section>
  );
}
