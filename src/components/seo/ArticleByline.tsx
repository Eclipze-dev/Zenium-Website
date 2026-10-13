export function formatPublishedDate(
  value: string | Date | null | undefined,
) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function ArticleByline({
  authorName,
  authorRole,
  publishedAt,
  className = "mt-3 text-sm text-[#5A6B7C]",
}: {
  authorName?: string | null;
  authorRole?: string | null;
  publishedAt?: string | Date | null;
  className?: string;
}) {
  const date = formatPublishedDate(publishedAt);
  if (!authorName && !authorRole && !date) return null;

  return (
    <p className={className}>
      {authorName ? <span>{authorName}</span> : null}
      {authorRole ? (
        <span>
          {authorName ? " · " : ""}
          {authorRole}
        </span>
      ) : null}
      {date ? (
        <span>
          {authorName || authorRole ? " · " : ""}
          {date}
        </span>
      ) : null}
    </p>
  );
}
