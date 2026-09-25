"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function CmsProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {/*
        Tokens live on html[data-cms-theme] so Radix portals to body inherit
        the CMS theme. Marketing uses data-theme separately.
      */}
      <ThemeProvider
        attribute="data-cms-theme"
        defaultTheme="light"
        enableSystem={false}
        storageKey="cms-theme"
        disableTransitionOnChange
      >
        <div className="cms-root">
          <TooltipProvider delayDuration={200}>
            {children}
            <Toaster richColors position="top-right" />
          </TooltipProvider>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}
