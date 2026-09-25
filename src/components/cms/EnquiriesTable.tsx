"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/cms/DataTable";
import type { CmsEnquiry } from "@/types/cms";

function formatWhen(value: Date | string): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function EnquiriesTable({ enquiries }: { enquiries: CmsEnquiry[] }) {
  return (
    <DataTable
      data={enquiries}
      searchPlaceholder="Search enquiries…"
      columns={[
        {
          accessorKey: "created_at",
          header: "Date",
          cell: ({ row }: { row: { original: CmsEnquiry } }) =>
            formatWhen(row.original.created_at),
        },
        {
          id: "name",
          header: "Name",
          accessorFn: (row: CmsEnquiry) => `${row.first_name} ${row.last_name}`,
          cell: ({ row }: { row: { original: CmsEnquiry } }) =>
            `${row.original.first_name} ${row.original.last_name}`,
        },
        { accessorKey: "email", header: "Email" },
        { accessorKey: "company", header: "Company" },
        { accessorKey: "interest", header: "Interest" },
        {
          id: "actions",
          header: "",
          cell: ({ row }: { row: { original: CmsEnquiry } }) => (
            <div className="flex justify-end">
              <Button asChild size="sm" variant="outline">
                <Link href={`/admin/enquiries/${row.original.id}`}>View</Link>
              </Button>
            </div>
          ),
        },
      ]}
    />
  );
}
