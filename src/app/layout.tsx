import type { Metadata } from "next";

import { sfPro, sfProDisplay, sfMono, founderGrotesk } from "@/lib/fonts";

/* components */
import { Header } from "@/components/header";
import { RouteTabs } from "@/components/ui/route-tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import "./globals.css";

export const metadata: Metadata = {
  title: "Charles Maurice",
  description: "Designer, Engineer, Student of Life",
};

const tabs = [
  { value: "about", href: "/", label: "About", exact: true },
  { value: "portfolio", href: "/portfolio", label: "Portfolio" },
  { value: "blog", href: "/blog", label: "Blog" },
];

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
        <div className="min-h-screen">
          <Header />

          <ScrollArea className="h-screen w-full">
            <RouteTabs tabs={tabs} />
            {children}
          </ScrollArea>
        </div>
      </body>
    </html>
  );
}
