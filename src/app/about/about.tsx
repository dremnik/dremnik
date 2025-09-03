import Link from "next/link";
import { allPosts } from "content-collections";

/* components */
import {
  Blockquote,
  BlockquoteContent,
  BlockquoteCaption,
} from "@/components/ui/blockquote";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Markdown } from "@/components/markdown";

const description = `Hello world.

I'm Andrew — a software designer, engineer and founder currently based
in Scottsdale, AZ. I'm glad you've landed here, hopefully you find
some things that spark your curiosity.

I'm currently focused on AI, bridging the gap between man and machine.
I love everything about the process of creating products — from product
strategy and UX to backend / infra. The most exciting thing for me is to be
on the cutting edge of technology + humanity, where the possibilities
of the future are waiting to be discovered.

Aside from that, I have a bit of an obsession with minimalism + focus. In an age of noise and distractions, the ultimate meaning is the
pursuit of excellence in our craft.
`;

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
            src="/andrew_profile.jpeg"
            alt="Andrew Jones"
            className="object-cover"
          />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>

        <h2 className="text-2xl font-normal mb-3 font-founder-grotesk">
          Andrew Jones
        </h2>
        <p className="text-primary text-[13px] font-mono">
          [ Designer, Engineer, & Student of Life ]
        </p>
      </div>

      <div className="space-y-8">
        {/*<Blockquote className="text-primary">
          <BlockquoteContent>
            Simplicity is the final achievement. After one has played a vast
            quantity of notes and more notes, it is simplicity that emerges as
            the crowning reward of art.
          </BlockquoteContent>
          <BlockquoteCaption className="justify-self-end text-xs font-mono">
            - F. Chopin
          </BlockquoteCaption>
        </Blockquote>*/}

        <Markdown content={description} />
      </div>

      <div className="pt-8">
        <h3 className="text-muted-foreground text-xs mb-4">top of mind</h3>

        <div className="space-y-4">
          {latestPosts.map((post) => (
            <div key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center py-2 transition-colors rounded-sm px-2 -mx-2">
                  <h3 className="text-[18px] border-b font-sans-display font-normal group-hover:text-white/80 transition-colors">
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
