import OptimizedImage from "@/components/OptimizedImage";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import { aboutExperience } from "./aboutData";
import ShimmerText from "@/components/ShimmerText";

export default function AboutExperienceSection() {
  return (
    <section
      className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]"
      aria-labelledby="about-experience-title"
    >
      <div className="container">
        <SolutionPanelCard className="!items-stretch !gap-0 p-[40px] max-lg:p-[32px] max-sm:p-[24px]">
          <div className="grid w-full grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-[75px] max-lg:grid-cols-1 max-lg:gap-[32px]">
            <div className="relative w-full h-[400px] max-lg:h-[280px] max-sm:h-[220px] overflow-hidden rounded-[12px] bg-[#0A1725]">
              <OptimizedImage
                src={aboutExperience.image}
                alt={aboutExperience.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <h2
                id="about-experience-title"
                className="text-h1 m-0"
              >
                {aboutExperience.title}{" "}
                <ShimmerText>
                  {aboutExperience.accent}
                </ShimmerText>
              </h2>
              <div className="mt-[28px] flex flex-col gap-[20px]">
                {aboutExperience.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="m-0 text-p1 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
