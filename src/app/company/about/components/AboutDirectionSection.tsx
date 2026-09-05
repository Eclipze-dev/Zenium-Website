import { CircleCheck } from "@/components/icons/lucideIcons";
import { aboutDirection } from "./aboutData";

export default function AboutDirectionSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      aria-labelledby="about-direction-title"
    >
      <div className="container">
        <div className="max-w-auto">
          <h2
            id="about-direction-title"
            className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]"
          >
            {aboutDirection.title}{" "}
            <span className="text-h2 shimmer-text text-orange">{aboutDirection.accent}</span>
          </h2>

          <div className="mt-[20px] flex flex-col gap-[20px]">
            {aboutDirection.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="m-0 text-p1 text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-[20px] m-0 flex list-none flex-col gap-[10px] p-0">
            {aboutDirection.items.map((item) => (
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

          <p className="mt-[20px] m-0 max-w-[1110px] rounded-[8px] bg-orange px-[28px] py-[22px] text-p1 italic text-white max-sm:px-[20px] max-sm:py-[18px]">
            {aboutDirection.callout}
          </p>
        </div>
      </div>
    </section>
  );
}
