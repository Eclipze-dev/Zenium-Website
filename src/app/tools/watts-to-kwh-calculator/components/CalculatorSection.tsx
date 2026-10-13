import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import SectionBadge from "@/components/SectionBadge";
import WattsToKwhCalculator from "./WattsToKwhCalculator";

export default function CalculatorSection() {
  return (
    <section className="pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24 max-md:pb-[70px]">
      <StaggerContainer className="container mx-auto max-w-3xl text-center" stagger={0.1}>
        <StaggerItem>
          <SectionBadge className="mb-3">Tools</SectionBadge>
        </StaggerItem>
        <StaggerItem>
          <h1 className="text-h1 m-0 mt-3">Watts to kWh calculator</h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-5 text-p1 text-muted">
            Convert power (watts or kilowatts) and usage time into kilowatt-hours.
            On electricity bills in many markets,{" "}
            <strong>1 unit = 1 kWh</strong>.
          </p>
        </StaggerItem>
      </StaggerContainer>
      <div className="container mt-10">
        <WattsToKwhCalculator />
      </div>
    </section>
  );
}
