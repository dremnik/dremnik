// -----------------------------------------------
// projects/dremnik/src/lib/gallery.ts
//
// export type GalleryImage                    L18
// src                                         L19
// title                                       L20
// width                                       L21
// height                                      L22
// type RawImage                               L25
// height                                      L27
// ref                                         L27
// src                                         L27
// title                                       L27
// width                                       L27
// export function normalizeGalleryImages()    L31
// -----------------------------------------------

export type GalleryImage = {
  src: string;
  title: string;
  width?: number;
  height?: number;
};

type RawImage =
  | string
  | { src: string; title?: string; width?: number; height?: number; ref?: boolean };

// Normalize the loose image config from projects.ts (string or object) into a
// uniform shape, deriving a title from the filename when none is given.
export function normalizeGalleryImages(images: RawImage[] = []): GalleryImage[] {
  return (images || []).map((img) =>
    typeof img === "string"
      ? {
          src: img,
          title:
            img
              .split("/")
              .pop()
              ?.replace(/\.[^.]+$/, "")
              ?.replace(/[\-_]+/g, " ") || "",
        }
      : {
          src: img.src,
          title: img.title || "",
          width: img.width,
          height: img.height,
        }
  );
}
