import OptimizedImage from "@/components/OptimizedImage";
import type { CmsSmartMeterGuideEntry } from "@/types/cms";

export default function GuideEntriesSection({
  entries,
}: {
  entries: CmsSmartMeterGuideEntry[];
}) {
  return (
    <section className="pb-[80px] max-lg:pb-[48px] max-sm:pb-[70px]">
      <div className="container">
        {entries.length === 0 ? (
          <p className="mx-auto max-w-2xl text-center text-p1 text-muted">
            Guide entries will appear here once verified display codes and
            images are added in the CMS.
          </p>
        ) : (
          <ul className="mx-auto grid max-w-4xl gap-8">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="grid gap-6 rounded-[16px] border border-black/5 bg-white/50 p-6 sm:grid-cols-[200px_1fr]"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-[12px] bg-black/5">
                  {entry.image_url ? (
                    <OptimizedImage
                      src={entry.image_url}
                      alt={
                        entry.alt_text ||
                        entry.display_code ||
                        "Smart meter display"
                      }
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted">
                      No image
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 text-left">
                  {entry.category ? (
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#F07F25]">
                      {entry.category}
                    </p>
                  ) : null}
                  {entry.display_code ? (
                    <h2 className="text-h3 m-0 font-mono">
                      {entry.display_code}
                    </h2>
                  ) : (
                    <h2 className="text-h3 m-0">Display entry</h2>
                  )}
                  {entry.description ? (
                    <p className="text-p2 text-muted m-0">
                      {entry.description}
                    </p>
                  ) : null}
                  {entry.manufacturer_model_notes ? (
                    <p className="text-sm text-muted m-0">
                      {entry.manufacturer_model_notes}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
