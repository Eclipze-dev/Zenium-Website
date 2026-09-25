import type { Metadata } from "next";
import PageForm from "@/components/cms/PageForm";

export const metadata: Metadata = { title: "New page" };

export default function NewPagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">New page</h1>
        <p className="text-sm text-muted-foreground">
          Content can be HTML or Markdown.
        </p>
      </div>
      <PageForm />
    </div>
  );
}
