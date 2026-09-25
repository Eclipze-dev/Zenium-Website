"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/cms/DataTable";
import { deleteBlogPostAction } from "@/lib/cms/actions/blog";
import type { CmsBlogPost } from "@/types/cms";

export default function BlogPostsTable({ posts }: { posts: CmsBlogPost[] }) {
  const router = useRouter();

  return (
    <DataTable
      data={posts}
      searchPlaceholder="Search posts…"
      columns={[
        { accessorKey: "title", header: "Title" },
        { accessorKey: "slug", header: "Slug" },
        {
          accessorKey: "status",
          header: "Status",
          cell: ({ row }: { row: { original: CmsBlogPost } }) => (
            <Badge
              variant={
                row.original.status === "published" ? "default" : "secondary"
              }
            >
              {row.original.status}
            </Badge>
          ),
        },
        {
          id: "actions",
          header: "",
          cell: ({ row }: { row: { original: CmsBlogPost } }) => {
            const post = row.original;
            return (
              <div className="flex justify-end gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={`/admin/blog/${post.id}/edit`}>Edit</Link>
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={async () => {
                    if (!confirm("Delete this post?")) return;
                    const result = await deleteBlogPostAction(post.id);
                    if (!result.ok) {
                      toast.error(result.error);
                      return;
                    }
                    toast.success("Post deleted");
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
