import type { LucideIcon } from "@/components/icons/lucideIcons";
import SectionIntro from "@/app/home/components/SectionIntro";
import Button from "@/components/Button";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";
import ShimmerText from "@/components/ShimmerText";

export type ServeAudienceContent = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  additionalDescription?: string;
  heroImage: string;
  heroImageAlt: string;
  capabilitiesTitle: string;
  capabilitiesAccent: string;
  capabilities: ReadonlyArray<readonly [LucideIcon, string, string]>;
  cta: {
    title: string;
    accent: string;
    description: string;
    actions: { label: string; href: string; outline: boolean; variant?: "default" | "text" }[];
  };
};

export function ServeAudienceOverviewSection({
  content,
}: {
  content: ServeAudienceContent;
}) {
  return (
    <section className="py-[40px] max-lg:py-[32px] max-sm:py-[28px]">
      <div className="container">
        <SectionIntro
          eyebrow={content.eyebrow}
          fullWidth
          heading="h1"
          headingId="serve-hero-title"
        >
          {content.title}{" "}
          <ShimmerText>{content.accent}</ShimmerText>
        </SectionIntro>
        <p className="my-[20px] max-w-auto text-p1 text-muted max-sm:my-[14px] max-sm:text-[14px] max-sm:leading-[1.5]">
          {content.description}
        </p>
        {content.additionalDescription && (
          <p className="max-w-auto text-p1 text-muted max-sm:text-[14px] max-sm:leading-[1.5]">
            {content.additionalDescription}
          </p>
        )}
      </div>
    </section>
  );
}

export function ServeAudienceCapabilitiesSection({
  content,
  layout = "default",
}: {
  content: ServeAudienceContent;
  /** Prosumers: first 3 equal, last 2 wider. Other pages keep the default 3-col grid. */
  layout?: "default" | "wide-bottom";
}) {
  const items = content.capabilities;
  const topItems = layout === "wide-bottom" ? items.slice(0, 3) : items;
  const bottomItems = layout === "wide-bottom" ? items.slice(3) : [];

  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px] max-lg:gap-[36px] max-sm:gap-[32px]">
        <h2 className="text-h5 m-0">
          {content.capabilitiesTitle}{" "}
          <span className="text-h5 text-orange">
            {content.capabilitiesAccent}
          </span>
        </h2>

        {layout === "wide-bottom" ? (
          <>
            {/* Desktop only: 3 + 2 split */}
            <div className="hidden flex-col gap-[10px] lg:flex">
              <div className="grid grid-cols-3 gap-[10px]">
                {topItems.map(([Icon, title, text]) => (
                  <SurfaceFeatureCard
                    key={title}
                    icon={Icon}
                    title={title}
                    text={text}
                    spacing="stack"
                    className="min-h-[230px]"
                  />
                ))}
              </div>
              {bottomItems.length > 0 && (
                <div className="grid grid-cols-2 gap-[10px]">
                  {bottomItems.map(([Icon, title, text]) => (
                    <SurfaceFeatureCard
                      key={title}
                      icon={Icon}
                      title={title}
                      text={text}
                      spacing="stack"
                      className="min-h-[230px]"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Tablet only (640–1023): 2 × 2 × 1 (last card full width) */}
            <div className="hidden grid-cols-2 gap-[10px] max-lg:grid max-sm:hidden">
              {items.map(([Icon, title, text], index) => (
                <SurfaceFeatureCard
                  key={`tablet-${title}`}
                  icon={Icon}
                  title={title}
                  text={text}
                  spacing="stack"
                  className={
                    index === items.length - 1
                      ? "col-span-2 min-h-[200px]"
                      : "min-h-[200px]"
                  }
                />
              ))}
            </div>

            {/* Mobile only: single column */}
            <div className="grid grid-cols-1 gap-[10px] sm:hidden">
              {items.map(([Icon, title, text]) => (
                <SurfaceFeatureCard
                  key={`mobile-${title}`}
                  icon={Icon}
                  title={title}
                  text={text}
                  spacing="stack"
                  className="min-h-0"
                />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
            {items.map(([Icon, title, text]) => (
              <SurfaceFeatureCard
                key={title}
                icon={Icon}
                title={title}
                text={text}
                spacing="stack"
                className="min-h-[230px] max-lg:min-h-[200px] max-sm:min-h-0"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ServeAudienceCtaSection({
  content,
}: {
  content: ServeAudienceContent;
}) {
  const { cta } = content;

  return (
    <section className="pb-[80px] pt-[20px] max-lg:pb-[48px] max-lg:pt-[16px] max-sm:pb-[70px]">
      <div className="container">
        <h2 className="text-h5 m-0">
          {cta.title}{" "}
          <span className="text-h5 text-orange">{cta.accent}</span>
        </h2>
        <p className="mt-[10px] mb-[50px] max-w-auto text-p1 text-muted max-lg:mb-[32px] max-sm:mb-[28px] max-sm:text-[14px] max-sm:leading-[1.5]">
          {cta.description}
        </p>
        <div className="flex flex-wrap gap-[10px]">
          {cta.actions.map((action) => (
            <Button
              key={action.label}
              href={action.href}
              outline={action.outline}
              variant={action.variant}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
