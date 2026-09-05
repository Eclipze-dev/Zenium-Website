import OptimizedImage from "@/components/OptimizedImage";
import ServeAudienceTabs from "./ServeAudienceTabs";
import { serveIntro, type ServeAudienceId } from "./serveData";

const ServeHeroSection = ({
  active,
  image,
  imageAlt,
  beforeImage,
}: {
  active: ServeAudienceId;
  image: string;
  imageAlt: string;
  /** Renders after tabs and before the hero image (utilities overview only). */
  beforeImage?: React.ReactNode;
}) => {
  return (
    <section
      className="relative overflow-hidden pb-[40px] pt-[50px] max-md:pt-24 max-sm:pb-[28px]"
      aria-labelledby="serve-hero-title"
    >
      <div className="container">
        <header className="max-w-auto">
          <p className="mb-[10px] text-h4 text-zen-text">
            {serveIntro.eyebrow}
          </p>
          <h1
            id="serve-hero-title"
            className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
          >
            {serveIntro.title}{" "}
            <span className="text-h2 shimmer-text text-orange">{serveIntro.accent}</span>
          </h1>
          <p className="mt-[20px] max-w-auto text-p1 text-muted">
            {serveIntro.description}
          </p>
        </header>

        <ServeAudienceTabs active={active} />
      </div>

      {beforeImage}

      <div className="container">
        <div
          className={
            beforeImage
              ? "relative aspect-[21/9] overflow-hidden rounded-[16px] bg-[#0A1725] max-md:aspect-[16/9]"
              : "relative mt-[40px] aspect-[21/9] overflow-hidden rounded-[16px] bg-[#0A1725] max-md:aspect-[16/9] max-sm:mt-[28px]"
          }
        >
          <OptimizedImage
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServeHeroSection;
