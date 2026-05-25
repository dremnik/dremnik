import { cloneElement, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";

import { PROJECTS, type Project } from "@/lib/projects";
import { PROJECT_ICONS } from "@/components/ui/icons";

// ------------------------------------------
// projects/dremnik/src/app/portfolio/portfolio.tsx
//
// export default function Portfolio()    L15
// function ProjectCard()                 L34
// function getThumbnail()                L95
// ------------------------------------------

export default function Portfolio() {
  const projects = PROJECTS.filter((p) => (p.kind ?? "project") === "project");
  const concepts = PROJECTS.filter((p) => p.kind === "concept");

  return (
    <div className="max-w-[1360px] mx-auto px-8 md:px-12">
      <Section items={projects} />
      {concepts.length > 0 && (
        <>
          <hr className="my-20 border-t border-border/70" />
          <Section label="Concepts" items={concepts} />
        </>
      )}
    </div>
  );
}

function Section({ label, items }: { label?: string; items: Project[] }) {
  return (
    <section>
      {label && (
        <h2
          className="mb-8 text-foreground/80 font-mono text-[11px] font-medium tracking-[0.18em] uppercase"
        >
          {label}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-x-0 gap-y-16">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const icon = PROJECT_ICONS[project.slug as keyof typeof PROJECT_ICONS];
  // When a project has a thumbnail config, prefer it over the gallery
  // screenshot — gives the portfolio a unified texture.
  const thumb = project.thumbnail ? null : getThumbnail(project);

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block sm:-ml-px sm:[&:nth-child(2n+1)]:ml-0 lg:[&:nth-child(2n+1)]:-ml-px lg:[&:nth-child(3n+1)]:ml-0"
    >
      <article className="flex flex-col">
        {/* Bracket frame: four rules form a frame around the image with even
         * padding on all sides. Each rule is inset from the corners by the
         * same amount, creating symmetric corner gaps. */}
        <div className="relative p-4">
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-4 right-4 h-px bg-border/70"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-4 right-4 h-px bg-border/70"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-4 bottom-4 w-px bg-border/70"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 top-4 bottom-4 w-px bg-border/70"
          />

          <div
            className="relative aspect-square w-full overflow-hidden bg-muted/40"
            style={
              !thumb && project.thumbnail?.bg
                ? { backgroundColor: project.thumbnail.bg }
                : undefined
            }
          >
            {thumb ? (
              <Image
                src={thumb.src}
                alt={`${project.name} preview`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            ) : project.thumbnail?.image ? (
              <div className="absolute inset-0 flex items-center justify-center p-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.thumbnail.image}
                  alt={`${project.name} mark`}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  color: project.thumbnail?.fg ?? "rgba(0,0,0,0.6)",
                }}
              >
                {icon && isValidElement(icon) ? (
                  cloneElement(icon as React.ReactElement<{ className?: string }>, {
                    className: "size-16",
                  })
                ) : (
                  <span className="text-6xl">{project.name.slice(0, 1)}</span>
                )}
              </div>
            )}

            {/* Year badge — top-left, dot + label (kernl blue steel) */}
            <div
              className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.14em] uppercase"
              style={{ color: "#B5D1FF" }}
            >
              <span
                className="block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#B5D1FF" }}
              />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        <h2
          className="mt-6 font-normal text-foreground transition-opacity group-hover:opacity-80"
          style={{
            fontFamily: "var(--font-inter), var(--font-sans)",
            fontSize: "clamp(17px, 1.3vw, 21px)",
            lineHeight: 1.1,
            letterSpacing: "-0.045em",
          }}
        >
          {project.name}
        </h2>
        <p className="mt-2 font-sans-display text-[15.5px] leading-[1.55] text-muted-foreground">
          {project.tagline}
        </p>
      </article>
    </Link>
  );
}

function getThumbnail(project: Project) {
  const images = project.gallery?.images;
  if (!images || images.length === 0) return null;
  return images.find((img) => img.ref) ?? images[0];
}
