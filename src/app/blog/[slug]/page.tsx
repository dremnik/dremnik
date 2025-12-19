import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "content-collections";

import { IconChevronLeftSmall, IconLeaf } from "@/components/ui/icons";
import { Markdown } from "@/components/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-[var(--content-width)] -mt-3 mx-auto px-6">
      <div className="mb-8 hidden md:block">
        <Link
          href="/blog"
          className="text-muted hover:text-primary transition-colors text-xs font-mono inline-flex items-center gap-1"
        >
          <IconChevronLeftSmall />
          back
        </Link>
      </div>

      <article className="prose prose-invert prose-lg max-w-none">
        <header className="mb-8 space-y-2">
          <div className="text-primary text-[13px] font-mono">
            {new Date(post.date)
              .toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "2-digit",
              })
              .replaceAll("/", ".")}
          </div>
          <div className="relative">
            <IconLeaf className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-9 text-primary size-5" />
            <h1 className="text-[32px] font-founder-grotesk font-normal text-white mb-4">
              {post.title}
            </h1>
          </div>
        </header>

        <div className="leading-relaxed">
          <Markdown content={post.content} />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - dremnik`,
    description: post.title,
  };
}
