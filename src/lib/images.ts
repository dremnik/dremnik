import "server-only";

import fs from "fs";
import path from "path";

// -----------------------------------------
// projects/dremnik/src/lib/images.ts
//
// const SUPPORTED_EXTENSIONS            L13
// export function getProjectImages()    L15
// -----------------------------------------

const SUPPORTED_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|avif)$/i;

export function getProjectImages(projectSlug: string): string[] {
  const projectDir = path.join(process.cwd(), "public/projects", projectSlug);

  if (!fs.existsSync(projectDir)) {
    return [];
  }

  return fs
    .readdirSync(projectDir)
    .filter((file) => {
      const filePath = path.join(projectDir, file);
      return fs.statSync(filePath).isFile() && SUPPORTED_EXTENSIONS.test(file);
    })
    .sort()
    .map((file) => `/projects/${projectSlug}/${file}`);
}
