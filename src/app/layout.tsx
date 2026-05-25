import type { Metadata } from "next";
import { inter, sfProDisplay, sfMono, founderGrotesk, spezia } from "@/lib/fonts";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import "katex/dist/katex.min.css";

// -------------------------------------------
// projects/dremnik/src/app/layout.tsx
//
// export const metadata                   L18
// export default function RootLayout()    L24
// children                                L27
// -------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL("https://dremnik.com"),
  title: "Andrew Jones | dremnik",
  description: "Designer, Engineer, Student of Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sfProDisplay.variable} ${sfMono.variable} ${founderGrotesk.variable} ${spezia.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="min-h-[100svh]">
            <Header />
            <ScrollArea className="w-full h-auto md:h-[100dvh]">{children}</ScrollArea>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
