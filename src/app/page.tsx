"use client";

import About from "@/app/about/about";
import Portfolio from "@/app/portfolio/portfolio";
import Blog from "@/app/blog/blog";

/* components */
import { Nav } from "@/components/nav";
import { TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <Nav>
      <TabsContent value="about">
        <About />
      </TabsContent>

      <TabsContent value="portfolio">
        <Portfolio />
      </TabsContent>

      <TabsContent value="blog">
        <Blog />
      </TabsContent>
    </Nav>
  );
}
