import type { Metadata } from "next";
import FaqForm from "@/components/cms/FaqForm";

export const metadata: Metadata = { title: "New FAQ" };

export default function NewFaqPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">New FAQ</h1>
      </div>
      <FaqForm />
    </div>
  );
}
