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
import { deleteFaqAction } from "@/lib/cms/actions/faqs";
import type { CmsFaq } from "@/types/cms";

export default function FaqsTable({ faqs }: { faqs: CmsFaq[] }) {
  const router = useRouter();

  return (
    <ListTable
      rows={faqs}
      rowKey={(row) => String(row.id)}
      searchPlaceholder="Search FAQs…"
      emptyMessage="No FAQs match your search."
      searchText={(row) => `${row.question} ${row.page_key}`}
      columns={[
        {
          header: "Question",
          accessor: (row) => (
            <PrimaryText>
              <span className="line-clamp-2 max-w-md">{row.question}</span>
            </PrimaryText>
          ),
        },
        {
          header: "Page",
          accessor: (row) => (
            <StatusPill tone="purple">{row.page_key.toUpperCase()}</StatusPill>
          ),
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
              <EditAction href={`/admin/faqs/${row.id}/edit`} />
              <DeleteAction
                onClick={async () => {
                  if (!confirm("Delete this FAQ?")) return;
                  await notifyResult(await deleteFaqAction(row.id), "FAQ deleted", () =>
                    router.refresh(),
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
