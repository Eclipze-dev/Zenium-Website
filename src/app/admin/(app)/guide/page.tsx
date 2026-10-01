import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GuideEntriesTable from "@/components/cms/GuideEntriesTable";
import { PageHeader } from "@/components/cms/PageHeader";
import { toPlain } from "@/lib/cms/plain";
import { listGuideEntries } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Smart meter guide" };

export default async function AdminGuidePage() {
  const entries = await listGuideEntries();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Smart meter guide"
        subtitle="Only add verified display codes and images. Do not invent entries."
        actions={
          <Button asChild>
            <Link href="/admin/guide/new">New entry</Link>
          </Button>
        }
      />
      <GuideEntriesTable entries={toPlain(entries)} />
    </div>
  );
}
