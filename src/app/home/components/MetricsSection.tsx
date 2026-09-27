import MetricsNetwork from "./MetricsNetwork";
import SectionIntro from "./SectionIntro";
import { metrics } from "./homeData";

export default function MetricsSection() {
  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden py-[35px] max-lg:py-[40px] max-sm:py-[32px]"
    >
      <MetricsNetwork />
      <div className="container relative z-[1]">
        <SectionIntro
          centered
          singleLine
          fullWidth
          eyebrow="BUILT ON REAL-WORLD UTILITY EXPERIENCE."
        />
        <div className="mt-[45px] flex flex-wrap justify-center gap-y-[40px] max-lg:mt-[40px] max-sm:mt-[32px] max-sm:gap-y-[32px]">
          {metrics.map(([, value, description]) => (
            <div
              key={value}
              className="w-1/5 px-4 text-center max-lg:w-1/3 max-sm:w-1/2 max-[420px]:w-full"
            >
              <p className="m-0 whitespace-nowrap text-h3 font-medium leading-none tracking-[-0.02em] text-[#FFFFFF]">
                {value}
              </p>
              <p className="mx-auto mt-3 max-w-[16ch] text-button leading-[1.45] text-[rgba(255,255,255,0.78)] max-sm:text-[13px]">
                {description}
              </p>
            </div>
          ))}
        </div>
  
      </div>
    </section>
  );
}
