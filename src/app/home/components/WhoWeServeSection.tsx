import { Radio } from "lucide-react";
import { audiences } from "./homeData";
import Button from "@/components/Button";
import SectionIntro from "./SectionIntro";
import { cn } from "@/lib/cn";

export default function WhoWeServeSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px] bg-zenbg"
      id="who-we-serve"
    >
      <div className="container grid grid-cols-[450px_1fr] gap-[60px] items-center max-lg:grid-cols-1 max-lg:gap-[40px]">
        <div className="min-w-0">
          <SectionIntro eyebrow="WHO WE SERVE">
            <span className="text-orange text-h1">Intelligence</span>{` `}across the energy ecosystem.
          </SectionIntro>
          <p className="text-muted text-p1 my-[20px] mb-[26px]">
            Zenium's technology is designed for the evolving needs of utilities
            and the wider energy ecosystem.
          </p>
          <Button>
            <span>Explore Who We Serve</span>
          </Button>
        </div>
        <div className="min-w-0 grid grid-cols-6 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {audiences.map(([title, text, Icon], i) => {
            const AudienceIcon = Icon as typeof Radio;
            return (
              <article
                key={title as string}
                className={cn(
                  "min-w-0 bg-box rounded-[8px] p-[35px] min-h-[230px] transition-all duration-250 hover:bg-hover-surface hover:-translate-y-1 max-sm:p-[28px] max-sm:min-h-0",
                  i < 3 ? "col-span-2 max-lg:col-span-1" : "col-span-3 max-lg:col-span-1",
                )}
              >
                <AudienceIcon className="text-orange w-7 h-7 mb-[20px]" />
                <h3 className="text-h3 my-[12px] mx-0 mb-[16px]">
                  {title as string}
                </h3>
                <p className="text-muted text-button m-0">
                  {text as string}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
