import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-founder-grotesk font-normal text-white mb-8 mt-10 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-founder-grotesk font-normal text-white mb-6 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-founder-grotesk font-normal text-white mb-4 mt-8">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-[21px] font-founder-grotesk font-normal text-primary mb-6 mt-12">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[16.4px] tracking-tight text-prose leading-relaxed mb-6">
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/20 pl-3 italic my-8">
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
  code: ({ children }) => {
    return (
      <code className="block bg-muted/10 p-4 rounded-lg text-sm font-mono text-prose overflow-x-auto mb-4">
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
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-prose/90">{children}</em>,
};

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
