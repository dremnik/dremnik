import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkSupersub from "remark-supersub";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-serif font-medium text-[28pt] text-ink tracking-[-0.02em] mt-12 mb-5 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-serif font-medium text-[21pt] text-ink tracking-[-0.02em] mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif font-medium text-[17pt] text-ink tracking-[-0.015em] mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-serif font-medium text-[15pt] text-ink mt-6 mb-3">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[12.5pt] md:text-[11pt] text-body leading-[1.65] md:leading-[1.6] my-3">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-body underline decoration-[#525252] decoration-[0.06em] underline-offset-[2px] hover:text-link hover:decoration-link transition-colors duration-200"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-rule pl-4 my-6 [&_p]:text-soft [&_p]:italic">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside text-body text-[12.5pt] md:text-[11pt] leading-[1.65] md:leading-[1.6] space-y-1.5 my-4 ml-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside text-body text-[12.5pt] md:text-[11pt] leading-[1.65] md:leading-[1.6] space-y-1.5 my-4 ml-5 marker:text-muted">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  code: ({ children, className }) => {
    const text = String(children);
    const isBlock = className?.includes("language-") || text.includes("\n");
    if (isBlock) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="font-mono text-[10pt] bg-[var(--code-bg)] text-ink px-1 py-0.5 rounded-md">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="overflow-x-auto rounded-2xl bg-[var(--code-bg)] text-ink p-4 my-6 text-[8.5pt] leading-[1.5] font-mono">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-rule" />,
  strong: ({ children }) => (
    <strong className="text-ink">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
};

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkSupersub, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
