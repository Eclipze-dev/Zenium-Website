import type { Metadata } from "next";
import EnquiriesTable from "@/components/cms/EnquiriesTable";
import { PageHeader } from "@/components/cms/PageHeader";
import { toPlain } from "@/lib/cms/plain";
import { listEnquiries } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Enquiries" };

export default async function AdminEnquiriesPage() {
  const enquiries = await listEnquiries();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Enquiries"
        subtitle="Messages submitted through the website contact form."
      />
      <EnquiriesTable enquiries={toPlain(enquiries)} />
    </div>
  );
}
