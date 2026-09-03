import NewsCard from "../../components/NewsCard";
import { newsItems } from "../../components/newsData";

const latestInsights = newsItems
  .filter((item) => item.category === "insights" && item.id !== "turning-utility-data")
  .slice(0, 3);

export default function LatestInsightsSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[60px]"
      aria-labelledby="latest-insights-title"
    >
      <div className="container">
        <h2
          id="latest-insights-title"
          className="m-0 text-[clamp(28px,3.2vw,40px)] font-normal uppercase tracking-eyebrow text-[#152D48]"
        >
          LATEST INSIGHTS
        </h2>

        <div className="mt-[50px] grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 max-sm:mt-[28px] max-sm:gap-5">
          {latestInsights.map((item) => (
            <NewsCard
              key={item.id}
              label={item.label}
              title={item.title}
              description={item.description}
              image={item.image}
              cta={item.cta}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
