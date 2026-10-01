"use client";

import { useRouter } from "next/navigation";
import {
  DeleteAction,
  EditAction,
  ListTable,
  PrimaryText,
  SecondaryText,
  StatusPill,
} from "@/components/cms/ListTable";
import { notifyResult } from "@/components/cms/notifyResult";
import { deleteGuideEntryAction } from "@/lib/cms/actions/guide";
import type { CmsSmartMeterGuideEntry } from "@/types/cms";

export default function GuideEntriesTable({
  entries,
}: {
  entries: CmsSmartMeterGuideEntry[];
}) {
  const router = useRouter();

  return (
    <ListTable
      rows={entries}
      rowKey={(row) => String(row.id)}
      searchPlaceholder="Search guide entries…"
      emptyMessage="No guide entries match your search."
      searchText={(row) =>
        `${row.display_code ?? ""} ${row.category ?? ""} ${row.description ?? ""}`
      }
      columns={[
        {
          header: "Code",
          accessor: (row) => <PrimaryText>{row.display_code || "—"}</PrimaryText>,
        },
        {
          header: "Category",
          accessor: (row) => <SecondaryText>{row.category || "—"}</SecondaryText>,
        },
        {
          header: "Order",
          accessor: (row) => <SecondaryText>{row.sort_order}</SecondaryText>,
        },
        {
          header: "Status",
          accessor: (row) => (
            <StatusPill tone={row.enabled ? "green" : "gray"}>
              {row.enabled ? "Enabled" : "Disabled"}
            </StatusPill>
          ),
        },
        {
          header: "Actions",
          accessor: (row) => (
            <div className="flex items-center gap-1">
              <EditAction href={`/admin/guide/${row.id}/edit`} />
              <DeleteAction
                onClick={async () => {
                  if (!confirm("Delete this guide entry?")) return;
                  await notifyResult(
                    await deleteGuideEntryAction(row.id),
                    "Entry deleted",
                    () => router.refresh(),
                  );
                }}
              />
            </div>
          ),
        },
      ]}
    />
  );
}
