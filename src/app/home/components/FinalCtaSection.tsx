import { ArrowRightIcon } from "@/components/icons/icons";
import CTANetworkBackground from "./CTANetworkBackground";

export default function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[80px] max-sm:py-[80px]"
      aria-labelledby="final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <p className="text-eyebrow tracking-eyebrow mb-[clamp(18px,2.4vw,30px)] text-zen-text font-normal">
          YOUR ENERGY DATA ALREADY KNOWS MORE.
        </p>
        <h2
          id="final-cta-title"
          className="text-display-heading font-normal tracking-[0] m-0 max-sm:text-[clamp(28px,7vw,42px)]"
        >
          Put it to work with <strong className="inline text-orange font-bold">Zenium.</strong>
        </h2>
        <p className="text-muted text-intro max-w-[680px] mx-auto mt-[clamp(18px,2vw,26px)]">
          Turn connected utility data into trusted information, deeper insight and smarter decisions.
        </p>
        <div className="mt-[40px] flex justify-center">
          <a
            href="#contact"
            className="button-primary group inline-flex items-center gap-2 rounded-[4px] border px-[18px] py-[11px] text-body font-semibold transition-all duration-200"
          >
            Request a Demo
            {/* <ArrowRightIcon width={18} height={18} className="transition-transform duration-200 group-hover:translate-x-1" /> */}
          </a>
        </div>
      </div>
    </section>
  );
}
