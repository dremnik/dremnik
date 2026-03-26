import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// ---------------------------
// projects/dremnik/landing/src/lib/utils.ts
//
// export function cn()    L10
// ---------------------------

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
