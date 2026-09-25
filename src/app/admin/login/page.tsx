import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "@/components/cms/LoginForm";

export const metadata: Metadata = {
  title: "Sign in · CMS",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
