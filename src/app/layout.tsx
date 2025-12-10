import type { Metadata } from "next";
import { sfPro, sfProDisplay, sfMono, founderGrotesk } from "@/lib/fonts";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";

import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew | dremnik",
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
        <div className="min-h-[100svh]">
          <Header />
          <ScrollArea className="w-full h-auto md:h-[100dvh]">{children}</ScrollArea>
        </div>
      </body>
    </html>
  );
}
