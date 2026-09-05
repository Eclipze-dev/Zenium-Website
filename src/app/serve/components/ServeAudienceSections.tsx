import type { LucideIcon } from "@/components/icons/lucideIcons";
import SectionIntro from "@/app/home/components/SectionIntro";
import Button from "@/components/Button";
import SurfaceFeatureCard from "@/components/SurfaceFeatureCard";

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
    <section className="py-[40px] max-sm:py-[28px]">
      <div className="container">
        <SectionIntro eyebrow={content.eyebrow} fullWidth>
          {content.title}{" "}
          <span className="text-orange text-h2 shimmer-text">{content.accent}</span>
        </SectionIntro>
        <p className="my-[20px] max-w-auto text-p1 text-muted">
          {content.description}
        </p>
        {content.additionalDescription && (
          <p className="max-w-auto text-p1 text-muted">
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
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <h2 className="text-h5 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
          {content.capabilitiesTitle}{" "}
          <span className="text-h5 text-orange">
            {content.capabilitiesAccent}
          </span>
        </h2>

        {layout === "wide-bottom" ? (
          <div className="flex flex-col gap-[10px]">
            <div className="grid grid-cols-3 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
              {topItems.map(([Icon, title, text]) => (
                <SurfaceFeatureCard
                  key={title}
                  icon={Icon}
                  title={title}
                  text={text}
                  spacing="stack"
                  className="min-h-[230px] max-sm:min-h-0"
                />
              ))}
            </div>
            {bottomItems.length > 0 && (
              <div className="grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
                {bottomItems.map(([Icon, title, text]) => (
                  <SurfaceFeatureCard
                    key={title}
                    icon={Icon}
                    title={title}
                    text={text}
                    spacing="stack"
                    className="min-h-[230px] max-sm:min-h-0"
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-[10px] max-lg:grid-cols-2 max-sm:grid-cols-1">
            {items.map(([Icon, title, text]) => (
              <SurfaceFeatureCard
                key={title}
                icon={Icon}
                title={title}
                text={text}
                spacing="stack"
                className="min-h-[230px] max-sm:min-h-0"
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
    <section className="pb-[80px] pt-[20px] max-sm:pb-[70px]">
      <div className="container">
        <h2 className="text-h5 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
          {cta.title}{" "}
          <span className="text-h5 text-orange">{cta.accent}</span>
        </h2>
        <p className="mt-[10px] mb-[50px] max-w-auto text-p1 text-muted">
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
