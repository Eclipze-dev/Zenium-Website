import SectionIntro from "@/app/home/components/SectionIntro";
import ShimmerText from "@/components/ShimmerText";
import { ContentLink } from "@/components/seo/ContentLink";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function HesFoundationSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col items-center gap-5 text-center">
        <SectionIntro
          centered
          singleLine
          fullWidth
          eyebrow="THE INTELLIGENCE FOUNDATION"
        >
          From connected meters to{" "}
          <ShimmerText>energy intelligence</ShimmerText>
        </SectionIntro>
        <p className="text-muted text-p1 max-sm:text-[14px] max-sm:leading-[1.5]">
          Zenium Head-End System (HES) does more than collect meter readings. It
          creates the connected foundation where cleansed interval reads are
          forwarded to our{" "}
          <ContentLink href={SOLUTION_PATHS.mdms}>
            Meter Data Management System (MDMS) for VEE processing
          </ContentLink>
          , and where utilities apply{" "}
          <ContentLink href={SOLUTION_PATHS.analytics}>
            advanced meter data analytics software for transformer load profiling
          </ContentLink>
          .
        </p>

        <div className="mt-2 w-auto rounded-[10px] bg-[#F07F25] px-8 py-[10px] max-lg:px-6">
          <p className="text-p3 m-0 text-center italic text-zen-text">
            Head-End System (HES) connects the infrastructure. Meter Data
            Management System (MDMS) makes the data trustworthy. Analytics turns
            it into intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
