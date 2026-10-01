import type { Metadata } from "next";
import FaqForm from "@/components/cms/FaqForm";
import { PageHeader } from "@/components/cms/PageHeader";

export const metadata: Metadata = { title: "New FAQ" };

export default function NewFaqPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New FAQ" />
      <FaqForm />
    </div>
  );
}
