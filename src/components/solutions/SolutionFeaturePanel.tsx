import SectionIntro from "@/app/home/components/SectionIntro";
import { cn } from "@/lib/cn";
import SolutionPanelCard from "./SolutionPanelCard";
import SolutionPanelImage from "./SolutionPanelImage";

const SolutionFeaturePanel = ({
  eyebrow,
  title,
  children,
  imageSide = "right",
  image = "/image.png",
  imageAlt = "Connected energy network",
  bounded = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  imageSide?: "left" | "right";
  image?: string;
  imageAlt?: string;
  /** When true, show the full image in an inset frame instead of cover-fill. */
  bounded?: boolean;
}) => {
  const content = (
    <div className="flex min-w-0 flex-col gap-5 max-sm:gap-4">
      <SectionIntro eyebrow={eyebrow}>{title}</SectionIntro>
      <div className="text-p1 text-muted [&>p+p]:mt-5 max-sm:text-[14px] max-sm:leading-[1.5] max-sm:[&>p+p]:mt-4">
        {children}
      </div>
    </div>
  );

  const visual = (
    <SolutionPanelImage
      src={image}
      alt={imageAlt}
      bounded={bounded}
      sizes="(max-width: 1280px) 100vw, 640px"
    />
  );

  return (
    <section className="py-[80px] max-lg:py-[48px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard>
          <div
            className={cn(
              "grid w-full gap-10 max-lg:gap-8 max-sm:gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]",
              bounded ? "items-center" : "items-stretch",
              imageSide === "left" &&
                "xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]",
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
        </SolutionPanelCard>
      </div>
    </section>
  );
};

export default SolutionFeaturePanel;
