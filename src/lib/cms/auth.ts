import type { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { execute, queryOne } from "@/lib/cms/db";
import { getDbEnv } from "@/lib/cms/env";
import { logActivity } from "@/lib/cms/activity";
import type { AdminRole, CmsAdmin } from "@/types/cms";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: AdminRole;
    } & DefaultSession["user"];
  }

  interface User {
    role: AdminRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: AdminRole;
  }
}

function mysqlErrorCode(error: unknown): string | undefined {
  if (error && typeof error === "object" && "code" in error) {
    return String((error as { code: unknown }).code);
  }
  return undefined;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const email = credentials?.email?.trim().toLowerCase();
          const password = credentials?.password;
          if (!email || !password) return null;

          if (!getDbEnv("DB_HOST") || !getDbEnv("DB_USER")) {
            throw new Error("DB_NOT_CONFIGURED");
          }

          const admin = await queryOne<CmsAdmin>(
            `SELECT id, email, password_hash, name, role, status
             FROM admins
             WHERE email = ? AND status = 'active'
             LIMIT 1`,
            [email],
          );

          if (!admin) return null;

          const matches = await bcrypt.compare(password, admin.password_hash);
          if (!matches) return null;

          await execute("UPDATE admins SET last_login_at = NOW() WHERE id = ?", [
            admin.id,
          ]);
          await logActivity(admin.id, "login", "admin", String(admin.id));

          return {
            id: String(admin.id),
            email: admin.email,
            name: admin.name,
            role: admin.role,
          };
        } catch (error) {
          const code = mysqlErrorCode(error);
          if (code === "ER_ACCESS_DENIED_ERROR") {
            throw new Error("DB_ACCESS_DENIED");
          }
          if (code === "ER_NO_SUCH_TABLE" || code === "ER_BAD_DB_ERROR") {
            throw new Error("DB_MISSING_TABLE");
          }
          if (
            error instanceof Error &&
            (error.message === "DB_NOT_CONFIGURED" ||
              error.message === "DB_ACCESS_DENIED" ||
              error.message === "DB_MISSING_TABLE")
          ) {
            throw error;
          }
          console.error("[cms auth] Sign-in failed:", error);
          throw new Error("DB_UNAVAILABLE");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
