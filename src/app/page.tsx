import Link from "next/link";
import { allPosts } from "content-collections";
import { IconGithub, IconLinkedIn, IconTwitterX } from "@/components/ui/icons";
import { Header } from "@/components/header";

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
        Long-form, low-cadence publication on the arc of capital, machines, and
        the evolution of human systems. Written for the reader who wants
        something honest, slow, and built to last — against a media stack that
        rewards certainty and controversy.
      </>
    ),
  },
  {
    title: "Hermaeus",
    url: "https://hermaeus.xyz",
    body: (
      <>
        Financial data infrastructure for analysts, developers, and AI agents.
        Ingests SEC filings and other authoritative sources, resolves entities
        into one coherent graph, and exposes it as a source-linked REST API —
        every fact traces back to the filing it came from. Parallel pipeline
        indexes the independent media frontier (podcasts, Substacks, RSS) with
        ASR, diarization, and passage-level semantic search.
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
    <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 pt-8 pb-24 text-[10.5pt] leading-[1.5]">
      <section className="mb-10">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-[20pt] font-medium tracking-[-0.035em] text-ink leading-tight">
            Andrew Jones
          </h1>
          <a
            href="mailto:andrew@dremnik.com"
            className="text-muted text-[9.5pt] hover:text-link transition-colors mt-2"
          >
            andrew@dremnik.com
          </a>
        </div>
        <div className="flex items-center justify-between gap-4 mt-2">
          <p className="text-[10.5pt] text-ink tracking-[-0.015em]">
            I build and write at the intersection of capital, machines, and
            intelligence.
          </p>
          <div className="flex items-center gap-4 text-muted shrink-0">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-ink transition-colors"
            >
              <IconTwitterX className="size-[13px]" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-ink transition-colors"
            >
              <IconGithub className="size-[13px]" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-ink transition-colors"
            >
              <IconLinkedIn className="size-[13px]" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-5 pb-1.5 border-b border-rule">
          Currently
        </h2>

        <div className="space-y-7">
          {projects.map((p) => (
            <div key={p.title}>
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="text-[11pt] font-medium tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[8.5pt] text-link hover:text-ink transition-colors"
                >
                  {p.url.replace("https://", "")}
                </a>
              </div>
              <p className="text-body text-[10pt] leading-[1.65]">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="mt-10">
          <h2 className="font-mono text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-3 pb-1.5 border-b border-rule">
            Top of mind
          </h2>
          <ul className="space-y-1.5">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4"
                >
                  <span className="text-ink text-[10.5pt] font-medium tracking-[-0.015em] group-hover:text-link transition-colors">
                    {post.title}
                  </span>
                  <span className="font-mono text-[8.5pt] text-muted shrink-0">
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
