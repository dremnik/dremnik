// ------------------------------------
// projects/dremnik/src/components/gallery-grid.tsx
//
// interface GalleryGridProps       L18
//   images                         L19
//   projectName                    L20
// export function GalleryGrid()    L25
// ------------------------------------

"use client";

import Image from "next/image";
import { useState } from "react";

import type { GalleryImage } from "@/lib/gallery";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface GalleryGridProps {
  images: GalleryImage[];
  projectName: string;
}

// Hoisted so its component identity is stable across GalleryGrid re-renders
// (e.g. opening/closing the lightbox) — otherwise the tiles remount and the
// blur-rise entrance animation replays every time.
function GalleryTile({
  image,
  index,
  projectName,
  onSelect,
}: {
  image: GalleryImage;
  index: number;
  projectName: string;
  onSelect: (image: GalleryImage) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(image)}
      style={{ animationDelay: `${index * 60}ms` }}
      className="group block w-full overflow-hidden rounded-lg bg-secondary shadow cursor-pointer animate-blur-rise"
    >
      <Image
        src={image.src}
        alt={image.title || `${projectName} screenshot ${index + 1}`}
        width={image.width || 1920}
        height={image.height || 1080}
        className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.01]"
      />
    </button>
  );
}

// Masonry of every image. Columns flow independently (no row-alignment gaps),
// but images are distributed so reading order stays left-to-right, top-to-bottom
// (1 2 / 3 4 / ...). Clicking a tile opens a zoom lightbox.
export function GalleryGrid({ images, projectName }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  // Balanced masonry: walk images in order and drop each into the currently
  // shorter column (estimated height = rendered aspect ratio, since columns are
  // equal width). Keeps heights even while preserving rough top-down order.
  const columns: { image: GalleryImage; index: number }[][] = [[], []];
  const colHeights = [0, 0];
  images.forEach((image, index) => {
    const ratio =
      image.width && image.height ? image.height / image.width : 0.625;
    const target = colHeights[0] <= colHeights[1] ? 0 : 1;
    columns[target].push({ image, index });
    colHeights[target] += ratio;
  });

  return (
    <>
      {/* Mobile: single column in natural order */}
      <div className="flex flex-col gap-4 sm:hidden">
        {images.map((image, index) => (
          <GalleryTile
            key={`m-${index}`}
            image={image}
            index={index}
            projectName={projectName}
            onSelect={setSelected}
          />
        ))}
      </div>

      {/* sm+: two independent columns, balanced so order reads 1 2 / 3 4 */}
      <div className="hidden gap-4 sm:flex">
        {columns.map((col, ci) => (
          <div key={`col-${ci}`} className="flex flex-1 flex-col gap-4">
            {col.map(({ image, index }) => (
              <GalleryTile
                key={`d-${index}`}
                image={image}
                index={index}
                projectName={projectName}
                onSelect={setSelected}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Single-image zoom */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          overlayClassName="bg-black/40 dark:bg-black/60 backdrop-blur-[2px]"
          className="w-[min(95vw,1400px)] max-w-[1400px] sm:max-w-[1400px] max-h-[90vh] p-0 border-0 bg-transparent shadow-none overflow-hidden"
        >
          <DialogTitle className="sr-only">
            {selected?.title || projectName}
          </DialogTitle>
          {selected && (
            <div className="max-h-[90vh] overflow-y-auto rounded-xl">
              <Image
                src={selected.src}
                alt={selected.title || projectName}
                width={selected.width || 1920}
                height={selected.height || 1080}
                className="block w-full h-auto select-none rounded-xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
