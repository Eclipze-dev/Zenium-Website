import SectionIntro from "./SectionIntro";

export default function MetricsSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px] bg-zenbg"
      id="solutions"
    >
      <div className="container">
        <SectionIntro centered eyebrow="PROVEN AT UTILITY SCALE">
          Built on real-world utility <strong>experience.</strong>
        </SectionIntro>
        <div className="mt-[75px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-6 max-sm:grid-cols-1">
          {[
            ["5 Million", "Meter-point MDM deployment"],
            ["2 Million+", "Meters onboarded"],
            ["1 Million", "Meter-point HES deployment"],
            ["12 Million+", "Simulated DLMS meters tested"],
            ["12 Cities", "Smart-streetlight implementations"],
          ].map(([value, label], i) => (
            <div
              key={value}
              className={`min-w-0 px-[24px] border-l border-line max-md:border-l-0 max-md:border-t max-md:px-0 max-md:pt-[20px] max-md:[&:nth-child(-n+2)]:border-t-0 max-md:[&:nth-child(-n+2)]:pt-0 ${i === 0 ? "border-l-0 pl-0" : ""}`}
            >
              <b className="text-metric-value font-semibold text-muted block">
                {value}
              </b>
              <span className="text-metric-label text-muted block mt-[14px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
