import { ArrowRightIcon } from "@/components/icons/icons";
import CTANetworkBackground from "./CTANetworkBackground";
import Button from "@/components/Button";
import ShimmerText from "@/components/ShimmerText";

export default function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[80px] max-lg:py-[48px] max-sm:py-[80px] bg-box"
      aria-labelledby="final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <p className="text-h4 uppercase mb-[clamp(18px,2.4vw,30px)]">
          YOUR ENERGY DATA ALREADY KNOWS MORE.
        </p>
        <h2
          id="final-cta-title"
          className="text-h1 m-0"
        >
          Put it to work with <ShimmerText as="p">Zenium.</ShimmerText>
        </h2>
        <p className="text-muted text-intro max-w-[680px] mx-auto mt-[clamp(18px,2vw,26px)] max-sm:text-[14px] max-sm:leading-[1.5]">
          Turn connected utility data into trusted information, deeper insight and smarter decisions.
        </p>
        <div className="mt-[40px] flex justify-center max-lg:mt-[32px] max-sm:mt-[28px]">
          <Button href="/contact" className="max-sm:w-full">Request a Demo</Button>
        </div>
      </div>
    </section>
  );
}
