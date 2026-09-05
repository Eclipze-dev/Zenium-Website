import { audiences } from "./homeData";
import Button from "@/components/Button";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import SectionIntro from "./SectionIntro";

export default function WhoWeServeSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      id="who-we-serve"
    >
      <div className="container grid grid-cols-[450px_1fr] gap-[60px] items-center max-lg:grid-cols-1 max-lg:gap-[40px]">
        <div className="min-w-0">
          <SectionIntro eyebrow="WHO WE SERVE">
            <span className="text-orange text-h2 shimmer-text">Intelligence</span>{` `}across the energy ecosystem.
          </SectionIntro>
          <p className="text-muted text-p1 my-[20px] mb-[26px]">
            Zenium&apos;s technology is designed for the evolving needs of utilities
            and the wider energy ecosystem.
          </p>
          <Button href="/serve/utilities">
            <span>Explore Who We Serve</span>
          </Button>
        </div>
        <div className="min-w-0 grid grid-cols-6 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {audiences.map(([title, text, Icon], i) => (
            <SurfaceFeatureCard
              key={title}
              icon={Icon}
              title={title}
              text={text}
              className={
                i < 3
                  ? "col-span-2 min-h-[230px] p-[35px] max-lg:col-span-1 max-sm:min-h-0"
                  : "col-span-3 min-h-[230px] p-[35px] max-lg:col-span-1 max-sm:min-h-0"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
