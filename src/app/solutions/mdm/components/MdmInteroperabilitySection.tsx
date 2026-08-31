import { CircleCheck } from "lucide-react";
import SolutionFeaturePanel from "@/components/solutions/SolutionFeaturePanel";
import {
  connectedOperationsItems,
  integrationFooter,
  integrationTags,
} from "./mdmData";

export default function MdmInteroperabilitySection() {
  return (
    <SolutionFeaturePanel
      eyebrow="CONNECTED OPERATIONS"
      imageSide="left"
      title={
        <>
          Trusted data wherever it is{" "}
          <span className="text-orange text-h1">needed</span>
        </>
      }
    >
      <p>
        Zenium MDM makes validated meter data available across the utility
        technology environment.
      </p>

      <ul className="mt-[20px] flex flex-col gap-[14px] p-0 m-0 list-none">
        {connectedOperationsItems.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CircleCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-orange"
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span className="text-p1 text-muted">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-[20px] flex flex-col gap-2">
        <div className="flex flex-wrap gap-x-7 gap-y-2 text-button text-orange">
          {integrationTags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="text-button text-orange m-0">{integrationFooter}</p>
      </div>
    </SolutionFeaturePanel>
  );
}
