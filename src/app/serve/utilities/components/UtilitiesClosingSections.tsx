import { CircleCheck } from "@/components/icons/lucideIcons";
import Button from "@/components/Button";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import { utilitiesContent } from "../../components/serveData";

export function UtilitiesSolutionsSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-[60px] items-start max-lg:grid-cols-1 max-lg:gap-[40px]">
        <h2 className="text-h5 m-0 max-w-auto max-sm:text-[clamp(28px,7vw,36px)]">
          Technology for the complete{" "}
          <span className="text-h5 text-orange">utility data journey.</span>
        </h2>

        <div className="flex flex-col gap-[36px]">
          {utilitiesContent.solutions.map((item) => (
            <article key={item.title} className="flex flex-col items-start gap-4">
              <h3 className="m-0 text-p2 font-normal text-zen-text">{item.title}</h3>
              <p className="m-0 text-p1 text-muted">{item.text}</p>
              <Button href={item.href} variant={item.variant}>
                {item.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UtilitiesPrioritiesSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col gap-[50px]">
        <h2 className="text-h5 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
          Built for different{" "}
          <span className="text-h5 text-orange">utility priorities.</span>
        </h2>

        <div className="grid grid-cols-2 gap-[50px] max-lg:grid-cols-1">
          {utilitiesContent.priorities.map((card) => (
            <SolutionPanelCard
              key={card.label}
              className="!items-start !gap-[24px] p-[36px] bg-common max-sm:p-[28px]"
            >
              <p className="m-0 text-button uppercase text-muted">
                {card.label}
              </p>
              <h3 className="m-0 text-h3 font-normal leading-[1.3] text-zen-text">
                {card.title}{" "}
                <span className="text-h3 text-orange">{card.accent}</span>
              </h3>
              <p className="m-0 text-p1 text-muted">{card.description}</p>
              <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span className="text-p1 text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </SolutionPanelCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UtilitiesAmiNextSection() {
  const { amiNext } = utilitiesContent;

  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <div className="max-w-auto">
          <h2 className="text-h5 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
            {amiNext.title}{" "}
            <span className="text-h5 text-orange">{amiNext.accent}</span>
          </h2>
          <p className="mt-[20px] text-p1 text-muted">{amiNext.description}</p>
          <div className="mt-[32px]">
            <Button href={amiNext.href} variant={amiNext.variant}>
              {amiNext.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
