import CTANetworkBackground from "@/app/home/components/CTANetworkBackground";
import Button from "@/components/Button";
import ShimmerText from "@/components/ShimmerText";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function AmiFinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-box py-[80px] max-lg:py-[48px] max-sm:py-[80px]"
      aria-labelledby="ami-final-cta-title"
    >
      <CTANetworkBackground />

      <div className="container relative z-[2] text-center">
        <h2 id="ami-final-cta-title" className="text-h1 m-0">
          Build your Advanced Metering Infrastructure (AMI) on{" "}
          <ShimmerText>open software</ShimmerText>
        </h2>
        <p className="text-muted text-intro mx-auto mt-[clamp(18px,2vw,26px)] max-w-auto">
          Talk to Zenium about Head-End System (HES), Meter Data Management
          System (MDMS) and energy analytics for your next AMI programme.
        </p>
        <div className="mt-[40px] max-lg:mt-[32px] flex flex-wrap justify-center gap-[10px]">
          <Button href="/contact">Request a Demo</Button>
          <Button href={SOLUTION_PATHS.mdms} outline>
            Explore MDMS
          </Button>
          <Button href={SOLUTION_PATHS.analytics} outline>
            Explore Analytics
          </Button>
        </div>
      </div>
    </section>
  );
}
