import type { Metadata } from "next";
import { sfPro, sfProDisplay, sfMono, founderGrotesk } from "@/lib/fonts";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import "katex/dist/katex.min.css";

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
        className={`${sfPro.variable} ${sfProDisplay.variable} ${sfMono.variable} ${founderGrotesk.variable} font-sans antialiased bg-background text-foreground`}
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
