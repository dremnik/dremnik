import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import { GalleryPreview } from "@/components/project-gallery";
import { Markdown } from "@/components/markdown";
import { Header } from "@/components/header";
import { IconGithub, PROJECT_ICONS } from "@/components/ui/icons";

// ---------------------------------------------------
// projects/dremnik/src/app/work/[slug]/page.tsx
//
// export async function generateStaticParams()    L18
// export default async function ProjectPage()     L24
// params                                          L27
// slug                                            L27
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
    <>
    <Header />
    <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 pt-8 pb-24">
      {textColumn}

      {/* Gallery preview below the description */}
      {hasGallery && (
        <div className="mt-14">
          <h2 className="font-mono text-[9.5pt] md:text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-5 pb-1.5 border-b border-rule">
            Gallery
          </h2>
          <GalleryPreview
            videos={project.gallery!.videos}
            images={project.gallery!.images}
            projectName={project.name}
            projectSlug={project.slug}
          />
        </div>
      )}
    </div>
    </>
  );
}
