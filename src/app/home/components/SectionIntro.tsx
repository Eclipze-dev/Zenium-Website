export default function SectionIntro({
  eyebrow,
  children,
  text,
  centered = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  text?: string;
  centered?: boolean;
}) {
  return (
    <header
      className={`section-heading ${centered ? "mx-auto text-center" : ""}`}
    >
      <p className="text-p tracking-eyebrow mb-[clamp(12px,1.5vw,20px)] text-zen-text font-normal">
        {eyebrow}
      </p>
      <h2 className="text-section-heading font-normal tracking-[0] m-0 max-sm:text-[clamp(28px,7vw,36px)] [&_strong]:inline [&_strong]:text-orange [&_strong]:font-bold">
        {children}
      </h2>
      {text && (
        <p className="section-description text-muted text-p2 mx-auto mt-[20px]">
          {text}
        </p>
      )}
    </header>
  );
}
