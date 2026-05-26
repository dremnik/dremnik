import type { Metadata } from "next";
import { geist, geistMono, tiemposText, financierDisplay, spezia } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dremnik.com"),
  title: "Andrew Jones · dremnik",
  description: "I build and write at the intersection of capital, machines, and intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${tiemposText.variable} ${financierDisplay.variable} ${spezia.variable} font-sans antialiased`}
      >
        <div className="min-h-[100svh] flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
