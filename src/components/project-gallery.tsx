// ---------------------------------------
// projects/dremnik/src/components/project-gallery.tsx
//
// interface ProjectGalleryProps
//   videos
//   images
//   projectName
// export function ProjectGallery()
// ---------------------------------------

"use client";

import Image from "next/image";
import { useState } from "react";

/* components */
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VideoEmbed } from "@/components/youtube-embed";

interface ProjectGalleryProps {
  videos?: string[];
  images?: (
    | string
    | { src: string; title?: string; width?: number; height?: number; ref?: boolean }
  )[];
  projectName: string;
}

type GalleryImage = {
  src: string;
  title: string;
  width?: number;
  height?: number;
};

export function ProjectGallery({
  videos = [],
  images = [],
  projectName,
}: ProjectGalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  // Normalize images to objects with title and dimensions
  const normalizedImages: GalleryImage[] = (images || []).map((img) =>
    typeof img === "string"
      ? {
          src: img,
          title:
            img
              .split("/")
              .pop()
              ?.replace(/\.[^.]+$/, "")
              ?.replace(/[\-_]+/g, " ") || "",
          width: undefined,
          height: undefined,
        }
      : {
          src: img.src,
          title: img.title || "",
          width: img.width,
          height: img.height,
        }
  );

  return (
    <div className="space-y-3">
      {/* Videos first, full width */}
      {videos?.map((video, index) => (
        <div key={`video-${index}`} className="aspect-video rounded-2xl overflow-hidden">
          <VideoEmbed
            video={video}
            title={`${projectName} video ${index + 1}`}
          />
        </div>
      ))}

      {/* Then images, each at its natural aspect ratio — click to open the focused view */}
      {normalizedImages?.map((image, index) => (
        <div
          key={`image-${index}`}
          className="bg-secondary shadow rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => setSelected(image)}
        >
          <Image
            src={image.src}
            alt={image.title || `${projectName} screenshot ${index + 1}`}
            width={image.width || 1920}
            height={image.height || 1080}
            className="block w-full h-auto"
          />
        </div>
      ))}

      {/* Focused single-image view */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          overlayClassName="bg-black/30 dark:bg-black/40 backdrop-blur-[2px]"
          className="w-[min(95vw,1400px)] max-w-[1400px] sm:max-w-[1400px] max-h-[90vh] p-0 border-0 bg-transparent shadow-none overflow-hidden"
        >
          <DialogTitle className="sr-only">
            {selected?.title || projectName}
          </DialogTitle>
          {selected && (
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl">
              <Image
                src={selected.src}
                alt={selected.title || projectName}
                width={selected.width || 1920}
                height={selected.height || 1080}
                className="block w-full h-auto select-none rounded-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
