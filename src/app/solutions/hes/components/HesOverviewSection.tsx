import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";

export default function HesOverviewSection() {
  return (
    <SolutionFeaturePanel
      eyebrow="ZENIUM HES"
      title={
        <>
          The connection layer for{" "}
          <p className="inline text-orange text-h2 shimmer-text">smart metering.</p>
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
