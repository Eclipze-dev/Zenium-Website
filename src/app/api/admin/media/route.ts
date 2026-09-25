import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/cms/auth";
import { execute } from "@/lib/cms/db";
import { logActivity } from "@/lib/cms/activity";

export const runtime = "nodejs";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
};

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ message: "Choose an image to upload." }, { status: 400 });
  }

  const extension = ALLOWED_TYPES[file.type];
  if (!extension) {
    return NextResponse.json(
      { message: "Only JPEG, PNG, WebP, GIF, and SVG images are allowed." },
      { status: 400 },
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ message: "File must be 8MB or smaller." }, { status: 400 });
  }

  const filename = `${randomUUID()}${extension}`;
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadsDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadsDir, filename), buffer);

  const url = `/uploads/${filename}`;
  const adminId = Number(session.user.id);
  const result = await execute(
    `INSERT INTO media (filename, original_name, mime_type, size_bytes, url, uploaded_by)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [filename, file.name.slice(0, 255), file.type, file.size, url, adminId],
  );

  await logActivity(adminId, "upload", "media", result.insertId);

  return NextResponse.json({
    id: result.insertId,
    url,
    filename,
  });
}
