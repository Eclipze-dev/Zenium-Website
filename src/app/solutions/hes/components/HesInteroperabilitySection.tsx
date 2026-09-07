import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";
import { interoperabilityItems } from "./hesData";
import ShimmerText from "@/components/ShimmerText";

export default function HesInteroperabilitySection() {
  return (
    <SolutionFeaturePanel
      eyebrow="INTEROPERABILITY"
      imageSide="left"
      title={<>Built for mixed meter <ShimmerText>environments</ShimmerText></>}
    >
      <p>
        Zenium HES is designed to work across multi-vendor smart-meter environments,
        helping utilities and AMISPs introduce different meters and communication
        devices without creating isolated systems.
      </p>
      <p>
        The platform supports DLMS/COSEM environments, IS 15959 compatibility and
        standards-based integration with MDM, billing and other authorised utility
        systems.
      </p>
      <div className="flex flex-wrap mt-[20px] gap-x-7 gap-y-2 text-button text-orange">
        {interoperabilityItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </SolutionFeaturePanel>
  );
}
