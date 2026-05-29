// ------------------------------------------------
// projects/dremnik/src/app/work/layout.tsx
//
// Passthrough: the index page (/work) and the detail
// page (/work/[slug]) each render their own chrome,
// since the detail page is on a different (teal) theme.
// ------------------------------------------------

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
