import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GuideEntriesTable from "@/components/cms/GuideEntriesTable";
import { listGuideEntries } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Smart meter guide" };

export default async function AdminGuidePage() {
  const entries = await listGuideEntries();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Smart meter guide
          </h1>
          <p className="text-sm text-muted-foreground">
            Only add verified display codes and images. Do not invent entries.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/guide/new">New entry</Link>
        </Button>
      </div>
      <GuideEntriesTable entries={JSON.parse(JSON.stringify(entries))} />
    </div>
  );
}
