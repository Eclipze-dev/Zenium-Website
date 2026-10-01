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

function isNavActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function logout() {
  return signOut({ callbackUrl: "/admin/login" });
}

function NavLink({
  href,
  label,
  icon: Icon,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: (typeof NAV)[number]["icon"];
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      data-active={active ? "true" : "false"}
      className="cms-nav-link"
    >
      <Icon size={18} className="shrink-0" />
      <span className="flex-1">{label}</span>
    </Link>
  );
}

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
    <div className={cn("flex h-full flex-col", className)}>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={isNavActive(pathname, item.href)}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
      <p className="whitespace-nowrap px-4 pb-3 pt-2 text-[13px] text-gray-500 cms-dark:text-slate-400">
        Powered by <span className="font-semibold text-gray-900 cms-dark:text-slate-100">Eclipze</span>
      </p>
      <div className="cms-sidebar-footer">
        <button
          type="button"
          onClick={logout}
          className="cms-nav-link w-full text-left"
        >
          <LogOut size={18} className="shrink-0" />
          <span className="flex-1">Logout</span>
        </button>
      </div>
    </div>
  );
}

export function AdminBrand() {
  return (
    <Link href="/admin" className="flex w-full items-center justify-center px-2 py-1" aria-label="CMS home">
      <img
        src="/cms/ZENIUM_dark_logo.png"
        alt="Zenium"
        width={150}
        height={44}
        className="cms-logo cms-logo-dark !h-[44px] !w-[150px] object-contain"
      />
      <img
        src="/cms/ZENIUM_light_logo.png"
        alt=""
        width={150}
        height={44}
        className="cms-logo cms-logo-light !h-[44px] !w-[150px] object-contain"
      />
    </Link>
  );
}
