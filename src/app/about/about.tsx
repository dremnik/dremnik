import Link from "next/link";
import { allPosts } from "content-collections";

/* components */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Markdown } from "@/components/markdown";

// --------------------------------------
// projects/dremnik/src/app/about/about.tsx
//
// const description                  L16
// const LATEST_LENGTH                L23
// export default function About()    L25
// --------------------------------------

const description = `I build and write at the intersection of capital, machines, and intelligence.

Most recently CTO of an AI-for-PE startup. Independent projects: Kernl — the interface for AGI (2024). Hermaeus — an index of the information frontier. Apocrypha — long-form on the period we are in.`;

const LATEST_LENGTH = 3;

export default function About() {
  const latestPosts = [...allPosts]
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, LATEST_LENGTH);

  return (
    <div className="max-w-[var(--content-width)] space-y-8 mx-auto px-6">
      <div className="flex flex-col">
        <Avatar className="size-18 border border-muted mb-6">
          <AvatarImage
            src="/florentine_andrew.jpeg"
            alt="Andrew Jones"
            className="object-cover"
          />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>

        <h2 className="text-[22px] font-normal mb-3 font-spezia tracking-[-0.04em]">
          Andrew Jones
        </h2>
        <p className="text-[16px]" style={{ color: "#535565" }}>
          Founder. Writer.
        </p>
      </div>

      <div className="space-y-8">
        <Markdown content={description} />
      </div>

      <div className="pt-8">
        <h3 className="text-muted-foreground text-xs mb-4">top of mind</h3>

        <div className="space-y-4">
          {latestPosts.map((post) => (
            <div key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center py-2 transition-colors rounded-sm px-2 -mx-2">
                  <h3 className="text-[18px] border-b font-sans-display font-normal hover:text-foreground/70 dark:hover:text-white/80 transition-colors">
                    {post.title}
                  </h3>

                  <div
                    className="flex-1 mx-4 h-px"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, hsl(0, 0%, 40%) 0.5px, transparent 0.5px)",
                      backgroundSize: "12px 12px",
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="font-mono text-mono text-[11px]">
                    {new Date(post.date)
                      .toLocaleDateString("en-US", {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit",
                      })
                      .replaceAll("/", ".")}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
