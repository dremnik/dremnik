import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import { normalizeGalleryImages } from "@/lib/gallery";
import { GalleryGrid } from "@/components/gallery-grid";

// ---------------------------------------------------
// projects/dremnik/src/app/work/[slug]/gallery/page.tsx
//
// export async function generateStaticParams()    L21
// export async function generateMetadata()        L27
// params                                          L30
// slug                                            L30
// export default async function GalleryPage()     L39
// params                                          L42
// slug                                            L42
// ---------------------------------------------------

export async function generateStaticParams() {
  return PROJECTS.filter(
    (p) => p.gallery?.images && p.gallery.images.length > 0
  ).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.name} · Gallery` : "Gallery",
  };
}

export default async function GalleryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const images = normalizeGalleryImages(project.gallery?.images);

  if (images.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-6 pt-6 pb-24">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <Link
          href={`/work/${project.slug}`}
          className="font-mono text-[8.5pt] text-muted hover:text-ink transition-colors duration-200"
        >
          ← {project.name}
        </Link>
        <span className="font-mono text-[8.5pt] uppercase tracking-[0.08em] text-muted">
          {images.length} images
        </span>
      </div>

      <GalleryGrid images={images} projectName={project.name} />
    </div>
  );
}
