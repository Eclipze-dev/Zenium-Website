import Button from "@/components/Button";
import HesPanelCard from "./HesPanelCard";

export default function HesFinalCtaSection() {
  return (
    <section className="py-[80px] max-sm:py-[70px]">
      <div className="container">
        <HesPanelCard>
          <div className="grid w-full items-stretch gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,600px)] xl:gap-[50px]">
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-h1 m-0 max-sm:text-[clamp(28px,7vw,36px)]">
                Connect your smart-meter{" "}
                <span className="text-orange text-h1">network with confidence.</span>
              </h2>
              <p className="text-p1 text-muted m-0">
                Discover how Zenium HES can support your smart-metering programme.
              </p>
              <div className="flex flex-wrap gap-[10px] py-[30px]">
                <Button href="/contact">Talk to our team</Button>
                <Button href="/solutions/mdm" outline>
                  Explore Zenium MDM
                </Button>
              </div>
            </div>
            <img
              src="/image.png"
              alt="Zenium team"
              className="min-h-[260px] w-full rounded-[20px] object-cover"
            />
          </div>
        </HesPanelCard>
      </div>
    </section>
  );
}
