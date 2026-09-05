import CareersEmptyIllustration from "./CareersEmptyIllustration";
import { careersOpportunities } from "./careersData";

export default function CareersOpportunitiesSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      aria-labelledby="careers-opportunities-title"
    >
      <div className="container flex flex-col">
        <p className="mb-[10px] text-h4 tracking-eyebrow text-zen-text">
          {careersOpportunities.eyebrow}
        </p>
        <h2
          id="careers-opportunities-title"
          className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]"
        >
          {careersOpportunities.title}{" "}
          <span className="text-h2 shimmer-text text-orange">
            {careersOpportunities.accent}
          </span>
        </h2>
        <p className="m-0 mt-[20px] text-p1 text-muted">
          {careersOpportunities.description}
        </p>

        <div className="mt-[100px] w-full max-w-auto">
          <CareersEmptyIllustration />
        </div>

        <p className="m-0 mt-[10px] text-p2 font-semibold text-center text-zen-text">
          {careersOpportunities.footer}
        </p>
      </div>
    </section>
  );
}
