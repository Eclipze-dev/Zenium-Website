import { Radio } from "lucide-react";
import { audiences } from "./homeData";
import Button from "@/components/Button";
import {
  surfaceCardClass,
  surfaceCardMuted,
  surfaceCardTitle,
} from "@/lib/surfaceCard";
import { cn } from "@/lib/cn";
import SectionIntro from "./SectionIntro";

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
                  surfaceCardClass(
                    "min-w-0 rounded-[8px] p-[35px] min-h-[230px] max-sm:p-[28px] max-sm:min-h-0",
                  ),
                  i < 3 ? "col-span-2 max-lg:col-span-1" : "col-span-3 max-lg:col-span-1",
                )}
              >
                <AudienceIcon className="mb-[20px] h-6 w-6 text-orange" strokeWidth={1.8} />
                <h3 className={`text-h3 my-[12px] mx-0 mb-[16px] ${surfaceCardTitle}`}>
                  {title as string}
                </h3>
                <p className={`text-button text-muted m-0 ${surfaceCardMuted}`}>
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
