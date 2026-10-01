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
import { deleteBlogPostAction } from "@/lib/cms/actions/blog";
import type { CmsBlogPost } from "@/types/cms";

export default function BlogPostsTable({ posts }: { posts: CmsBlogPost[] }) {
  const router = useRouter();

  return (
    <ListTable
      rows={posts}
      rowKey={(row) => String(row.id)}
      searchPlaceholder="Search posts…"
      emptyMessage="No posts match your search."
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
          header: "Actions",
          accessor: (row) => (
            <div className="flex items-center gap-1">
              <EditAction href={`/admin/blog/${row.id}/edit`} />
              <DeleteAction
                onClick={async () => {
                  if (!confirm("Delete this post?")) return;
                  await notifyResult(await deleteBlogPostAction(row.id), "Post deleted", () =>
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
