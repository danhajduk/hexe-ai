import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import MarkdownRenderer from "../components/MarkdownRenderer";

type DocMetaItem = {
  title: string;
  path: string;
};

function slugToDocPath(slug?: string): string {
  if (!slug || slug.trim() === "") {
    return "index.md";
  }

  return slug.replace(/^\/+|\/+$/g, "");
}

function docPathToRoute(path: string): string {
  return `/docs/${path.replace(/^\/+/, "")}`;
}

export default function Docs() {
  const { "*": slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [meta, setMeta] = useState<DocMetaItem[]>([]);
  const [error, setError] = useState("");

  const docPath = useMemo(() => slugToDocPath(slug), [slug]);

  useEffect(() => {
    fetch("/docs/_meta.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load docs menu");
        }
        return res.json();
      })
      .then((data: DocMetaItem[]) => setMeta(data))
      .catch((err: Error) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    setError("");
    setContent("");

    fetch(`/docs/${docPath}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Document not found: ${docPath}`);
        }
        return res.text();
      })
      .then(setContent)
      .catch((err: Error) => {
        console.error(err);
        setError(err.message);
      });
  }, [docPath]);

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <SiteHeader />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="space-y-3 text-sm">
            <div className="text-xs uppercase text-slate-400">Docs</div>

            {meta.map((item) => {
              const to = docPathToRoute(item.path);
              const isActive = location.pathname === to;

              return (
                <Link
                  key={item.path}
                  to={to}
                  className={`block transition-colors ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-300 hover:text-cyan-300"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </aside>

          <main className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                ← Back
              </button>

              <div className="text-xs text-slate-500">{docPath}</div>
            </div>

            {error ? (
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Document not found
                </h1>
                <p className="mt-4 text-slate-300">{error}</p>
              </div>
            ) : (
              <MarkdownRenderer content={content} docPath={docPath} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}