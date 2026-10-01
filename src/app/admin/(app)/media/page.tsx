import type { Metadata } from "next";
import MediaLibrary from "@/components/cms/MediaLibrary";
import { toPlain } from "@/lib/cms/plain";
import { listMedia } from "@/lib/cms/queries";

export const metadata: Metadata = { title: "Media Library" };

export default async function AdminMediaPage() {
  const items = await listMedia();

  return (
    <div className="space-y-6">
      <MediaLibrary items={toPlain(items)} />
    </div>
  );
}
