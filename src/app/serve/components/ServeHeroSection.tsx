import ServeAudienceTabs from "./ServeAudienceTabs";
import { serveIntro, type ServeAudienceId } from "./serveData";

export default function ServeHeroSection({
  active,
  image,
  imageAlt,
}: {
  active: ServeAudienceId;
  image: string;
  imageAlt: string;
}) {
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
            <span className="text-h1 text-orange">{serveIntro.accent}</span>
          </h1>
          <p className="mt-[20px] max-w-auto text-p1 text-muted">
            {serveIntro.description}
          </p>
        </header>

        <ServeAudienceTabs active={active} />

        <div className="mt-[40px] overflow-hidden rounded-[16px] bg-[#0A1725] max-sm:mt-[28px]">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[21/9] h-auto w-full object-cover max-md:aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
