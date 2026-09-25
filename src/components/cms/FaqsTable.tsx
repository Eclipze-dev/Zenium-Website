"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/cms/DataTable";
import { deleteFaqAction } from "@/lib/cms/actions/faqs";
import type { CmsFaq } from "@/types/cms";

export default function FaqsTable({ faqs }: { faqs: CmsFaq[] }) {
  const router = useRouter();

  return (
    <DataTable
      data={faqs}
      searchPlaceholder="Search FAQs…"
      columns={[
        {
          accessorKey: "question",
          header: "Question",
          cell: ({ row }: { row: { original: CmsFaq } }) => (
            <span className="line-clamp-2 max-w-md">{row.original.question}</span>
          ),
        },
        {
          accessorKey: "page_key",
          header: "Page",
          cell: ({ row }: { row: { original: CmsFaq } }) => (
            <Badge variant="secondary">
              {row.original.page_key.toUpperCase()}
            </Badge>
          ),
        },
        { accessorKey: "sort_order", header: "Order" },
        {
          accessorKey: "enabled",
          header: "Status",
          cell: ({ row }: { row: { original: CmsFaq } }) =>
            row.original.enabled ? "Enabled" : "Disabled",
        },
        {
          id: "actions",
          header: "",
          cell: ({ row }: { row: { original: CmsFaq } }) => {
            const faq = row.original;
            return (
              <div className="flex justify-end gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={`/admin/faqs/${faq.id}/edit`}>Edit</Link>
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={async () => {
                    if (!confirm("Delete this FAQ?")) return;
                    const result = await deleteFaqAction(faq.id);
                    if (!result.ok) {
                      toast.error(result.error);
                      return;
                    }
                    toast.success("FAQ deleted");
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
