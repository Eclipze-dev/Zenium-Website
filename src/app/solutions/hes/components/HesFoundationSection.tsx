import SectionIntro from "@/app/home/components/SectionIntro";
import ShimmerText from "@/components/ShimmerText";

export default function HesFoundationSection() {
  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container flex flex-col items-center gap-5 text-center">
        <SectionIntro
          centered
          singleLine
          fullWidth
          eyebrow="THE INTELLIGENCE FOUNDATION"
          text="Zenium HES does more than collect meter readings. It creates the connected foundation required for trusted meter-data management, operational analytics and intelligent energy applications."
        >
          From connected meters to{" "}
          <ShimmerText>energy intelligence</ShimmerText>
        </SectionIntro>

        <div className="mt-2 w-auto rounded-[10px] bg-[#F07F25] px-8 py-[10px] max-lg:px-6">
          <p className="text-p3 m-0 text-center italic text-zen-text">
            HES connects the infrastructure. MDM makes the data trustworthy.
            Analytics turns it into intelligence
          </p>
        </div>
      </div>
    </section>
  );
}
