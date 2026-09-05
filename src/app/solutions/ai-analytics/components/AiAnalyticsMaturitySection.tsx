import SectionIntro from "@/app/home/components/SectionIntro";
import { maturitySteps } from "./aiAnalyticsData";

export default function AiAnalyticsMaturitySection() {
  const [descriptive, predictive, prescriptive] = maturitySteps;

  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container grid grid-cols-1 items-start gap-[60px] xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] max-lg:gap-[40px]">
        <SectionIntro eyebrow="INTELLIGENCE MATURITY">
          From knowing what happened to{" "}
          <span className="text-orange text-h2 shimmer-text">knowing what happens next.</span>
        </SectionIntro>

        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col">
            <p className="text-button uppercase tracking-[0.08em] text-muted">
              {descriptive.label}
            </p>
            <div className="mt-[10px] flex flex-col gap-[10px]">
              <h3 className="text-p2 m-0 text-zen-text">{descriptive.title}</h3>
              <p className="m-0 text-p1 text-muted">{descriptive.text}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-button uppercase tracking-[0.08em] text-muted">
              {predictive.label}
            </p>
            <div className="mt-[10px] flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-p2 m-0 text-zen-text">{predictive.title}</h3>
                <p className="m-0 text-p1 text-muted">{predictive.text}</p>
              </div>

              {predictive.insight && (
                <>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-p2 m-0 text-zen-text">{predictive.insight.heading}</p>
                    <p className="m-0 text-p1 text-muted">{predictive.insight.body}</p>
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <p className="text-p2 m-0 text-zen-text">
                      {predictive.insight.recommendation} →
                    </p>
                    <p className="text-button m-0 text-muted">{predictive.insight.footnote}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-button uppercase tracking-[0.08em] text-muted">
              {prescriptive.label}
            </p>
            <div className="mt-[10px] flex flex-col gap-[10px]">
              <h3 className="text-p2 m-0 text-zen-text">{prescriptive.title}</h3>
              <p className="m-0 text-p1 text-muted">{prescriptive.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
