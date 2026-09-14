import OptimizedImage from "@/components/OptimizedImage";
import { aboutLeadership, type AboutLeader } from "./aboutData";
import ShimmerText from "@/components/ShimmerText";

function renderBioParagraph(paragraph: string) {
  const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={part} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function LeadershipPortrait({ leader }: { leader: AboutLeader }) {
  return (
    <article className="mx-auto flex w-full max-w-[900px] overflow-hidden rounded-[16px] bg-white max-lg:flex-col max-md:flex-col">
      <div className="flex w-[30%] max-lg:w-full shrink-0 flex-col self-stretch max-md:w-full">
        <div className="relative min-h-[220px] flex-1 overflow-hidden bg-[#EEF1F4] max-md:aspect-[4/3] max-md:min-h-0 max-md:flex-none">
          {leader.image ? (
            <OptimizedImage
              src={leader.image}
              alt={leader.name}
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              className="object-cover object-top"
            />
          ) : null}
        </div>
        <div className="bg-orange px-4 py-4 text-center text-white">
          <h3 className="m-0 text-p2 font-semibold text-white">{leader.name}</h3>
          <p className="m-0 text-button font-medium text-white/95">
            {leader.title}
          </p>
        </div>
      </div>

      <div className="flex w-[70%] max-lg:w-full flex-1 flex-col justify-center gap-[16px] px-8 py-12 max-lg:px-6 max-lg:py-8 max-md:px-6 max-md:py-6">
        {leader.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="m-0 text-p1 text-common">
            {renderBioParagraph(paragraph)}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function AboutLeadershipSection() {
  return (
    <section
      className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]"
      aria-labelledby="about-leadership-title"
    >
      <div className="container">
        <header className="max-w-auto text-center">
          <h2
            id="about-leadership-title"
            className="text-h1 m-0"
          >
            {aboutLeadership.title}{" "}
            <ShimmerText>{aboutLeadership.accent}</ShimmerText>
          </h2>
          <p className="m-0 mt-[30px] max-w-auto text-p1 text-muted">
            {aboutLeadership.description}
          </p>
        </header>

        <div className="mt-[50px] flex flex-col gap-[50px] max-lg:gap-[36px]">
          {aboutLeadership.leaders.map((leader) => (
            <LeadershipPortrait key={leader.name} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
