import type { Metadata } from "next";
import GuideEntryForm from "@/components/cms/GuideEntryForm";

export const metadata: Metadata = { title: "New guide entry" };

export default function NewGuideEntryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">New guide entry</h1>
      </div>
      <GuideEntryForm />
    </div>
  );
}
