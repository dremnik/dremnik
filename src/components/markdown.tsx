import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkSupersub from "remark-supersub";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import type { Components } from "react-markdown";
import Image from "next/image";

// ----------------------------------
// projects/dremnik/src/components/markdown.tsx
//
// const components               L19
// interface MarkdownProps       L152
//   content                     L153
// export function Markdown()    L156
// ----------------------------------

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-spezia font-normal text-white mb-8 mt-10 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-spezia font-normal text-white mb-6 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-spezia font-normal text-white mb-4 mt-8">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-[22px] font-spezia font-medium text-primary mb-6 mt-12">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[16.4px] font-[410] tracking-[-0.03em] text-prose leading-relaxed mb-6">
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/20 pl-3 italic my-8 [&_p]:text-prose/60">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside text-prose space-y-2 mb-6 ml-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="markdown-ol list-decimal list-outside text-prose space-y-2 mb-6 ml-7 marker:text-xs marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-prose leading-relaxed">{children}</li>
  ),
  code: ({ children, className }) => {
    // If className exists, it's a code block (has language tag)
    const isBlock = Boolean(className);
    if (isBlock) {
      return (
        <code className="block text-sm font-mono text-prose">
          {children}
        </code>
      );
    }
    // Inline code
    return (
      <code className="bg-muted/10 px-1.5 py-0.5 rounded text-sm font-mono text-prose">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-muted/10 p-4 rounded-lg text-sm font-mono text-prose overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-prose">{children}</em>,
  sub: ({ children }) => (
    <sub className="text-[0.75em] text-prose/80">{children}</sub>
  ),
  sup: ({ children }) => (
    <sup className="text-[0.75em] text-prose/80">{children}</sup>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-primary/20">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-primary/10 last:border-0">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="py-2 pr-6 text-sm font-medium text-foreground whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-2 pr-6 text-sm text-prose tabular-nums whitespace-nowrap">
      {children}
    </td>
  ),
  img: ({ src, alt }) => {
    if (!src) return null;

    // Convert Blob to string if needed
    const srcString = typeof src === "string" ? src : "";
    if (!srcString) return null;

    // Check if it's an external URL
    const isExternal =
      srcString.startsWith("http://") || srcString.startsWith("https://");

    return (
      <Image
        src={srcString}
        alt={alt || ""}
        width={800}
        height={450}
        className="my-8 w-full h-auto rounded-lg inline-block"
        style={{ objectFit: "cover" }}
        unoptimized={isExternal}
      />
    );
  },
};

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkSupersub, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
