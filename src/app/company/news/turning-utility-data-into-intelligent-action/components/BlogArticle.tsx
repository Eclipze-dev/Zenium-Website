import Button from "@/components/Button";
import OptimizedImage from "@/components/OptimizedImage";
import { ArrowRightIcon } from "@/components/icons/icons";
import { cn } from "@/lib/cn";
import { blogPost } from "./blogData";

const BlogArticle = () => {
  return (
    <section className="pb-[64px] pt-[50px] max-md:pb-[48px] max-md:pt-24">
      <div className="container">
        <div className="mx-auto max-w-auto">
          <div className="flex items-start justify-between gap-6">
            <p className="m-0 text-h4 text-common">
              {blogPost.eyebrow}
            </p>
            <Button href="/company/news" className="shrink-0 px-[16px] py-[8px]">
              Back
            </Button>
          </div>

          <h1 className="text-h1 m-0 mt-[20px] text-common max-sm:mt-[22px] max-sm:text-[clamp(32px,7vw,40px)]">
            {blogPost.title}{" "}
            <span className="text-h2 shimmer-text text-orange">{blogPost.accent}</span>
          </h1>

          <p className="mt-[20px] text-p1 leading-relaxed text-common2">
            {blogPost.intro}
          </p>

          <div className="relative mt-[50px] aspect-[21/9] overflow-hidden rounded-[16px] bg-[#EEF1F4] max-sm:mt-[28px]">
            <OptimizedImage
              src={blogPost.image}
              alt={blogPost.imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1100px"
              className="object-cover"
            />
          </div>

          <article className="mt-[40px] max-sm:mt-[32px]">
            {blogPost.sections.map((section, index) => {
              const prevType = blogPost.sections[index - 1]?.type;
              const afterHeading = prevType === "heading";

              if (section.type === "heading") {
                return (
                  <h2
                    key={`${section.type}-${index}`}
                    className="m-0 mt-5 text-p2 text-common first:mt-0"
                  >
                    {section.text}
                  </h2>
                );
              }

              if (section.type === "emphasis") {
                return (
                  <p
                    key={`${section.type}-${index}`}
                    className={cn(
                      "m-0 text-p2 font-bold text-common",
                      afterHeading ? "mt-[10px]" : "mt-5",
                    )}
                  >
                    {section.text}
                  </p>
                );
              }

              if (section.type === "paragraph-tight") {
                return (
                  <p
                    key={`${section.type}-${index}`}
                    className="m-0 mt-[10px] text-p1 text-common2 first:mt-0"
                  >
                    {section.text}
                  </p>
                );
              }

              return (
                <p
                  key={`${section.type}-${index}`}
                  className={cn(
                    "m-0 text-p1 text-common2 first:mt-0",
                    afterHeading ? "mt-[10px]" : "mt-5",
                  )}
                >
                  {section.text}
                </p>
              );
            })}
          </article>

          <div className="mt-[50px] max-sm:mt-[32px]">
            <Button href="/company/news" className="px-[18px] py-[11px]">
              Back to Insights
              <ArrowRightIcon width={16} height={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;