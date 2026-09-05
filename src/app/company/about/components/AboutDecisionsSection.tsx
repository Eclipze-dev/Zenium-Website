import { aboutDecisions } from "./aboutData";

export default function AboutDecisionsSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      aria-labelledby="about-decisions-title"
    >
      <div className="container grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-[110px] max-lg:grid-cols-1 max-lg:gap-[28px]">
        <h2
          id="about-decisions-title"
          className="text-h1 m-0 max-w-[16ch] max-sm:text-[clamp(28px,7vw,36px)]"
        >
          {aboutDecisions.title}{" "}
          <span className="text-h2 shimmer-text text-orange">{aboutDecisions.accent}</span>
        </h2>

        <div className="flex flex-col gap-[30px]">
          {aboutDecisions.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="m-0 text-p1 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
