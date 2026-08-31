import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadIcon,
} from "@/components/icons/icons";
import { resources } from "./homeData";
import Button from "@/components/Button";
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
              className="group min-w-0 bg-box rounded-[8px] p-[42px] flex flex-col min-h-[300px] transition-all duration-250 hover:bg-hover-surface hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0"
            >
              <div className="flex justify-between items-center mb-[22px]">
                <span className="flex items-center text-orange">
                  <Icon size={26} />
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
              <h3 className="text-h3 my-0 mx-0 mb-[12px]">
                {title}
              </h3>
              <p className="text-muted text-button m-0 flex-1">
                {text}
              </p>
              <button className="inline-flex items-center self-start gap-2 h-[20px] mt-[20px] p-0 border-0 bg-none text-orange text-body font-semibold leading-[20px] whitespace-nowrap transition-all duration-250 ">
                <span className="block h-[20px] text-button leading-[20px]">{cta}</span>
                <div className="pl-1">
                  {action === "download" ? (
                    <DownloadIcon width={24} height={24} />
                  ) : (
                    <ArrowUpRightIcon width={24} height={24} />
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
