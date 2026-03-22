import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

function normalizeDocRoute(pathname: string): string {
  let clean = pathname.replace(/^\/+/, "");

  if (clean.startsWith("docs/")) {
    clean = clean.slice(5);
  }

  return `/docs/${clean}`;
}

function resolveDocHref(href: string, docPath: string): string {
  const base = new URL(docPath, "https://hexe.local/");
  const resolved = new URL(href, base).pathname;
  return normalizeDocRoute(resolved);
}

export default function MarkdownRenderer({
  content,
  docPath,
}: {
  content: string;
  docPath: string;
}) {
  return (
    <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-cyan-300 prose-strong:text-white prose-code:text-cyan-200 prose-pre:border prose-pre:border-white/10 prose-pre:bg-[#0b1321]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href = "", children }) {
            const isMarkdownLink =
              href.endsWith(".md") ||
              href.startsWith("./") ||
              href.startsWith("../");

            if (isMarkdownLink) {
              return <Link to={resolveDocHref(href, docPath)}>{children}</Link>;
            }

            if (href.startsWith("/docs/")) {
              return <Link to={href}>{children}</Link>;
            }

            return (
              <a href={href} target="_blank" rel="noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}