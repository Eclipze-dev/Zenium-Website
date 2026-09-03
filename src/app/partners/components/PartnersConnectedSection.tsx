import SectionIntro from "@/app/home/components/SectionIntro";
import { connectedByDesignTags } from "./partnersData";

export default function PartnersConnectedSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container text-center">
        <SectionIntro
          centered
          fullWidth
          eyebrow="CONNECTED BY DESIGN"
          text="Zenium HES and MDM are designed to operate within multi-vendor environments—connecting infrastructure, managing trusted data and supporting intelligence across the energy ecosystem."
        >
          Technology that fits the{" "}
          <span className="text-orange text-h1">wider solution</span>
        </SectionIntro>

        <div className="mx-auto mt-[40px] max-w-[800px] rounded-[10px] bg-orange px-6 py-4 max-sm:rounded-[16px] max-sm:px-5 max-sm:py-4">
          <p className="m-0 text-button italic text-white">
            {connectedByDesignTags.join(" • ")}
          </p>
        </div>
      </div>
    </section>
  );
}
