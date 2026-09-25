"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  BookOpen,
  FileText,
  Gauge,
  HelpCircle,
  ImageIcon,
  Inbox,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, adminOnly: false },
  { href: "/admin/enquiries", label: "Enquiries", icon: Inbox, adminOnly: false },
  { href: "/admin/pages", label: "Pages", icon: FileText, adminOnly: false },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle, adminOnly: false },
  { href: "/admin/guide", label: "Meter guide", icon: Gauge, adminOnly: false },
  { href: "/admin/blog", label: "Blog", icon: BookOpen, adminOnly: false },
  { href: "/admin/media", label: "Media Library", icon: ImageIcon, adminOnly: false },
  { href: "/admin/users", label: "Users", icon: Users, adminOnly: true },
  { href: "/admin/settings", label: "Settings", icon: Settings, adminOnly: true },
] as const;

export function AdminNav({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const { data } = useSession();
  const role = data?.user?.role;
  const items = NAV.filter((item) => !item.adminOnly || role === "admin");

  return (
    <nav className={cn("flex flex-col gap-0.5", className)}>
      {items.map((item) => {
        const active =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            data-active={active ? "true" : "false"}
            className="cms-nav-link"
          >
            <Icon className="h-4 w-4 shrink-0" />
            {item.label}
          </Link>
        );
      })}
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="cms-nav-link mt-2 w-full text-left"
      >
        <LogOut className="h-4 w-4 shrink-0" />
        Logout
      </button>
    </nav>
  );
}

export function AdminBrand() {
  return (
    <Link href="/admin" className="flex items-center px-2 py-1" aria-label="CMS home">
      <img
        src="/cms/eclipze-logo.png"
        alt="Eclipze"
        width={180}
        height={52}
        className="cms-logo"
      />
    </Link>
  );
}
