/** Format a publication date consistently across server and browser time zones. */
export function formatBlogDate(value: Date | string, includeYear = true): string {
  const date = new Date(value);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const fields = includeYear
    ? [values.year, values.month, values.day]
    : [values.month, values.day];
  return fields.join(".");
}
