import {
  ArrowUpRightIcon,
  DownloadIcon,
} from "@/components/icons/icons";
import { resources } from "./homeData";
import Button from "@/components/Button";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
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
        <div className="grid grid-cols-3 gap-[10px] mt-[75px] text-left max-md:grid-cols-2 max-sm:grid-cols-1">
          {resources.map(({ type, title, text, cta, icon: Icon, action }) => (
            <article
              key={title}
              className={surfaceCardClass(
                "min-w-0 flex min-h-[300px] flex-col rounded-[8px] p-[42px] max-sm:p-[28px] max-sm:min-h-0",
              )}
            >
              <div className="flex justify-between items-center mb-[22px]">
                <span className="flex items-center text-orange">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                {/* <span className="text-white/30 transition-all duration-250 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  {action === "download" ? (
                    <DownloadIcon width={15} height={15} />
                  ) : (
                    <ArrowUpRightIcon width={15} height={15} />
                  )}
                </span> */}
              </div>
              <span className="flex items-center gap-[7px] text-h4 uppercase pb-4 text-orange">
                {type}
              </span>
              <h3 className={`text-h3 my-0 mx-0 mb-[12px] ${surfaceCardTitle}`}>
                {title}
              </h3>
              <p className={`text-button text-muted m-0 flex-1 ${surfaceCardMuted}`}>
                {text}
              </p>
              <button className="mt-[20px] inline-flex h-[20px] items-center gap-2 self-start whitespace-nowrap border-0 bg-none p-0 text-body font-semibold leading-[20px] text-orange transition-colors duration-500 ease-out group-hover:text-orange">
                <span className="block h-[20px] text-button leading-[20px]">{cta}</span>
                <div className="pl-1">
                  {action === "download" ? (
                    <DownloadIcon className="h-6 w-6" strokeWidth={1.8} />
                  ) : (
                    <ArrowUpRightIcon className="h-6 w-6" strokeWidth={1.8} />
                  )}
                </div>
              </button>
            </article>
          ))}
        </div>
        <div className="mt-[50px]">
          <Button outline>
            <span className="text-button">Explore All Resources</span>
            {/* <ArrowRightIcon width={16} height={16} /> */}
          </Button>
        </div>
      </div>
    </section>
  );
}
