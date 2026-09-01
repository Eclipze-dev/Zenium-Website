import SectionIntro from "@/app/home/components/SectionIntro";
import { measurableValueQuote } from "./mdmData";

export default function MdmFoundationSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container flex flex-col items-center gap-5 text-center">
        <SectionIntro
          centered
          eyebrow="MEASURABLE VALUE"
          text="Zenium MDM turns fragmented readings into consistent, usable information—helping organisations reduce exceptions, strengthen billing processes and improve visibility across energy operations."
        >
          From trusted data to{" "}
          <span className="text-orange text-h1">measurable value</span>
        </SectionIntro>

        <div className="mt-2 w-auto rounded-[10px] bg-[#F07F25] px-8 py-[10px]">
          <p className="text-p3 m-0 text-center italic text-zen-text">
            {measurableValueQuote}
          </p>
        </div>
      </div>
    </section>
  );
}
