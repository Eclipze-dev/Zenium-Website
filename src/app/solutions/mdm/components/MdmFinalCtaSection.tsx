import Button from "@/components/Button";
import SolutionPanelCard from "@/components/solutions/SolutionPanelCard";

export default function MdmFinalCtaSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <SolutionPanelCard>
          <div className="grid w-full items-stretch gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,600px)] xl:gap-[50px]">
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
                Build on data you can{" "}
                <span className="text-orange text-h1">trust.</span>
              </h2>
              <p className="text-p1 text-muted m-0">
                Discover how Zenium MDM can strengthen your meter-data operations.
              </p>
              <div className="flex flex-wrap gap-[10px] py-[30px]">
                <Button href="/contact">Talk to our team</Button>
                <Button href="/solutions/hes" outline>
                  Explore Zenium HES
                </Button>
              </div>
            </div>
            <img
              src="/image.png"
              alt="Zenium team"
              className="min-h-[260px] w-full rounded-[20px] object-cover"
            />
          </div>
        </SolutionPanelCard>
      </div>
    </section>
  );
}
