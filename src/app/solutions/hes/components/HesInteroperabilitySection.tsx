import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";
import { interoperabilityItems } from "./hesData";
import ShimmerText from "@/components/ShimmerText";

export default function HesInteroperabilitySection() {
  return (
    <SolutionFeaturePanel
      eyebrow="INTEROPERABILITY"
      imageSide="left"
      image="/solutions/hes-interoperability.png"
      imageAlt="HES interoperability"
      bounded
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
      <div className="mt-[20px] flex flex-wrap gap-x-7 gap-y-2 text-button text-orange max-sm:gap-x-4 max-sm:gap-y-1.5 max-sm:text-[12px]">
        {interoperabilityItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </SolutionFeaturePanel>
  );
}
