import OptimizedImage from "@/components/OptimizedImage";
import ShimmerText from "@/components/ShimmerText";

const AiAnalyticsFoundationSection = () => {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container">
        <div className="flex w-full flex-row items-center justify-between gap-10 max-lg:flex-col max-lg:items-stretch max-lg:gap-8 max-sm:gap-6">
          {/* Tablet / mobile image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[16px] lg:hidden max-sm:order-2">
            <OptimizedImage
              src="/solutions/trusted-utility-data-foundation.png"
              alt="Trusted utility data foundation"
              fill
              sizes="100vw"
              className="rounded-[16px] object-cover object-center"
            />
          </div>

          {/* Desktop: side column */}
          <div className="relative hidden min-h-[280px] w-[40%] overflow-hidden rounded-[16px] lg:block">
            <OptimizedImage
              src="/solutions/trusted-utility-data-foundation.png"
              alt="Trusted utility data foundation"
              fill
              sizes="40vw"
              className="rounded-[16px] object-contain"
            />
          </div>

          <div className="flex min-w-0 w-[60%] flex-col gap-5 max-lg:w-full max-sm:order-1 max-sm:gap-4">
            <h2 className="text-h1 m-0">
              Built on a Trusted Utility{" "}
              <ShimmerText>Data Foundation</ShimmerText>
            </h2>

            <div className="text-p1 text-muted [&>p+p]:mt-5 max-sm:text-[14px] max-sm:leading-[1.5] max-sm:[&>p+p]:mt-4">
              <p className="text-p2 font-bold text-zen-text max-sm:text-[16px]">
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
};

export default AiAnalyticsFoundationSection;
