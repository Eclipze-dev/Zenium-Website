"use client";

import { Bell, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AdminBrand, AdminNav } from "@/components/cms/AdminNav";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const iconButtonClass =
  "cursor-pointer rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent hover:text-foreground";

function initialsFrom(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-flex h-9 w-9 rounded-lg"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={iconButtonClass}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default function AdminHeader() {
  const { data } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const name = data?.user?.name || "User";
  const email = data?.user?.email || "";
  const initials = initialsFrom(name);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border bg-background/95 px-6 py-4 text-foreground backdrop-blur">
      <div className="flex items-center gap-2 lg:hidden">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Open menu"
              className="border-border text-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="cms-drawer flex h-full w-64 flex-col gap-0 border-[#e5e5ea] p-0 shadow-xl sm:max-w-none"
          >
            <div className="cms-sidebar-brand">
              <AdminBrand />
            </div>
            <div className="cms-sidebar-nav min-h-0 flex-1">
              <AdminNav onNavigate={() => setMenuOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button
          type="button"
          aria-label="Notifications"
          className={cn(iconButtonClass, "relative")}
        >
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-[14px] font-medium text-foreground">{name}</p>
            <p className="text-[12px] text-muted-foreground">{email}</p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[13px] font-semibold !text-white cms-dark:bg-slate-100 cms-dark:!text-gray-900">
            {initials}
          </div>
        </div>
      </div>
    </header>
  );
}
