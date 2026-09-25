import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Gauge,
  HelpCircle,
  ImageIcon,
  Inbox,
  ScrollText,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDashboardData } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Dashboard" };

const INTERESTS = [
  "Solutions",
  "Partnerships",
  "Careers",
  "General enquiry",
] as const;

const INTEREST_COLOR: Record<string, string> = {
  Solutions: "#C026D3",
  Partnerships: "#7C3AED",
  Careers: "#6D4AFF",
  "General enquiry": "#4F46E5",
};

function formatDate(value: Date | string) {
  return new Date(value).toLocaleString();
}

function dayKey(offset: number) {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCDate(date.getUTCDate() - offset);
  return date.toISOString().slice(0, 10);
}

function dayLabel(iso: string) {
  const date = new Date(`${iso}T00:00:00Z`);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", timeZone: "UTC" });
}

function BarChart({
  rows,
}: {
  rows: { label: string; total: number; color: string }[];
}) {
  const max = Math.max(1, ...rows.map((row) => row.total));
  const width = 520;
  const height = 160;
  const gap = 8;
  const barWidth = (width - gap * (rows.length - 1)) / rows.length;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-40 w-full" role="img">
      {rows.map((row, index) => {
        const barHeight = row.total === 0 ? 2 : (row.total / max) * (height - 28);
        const x = index * (barWidth + gap);
        const y = height - 22 - barHeight;
        return (
          <g key={row.label}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx={4}
              fill={row.color}
            />
            <text
              x={x + barWidth / 2}
              y={height - 6}
              textAnchor="middle"
              fill="currentColor"
              fontSize="10"
              opacity="0.7"
            >
              {row.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default async function AdminDashboardPage() {
  let pages = 0;
  let users = 0;
  let media = 0;
  let faqs = 0;
  let posts = 0;
  let enquiries = 0;
  let guide = 0;
  let enquiryDays: { day: string; total: number }[] = [];
  let enquiryInterests: { interest: string; total: number }[] = [];
  let activity: Awaited<ReturnType<typeof getDashboardData>>["activity"] = [];
  let dbError = false;

  try {
    const data = await getDashboardData();
    pages = data.pages;
    users = data.users;
    media = data.media;
    faqs = data.faqs;
    posts = data.posts;
    enquiries = data.enquiries;
    guide = data.guide;
    enquiryDays = data.enquiryDays;
    enquiryInterests = data.enquiryInterests;
    activity = data.activity;
  } catch {
    dbError = true;
  }

  const dayTotals = new Map(enquiryDays.map((row) => [row.day, row.total]));
  const dailyRows = Array.from({ length: 14 }, (_, index) => {
    const iso = dayKey(13 - index);
    return {
      label: dayLabel(iso),
      total: dayTotals.get(iso) ?? 0,
      color: "#6D4AFF",
    };
  });

  const interestTotals = new Map(
    enquiryInterests.map((row) => [row.interest, row.total]),
  );
  const interestRows = INTERESTS.map((interest) => ({
    label: interest.split(" ")[0],
    total: interestTotals.get(interest) ?? 0,
    color: INTEREST_COLOR[interest],
  }));

  const cards = [
    { label: "Enquiries", value: enquiries, icon: Inbox, href: "/admin/enquiries" },
    { label: "Pages", value: pages, icon: FileText, href: "/admin/pages" },
    { label: "FAQs", value: faqs, icon: HelpCircle, href: "/admin/faqs" },
    { label: "Blog posts", value: posts, icon: ScrollText, href: "/admin/blog" },
    { label: "Meter guide", value: guide, icon: Gauge, href: "/admin/guide" },
    { label: "Users", value: users, icon: Users, href: "/admin/users" },
    { label: "Media", value: media, icon: ImageIcon, href: "/admin/media" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of CMS content and website enquiries.
        </p>
      </div>
      {dbError ? (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          Could not connect to the database. Import database/schema.sql and
          database/seed.sql, then set DB_* environment variables.
        </p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.label} href={card.href} className="block text-inherit">
              <Card className="h-full transition-colors hover:border-[#6D4AFF]/40">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{card.label}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{card.value}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Enquiries</CardTitle>
            <CardDescription>Last 14 days</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <BarChart rows={dailyRows} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>By interest</CardTitle>
            <CardDescription>All contact form submissions</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <BarChart rows={interestRows} />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest CMS actions</CardDescription>
        </CardHeader>
        <CardContent>
          {activity.length === 0 ? (
            <p className="text-sm text-muted-foreground">No activity yet.</p>
          ) : (
            <ul className="divide-y divide-border">
              {activity.map((item) => (
                <li key={item.id} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium">
                      {item.admin_name || item.admin_email || "System"}{" "}
                      <span className="font-normal text-muted-foreground">
                        {item.action} {item.entity}
                        {item.entity_id ? ` #${item.entity_id}` : ""}
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(item.created_at)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
