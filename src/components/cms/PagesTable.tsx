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
import {
  deletePageAction,
  togglePageStatusAction,
} from "@/lib/cms/actions/pages";
import type { CmsPage } from "@/types/cms";

function formatDate(value: Date | string) {
  return new Date(value).toLocaleString();
}

export default function PagesTable({ pages }: { pages: CmsPage[] }) {
  const router = useRouter();

  return (
    <ListTable
      rows={pages}
      rowKey={(row) => String(row.id)}
      searchPlaceholder="Search pages…"
      emptyMessage="No pages match your search."
      searchText={(row) => `${row.title} ${row.slug} ${row.status}`}
      columns={[
        {
          header: "Title",
          accessor: (row) => <PrimaryText>{row.title}</PrimaryText>,
        },
        {
          header: "Slug",
          accessor: (row) => <SecondaryText mono>{row.slug}</SecondaryText>,
        },
        {
          header: "Status",
          accessor: (row) => (
            <StatusPill tone={row.status === "published" ? "green" : "gray"}>
              {row.status === "published" ? "Published" : "Draft"}
            </StatusPill>
          ),
        },
        {
          header: "Updated",
          accessor: (row) => <SecondaryText>{formatDate(row.updated_at)}</SecondaryText>,
        },
        {
          header: "Actions",
          accessor: (row) => {
            const nextStatus = row.status === "published" ? "draft" : "published";
            return (
              <div className="flex items-center gap-1">
                <EditAction href={`/admin/pages/${row.id}/edit`} />
                <button
                  type="button"
                  className="rounded-lg px-2 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  onClick={async () => {
                    await notifyResult(
                      await togglePageStatusAction(row.id, nextStatus),
                      nextStatus === "published" ? "Page published" : "Page unpublished",
                      () => router.refresh(),
                    );
                  }}
                >
                  {row.status === "published" ? "Unpublish" : "Publish"}
                </button>
                <DeleteAction
                  onClick={async () => {
                    if (!confirm(`Delete “${row.title}”?`)) return;
                    await notifyResult(await deletePageAction(row.id), "Page deleted", () =>
                      router.refresh(),
                    );
                  }}
                />
              </div>
            );
          },
        },
      ]}
    />
  );
}
