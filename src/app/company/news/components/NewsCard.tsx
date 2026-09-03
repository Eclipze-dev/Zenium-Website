import { ArrowRightIcon } from "@/components/icons/icons";
import { cn } from "@/lib/cn";
import Link from "next/link";

export type NewsCardProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  href: string;
  className?: string;
};

export default function NewsCard({
  label,
  title,
  description,
  image,
  cta,
  href,
  className,
}: NewsCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-[12px] bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.1)] max-sm:p-4",
        className,
      )}
    >
      <div className="h-[318px] shrink-0 overflow-hidden rounded-[10px] bg-[#EEF1F4] max-sm:h-[160px]">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-out"
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col pt-5">
        <span className="text-p2 font-normal uppercase text-black">
          {label}
        </span>

        <h3 className="m-0 mt-4 text-h4 font-semibold text-black">
          {title}
        </h3>

        <p className="m-0 mt-5 line-clamp-4 text-p3 font-normal text-black">
          {description}
        </p>

        
          <Link href={href} className="mt-auto inline-flex items-center gap-1.5 pt-5 text-body font-medium !text-orange transition-colors duration-200">
            {cta}
            <ArrowRightIcon width={16} height={16} className="transition-transform duration-200" />
          </Link>
      </div>
    </article>
  );
}