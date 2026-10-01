"use client";

import {
  ListTable,
  PrimaryText,
  SecondaryText,
  ViewAction,
} from "@/components/cms/ListTable";
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
    <ListTable
      rows={enquiries}
      rowKey={(row) => String(row.id)}
      searchPlaceholder="Search enquiries…"
      emptyMessage="No enquiries match your search."
      searchText={(row) =>
        `${row.first_name} ${row.last_name} ${row.email} ${row.company} ${row.interest}`
      }
      columns={[
        {
          header: "Date",
          accessor: (row) => <SecondaryText>{formatWhen(row.created_at)}</SecondaryText>,
        },
        {
          header: "Name",
          accessor: (row) => (
            <PrimaryText>
              {row.first_name} {row.last_name}
            </PrimaryText>
          ),
        },
        {
          header: "Email",
          accessor: (row) => <SecondaryText>{row.email}</SecondaryText>,
        },
        {
          header: "Company",
          accessor: (row) => <SecondaryText>{row.company}</SecondaryText>,
        },
        {
          header: "Interest",
          accessor: (row) => <SecondaryText>{row.interest}</SecondaryText>,
        },
        {
          header: "Actions",
          accessor: (row) => <ViewAction href={`/admin/enquiries/${row.id}`} />,
        },
      ]}
    />
  );
}
