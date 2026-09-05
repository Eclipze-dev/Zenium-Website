import OptimizedImage from "@/components/OptimizedImage";
import { careersHero } from "./careersData";

export default function CareersHeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-[50px] pb-[80px] max-md:pt-24 max-sm:pb-[70px]"
      aria-labelledby="careers-hero-title"
    >
      <div className="container grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-stretch gap-[60px] max-lg:grid-cols-1 max-lg:gap-[40px]">
        <div className="min-w-0">
          <p className="mb-[10px] text-h4 tracking-eyebrow text-zen-text">
            {careersHero.eyebrow}
          </p>
          <h1
            id="careers-hero-title"
            className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
          >
            {careersHero.title}{" "}
            <span className="text-h1 text-orange">{careersHero.accent}</span>
          </h1>
          <p className="mt-[20px] max-w-auto text-p1 text-muted">
            {careersHero.description}
          </p>
        </div>

        <div className="relative min-h-0 overflow-hidden rounded-[16px] bg-[#0A1725] max-lg:aspect-[16/10] lg:h-auto">
          <OptimizedImage
            src={careersHero.image}
            alt={careersHero.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
