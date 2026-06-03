import type { Metadata } from "next";
import Link from "next/link";
import WorkIndex from "./work-index";

export const metadata: Metadata = {
  title: "Portfolio · Andrew Jones",
  description: "Selected product and design work.",
};

export default function WorkPage() {
  return (
    <div className="pt-8">
      {/* Immersive, full-width portfolio — back button instead of the
       * narrow site header, so the wide grid doesn't clash with it. */}
      <div className="max-w-[1360px] mx-auto px-8 md:px-12 mb-12">
        <Link
          href="/"
          className="font-mono text-[8.5pt] text-muted hover:text-ink transition-colors duration-200"
        >
          ← back
        </Link>
        <h1 className="mt-6 text-[22pt] md:text-[20pt] font-medium tracking-[-0.035em] text-ink">
          Portfolio
        </h1>
      </div>
      <WorkIndex />
    </div>
  );
}
