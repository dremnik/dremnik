import localFont from "next/font/local";
import { Inter } from "next/font/google";

// ----------------------------------
// projects/dremnik/src/lib/fonts.ts
//
// export const inter             L13
// export const sfProDisplay      L19
// export const sfMono            L40
// export const founderGrotesk    L56
// ----------------------------------

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const sfProDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/SF/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
});

export const sfMono = localFont({
  src: [
    {
      path: "../../public/fonts/SF/SF-Mono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF/SF-Mono-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sf-mono",
});

export const founderGrotesk = localFont({
  src: "../../public/fonts/FoundersGrotesk/TestFoundersGrotesk-Regular.otf",
  variable: "--font-founder-grotesk",
});

export const spezia = localFont({
  src: [
    { path: "../../public/fonts/Spezia/Spezia-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Spezia/Spezia-Book.woff2", weight: "350", style: "normal" },
    { path: "../../public/fonts/Spezia/Spezia-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Spezia/Spezia-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-spezia",
  display: "swap",
});