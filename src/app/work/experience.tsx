// -----------------------------------------------------
// projects/dremnik/src/app/work/experience.tsx
//
// Résumé content (formerly /cv), rendered below the work
// grid so /work is the single unified showcase page.
//
// type Block                          L?
// const independent                   L?
// type SideProject                    L?
// const sideProjects                  L?
// const experience                    L?
// function Section()                  L?
// export function WorkExperience()    L?
// -----------------------------------------------------

import { IconGithub } from "@/components/ui/icons";

type Block = {
  title: string;
  url?: string;
  years?: string;
  body: React.ReactNode;
};

const independent: Block[] = [
  {
    title: "The Apocrypha",
    url: "https://theapocrypha.xyz",
    body: (
      <>
        Long-form, low-cadence publication on capital, machines, and
        the evolution of human systems. Written for those who want
        something slow, honest, and reflective — against a consensus that
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
        into a single source-linked graph. Indexes the independent media
        frontier (podcasts, Substacks, RSS) with ASR, diarization, and
        passage-level semantic search.
      </>
    ),
  },
  {
    title: "kernl",
    url: "https://kernl.sh",
    body: (
      <>
        AI workspace exploring high-bandwidth human–AI interaction; shipped as
        an open-source TypeScript framework for agent orchestration (agents,
        threads, toolkits, three-layer memory), CLI scaffolding, and a React
        component library for realtime voice.
      </>
    ),
  },
];

type SideProject = {
  title: string;
  desc: string;
  github?: string;
};

const sideProjects: SideProject[] = [
  {
    title: "kdb",
    desc: "A CLI for knowledge and work",
    github: "https://github.com/dremnik/kdb",
  },
  {
    title: "opendoc",
    desc: "Agent-friendly document format",
    github: "https://github.com/digimata/opendoc",
  },
  {
    title: "parrot",
    desc: "Ultra-minimalist macOS dictation",
    github: "https://github.com/digimata/parrot",
  },
];

const experience: Block[] = [
  {
    title: "Cofounder & CTO — Emblem PE",
    url: "https://emblem.pe",
    years: "2023—2024",
    body: (
      <>
        Built an AI investment platform for PE, VC, and family offices: deal sourcing,
        diligence, and portfolio workflows. Designed and shipped the full
        product end-to-end, including research interfaces, portfolio dashboards, deal
        pipeline, document-ingestion ETL, semantic search, agent orchestration,
        and multi-tenant infrastructure.
      </>
    ),
  },
  {
    title: "Software Engineer — ProPics",
    url: "https://propics.ai",
    years: "2022—2023",
    body: (
      <>
        AI-generated professional headshots. Orchestrated long-running
        Dreambooth fine-tuning with TensorFlow + Argo Workflows; shipped the
        upload → review → selection mobile UX.
      </>
    ),
  },
];

function Section({
  label,
  intro,
  blocks,
}: {
  label: string;
  intro?: string;
  blocks: Block[];
}) {
  return (
    <section className="mt-12">
      <h2 className="font-mono text-[9.5pt] md:text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-3 pb-1.5 border-b border-rule">
        {label}
      </h2>
      {intro && (
        <p className="text-soft text-[11pt] md:text-[10pt] leading-[1.6] mb-4">
          {intro}
        </p>
      )}
      <div className="space-y-10 md:space-y-6">
        {blocks.map((b) => (
          <div key={b.title}>
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <h3 className="text-[12pt] md:text-[11pt] font-medium tracking-[-0.02em] text-ink">
                {b.title}
                {b.years && (
                  <span className="ml-2 text-[10pt] md:text-[9.5pt] font-normal text-muted tracking-[-0.005em]">
                    ({b.years})
                  </span>
                )}
              </h3>
              {b.url && (
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[8.5pt] text-link hover:underline underline-offset-4 decoration-[1px] decoration-link/60 shrink-0"
                >
                  {b.url.replace("https://", "")}
                </a>
              )}
            </div>
            <p className="text-body text-[11pt] md:text-[10pt] leading-[1.6]">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WorkExperience() {
  return (
    <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 pb-24 text-[11pt] md:text-[10.5pt] leading-[1.5]">
      <section className="mb-8">
        <h1 className="text-[22pt] md:text-[20pt] font-medium tracking-[-0.035em] text-ink">
          Work
        </h1>
      </section>

      <Section
        label="Independent work · 2025—"
        intro="Building and selective advisory work since Emblem."
        blocks={independent}
      />

      <Section label="Experience" blocks={experience} />

      <section className="mt-12">
        <h2 className="font-mono text-[9.5pt] md:text-[8.5pt] uppercase tracking-[0.08em] text-muted mb-3 pb-1.5 border-b border-rule">
          Side projects
        </h2>
        <ul className="space-y-3 md:space-y-2">
          {sideProjects.map((p) => (
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
                  className="text-muted hover:text-ink transition-colors duration-200 shrink-0 translate-y-[2px]"
                >
                  <IconGithub className="size-[13px]" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
