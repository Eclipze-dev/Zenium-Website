import SectionBadge from "@/components/SectionBadge";
import ShimmerText from "@/components/ShimmerText";

export default function GuideHeroSection() {
  return (
    <section className="pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]">
      <div className="container mx-auto max-w-auto text-center">
        <SectionBadge className="mb-3">Guide</SectionBadge>
        <h1 className="text-h1 m-0 mt-3">
          How to read a smart meter <ShimmerText>display</ShimmerText>
        </h1>
        <p className="mt-5 text-p1 text-muted">
          Use this guide to understand common smart meter display codes and
          readings. Entries are maintained in the CMS and only published when
          verified — we do not invent display codes or meter images.
        </p>
      </div>
    </section>
  );
}
