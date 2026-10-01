"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Eye, Pencil, Search, Trash2 } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ListColumn<T> {
  header: string;
  accessor: (row: T) => ReactNode;
  headerClass?: string;
  cellClass?: string;
}

const headerCellClass =
  "whitespace-nowrap px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:px-6 md:py-3.5";
const bodyCellClass =
  "whitespace-nowrap px-4 py-3 text-muted-foreground md:px-6 md:py-4";
const pillClass = "inline-flex items-center rounded-lg px-2.5 py-1 text-[13px] font-medium";

export function ListTable<T>({
  rows,
  columns,
  rowKey,
  searchPlaceholder,
  searchText,
  emptyMessage = "No results.",
}: {
  rows: T[];
  columns: ListColumn<T>[];
  rowKey: (row: T) => string;
  searchPlaceholder: string;
  searchText: (row: T) => string;
  emptyMessage?: string;
}) {
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();
  const filtered = query
    ? rows.filter((row) => searchText(row).toLowerCase().includes(query))
    : rows;

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={searchPlaceholder}
          className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div className="overflow-hidden rounded-2xl bg-card shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[56rem]">
            <thead>
              <tr className="border-b border-border bg-secondary">
                {columns.map((column) => (
                  <th
                    key={column.header}
                    className={cn(headerCellClass, column.headerClass)}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-12 text-center text-sm text-muted-foreground"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr
                    key={rowKey(row)}
                    className="border-b border-border transition-colors hover:bg-secondary"
                  >
                    {columns.map((column) => (
                      <td
                        key={column.header}
                        className={cn(bodyCellClass, column.cellClass)}
                      >
                        {column.accessor(row)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function PrimaryText({ children }: { children: ReactNode }) {
  return <p className="text-[15px] font-medium text-foreground">{children}</p>;
}

export function SecondaryText({
  children,
  mono = false,
}: {
  children: ReactNode;
  mono?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-muted-foreground",
        mono ? "font-mono text-[13px]" : "text-[14px]",
      )}
    >
      {children}
    </p>
  );
}

const PILL_TONE = {
  green: "bg-green-100 text-green-700 cms-dark:bg-green-500/15 cms-dark:text-green-300",
  gray: "bg-gray-100 text-gray-600 cms-dark:bg-white/10 cms-dark:text-slate-300",
  purple: "bg-purple-100 text-purple-700 cms-dark:bg-purple-500/15 cms-dark:text-purple-300",
  red: "bg-red-100 text-red-700 cms-dark:bg-red-500/15 cms-dark:text-red-300",
} as const;

export function StatusPill({
  children,
  tone,
}: {
  children: ReactNode;
  tone: keyof typeof PILL_TONE;
}) {
  return (
    <span className={cn(pillClass, PILL_TONE[tone])}>{children}</span>
  );
}

const actionClass =
  "inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-muted-foreground transition-all";

export function ViewAction({ href }: { href: string }) {
  return (
    <Link
      href={href}
      title="View"
      className={cn(
        actionClass,
        "hover:bg-blue-500/10 hover:text-blue-600 cms-dark:hover:text-blue-300",
      )}
    >
      <Eye size={18} />
    </Link>
  );
}

export function EditAction({ href }: { href: string }) {
  return (
    <Link
      href={href}
      title="Edit"
      className={cn(actionClass, "hover:bg-accent hover:text-foreground")}
    >
      <Pencil size={18} />
    </Link>
  );
}

export function DeleteAction({
  title = "Delete",
  onClick,
}: {
  title?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={cn(
        actionClass,
        "hover:bg-red-500/10 hover:text-red-600 cms-dark:hover:text-red-300",
      )}
    >
      <Trash2 size={18} />
    </button>
  );
}
