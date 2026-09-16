import OptimizedImage from "@/components/OptimizedImage";
import SectionBadge from "@/components/SectionBadge";
import { serveIntro } from "./serveData";
import ShimmerText from "@/components/ShimmerText";

export function ServeHeroIntro() {
  return (
    <header className="container max-w-auto pt-[50px] max-lg:pt-[40px] max-md:pt-24">
      <SectionBadge className="mb-[10px]">{serveIntro.eyebrow}</SectionBadge>
      <p
        id="serve-hero-intro"
        className="text-h1 m-0"
      >
        {serveIntro.title}{" "}
        <ShimmerText>{serveIntro.accent}</ShimmerText>
      </p>
      <p className="mt-[20px] max-w-auto text-p1 text-muted max-sm:mt-[14px] max-sm:text-[14px] max-sm:leading-[1.5]">
        {serveIntro.description}
      </p>
    </header>
  );
}

export function ServeHeroMedia({
  image,
  imageAlt,
  beforeImage,
}: {
  image: string;
  imageAlt: string;
  beforeImage?: React.ReactNode;
}) {
  return (
    <div className="pb-[40px] max-lg:pb-[32px] max-sm:pb-[28px]">
      {beforeImage}

      <div className="container">
        <div
          className={
            beforeImage
              ? "relative aspect-[21/9] overflow-hidden rounded-[16px] bg-[#0A1725] max-md:aspect-[16/9] max-sm:aspect-[4/3]"
              : "relative mt-[40px] aspect-[21/9] overflow-hidden rounded-[16px] bg-[#0A1725] max-lg:mt-[32px] max-md:aspect-[16/9] max-sm:mt-[28px] max-sm:aspect-[4/3]"
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
    </div>
  );
}
