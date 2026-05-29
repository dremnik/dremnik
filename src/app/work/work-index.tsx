// -----------------------------------------------------
// projects/dremnik/src/app/work/work-index.tsx
//
// Two-up work grid: lead shot per project, name + year +
// tagline below each card.
//
// function leadImage()                 L?
// function LeadImage()                 L?
// function boxBg()                     L?
// export default function WorkIndex()  L?
// -----------------------------------------------------

import { cloneElement, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";

import { PROJECTS, type Project } from "@/lib/projects";
import { PROJECT_ICONS } from "@/components/ui/icons";

// Representative shot: the ref image, else the first gallery image.
function leadImage(project: Project) {
  const images = project.gallery?.images;
  if (!images || images.length === 0) return null;
  return images.find((img) => img.ref) ?? images[0];
}

function LeadImage({ project, sizes }: { project: Project; sizes?: string }) {
  const shot = leadImage(project);
  const icon = PROJECT_ICONS[project.slug as keyof typeof PROJECT_ICONS];

  if (shot) {
    return (
      <Image
        src={shot.src}
        alt={`${project.name} preview`}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    );
  }

  if (project.thumbnail?.image) {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-[18%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail.image}
          alt={`${project.name} mark`}
          className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ color: project.thumbnail?.fg ?? "rgba(255,255,255,0.9)" }}
    >
      {icon && isValidElement(icon) ? (
        cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: "size-16",
        })
      ) : (
        <span className="text-6xl">{project.name.slice(0, 1)}</span>
      )}
    </div>
  );
}

// Color the tile only when there's no screenshot to fill it.
function boxBg(project: Project): React.CSSProperties | undefined {
  if (leadImage(project)) return undefined;
  return project.thumbnail?.bg
    ? { backgroundColor: project.thumbnail.bg }
    : undefined;
}

export default function WorkIndex() {
  const showcase = PROJECTS.filter((p) => p.showcase);

  return (
    <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 pb-24">
      <h2 className="font-mono text-[9.5pt] md:text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-6 pb-1.5 border-b border-rule">
        Selected work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14">
        {showcase.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block"
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted/40"
              style={boxBg(project)}
            >
              <LeadImage
                project={project}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2
                className="text-foreground transition-opacity group-hover:opacity-80"
                style={{
                  fontFamily: "var(--font-spezia), sans-serif",
                  fontWeight: 400,
                  fontSize: "21px",
                  letterSpacing: "-0.045em",
                  lineHeight: 1.1,
                }}
              >
                {project.name}
              </h2>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground shrink-0">
                {project.year}
              </span>
            </div>
            <p className="mt-1.5 font-sans-display text-[14.5px] leading-[1.5] text-muted-foreground">
              {project.tagline}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
