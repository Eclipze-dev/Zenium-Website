import SectionIntro from "@/app/home/components/SectionIntro";
import { cn } from "@/lib/cn";
import HesPanelCard from "./HesPanelCard";

export default function FeaturePanel({
  eyebrow,
  title,
  children,
  imageSide = "right",
  image = "/image.png",
  imageAlt = "Connected energy network",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  imageSide?: "left" | "right";
  image?: string;
  imageAlt?: string;
}) {
  const content = (
    <div className="flex min-w-0 flex-col gap-5">
      <SectionIntro eyebrow={eyebrow}>{title}</SectionIntro>
      <div className="text-p1 text-muted [&>p+p]:mt-5">{children}</div>
    </div>
  );

  const visual = (
    <img
      src={image}
      alt={imageAlt}
      className="h-full min-h-[280px] w-full rounded-[8px] object-fill max-md:min-h-[220px]"
    />
  );

  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <HesPanelCard>
          <div
            className={cn(
              "grid w-full items-center gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]",
              imageSide === "left" && "xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]",
            )}
          >
            {imageSide === "left" ? (
              <>
                {visual}
                {content}
              </>
            ) : (
              <>
                {content}
                {visual}
              </>
            )}
          </div>
        </HesPanelCard>
      </div>
    </section>
  );
}
