import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ShimmerText from "@/components/ShimmerText";
import SectionBadge from "@/components/SectionBadge";
import { blogIntro, type BlogPost } from "./blogData";
import BlogCard from "./BlogCard";

export default function BlogsListing({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-[#F7F8FA] pb-[80px] pt-[50px] max-lg:pb-[48px] max-lg:pt-[40px] max-md:pt-24">
      <div className="container">
        <StaggerContainer as="header" className="max-w-auto" stagger={0.1}>
          <StaggerItem>
            <SectionBadge>{blogIntro.eyebrow}</SectionBadge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="m-0 mt-5 text-h1 text-[#152D48]">
              {blogIntro.titleLead}{" "}
              <ShimmerText>{blogIntro.titleAccent}</ShimmerText>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mb-0 mt-5 text-p1 text-[#5A6B7C]">
              {blogIntro.description}
            </p>
          </StaggerItem>
        </StaggerContainer>

        {posts.length === 0 ? (
          <p className="mt-10 text-p1 text-[#5A6B7C]">
            Published articles will appear here. Draft posts are not indexed.
          </p>
        ) : (
          <StaggerContainer className="mt-[50px] grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {posts.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
