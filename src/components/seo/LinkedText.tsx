import { ContentLink } from "@/components/seo/ContentLink";
import { SOLUTION_PATHS } from "@/lib/seo/paths";

const PHRASES = [
  {
    phrase: "Meter Data Management System (MDMS)",
    href: SOLUTION_PATHS.mdms,
  },
  {
    phrase: "Head-End System (HES)",
    href: SOLUTION_PATHS.hes,
  },
] as const;

function linkify(text: string, keyPrefix: string): React.ReactNode[] {
  let earliest: { index: number; phrase: string; href: string } | null = null;

  for (const item of PHRASES) {
    const index = text.indexOf(item.phrase);
    if (index !== -1 && (earliest === null || index < earliest.index)) {
      earliest = { index, phrase: item.phrase, href: item.href };
    }
  }

  if (!earliest) return [text];

  const before = text.slice(0, earliest.index);
  const after = text.slice(earliest.index + earliest.phrase.length);
  const key = `${keyPrefix}-${earliest.index}-${earliest.href}`;

  return [
    ...(before ? [before] : []),
    <ContentLink key={key} href={earliest.href}>
      {earliest.phrase}
    </ContentLink>,
    ...linkify(after, key),
  ];
}

/** Turns the first full HES and MDMS names in a sentence into in-body links. */
export function LinkedText({ text }: { text: string }) {
  return <>{linkify(text, "solution")}</>;
}
