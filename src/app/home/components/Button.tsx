export default function Button({
  children,
  outline = false,
  onClick,
}: {
  children: React.ReactNode;
  outline?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[6px] rounded-[3px] border px-[13px] py-[9px] text-body transition-all duration-200 [&>svg]:block [&>svg]:shrink-0 ${
        outline
          ? "button-secondary"
          : "button-primary"
      }`}
    >
      {children}
    </button>
  );
}
