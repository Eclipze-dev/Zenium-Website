# Zenium website — Git and Hostinger workflow

Primary remote is Bitbucket. GitHub is a backup only. The live Hostinger site must not be overwritten from git without an explicit production change.

```
Cursor
  → Bitbucket feature branch
  → Pull Request
  → main
  → Hostinger (zip upload or a confirmed production deploy)
```

## Remotes

| Remote   | URL                                                      | Role                         |
| -------- | -------------------------------------------------------- | ---------------------------- |
| `origin` | `https://bitbucket.org/enzen-zenium/zenium.ai.git`       | Primary (pull / push)        |
| `github` | `https://github.com/Eclipze-dev/Zenium-Website.git`      | Backup (do not delete)       |

## Local setup

```bash
git clone https://bitbucket.org/enzen-zenium/zenium.ai.git
cd zenium.ai
npm install
cp .env.example .env
npm run dev
```

HTTPS auth uses a Bitbucket [app password](https://support.atlassian.com/bitbucket-cloud/docs/create-an-app-password/) with repository read/write. Username is your Bitbucket username; password is the app password (not your account password). Do not commit `.env`.

Cursor daily loop:

```bash
git pull
# make changes
git add .
git commit -m "Describe why this change exists."
git push
```

## Feature work

```bash
git checkout main
git pull origin main
git checkout -b feature/short-name
# commit, then:
git push -u origin HEAD
```

Open a Bitbucket pull request into `main`. After merge, update production only when you intend to:

1. Download the `main` zip from Bitbucket, or pull locally and zip the source (without `node_modules` / `.next` / `.env`).
2. In Hostinger, deploy that zip as a **Next.js** app, Node **22.x**.
3. Keep Hostinger environment variables:

```
SMTP_HOST
SMTP_PORT=25
MAIL_FROM=noreply@zenium.ai
MAIL_INTERNAL_TO=info@zenium.ai
```

Hostinger build / start:

```
npm install
npm run build
npm start
```

Hostinger Node.js Git auto-deploy currently supports GitHub, not Bitbucket. Generic Hostinger Git pull does not run `npm install` / `npm run build`. Until that changes, keep the live site on the existing Hostinger deployment and refresh it with a zip (or GitHub) only when you choose to ship.

To copy `main` to the GitHub backup:

```bash
git push github main
```
