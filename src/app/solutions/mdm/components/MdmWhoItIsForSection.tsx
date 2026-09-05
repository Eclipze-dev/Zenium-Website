import SectionIntro from "@/app/home/components/SectionIntro";
import OptimizedImage from "@/components/OptimizedImage";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import { whoItIsFor } from "./mdmData";

export default function MdmWhoItIsForSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard>
          <div className="grid w-full items-center gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:gap-[40px]">
            <div className="relative h-full max-h-[540px] min-h-[280px] w-full overflow-hidden rounded-[20px]">
              <OptimizedImage
                src="/image.png"
                alt="Connected energy infrastructure"
                fill
                sizes="(max-width: 1280px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-5">
              <SectionIntro eyebrow="WHO IT IS FOR">
                Built for a wider{" "}
                <span className="text-orange text-h2 shimmer-text">energy ecosystem</span>
              </SectionIntro>
              <div className="flex flex-col gap-[30px]">
                {whoItIsFor.map(([title, description]) => (
                  <article key={title}>
                    <h3 className="text-p2 m-0 text-white/70">{title}</h3>
                    <p className="mt-0.5 text-button text-muted m-0">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
