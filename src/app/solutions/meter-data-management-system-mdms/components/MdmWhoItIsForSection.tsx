import SectionIntro from "@/app/home/components/SectionIntro";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";
import SolutionPanelImage from "@/components/solutions/SolutionPanelImage";
import { whoItIsFor } from "./mdmData";
import ShimmerText from "@/components/ShimmerText";

export default function MdmWhoItIsForSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard>
          <div className="grid w-full items-stretch gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:gap-[40px]">
            <SolutionPanelImage
              bounded
              src="/solutions/mdm-who-it-is-for.png"
              alt="MDM who it is for"
              // sizes="(max-width: 1280px) 100vw, 600px"
            />
            <div className="flex min-w-0 flex-col justify-center gap-5">
              <SectionIntro eyebrow="WHO IT IS FOR">
                Built for a wider{" "}
                <ShimmerText>energy ecosystem</ShimmerText>
              </SectionIntro>
              <div className="flex flex-col gap-[30px]">
                {whoItIsFor.map(([title, description]) => (
                  <article key={title}>
                    <h3 className="text-p2 m-0 text-white/70">{title}</h3>
                    <p className="mt-0.5 text-button text-muted m-0">
                      {description}
                    </p>
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
