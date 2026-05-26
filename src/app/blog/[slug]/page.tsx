import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "content-collections";

import { Markdown } from "@/components/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(d: Date | string) {
  const date = new Date(d);
  return date
    .toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    })
    .replaceAll("/", ".");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 pt-8 pb-24">
      <div className="mb-12">
        <Link
          href="/blog"
          className="font-mono text-[8.5pt] text-muted hover:text-ink transition-colors"
        >
          ← back
        </Link>
      </div>

      <article>
        <header className="flex flex-col gap-3 pb-10">
          <h1 className="text-[28pt] md:text-[32pt] font-medium text-ink tracking-[-0.035em] leading-[1.1]">
            {post.title}
          </h1>
          <div className="font-mono text-[9pt] text-muted">
            {formatDate(post.date)}
          </div>
        </header>

        {post.hero && (
          <figure className="mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.hero}
              alt={post.heroAlt ?? post.title}
              className="w-full h-auto rounded-lg"
            />
          </figure>
        )}

        <div className="prose-tilde">
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

  const siteUrl = "https://dremnik.com";
  const ogImage = post.ogImage;

  return {
    title: `${post.title} · dremnik`,
    description: post.description ?? post.title,
    openGraph: {
      title: post.title,
      description: post.description ?? post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description ?? post.title,
      images: [ogImage],
    },
  };
}
