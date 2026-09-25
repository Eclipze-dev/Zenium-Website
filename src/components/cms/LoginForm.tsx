"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { status } = useSession();
  const [error, setError] = useState<string | null>(null);
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(searchParams.get("callbackUrl") || "/admin");
    }
  }, [status, router, searchParams]);

  async function onSubmit(values: LoginValues) {
    setError(null);
    const callbackUrl = searchParams.get("callbackUrl") || "/admin";
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl,
    });

    if (!result || result.error) {
      const code = decodeURIComponent(result?.error || "");
      const messages: Record<string, string> = {
        Configuration:
          "Auth is not configured. Set NEXTAUTH_SECRET in .env and restart the server.",
        DB_NOT_CONFIGURED:
          "Set DB_HOST and DB_USER in .env, then restart the server.",
        DB_ACCESS_DENIED:
          "Hostinger rejected the MySQL user or password, or Remote MySQL is blocking this IP (122.167.102.203).",
        DB_MISSING_TABLE:
          "Import database/schema.sql then database/seed.sql into this database.",
        DB_UNAVAILABLE: "Could not reach MySQL. Check DB_HOST and that the database is running.",
        CredentialsSignin:
          "Invalid CMS email or password. Use admin@example.com after importing seed.sql (not the MySQL username).",
      };
      setError(
        messages[code] ||
          "Invalid CMS email or password. Use admin@example.com after importing seed.sql (not the MySQL username).",
      );
      return;
    }

    router.push(result.url || "/admin");
    router.refresh();
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-3 text-center">
        <img
          src="/cms/eclipze-logo.png"
          alt="Eclipze"
          width={40}
          height={40}
          className="cms-logo mx-auto h-10 w-10"
        />
        <CardTitle className="text-2xl">CMS</CardTitle>
        <CardDescription>Sign in to manage content</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error ? (
              <p className="text-sm text-destructive">{error}</p>
            ) : null}
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Signing in…" : "Sign in"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
