import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
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
import { PageHeader } from "@/components/cms/PageHeader";
import EnquiriesColumnChart from "@/components/cms/EnquiriesColumnChart";
import InterestDonutChart from "@/components/cms/InterestDonutChart";
import { cn } from "@/lib/cn";
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

type ActivityItem = Awaited<ReturnType<typeof getDashboardData>>["activity"][number];

function formatDate(value: Date | string) {
  return new Date(value).toLocaleString();
}

const metricCardClass =
  "rounded-2xl border border-transparent bg-card p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors hover:border-[#6D4AFF]/40";
const panelCardClass =
  "rounded-2xl border-0 bg-card shadow-[0_8px_24px_rgba(0,0,0,0.06)]";
const panelTitleClass =
  "!text-[17px] font-semibold normal-case tracking-normal text-foreground";
const iconBadgeClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full";

type MetricCard = {
  label: string;
  value: number;
  icon: LucideIcon;
  href: string;
  iconColor: string;
};

function MetricLink({ card }: { card: MetricCard }) {
  const Icon = card.icon;
  return (
    <Link href={card.href} className="block text-inherit">
      <div className={metricCardClass}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[12px] font-medium uppercase leading-none tracking-wide text-muted-foreground">
              {card.label}
            </p>
            <p className="mt-2 text-[32px] font-semibold leading-none text-foreground">
              {card.value}
            </p>
          </div>
          <div className={cn(iconBadgeClass, card.iconColor)}>
            <Icon size={22} />
          </div>
        </div>
      </div>
    </Link>
  );
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
  let activity: ActivityItem[] = [];
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
  const dailyRows = Array.from({ length: 7 }, (_, index) => {
    const iso = dayKey(6 - index);
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
    { label: "Enquiries", value: enquiries, icon: Inbox, href: "/admin/enquiries", iconColor: "bg-gray-100 text-gray-900 cms-dark:bg-white/10 cms-dark:text-slate-100" },
    { label: "Pages", value: pages, icon: FileText, href: "/admin/pages", iconColor: "bg-gray-100 text-gray-900 cms-dark:bg-white/10 cms-dark:text-slate-100" },
    { label: "FAQs", value: faqs, icon: HelpCircle, href: "/admin/faqs", iconColor: "bg-gray-100 text-gray-900 cms-dark:bg-white/10 cms-dark:text-slate-100" },
    { label: "Blog posts", value: posts, icon: ScrollText, href: "/admin/blog", iconColor: "bg-gray-100 text-gray-900 cms-dark:bg-white/10 cms-dark:text-slate-100" },
    { label: "Meter guide", value: guide, icon: Gauge, href: "/admin/guide", iconColor: "bg-gray-100 text-gray-900 cms-dark:bg-white/10 cms-dark:text-slate-100" },
    { label: "Users", value: users, icon: Users, href: "/admin/users", iconColor: "bg-gray-100 text-gray-900 cms-dark:bg-white/10 cms-dark:text-slate-100" },
    { label: "Media", value: media, icon: ImageIcon, href: "/admin/media", iconColor: "bg-gray-100 text-gray-900 cms-dark:bg-white/10 cms-dark:text-slate-100" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Overview of CMS content and website enquiries."
      />
      {dbError ? (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          Could not connect to the database. Import database/schema.sql and
          database/seed.sql, then set DB_* environment variables.
        </p>
      ) : null}
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] 2xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="min-w-0 space-y-6">
          <div className="grid items-start gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,max(220px,calc((100%-4.5rem)/4))),1fr))]">
            {cards.map((card) => (
              <MetricLink key={card.label} card={card} />
            ))}
          </div>
          <div className="grid min-w-0 gap-4 2xl:grid-cols-2">
            <Card className={cn(panelCardClass, "min-w-0")}>
              <CardHeader>
                <CardTitle className={panelTitleClass}>Enquiries</CardTitle>
                <CardDescription className="text-[14px] text-muted-foreground">
                  Last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent className="min-w-0 overflow-x-hidden text-muted-foreground">
                <EnquiriesColumnChart rows={dailyRows} />
              </CardContent>
            </Card>
            <Card className={cn(panelCardClass, "min-w-0")}>
              <CardHeader>
                <CardTitle className={panelTitleClass}>By interest</CardTitle>
                <CardDescription className="text-[14px] text-muted-foreground">
                  All contact form submissions
                </CardDescription>
              </CardHeader>
              <CardContent className="min-w-0 overflow-x-hidden text-muted-foreground">
                <InterestDonutChart rows={interestRows} />
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className={cn(panelCardClass, "flex h-[calc(100dvh-13rem)] min-w-0 flex-col overflow-hidden")}>
          <CardHeader className="shrink-0 p-8 pb-0">
            <CardTitle className={panelTitleClass}>Recent Activity</CardTitle>
            <CardDescription className="text-[14px] text-muted-foreground">
              Latest CMS actions
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-0 flex-1 overflow-y-auto px-8 pb-6 pt-2">
            {activity.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity yet.</p>
            ) : (
              <ul className="divide-y divide-border">
                {activity.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-3"
                  >
                    <p className="min-w-0 text-sm font-medium">
                      {item.admin_name || item.admin_email || "System"}{" "}
                      <span className="font-normal text-muted-foreground">
                        {item.action} {item.entity}
                        {item.entity_id ? ` #${item.entity_id}` : ""}
                      </span>
                    </p>
                    <p className="shrink-0 text-xs text-muted-foreground">
                      {formatDate(item.created_at)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
