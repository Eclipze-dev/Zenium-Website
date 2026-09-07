import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";
import ShimmerText from "@/components/ShimmerText";

export default function HesOverviewSection() {
  return (
    <SolutionFeaturePanel
      eyebrow="ZENIUM HES"
      title={
        <>
          The connection layer for{" "}
          <ShimmerText as="p">smart metering.</ShimmerText>
        </>
      }
    >
      <p>Every smart-metering operation begins with a reliable connection to the meter.</p>
      <p>
        Zenium HES connects diverse meter populations, acquires data at scale and
        enables utilities and AMISPs to manage meters and communication devices
        remotely. It keeps data, events and authorised commands moving securely
        between field infrastructure and enterprise systems.
      </p>
    </SolutionFeaturePanel>
  );
}
