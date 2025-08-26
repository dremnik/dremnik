import Link from "next/link";
import { allPosts } from "content-collections";

/* components */
import {
  Blockquote,
  BlockquoteContent,
  BlockquoteCaption,
} from "@/components/ui/blockquote";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LATEST_LENGTH = 3;

export default function About() {
  const latestPosts = [...allPosts]
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, LATEST_LENGTH);

  return (
    <div className="max-w-[var(--content-width)] space-y-12 mx-auto px-6">
      <div className="flex flex-col">
        <Avatar className="size-16 border border-muted mb-6">
          <AvatarImage
            src="/charles_maurice.png"
            alt="Charles Maurice"
            className="object-cover"
          />
          <AvatarFallback>CM</AvatarFallback>
        </Avatar>

        <h2 className="text-2xl font-normal mb-3 font-founder-grotesk">
          Charles Maurice
        </h2>
        <p className="text-primary text-xs font-mono">
          [ designer, engineer, student of life ]
        </p>
      </div>

      <div className="space-y-8">
        <Blockquote>
          <BlockquoteContent>
            Simplicity is the final achievement. After one has played a vast
            quantity of notes and more notes, it is simplicity that emerges as
            the crowning reward of art.
          </BlockquoteContent>
          <BlockquoteCaption>F. Chopin</BlockquoteCaption>
        </Blockquote>

        <p className="text-foreground tracking-tight">
          The pursuit of excellence in craft is the ultimate meaning in an age
          of noise and distractions.
        </p>

        <p className="text-foreground tracking-tight">
          Life is short, and craft long, opportunity fleeting, experimentations
          perilous, and judgment difficult.
        </p>
      </div>

      <div className="pt-8">
        <h3 className="text-muted-foreground text-xs mb-4">top of mind</h3>

        <div className="space-y-4">
          {latestPosts.map((post) => (
            <div key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center py-2 transition-colors rounded-sm px-2 -mx-2">
                  <h3 className="text-[18px] font-sans-display font-normal group-hover:text-white/80 transition-colors">
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

                  <div className="font-mono text-primary text-[11px]">
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
