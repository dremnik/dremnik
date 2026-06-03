import Image from "next/image";
import Link from "next/link";

import { normalizeGalleryImages } from "@/lib/gallery";
import { VideoEmbed } from "@/components/youtube-embed";

// ---------------------------------------
// projects/dremnik/src/components/project-gallery.tsx
//
// interface GalleryPreviewProps       L23
//   videos                            L24
//   images                            L25
//   height                            L27
//   ref                               L27
//   src                               L27
//   title                             L27
//   width                             L27
//   projectName                       L29
//   projectSlug                       L30
// export function GalleryPreview()    L36
// ---------------------------------------

interface GalleryPreviewProps {
  videos?: string[];
  images?: (
    | string
    | { src: string; title?: string; width?: number; height?: number; ref?: boolean }
  )[];
  projectName: string;
  projectSlug: string;
}

// Compact gallery on the project detail page: any videos full-width, then a
// 2×2 square preview that links out to the focused /work/<slug>/gallery view.
// The 4th tile carries a "+N more" overlay when there are extra images.
export function GalleryPreview({
  videos = [],
  images = [],
  projectName,
  projectSlug,
}: GalleryPreviewProps) {
  const normalizedImages = normalizeGalleryImages(images);
  const previewImages = normalizedImages.slice(0, 6);
  const remaining = normalizedImages.length - 6;
  const galleryHref = `/work/${projectSlug}/gallery`;

  return (
    <div className="space-y-3">
      {/* Videos first, full width */}
      {videos?.map((video, index) => (
        <div key={`video-${index}`} className="aspect-video rounded-xl overflow-hidden">
          <VideoEmbed video={video} title={`${projectName} video ${index + 1}`} />
        </div>
      ))}

      {previewImages.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {previewImages.map((image, index) => {
            const isOverflowTile = index === 5 && remaining > 0;
            return (
              <Link
                key={`preview-${index}`}
                href={galleryHref}
                aria-label={
                  isOverflowTile
                    ? `View all ${normalizedImages.length} images`
                    : `Open ${projectName} gallery`
                }
                style={{ animationDelay: `${index * 70}ms` }}
                className={`group relative aspect-square overflow-hidden bg-secondary animate-blur-rise ${
                  previewImages.length === 1 ? "col-span-3" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title || `${projectName} screenshot ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 160px, 33vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                {isOverflowTile && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-[1px]">
                    <span className="font-mono text-[11pt] font-medium tracking-[0.02em] text-[#B5D6FB]">
                      +{remaining} more
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
