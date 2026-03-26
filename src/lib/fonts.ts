import localFont from "next/font/local";

// ----------------------------------
// projects/dremnik/landing/src/lib/fonts.ts
//
// export const sfPro             L12
// export const sfProDisplay      L17
// export const sfMono            L38
// export const founderGrotesk    L54
// ----------------------------------

export const sfPro = localFont({
  src: "../../public/fonts/SF/SF-Pro.ttf",
  variable: "--font-sf-pro",
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