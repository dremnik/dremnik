import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import { getProjectImages } from "@/lib/images";
import { Badge } from "@/components/ui/badge";
import { ProjectGallery } from "@/components/project-gallery";
import { Markdown } from "@/components/markdown";
import {
  IconChevronLeftSmall,
  IconGithub,
  IconArrowUpDiagonalScale,
  PROJECT_ICONS,
} from "@/components/ui/icons";

// ---------------------------------------------------
// projects/dremnik/src/app/portfolio/[slug]/page.tsx
//
// export async function generateStaticParams()    L25
// export default async function ProjectPage()     L31
// params                                          L34
// slug                                            L34
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

  return (
    <div className="max-w-[var(--content-width)] mx-auto px-6">
      {/* Back button */}
      <div className="mb-10 hidden md:block">
        <Link
          href="/portfolio"
          className="text-muted hover:text-primary transition-colors text-xs font-mono inline-flex items-center gap-1"
        >
          <IconChevronLeftSmall className="size-3" />
          back
        </Link>
      </div>

      {/* Icon */}
      <div className="mb-7">
        {PROJECT_ICONS[project.slug as keyof typeof PROJECT_ICONS]}
      </div>

      {/* Title, tags, and responsive GitHub */}
      <div className="mb-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5 min-w-0">
            <h1
              className="text-foreground truncate"
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

          {project.github && (
            <Link
              href={`https://github.com/${project.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-3 hover:opacity-80 transition-opacity shrink-0"
            >
              <IconGithub />
              <span className="text-xs font-mono">{project.github}</span>
            </Link>
          )}
        </div>

        {/* Mobile: GitHub under title to avoid overflow */}
        {project.github && (
          <div className="mt-3 md:hidden">
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
      <div className="mb-6 space-y-4">
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

      {/* Gallery section */}
      {project.gallery &&
        ((project.gallery.videos && project.gallery.videos.length > 0) ||
          (project.gallery.images && project.gallery.images.length > 0)) && (
          <div className="pt-12">
            <ProjectGallery
              videos={project.gallery.videos}
              images={project.gallery.images}
              projectName={project.name}
            />
          </div>
        )}
    </div>
  );
}
