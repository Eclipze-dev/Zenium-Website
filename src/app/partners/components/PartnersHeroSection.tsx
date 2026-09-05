import Button from "@/components/Button";
import SolutionHeroStats from "@/components/solutions/SolutionHeroStats";
import { statistics } from "./partnersData";

export default function PartnersHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[50px] max-md:pt-24"
      aria-labelledby="partners-hero-title"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-5 text-center pb-[40px]">
          <p className="text-h4 tracking-eyebrow text-zen-text">PARTNERS</p>
          <h1
            id="partners-hero-title"
            className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
          >
            Build stronger{" "}
            <span className="text-orange text-h2 shimmer-text">energy solutions</span> together.
          </h1>
          <p className="max-w-auto text-p1 text-muted">
            Zenium works with AMISPs, meter manufacturers and system integrators to connect smart-meter 
            infrastructure, manage trusted data and support the evolution towards AMI 2.0.
          </p>
          <div className="flex flex-wrap justify-center gap-[10px] pt-2.5">
            <Button href="/">Become a partner</Button>
            <Button href="#why-zenium" outline>
              Talk to our team
            </Button>
          </div>
        </div>
        <SolutionHeroStats items={statistics} variant="ruled" />
      </div>
    </section>
  );
}
