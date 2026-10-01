import type { Metadata } from "next";
import GuideEntryForm from "@/components/cms/GuideEntryForm";
import { PageHeader } from "@/components/cms/PageHeader";

export const metadata: Metadata = { title: "New guide entry" };

export default function NewGuideEntryPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New guide entry" />
      <GuideEntryForm />
    </div>
  );
}
