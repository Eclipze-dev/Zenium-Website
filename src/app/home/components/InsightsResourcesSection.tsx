import {
  ArrowUpRightIcon,
  DownloadIcon,
} from "@/components/icons/icons";
import { resources } from "./homeData";
import Button from "@/components/Button";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import SectionIntro from "./SectionIntro";

export default function InsightsResourcesSection() {
  return (
    <section
      className="py-[80px] text-center max-sm:py-[70px] bg-zenbg"
      id="company"
    >
      <div className="container">
        <SectionIntro
          centered
          eyebrow="INSIGHTS & RESOURCES"
          text="Explore ideas, experiences and perspectives shaping the future of smarter, more connected utilities."
        >
          Thinking beyond the <span className="text-orange text-h1">meter.</span>
        </SectionIntro>
        <div className="mt-[75px] grid grid-cols-3 gap-[10px] text-left max-md:grid-cols-2 max-sm:grid-cols-1">
          {resources.map(({ type, title, text, cta, icon, action }) => (
            <SurfaceFeatureCard
              key={title}
              icon={icon}
              label={type}
              labelTone="orange"
              title={title}
              text={text}
              className="flex min-h-[300px] flex-col max-sm:min-h-0"
            >
              <button
                type="button"
                className="mt-[20px] inline-flex h-[20px] items-center gap-2 self-start whitespace-nowrap border-0 bg-none p-0 text-body font-semibold leading-[20px] text-orange transition-colors duration-500 ease-out group-hover:text-orange"
              >
                <span className="block h-[20px] text-button leading-[20px]">{cta}</span>
                <div className="pl-1">
                  {action === "download" ? (
                    <DownloadIcon className="h-6 w-6" strokeWidth={1.8} />
                  ) : (
                    <ArrowUpRightIcon className="h-6 w-6" strokeWidth={1.8} />
                  )}
                </div>
              </button>
            </SurfaceFeatureCard>
          ))}
        </div>
        <div className="mt-[50px]">
          <Button outline>
            <span className="text-button">Explore All Resources</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
