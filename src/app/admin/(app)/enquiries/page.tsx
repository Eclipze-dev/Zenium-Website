import type { Metadata } from "next";
import EnquiriesTable from "@/components/cms/EnquiriesTable";
import { listEnquiries } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Enquiries" };

export default async function AdminEnquiriesPage() {
  const enquiries = await listEnquiries();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Enquiries</h1>
        <p className="text-sm text-muted-foreground">
          Messages submitted through the website contact form.
        </p>
      </div>
      <EnquiriesTable enquiries={JSON.parse(JSON.stringify(enquiries))} />
    </div>
  );
}
