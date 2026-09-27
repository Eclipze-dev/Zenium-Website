import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";
import ShimmerText from "@/components/ShimmerText";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function GuideCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-lg:py-[48px] max-sm:py-[80px]"
      aria-labelledby="guide-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2 id="guide-final-cta-title" className="text-h1 m-0">
          Explore Zenium <ShimmerText>AMI software</ShimmerText>
        </h2>
        <p className="text-muted text-intro mx-auto mt-[clamp(18px,2vw,26px)] max-w-auto">
          From consumer meter literacy to utility-scale Advanced Metering
          Infrastructure (AMI), Head-End System (HES) and Meter Data
          Management System (MDMS).
        </p>
        <div className="mt-[40px] max-lg:mt-[32px] flex flex-wrap justify-center gap-[10px]">
          <Button href={SOLUTION_PATHS.ami}>AMI</Button>
          <Button href={SOLUTION_PATHS.hes} outline>
            HES
          </Button>
          <Button href={SOLUTION_PATHS.mdms} outline>
            MDMS
          </Button>
        </div>
      </div>
    </section>
  );
}
