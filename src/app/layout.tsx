import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const sfPro = localFont({
  src: "../../public/fonts/SF/SF-Pro.ttf",
  variable: "--font-sf-pro",
});

const sfProDisplay = localFont({
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

const sfMono = localFont({
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

const founderGrotesk = localFont({
  src: "../../public/fonts/FoundersGrotesk/TestFoundersGrotesk-Regular.otf",
  variable: "--font-founder-grotesk",
});

export const metadata: Metadata = {
  title: "Charles Maurice",
  description: "Designer, Engineer, Student of Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sfPro.variable} ${sfProDisplay.variable} ${sfMono.variable} ${founderGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
