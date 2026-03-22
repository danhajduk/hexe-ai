const layers = [
  {
    title: "Core",
    subtitle: "Control Plane",
    text: "Hexe Core is the authority layer. It owns APIs, operator UI, governance, trust, scheduling, MQTT authority, and system-wide coordination.",
  },
  {
    title: "Supervisor",
    subtitle: "Host Runtime",
    text: "Supervisor is the host-local runtime boundary. It owns system health, resource visibility, lifecycle control, and local execution management.",
  },
  {
    title: "Nodes",
    subtitle: "External Execution",
    text: "Nodes are trusted external systems that declare capabilities, receive governance, publish telemetry, and execute outside the Core boundary.",
  },
];

const principles = [
  "Core remains the platform authority.",
  "Supervisor owns host-local runtime control.",
  "Nodes own external capability delivery and execution.",
  "MQTT policy and trust stay centralized.",
  "Execution boundaries stay explicit instead of implied.",
];

export default function System() {
  return (
    <div className="relative min-h-screen bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <header className="mb-12 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Hexe AI
            </div>
            <div className="text-lg font-semibold">System Architecture</div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="/" className="transition hover:text-white">
              Concept
            </a>
            <a href="/system" className="transition hover:text-white">
              System
            </a>
            <a href="/status" className="transition hover:text-white">
              Status
            </a>
            <a href="/roadmap" className="transition hover:text-white">
              Roadmap
            </a>
          </nav>
        </header>

        <section className="mb-16">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            A layered platform with clear authority and execution boundaries.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Hexe AI is not built as a pile of loosely connected services. It is
            structured around explicit responsibility layers so governance,
            runtime control, and execution remain understandable as the platform
            grows.
          </p>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-3">
          {layers.map((layer) => (
            <article
              key={layer.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-2 text-sm text-cyan-300">{layer.title}</div>
              <h2 className="mb-3 text-xl font-semibold">{layer.subtitle}</h2>
              <p className="text-sm leading-7 text-slate-300">{layer.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Flow of Responsibility</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Core sets policy, trust, and coordination rules. Supervisor
                enforces host-local runtime control. Nodes execute work and
                expose capabilities outside Core.
              </p>
              <p>
                That split matters because it keeps control-plane logic separate
                from execution surfaces. It also makes the platform easier to
                reason about when new providers, hosts, or runtime types are
                added later.
              </p>
              <p>
                Put simply: Core decides, Supervisor manages, Nodes execute.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Design Rules</h2>
            <div className="space-y-3">
              {principles.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-[#0b1321] px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}