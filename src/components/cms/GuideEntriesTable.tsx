"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/cms/DataTable";
import { deleteGuideEntryAction } from "@/lib/cms/actions/guide";
import type { CmsSmartMeterGuideEntry } from "@/types/cms";

export default function GuideEntriesTable({
  entries,
}: {
  entries: CmsSmartMeterGuideEntry[];
}) {
  const router = useRouter();

  return (
    <DataTable
      data={entries}
      searchPlaceholder="Search guide entries…"
      columns={[
        {
          accessorKey: "display_code",
          header: "Code",
          cell: ({ row }: { row: { original: CmsSmartMeterGuideEntry } }) =>
            row.original.display_code || "—",
        },
        {
          accessorKey: "category",
          header: "Category",
          cell: ({ row }: { row: { original: CmsSmartMeterGuideEntry } }) =>
            row.original.category || "—",
        },
        { accessorKey: "sort_order", header: "Order" },
        {
          accessorKey: "enabled",
          header: "Status",
          cell: ({ row }: { row: { original: CmsSmartMeterGuideEntry } }) =>
            row.original.enabled ? "Enabled" : "Disabled",
        },
        {
          id: "actions",
          header: "",
          cell: ({ row }: { row: { original: CmsSmartMeterGuideEntry } }) => {
            const entry = row.original;
            return (
              <div className="flex justify-end gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={`/admin/guide/${entry.id}/edit`}>Edit</Link>
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={async () => {
                    if (!confirm("Delete this guide entry?")) return;
                    const result = await deleteGuideEntryAction(entry.id);
                    if (!result.ok) {
                      toast.error(result.error);
                      return;
                    }
                    toast.success("Entry deleted");
                    router.refresh();
                  }}
                >
                  Delete
                </Button>
              </div>
            );
          },
        },
      ]}
    />
  );
}
