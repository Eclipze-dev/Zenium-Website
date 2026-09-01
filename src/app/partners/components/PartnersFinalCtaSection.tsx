import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";

export default function PartnersFinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-sm:py-[80px]"
      aria-labelledby="partners-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2
          id="partners-final-cta-title"
          className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,42px)]"
        >
          Bring Zenium into your next{" "}
          <span className="text-orange text-h1">energy programme.</span>
        </h2>
        <p className="text-muted text-intro mx-auto mt-[clamp(18px,2vw,26px)] max-w-[680px]">
          Talk to us about an upcoming bid, meter integration, system-integration 
          requirement or wider technology partnership.
        </p>
        <div className="mt-[40px] flex flex-wrap justify-center gap-[10px]">
          <Button href="/contact">Become a partner</Button>
          <Button href="/contact" outline>
            Contact Zenium
          </Button>
        </div>
      </div>
    </section>
  );
}
