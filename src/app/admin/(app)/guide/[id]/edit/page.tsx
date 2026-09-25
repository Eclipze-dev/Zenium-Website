import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideEntryForm from "@/components/cms/GuideEntryForm";
import { getGuideEntryById } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Edit guide entry" };

export default async function EditGuideEntryPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) notFound();
  const entry = await getGuideEntryById(id);
  if (!entry) notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Edit guide entry</h1>
      </div>
      <GuideEntryForm entry={JSON.parse(JSON.stringify(entry))} />
    </div>
  );
}
