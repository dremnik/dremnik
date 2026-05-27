import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 pt-8 pb-2">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[9pt] tracking-[0.02em] text-muted hover:underline underline-offset-4 decoration-[1px] decoration-muted"
          >
            dremnik
          </Link>
          <div className="flex items-center gap-5 text-[10pt]">
            <Link
              href="/blog"
              className="text-muted hover:underline underline-offset-4 decoration-[1px] decoration-muted"
            >
              Blog
            </Link>
            <Link
              href="/cv"
              className="text-muted hover:underline underline-offset-4 decoration-[1px] decoration-muted"
            >
              CV
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
