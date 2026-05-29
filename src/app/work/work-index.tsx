// -----------------------------------------------------
// projects/dremnik/src/app/work/work-index.tsx
//
// Portfolio grid: bracket-framed project cards (thumbnail,
// year-dot badge, name, tagline), with a separate Concepts
// section. Brought back from dremnik-v0, re-pointed to /work.
//
// export default function WorkIndex()
// function Section()
// function ProjectCard()
// function getThumbnail()
// -----------------------------------------------------

import { cloneElement, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";

import { PROJECTS, type Project } from "@/lib/projects";
import { PROJECT_ICONS } from "@/components/ui/icons";

// Curated overview — explicit order, only projects with real design work.
const OVERVIEW_SLUGS = ["kernl", "emblem", "reverie", "esonut"];

export default function WorkIndex() {
  const items = OVERVIEW_SLUGS.map((slug) =>
    PROJECTS.find((p) => p.slug === slug)
  ).filter((p): p is Project => Boolean(p));

  return (
    <div className="max-w-[1360px] mx-auto px-8 md:px-12 pb-24">
      <Section items={items} />
    </div>
  );
}

function Section({ label, items }: { label?: string; items: Project[] }) {
  return (
    <section>
      {label && (
        <h2 className="mb-8 text-foreground/80 font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
          {label}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-x-6 gap-y-14">
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
      href={`/work/${project.slug}`}
      className="group block"
    >
      <article className="flex flex-col">
        <div
          className="relative aspect-square w-full overflow-hidden bg-card"
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
            <div className="absolute inset-0 flex items-center justify-center p-40">
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
