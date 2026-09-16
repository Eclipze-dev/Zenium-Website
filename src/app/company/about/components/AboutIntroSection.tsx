import OptimizedImage from "@/components/OptimizedImage";
import SectionBadge from "@/components/SectionBadge";
import { aboutIntro } from "./aboutData";
import ShimmerText from "@/components/ShimmerText";

export default function AboutIntroSection() {
  return (
    <section
      className="relative overflow-hidden pt-[50px] pb-[80px] max-lg:pt-[40px] max-lg:pb-[48px] max-md:pt-24"
      aria-labelledby="about-intro-title"
    >
      <div className="container">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-center gap-[60px] pb-[0px] max-lg:grid-cols-1 max-lg:gap-[36px] max-sm:pb-[70px]">
          <div className="min-w-0">
            <SectionBadge className="mb-[clamp(12px,1.5vw,20px)]">ABOUT</SectionBadge>
            <h1
              id="about-intro-title"
              className="text-h1 m-0"
            >
              {aboutIntro.title}{" "}
              <ShimmerText>{aboutIntro.accent}</ShimmerText>
            </h1>
            <div className="mt-[20px] flex flex-col gap-[20px] max-sm:mt-[14px] max-sm:gap-[14px]">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="m-0 text-p1 text-muted max-sm:text-[14px] max-sm:leading-[1.5]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[400px] max-lg:h-[320px] max-sm:h-[220px] overflow-hidden rounded-[16px] bg-[#0A1725]">
            <OptimizedImage
              src={aboutIntro.image}
              alt={aboutIntro.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="border-t border-[#152D48]" aria-hidden="true" />
      </div>
    </section>
  );
}
