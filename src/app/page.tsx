import Link from "next/link";
import { allPosts } from "content-collections";
import { IconGithub, IconLinkedIn, IconTwitterX } from "@/components/ui/icons";
import { Header } from "@/components/header";
import { SIDE_PROJECTS } from "@/lib/projects";

// -------------------------------------
// projects/dremnik/src/app/page.tsx
//
// const X_URL                       L18
// const GITHUB_URL                  L19
// const LINKEDIN_URL                L20
// const latestPosts                 L22
// function formatDate()             L27
// export default function Home()    L38
// -------------------------------------

const X_URL = "https://x.com/dremnik";
const GITHUB_URL = "https://github.com/dremnik";
const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-jones-013154219";

const latestPosts = [...allPosts]
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 4);

function formatDate(d: Date | string) {
  const date = new Date(d);
  return date
    .toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    })
    .replaceAll("/", ".");
}

export default function Home() {
  return (
    <>
    <Header />
    <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 pt-8 pb-24 text-[11pt] md:text-[10.5pt] leading-[1.5]">
      <section className="mb-12">
        <h1 className="text-[22pt] md:text-[20pt] font-medium tracking-[-0.035em] text-ink leading-tight">
          Andrew Jones
        </h1>
        <div className="mt-4 flex items-center justify-between gap-4">
          <a
            href="mailto:andrew@dremnik.com"
            className="text-muted text-[10.5pt] md:text-[9.5pt] hover:underline underline-offset-4 decoration-[1px] decoration-muted"
          >
            andrew@dremnik.com
          </a>
          <div className="flex items-center gap-4 shrink-0 text-[#051a24] dark:text-[#F6FCFF]">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-ink transition-colors duration-200"
            >
              <IconTwitterX className="size-[14px] md:size-[13px]" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-ink transition-colors duration-200"
            >
              <IconGithub className="size-[14px] md:size-[13px]" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-ink transition-colors duration-200"
            >
              <IconLinkedIn className="size-[16px] md:size-[15px]" />
            </a>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-[11pt] md:text-[10.5pt] text-ink tracking-[-0.015em] leading-[1.6]">
            I&rsquo;m a founder, designer, and engineer operating at the frontier
            of human&ndash;machine collaboration.
          </p>
          <p className="text-body text-[11pt] md:text-[10pt] leading-[1.6]">
            Most recently I was cofounder and CTO of{" "}
            <Link
              href="/work/emblem"
              className="text-link underline underline-offset-4 decoration-[1px] decoration-link/40 hover:decoration-link transition-colors"
            >
              Emblem
            </Link>
            , an AI operating system for private equity, venture, and family
            offices, where I designed and built a product accelerating diligence
            for firms managing over $1B in assets.
          </p>
          <p className="text-body text-[11pt] md:text-[10pt] leading-[1.6]">
            I find myself at home in the dark, searching for new language to
            describe unknown possibilities. AI will happily optimize the wrong
            thing with dazzling efficiency, but it won&rsquo;t tell you that
            you&rsquo;re asking the wrong question. We are still limited by our
            own lack of clarity.
          </p>
          <div className="pt-5">
            <p className="font-medium text-ink text-[11pt] md:text-[10pt] leading-[1.6]">
              Interests
            </p>
            <p className="text-body text-[11pt] md:text-[10pt] leading-[1.6] mt-1.5">
              Piano, Philosophy, Art, History, and Biology.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-[9.5pt] md:text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-3 pb-1.5 border-b border-rule">
          Side projects
        </h2>
        <ul className="space-y-3 md:space-y-2">
          {SIDE_PROJECTS.map((p) => (
            <li
              key={p.title}
              className="flex items-baseline justify-between gap-4"
            >
              <p className="text-body text-[11pt] md:text-[10pt] leading-[1.6]">
                <span className="font-medium text-ink tracking-[-0.015em]">
                  {p.title}
                </span>
                <span className="text-muted"> — </span>
                {p.desc}
              </p>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} on GitHub`}
                  className="text-[#051a24] dark:text-[#F6FCFF] hover:text-ink transition-colors duration-200 shrink-0 translate-y-[2px]"
                >
                  <IconGithub className="size-[14px] md:size-[13px]" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {latestPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="font-mono text-[9.5pt] md:text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-3 pb-1.5 border-b border-rule">
            Top of mind
          </h2>
          <ul className="space-y-2.5 md:space-y-1.5">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4"
                >
                  <span className="text-ink text-[11pt] md:text-[10.5pt] font-medium tracking-[-0.015em] group-hover:underline underline-offset-4 decoration-[1px] decoration-muted">
                    {post.title}
                  </span>
                  <span className="font-mono text-[9pt] md:text-[8.5pt] text-muted shrink-0">
                    {formatDate(post.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

    </div>
    </>
  );
}
