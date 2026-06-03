import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared assets for the dynamic OG cards (app/opengraph-image.tsx and
// app/blog/[slug]/opengraph-image.tsx). Fonts and the avatar are read off disk
// and handed to satori; colors mirror the site's light theme tokens in
// globals.css (--bg / --ink / --muted / --link).
export const OG_SIZE = { width: 1200, height: 630 } as const;

export const OG = {
  bg: "#ffffff", // --bg (light)
  ink: "#242833", // --ink (light)
  muted: "#71717a", // --muted
  steel: "#053961", // --link (light)
} as const;

export async function loadOgAssets() {
  const file = (p: string) => join(process.cwd(), p);
  const [geist, geistMedium, mono, photo] = await Promise.all([
    readFile(file("public/fonts/Geist/Geist-Regular.ttf")),
    readFile(file("public/fonts/Geist/Geist-Medium.ttf")),
    readFile(file("public/fonts/SF/SF-Mono-Regular.otf")),
    readFile(file("public/florentine_andrew.jpeg")),
  ]);

  const avatar = `data:image/jpeg;base64,${photo.toString("base64")}`;

  const fonts = [
    { name: "Geist", data: geist, style: "normal" as const, weight: 400 as const },
    { name: "Geist", data: geistMedium, style: "normal" as const, weight: 500 as const },
    { name: "SFMono", data: mono, style: "normal" as const, weight: 400 as const },
  ];

  return { avatar, fonts };
}
