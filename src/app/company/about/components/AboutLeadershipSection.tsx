import OptimizedImage from "@/components/OptimizedImage";
import { aboutLeadership, type AboutLeader } from "./aboutData";

function leaderInitials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function LinkedInBadge({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#0A66C2] text-white transition-opacity hover:opacity-90"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.06-2.065 2.064 2.064 0 112.06 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  );
}

function LeadershipCard({ leader }: { leader: AboutLeader }) {
  return (
    <article className="flex h-full flex-col rounded-[16px] border border-[#152D48] bg-[#0A1725] px-[50px] py-[25px] max-sm:p-[22px]">
      <div className="flex items-start gap-4">
        <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-full bg-[#152D48]">
          {leader.image ? (
            <OptimizedImage
              src={leader.image}
              alt=""
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            <span
              className="flex h-full w-full items-center justify-center text-p2 font-medium text-zen-text"
              aria-hidden="true"
            >
              {leaderInitials(leader.name)}
            </span>
          )}
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="m-0 text-p2 font-semibold text-zen-text">
            {leader.name}
          </h3>
          <p className="m-0 mt-1 text-body font-medium text-orange">
            {leader.title}
          </p>
        </div>
      </div>

      <p className="m-0 my-[30px] flex-1 text-p1 text-muted">{leader.bio}</p>

      <div className="">
        <LinkedInBadge href={leader.linkedin} name={leader.name} />
      </div>
    </article>
  );
}

export default function AboutLeadershipSection() {
  return (
    <section
      className="py-[80px] max-sm:py-[70px]"
      aria-labelledby="about-leadership-title"
    >
      <div className="container flex flex-col gap-[100px]">
        <header className="max-w-auto">
          <h2
            id="about-leadership-title"
            className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]"
          >
            {aboutLeadership.title}{" "}
            <span className="text-h1 text-orange">{aboutLeadership.accent}</span>
          </h2>
          <p className="m-0 mt-[30px] text-p1 text-muted">
            {aboutLeadership.description}
          </p>
        </header>

        <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {aboutLeadership.leaders.map((leader) => (
            <LeadershipCard key={leader.name} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
