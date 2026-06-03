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

// Focused two-column masonry of every image. Clicking one opens a single-image
// zoom lightbox on top.
export function GalleryGrid({ images, projectName }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 gap-4">
        {images.map((image, index) => (
          <button
            key={`img-${index}`}
            type="button"
            onClick={() => setSelected(image)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-secondary shadow cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.title || `${projectName} screenshot ${index + 1}`}
              width={image.width || 1920}
              height={image.height || 1080}
              className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            />
          </button>
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
