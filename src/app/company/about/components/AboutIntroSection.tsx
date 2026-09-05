import OptimizedImage from "@/components/OptimizedImage";
import { aboutIntro } from "./aboutData";

export default function AboutIntroSection() {
  return (
    <section
      className="relative overflow-hidden pt-[50px] pb-[80px] max-md:pt-24"
      aria-labelledby="about-intro-title"
    >
      <div className="container">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-center gap-[60px] pb-[50px] max-lg:grid-cols-1 max-lg:gap-[40px] max-sm:pb-[70px]">
          <div className="min-w-0">
            <h1
              id="about-intro-title"
              className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
            >
              {aboutIntro.title}{" "}
              <span className="text-h2 shimmer-text text-orange">{aboutIntro.accent}</span>
            </h1>
            <div className="mt-[20px] flex flex-col gap-[20px]">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="m-0 text-p1 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[400px] overflow-hidden rounded-[16px] bg-[#0A1725]">
            <img src={aboutIntro.image} alt={aboutIntro.imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="border-t border-[#152D48]" aria-hidden="true" />
      </div>
    </section>
  );
}
