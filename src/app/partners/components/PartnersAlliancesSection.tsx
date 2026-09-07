import OptimizedImage from "@/components/OptimizedImage";
import { cn } from "@/lib/cn";
import { allianceLogos } from "./partnersData";

/** Duplicate once for a seamless infinite loop. */
const marqueeLogos = [...allianceLogos, ...allianceLogos];

export default function PartnersAlliancesSection() {
  return (
    <section
      className="overflow-hidden container pt-[0px] pb-[80px] max-sm:py-[70px]"
      aria-labelledby="partners-alliances-title"
    >
      <h2
        id="partners-alliances-title"
        className="m-0 text-center text-h4 tracking-eyebrow text-zen-text"
      >
        PARTNERS &amp; ALLIANCES
      </h2>

      <div className="relative mt-[50px] w-full overflow-hidden max-sm:mt-[40px]">
        <div
          className={cn(
            "flex w-max items-center gap-[125px] px-[36px] will-change-transform",
            "animate-partners-marquee-rtl motion-reduce:animate-none",
            "hover:[animation-play-state:paused]",
          )}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-[48px] shrink-0 items-center justify-center opacity-70 grayscale transition-opacity duration-300 hover:opacity-100"
            >
              {logo.src ? (
                <OptimizedImage
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width ?? 140}
                  height={logo.height ?? 40}
                  className="h-10 w-auto max-w-[160px] object-contain brightness-0 invert"
                />
              ) : (
                <span className="whitespace-nowrap text-[18px] font-semibold tracking-[0.04em] text-white/80">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
