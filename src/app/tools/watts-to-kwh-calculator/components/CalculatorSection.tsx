import SectionBadge from "@/components/SectionBadge";
import WattsToKwhCalculator from "./WattsToKwhCalculator";

export default function CalculatorSection() {
  return (
    <section className="pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]">
      <div className="container mx-auto max-w-3xl text-center">
        <SectionBadge className="mb-3">Tools</SectionBadge>
        <h1 className="text-h1 m-0 mt-3">Watts to kWh calculator</h1>
        <p className="mt-5 text-p1 text-muted">
          Convert power (watts or kilowatts) and usage time into kilowatt-hours.
          On electricity bills in many markets,{" "}
          <strong>1 unit = 1 kWh</strong>.
        </p>
      </div>
      <div className="container mt-10">
        <WattsToKwhCalculator />
      </div>
    </section>
  );
}
