import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import { ProjectGallery } from "@/components/project-gallery";
import { Markdown } from "@/components/markdown";
import { IconGithub, PROJECT_ICONS } from "@/components/ui/icons";

// ---------------------------------------------------
// projects/dremnik/src/app/work/[slug]/page.tsx
//
// export async function generateStaticParams()    L19
// export default async function ProjectPage()     L25
// params                                          L28
// slug                                            L28
// ---------------------------------------------------

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Images are now manually configured in projects.ts with titles

  const hasGallery =
    !!project.gallery &&
    ((project.gallery.videos && project.gallery.videos.length > 0) ||
      (project.gallery.images && project.gallery.images.length > 0));

  const textColumn = (
    <>
      {/* Back */}
      <div className="mb-12">
            <Link
              href="/work"
              className="font-mono text-[8.5pt] text-muted hover:text-ink transition-colors duration-200"
            >
              ← back
            </Link>
          </div>

          {/* Icon */}
          <div className="mb-7">
            {PROJECT_ICONS[project.slug as keyof typeof PROJECT_ICONS]}
          </div>

          {/* Title + tags */}
          <div className="mb-2.5">
            <h1
              className="text-foreground"
              style={{
                fontFamily: "var(--font-spezia), sans-serif",
                fontSize: "2.125rem",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.045em",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              {project.name}
            </h1>

            {/* GitHub stacked under the title (narrow left rail) */}
            {project.github && (
              <div className="mt-3">
                <Link
                  href={`https://github.com/${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-link hover:opacity-80 transition-opacity"
                >
                  <IconGithub />
                  <span className="text-xs font-mono">{project.github}</span>
                </Link>
              </div>
            )}
          </div>

          {/* URL */}
          {project.url && (
            <div className="mb-10">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13.2px] text-link hover:underline underline-offset-4 decoration-[1px] decoration-link/60"
              >
                {project.url}
              </Link>
            </div>
          )}

          {/* About */}
          <div className="space-y-4">
            <p className="font-sans-display text-lg tracking-[-0.02em] text-muted-foreground">
              {project.tagline}
            </p>
            {project.descriptionMobile ? (
              <>
                <div className="md:hidden">
                  <Markdown content={project.descriptionMobile} />
                </div>
                <div className="hidden md:block">
                  <Markdown content={project.description} />
                </div>
              </>
            ) : (
              <Markdown content={project.description} />
            )}
          </div>
    </>
  );

  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-6 pt-6">
      {hasGallery ? (
        <div className="lg:grid lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-10 xl:gap-16 lg:items-start">
          {/* Left: text — pinned, vertically centered, while the gallery scrolls.
           * The bottom padding lives on the gallery column (not the outer
           * container) so the grid extends to the page bottom — otherwise the
           * full-height sticky column gets clamped upward at the end of scroll. */}
          <div className="lg:sticky lg:top-6 lg:self-start lg:h-[calc(100vh-1.5rem)] lg:flex lg:flex-col lg:justify-center lg:pb-[14vh]">
            {textColumn}
          </div>

          {/* Right: gallery — scrolls past the pinned text */}
          <div className="mt-12 lg:mt-0 pb-24">
            <ProjectGallery
              videos={project.gallery!.videos}
              images={project.gallery!.images}
              projectName={project.name}
            />
          </div>
        </div>
      ) : (
        <div className="max-w-[var(--content-width)] mx-auto pb-24">{textColumn}</div>
      )}
    </div>
  );
}
