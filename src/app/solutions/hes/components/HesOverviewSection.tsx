import FeaturePanel from "./FeaturePanel";

export default function HesOverviewSection() {
  return (
    <FeaturePanel
      eyebrow="ZENIUM HES"
      title={
        <>
          The connection layer for{" "}
          <p className="inline text-orange text-h1">smart metering.</p>
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
    </FeaturePanel>
  );
}
