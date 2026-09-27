import OptimizedImage from "@/components/OptimizedImage";
import SectionBadge from "@/components/SectionBadge";
import ShimmerText from "@/components/ShimmerText";
import Button from "@/components/Button";
import { BLOG_INDEX_PATH } from "@/lib/seo/paths";
import type { BlogPost } from "./blogData";

function splitPoint(point: string) {
  const index = point.indexOf(": ");
  if (index === -1) return { heading: point, body: "" };
  return {
    heading: point.slice(0, index),
    body: point.slice(index + 2),
  };
}

export default function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white pb-[50px] pt-[50px] max-md:pt-24">
      <div className="container">
        <div className="flex items-start justify-between gap-6">
          <SectionBadge>BLOGS</SectionBadge>
          <Button href={BLOG_INDEX_PATH}>Back</Button>
        </div>

        <h1 className="m-0 mt-5 text-h1 text-[#152D48]">
          {post.titleLead}{" "}
          {post.titleAccent ? (
            <ShimmerText>{post.titleAccent}</ShimmerText>
          ) : null}
        </h1>
        <p className="mb-0 mt-5 text-p1 leading-[1.6] text-[#5A6B7C]">
          {post.excerpt}
        </p>

        <div className="relative mt-[50px] aspect-[16/9] overflow-hidden rounded-[16px]">
          <OptimizedImage
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>

        {post.intro || post.sections.length > 0 ? (
          <div className="mt-[50px] flex flex-col gap-[50px] text-[16px] leading-[1.65] text-[#3D4C5C]">
            {post.intro ? <p className="m-0">{post.intro}</p> : null}
            {post.sections.map((section) => (
              <section key={section.heading || section.paragraphs[0]} className="flex flex-col gap-5">
                {section.heading ? (
                  <h2 className="m-0 text-[20px] font-semibold text-[#152D48]">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="m-0">
                    {paragraph}
                  </p>
                ))}
                {section.points ? (
                  <ul className="m-0 flex list-disc flex-col gap-5 pl-5">
                    {section.points.map((point, index) => {
                      const item = splitPoint(point);
                      const label = section.ordered
                        ? `${index + 1}. ${item.heading}`
                        : item.heading;
                      return (
                        <li key={item.heading}>
                          <strong>{label}:</strong> {item.body}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
                {section.trailing?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        ) : null}

        <div className="mt-[50px]">
          <Button href={BLOG_INDEX_PATH}>Back to Blogs</Button>
        </div>
      </div>
    </article>
  );
}
