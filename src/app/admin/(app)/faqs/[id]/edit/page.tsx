import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqForm from "@/components/cms/FaqForm";
import { PageHeader } from "@/components/cms/PageHeader";
import { toPlain } from "@/lib/cms/plain";
import { getFaqById } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Edit FAQ" };

export default async function EditFaqPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) notFound();
  const faq = await getFaqById(id);
  if (!faq) notFound();

  return (
    <div className="space-y-6">
      <PageHeader title="Edit FAQ" />
      <FaqForm faq={toPlain(faq)} />
    </div>
  );
}
