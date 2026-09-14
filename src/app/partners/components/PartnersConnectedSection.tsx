import SectionIntro from "@/app/home/components/SectionIntro";
import { connectedByDesignTags } from "./partnersData";
import ShimmerText from "@/components/ShimmerText";

export default function PartnersConnectedSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container text-center">
        <SectionIntro
          centered
          fullWidth
          eyebrow="CONNECTED BY DESIGN"
          text="Zenium HES and MDM are designed to operate within multi-vendor environments—connecting infrastructure, managing trusted data and supporting intelligence across the energy ecosystem."
        >
          Technology that fits the{" "}
          <ShimmerText>wider solution</ShimmerText>
        </SectionIntro>

        <div className="mx-auto mt-[40px] max-w-[800px] rounded-[10px] bg-orange px-6 py-4 max-sm:mt-[28px] max-sm:rounded-[16px] max-sm:px-4 max-sm:py-3">
          {/* Desktop/tablet: single line */}
          <p className="m-0 hidden text-button italic text-white sm:block">
            {connectedByDesignTags.join(" • ")}
          </p>
          {/* Mobile: stacked chips */}
          <div className="flex flex-wrap justify-center gap-2 sm:hidden">
            {connectedByDesignTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-3 py-1 text-[12px] italic leading-[1.35] text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
