import Button from "@/components/Button";
import { statistics } from "./hesData";

export default function HesHeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-[80px] pt-[120px] max-md:pt-24 max-md:pb-[70px]"
      aria-labelledby="hes-hero-title"
    >
      <div className="container grid items-start gap-12 xl:grid-cols-[minmax(0,700px)_minmax(0,1fr)] xl:gap-[50px]">
        <div className="flex flex-col items-start gap-5">
          <p className="text-h4 tracking-eyebrow text-zen-text">HEAD-END SYSTEM</p>
          <h1
            id="hes-hero-title"
            className="text-h1 m-0 max-sm:text-[clamp(32px,7vw,40px)]"
          >
            Connect every <p className="inline text-orange text-h1">meter.</p>
          </h1>
          <p className="max-w-[800px] text-p1 text-muted">
            Zenium Head-End System connects smart meters and communication networks
            to utility operations — automating data acquisition, enabling secure
            remote operations and providing visibility across the metering network.
          </p>
          <div className="flex flex-wrap gap-[10px] pt-2.5">
            <Button href="/contact">Request a demo</Button>
            <Button href="/solutions/mdm" outline>
              Explore Zenium MDM
            </Button>
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-2 grid-rows-[minmax(0,4fr)_minmax(0,4fr)] gap-x-[25px] gap-y-[25px] flex-1 self-stretch">
          {statistics.map(([value, description]) => (
            <div
              key={value}
              className="flex min-h-[118px] flex-col justify-center rounded-[10px] bg-box p-[25px] transition-all duration-250 hover:bg-hover-surface"
            >
              <span className="text-h3 text-zen-text">{value}</span>
              <p className="mt-5 text-button text-zen-text">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
