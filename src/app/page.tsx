import Link from "next/link";
import { allPosts } from "content-collections";
import { IconGithub, IconLinkedIn, IconTwitterX } from "@/components/ui/icons";
import { Header } from "@/components/header";

// -------------------------------------
// projects/dremnik/src/app/page.tsx
//
// const X_URL                       L22
// const GITHUB_URL                  L23
// const LINKEDIN_URL                L24
// type Project                      L26
// title                             L27
// url                               L28
// body                              L29
// const projects                    L32
// const latestPosts                 L54
// function formatDate()             L59
// export default function Home()    L70
// -------------------------------------

const X_URL = "https://x.com/dremnik";
const GITHUB_URL = "https://github.com/dremnik";
const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-jones-013154219";

type Project = {
  title: string;
  url: string;
  body: React.ReactNode;
};

const projects: Project[] = [
  {
    title: "The Apocrypha",
    url: "https://theapocrypha.xyz",
    body: (
      <>
        Long-form, low-cadence publication on capital, machines, and
        the evolution of human systems.
      </>
    ),
  },
  {
    title: "Hermaeus",
    url: "https://hermaeus.xyz",
    body: (
      <>
        Financial data infrastructure for analysts, developers, and AI agents.
      </>
    ),
  },
];

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
        <p className="text-[11pt] md:text-[10.5pt] text-ink tracking-[-0.015em] mt-3">
          I build and write at the intersection of capital, machines, and
          intelligence.
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <a
            href="mailto:andrew@dremnik.com"
            className="text-muted text-[10.5pt] md:text-[9.5pt] hover:underline underline-offset-4 decoration-[1px] decoration-muted"
          >
            andrew@dremnik.com
          </a>
          <div className="flex items-center gap-4 text-muted shrink-0">
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
              <IconLinkedIn className="size-[14px] md:size-[13px]" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-[9.5pt] md:text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-5 pb-1.5 border-b border-rule">
          Currently
        </h2>

        <div className="space-y-8 md:space-y-7">
          {projects.map((p) => (
            <div key={p.title}>
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="text-[12pt] md:text-[11pt] font-medium tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[8.5pt] text-link hover:underline underline-offset-4 decoration-[1px] decoration-link/60"
                >
                  {p.url.replace("https://", "")}
                </a>
              </div>
              <p className="text-body text-[11pt] md:text-[10pt] leading-[1.6]">{p.body}</p>
            </div>
          ))}
        </div>
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
