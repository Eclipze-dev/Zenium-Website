import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getEnquiryById } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Enquiry" };

function formatWhen(value: Date | string): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminEnquiryPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) notFound();
  const enquiry = await getEnquiryById(id);
  if (!enquiry) notFound();

  const rows = [
    ["Name", `${enquiry.first_name} ${enquiry.last_name}`],
    ["Business email", enquiry.email],
    ["Company", enquiry.company],
    ["Phone", enquiry.phone],
    ["Interested in", enquiry.interest],
    ["Submitted", formatWhen(enquiry.created_at)],
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Enquiry</h1>
        <Button asChild variant="outline">
          <Link href="/admin/enquiries">Back</Link>
        </Button>
      </div>
      <dl className="divide-y rounded-lg border">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-4 py-3 sm:grid-cols-[180px_1fr]">
            <dt className="text-sm text-muted-foreground">{label}</dt>
            <dd className="text-sm">{value}</dd>
          </div>
        ))}
        <div className="grid gap-1 px-4 py-3 sm:grid-cols-[180px_1fr]">
          <dt className="text-sm text-muted-foreground">Message</dt>
          <dd className="whitespace-pre-wrap text-sm">{enquiry.message}</dd>
        </div>
      </dl>
    </div>
  );
}
