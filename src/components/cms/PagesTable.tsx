"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/cms/DataTable";
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
    <DataTable
      data={pages}
      searchPlaceholder="Search pages…"
      columns={[
        { accessorKey: "title", header: "Title" },
        { accessorKey: "slug", header: "Slug" },
        {
          accessorKey: "status",
          header: "Status",
          cell: ({ row }: { row: { original: CmsPage } }) => (
            <Badge variant={row.original.status === "published" ? "default" : "secondary"}>
              {row.original.status}
            </Badge>
          ),
        },
        {
          accessorKey: "updated_at",
          header: "Updated",
          cell: ({ row }: { row: { original: CmsPage } }) =>
            formatDate(row.original.updated_at),
        },
        {
          id: "actions",
          header: "",
          cell: ({ row }: { row: { original: CmsPage } }) => {
            const page = row.original;
            const nextStatus = page.status === "published" ? "draft" : "published";
            return (
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/pages/${page.id}/edit`}>Edit</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={async () => {
                    const result = await togglePageStatusAction(page.id, nextStatus);
                    if (!result.ok) {
                      toast.error(result.error);
                      return;
                    }
                    toast.success(
                      nextStatus === "published" ? "Page published" : "Page unpublished",
                    );
                    router.refresh();
                  }}
                >
                  {page.status === "published" ? "Unpublish" : "Publish"}
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={async () => {
                    if (!confirm(`Delete “${page.title}”?`)) return;
                    const result = await deletePageAction(page.id);
                    if (!result.ok) {
                      toast.error(result.error);
                      return;
                    }
                    toast.success("Page deleted");
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
