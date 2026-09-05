import OptimizedImage from "@/components/OptimizedImage";
import { aboutLeadership, type AboutLeader } from "./aboutData";

function LeadershipPortrait({ leader }: { leader: AboutLeader }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] bg-[#152D48]">
        {leader.image ? (
          <OptimizedImage
            src={leader.image}
            alt={leader.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        ) : null}
      </div>
      <h3 className="m-0 mt-[25px] text-p2 font-semibold text-zen-text">
        {leader.name}
      </h3>
      <p className="m-0 mt-[6px] text-button font-medium text-orange">{leader.title}</p>
    </article>
  );
}

export default function AboutLeadershipSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      aria-labelledby="about-leadership-title"
    >
      <div className="container">
        <header className="max-w-auto">
          <h2
            id="about-leadership-title"
            className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]"
          >
            {aboutLeadership.title}{" "}
            <span className="text-h2 shimmer-text text-orange">{aboutLeadership.accent}</span>
          </h2>
          <p className="m-0 mt-[30px] max-w-auto text-p1 text-muted">
            {aboutLeadership.description}
          </p>
        </header>

        <div className="mt-[50px] grid grid-cols-4 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {aboutLeadership.leaders.map((leader) => (
            <LeadershipPortrait key={leader.name} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
