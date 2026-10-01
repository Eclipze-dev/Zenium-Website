import type { Metadata } from "next";
import { PageHeader } from "@/components/cms/PageHeader";
import PageForm from "@/components/cms/PageForm";

export const metadata: Metadata = { title: "New page" };

export default function NewPagePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New page" subtitle="Content can be HTML or Markdown." />
      <PageForm />
    </div>
  );
}
