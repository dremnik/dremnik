// -------------------------------------
// projects/dremnik/landing/src/app/blog/blog.tsx
//
// export default function Blog()    L16
// -------------------------------------

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allPosts } from "content-collections";
import { motion } from "motion/react";

import { IconLeaf } from "@/components/ui/icons";

export default function Blog() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const groupedPosts = useMemo(() => {
    // Sort posts by date (newest first)
    const sortedPosts = [...allPosts]
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Group posts by year
    const grouped: { [key: string]: typeof allPosts } = {};

    sortedPosts.forEach((post) => {
      const year = new Date(post.date).getFullYear().toString();
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(post);
    });

    return grouped;
  }, []);

  return (
    <div className="max-w-[var(--content-width)] mx-auto px-6">
      {Object.entries(groupedPosts)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <div key={year} className="mb-16">
            <h2 className="text-muted-foreground text-xs mb-7">{year}</h2>

            <div className="relative space-y-4">
              {posts.map((post, index) => (
                <div
                  key={post.slug}
                  className="group relative"
                  onMouseEnter={() => setHoveredPost(post.slug)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative flex items-center py-2 transition-colors rounded-sm px-2 -mx-2">
                      <div className="flex items-center gap-3">
                        {/* Desktop: absolute leaf outside the content edge */}
                        <IconLeaf className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-[26px] text-accent-mono size-4.5" />
                        {/* Mobile: inline leaf to avoid overflow */}
                        <IconLeaf className="md:hidden text-accent-mono size-4" />
                        <h3 className="border-b text-[18px] font-sans-display tracking-[0.001em] font-normal hover:text-foreground/70 dark:hover:text-white/80 transition-colors">
                          {post.title}
                        </h3>
                      </div>

                      {/* Dotted line with spring-animated mask reveal */}
                      <div className="flex-1 mx-4 relative overflow-hidden">
                        {/* The actual dotted line - always present */}
                        <div
                          className="h-px w-full"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, hsl(0, 0%, 40%) 0.5px, transparent 0.5px)",
                            backgroundSize: "12px 12px",
                            backgroundRepeat: "repeat-x",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        {/* Blocking div with spring animation (hidden on mobile) */}
                        <motion.div
                          className="hidden md:block absolute inset-0 bg-background"
                          initial={{ x: 0 }}
                          animate={{
                            x: hoveredPost === post.slug ? "100%" : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 40,
                          }}
                        />
                      </div>

                      <div className="relative font-mono text-mono text-[11px]">
                        {new Date(post.date)
                          .toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit",
                          })
                          .replaceAll("/", ".")}
                        {/* Vertical connector line - hidden for last item */}
                        {index < posts.length - 1 && (
                          <div className="absolute right-0 top-full mt-2 w-px h-6 bg-primary/20" />
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
