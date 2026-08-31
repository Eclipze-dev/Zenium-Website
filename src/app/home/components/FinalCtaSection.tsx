import { ArrowRightIcon } from "@/components/icons/icons";
import CTANetworkBackground from "./CTANetworkBackground";

export default function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[80px] max-sm:py-[80px] bg-box"
      aria-labelledby="final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <p className="text-h4 uppercase mb-[clamp(18px,2.4vw,30px)]">
          YOUR ENERGY DATA ALREADY KNOWS MORE.
        </p>
        <h2
          id="final-cta-title"
          className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,42px)]"
        >
          Put it to work with <p className="inline text-orange text-h1">Zenium.</p>
        </h2>
        <p className="text-muted text-intro max-w-[680px] mx-auto mt-[clamp(18px,2vw,26px)]">
          Turn connected utility data into trusted information, deeper insight and smarter decisions.
        </p>
        <div className="mt-[40px] flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[4px] border px-[18px] py-[11px] text-button transition-all duration-200"
          >
            Request a Demo
            {/* <ArrowRightIcon width={18} height={18} className="transition-transform duration-200 group-hover:translate-x-1" /> */}
          </a>
        </div>
      </div>
    </section>
  );
}
