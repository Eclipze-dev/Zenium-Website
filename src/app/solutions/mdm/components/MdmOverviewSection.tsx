import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";

export default function MdmOverviewSection() {
  return (
    <SolutionFeaturePanel
      eyebrow="ZENIUM MDM"
      title={
        <>
            Trusted data for {" "}
          <p className="inline text-orange text-h1">energy operations.</p>
        </>
      }
    >
      <p>Smart-metering programmes generate large volumes of data from different meters, systems and time intervals. 
        Its value depends on whether the data is complete, consistent and ready to use.</p>
      <p>
        Zenium MDM receives data from multiple HES platforms and other authorised sources, applies 
        quality controls and makes trusted information available to billing, customer, 
        operational and analytics applications. 
      </p>
    </SolutionFeaturePanel>
  );
}
