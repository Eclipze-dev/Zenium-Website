import Button from "@/components/Button";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

export default function AmiFinalCtaSection() {
  return (
    <section className="pb-[80px] max-lg:pb-[48px] max-sm:pb-[70px]">
      <div className="container">
        <div className="flex flex-col items-center gap-5 rounded-[16px] bg-[#0B1F33] px-8 py-12 text-center text-white max-sm:px-5">
          <h2 className="text-h2 m-0 text-white">
            Build your Advanced Metering Infrastructure (AMI) on open software
          </h2>
          <p className="max-w-2xl text-p1 text-white/80 m-0">
            Talk to Zenium about Head-End System (HES), Meter Data Management
            System (MDMS) and energy analytics for your next AMI programme.
          </p>
          <div className="flex flex-wrap justify-center gap-[10px] pt-2">
            <Button href="/contact">Request a Demo</Button>
            <Button href={SOLUTION_PATHS.mdms} outline>
              Explore MDMS
            </Button>
            <Button href={SOLUTION_PATHS.analytics} outline>
              Explore Analytics
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
