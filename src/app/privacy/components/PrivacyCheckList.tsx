import { CircleCheck } from "@/components/icons/lucideIcons";

type PrivacyCheckListProps = {
  items: readonly string[];
};

export default function PrivacyCheckList({ items }: PrivacyCheckListProps) {
  return (
    <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-5">
          <CircleCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-orange"
            strokeWidth={1.8}
            aria-hidden="true"
          />
          <span className="text-p1 text-common2">{item}</span>
        </li>
      ))}
    </ul>
  );
}
