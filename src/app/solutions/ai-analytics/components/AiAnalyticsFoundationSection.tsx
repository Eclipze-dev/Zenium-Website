export default function AiAnalyticsFoundationSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <div className="flex flex-row justify-between w-full items-center gap-10 ">
          <div className="w-[40%]">
          <img
            src="/image.png"
            alt="Connected utility network infrastructure"
            className="h-full min-h-[280px] w-full rounded-[8px] object-cover max-md:min-h-[220px]"
          />
          </div>

          <div className="flex min-w-0 flex-col gap-5 w-[60%]">
            <h2 className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
              Built on a Trusted Utility{" "}
              <span className="text-orange text-h1">Data Foundation</span>
            </h2>

            <div className="text-p1 text-muted [&>p+p]:mt-5">
              <p className="text-p2 font-bold text-zen-text">
                Intelligence starts with trusted data.
              </p>
              <p>
                Zenium combines utility-domain expertise with HES, MDM and analytics capabilities
                to build intelligence from the data source upwards — connecting meter and
                consumption information with consumer, asset and network context.
              </p>
              <p>
                This creates a foundation for increasingly advanced utility intelligence, from
                visibility and anomaly detection to predictive analytics and AI-assisted
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
