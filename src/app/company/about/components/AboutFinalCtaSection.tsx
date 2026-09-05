import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";
import { aboutFinalCta } from "./aboutData";

export default function AboutFinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-sm:py-[80px]"
      aria-labelledby="about-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2
          id="about-final-cta-title"
          className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,42px)]"
        >
          {aboutFinalCta.title}{" "}
          <span className="text-h2 shimmer-text text-orange">{aboutFinalCta.accent}</span>
        </h2>
        <p className="text-muted text-p1 mx-auto mt-[clamp(18px,2vw,26px)] max-w-auto">
          {aboutFinalCta.description}
        </p>
        <div className="mt-[50px] flex justify-center">
          <Button href={aboutFinalCta.href}>{aboutFinalCta.cta}</Button>
        </div>
        <p className="m-0 mt-[22px] text-p3 italic font-normal text-muted">{aboutFinalCta.tagline}</p>
      </div>
    </section>
  );
}
