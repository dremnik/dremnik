import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
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
  return PROJECTS.filter((p) => p.showcase).map((project) => ({
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

  if (!project || !project.showcase) {
    notFound();
  }

  // Images are now manually configured in projects.ts with titles

  const hasGallery =
    !!project.gallery &&
    ((project.gallery.videos && project.gallery.videos.length > 0) ||
      (project.gallery.images && project.gallery.images.length > 0));

  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-10 pt-8 pb-24">
      <div className="lg:grid lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-14 xl:gap-20 lg:items-start">
        {/* Left: text — pinned, vertically centered, while the gallery scrolls */}
        <div className="lg:sticky lg:top-0 lg:self-start lg:h-screen lg:flex lg:flex-col lg:justify-center">
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
            <div className="flex items-center gap-x-5 gap-y-2 flex-wrap min-w-0">
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
              <div className="flex items-center gap-3">
                {project.tags.map((tag) => {
                  const tagName = typeof tag === "string" ? tag : tag.name;
                  const tagUrl = typeof tag === "string" ? undefined : tag.url;

                  if (tagUrl) {
                    return (
                      <Link
                        key={tagName}
                        href={tagUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="font-mono text-[13px] hover:bg-muted-foreground/20 transition-colors cursor-pointer">
                          {tagName}
                        </Badge>
                      </Link>
                    );
                  }

                  return (
                    <Badge key={tagName} className="font-mono text-[13px]">
                      {tagName}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {/* GitHub stacked under the title (narrow left rail) */}
            {project.github && (
              <div className="mt-3">
                <Link
                  href={`https://github.com/${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 hover:opacity-80 transition-opacity"
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
                className="text-secondary font-mono text-[13.2px] pb-1 border-b border-transparent hover:border-secondary/20"
              >
                {project.url}
              </Link>
            </div>
          )}

          {/* About */}
          <div className="space-y-4">
            <p className="font-sans-display text-lg text-muted-foreground">
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
        </div>

        {/* Right: gallery — scrolls past the pinned text */}
        {hasGallery && (
          <div className="mt-12 lg:mt-0">
            <ProjectGallery
              videos={project.gallery!.videos}
              images={project.gallery!.images}
              projectName={project.name}
            />
          </div>
        )}
      </div>
    </div>
  );
}
