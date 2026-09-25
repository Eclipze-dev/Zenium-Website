# Zenium website

Next.js 14 App Router site for [zenium.ai](https://www.zenium.ai), plus a reusable `/admin` CMS.

Public marketing pages are hardcoded. CMS pages, media, users, and settings are **admin CRUD only** and are not rendered on the live site yet.

## Local development

```bash
npm install
cp .env.example .env
# fill DB_* and NEXTAUTH_* values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the marketing site and [http://localhost:3000/admin](http://localhost:3000/admin) for the CMS.

## Hostinger (Node.js)

Use **Node 22**. Deploy from a GitHub ZIP (or git pull), then:

1. Create a MySQL database named `zenium_ai` (or match `DB_NAME`).
2. In phpMyAdmin, import `database/schema.sql`, then `database/seed.sql`.
3. Set environment variables from `.env.example` (`DB_*`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`).
4. Install, build, and start:

```bash
npm install
npm run build
npm start
```

First login: `admin@example.com` / `ChangeMe123!` — change this password immediately from **Users**.

### Uploads and ZIP redeploys

Media files live in `public/uploads`. A fresh ZIP deploy can overwrite that folder unless Hostinger preserves it. Copy uploads aside before replacing the app, or keep the folder outside the ZIP extract path.

## CMS reuse on the next site

Copy these paths into another Next.js 14 App Router app, then point env vars at that site’s MySQL:

- `src/app/admin`
- `src/app/api/auth`
- `src/app/api/admin`
- `src/lib/cms`
- `src/components/cms`
- `src/components/ui`
- `src/types/cms.ts`
- `database/`
- `public/cms/`
- `public/uploads/.gitkeep`

Also merge:

- Tailwind `darkMode: "class"` and CMS color tokens
- `.cms-root` CSS in `globals.css` (do not put shadcn variables on global `:root` if the marketing site has its own theme)
- NextAuth JWT middleware alongside any existing redirects
- Skip cookie/analytics UI on `/admin*`

## Stack notes

- MySQL via `mysql2` (parameterized queries, no Prisma)
- `bcryptjs` (pure JS; safer on Hostinger than native `bcrypt`)
- NextAuth v4 credentials + JWT cookies
- Isolated admin theme: `.cms-root`, `next-themes` `storageKey="cms-theme"`
