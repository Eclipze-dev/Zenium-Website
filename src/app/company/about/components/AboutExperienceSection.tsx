import OptimizedImage from "@/components/OptimizedImage";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import { aboutExperience } from "./aboutData";

export default function AboutExperienceSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      aria-labelledby="about-experience-title"
    >
      <div className="container">
        <SolutionPanelCard className="!items-stretch !gap-0 p-[40px] max-sm:p-[24px]">
          <div className="grid w-full grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-[75px] max-lg:grid-cols-1 max-lg:gap-[32px]">
            <div className="relative w-full h-[400px] overflow-hidden rounded-[12px] bg-[#0A1725]">
              <img src={aboutExperience.image} alt={aboutExperience.imageAlt} className="w-full h-full object-cover" />
            </div>

            <div className="min-w-0">
              <h2
                id="about-experience-title"
                className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]"
              >
                {aboutExperience.title}{" "}
                <span className="text-h1 text-orange">
                  {aboutExperience.accent}
                </span>
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
