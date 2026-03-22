import SiteHeader from "../components/SiteHeader";

const roadmap = [
  {
    phase: "Near Term",
    title: "AI Node Hardening",
    bullets: [
      "Supervisor-aware startup and registration flow",
      "Capability redeclaration only when task surface changes",
      "Budget scheduling and enforcement cleanup",
      "Sharper provider/runtime ownership boundaries",
    ],
  },
  {
    phase: "Next",
    title: "Execution Expansion",
    bullets: [
      "Broader task execution routing",
      "Stronger authorization and service resolution",
      "Improved observability and diagnostics",
      "Cleaner operator-facing runtime visibility",
    ],
  },
  {
    phase: "Later",
    title: "Platform Growth",
    bullets: [
      "Additional node types beyond AI Node",
      "Richer supervisor ownership of host-local execution",
      "Expanded provider coverage and smarter routing",
      "Public-facing ecosystem and extension showcase",
    ],
  },
];

export default function Roadmap() {
  return (
    <div className="relative min-h-screen bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <SiteHeader />

        <section className="mb-16">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Where the platform is going next.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            The roadmap is focused on strengthening execution boundaries,
            expanding node capability, and turning the current architecture into
            a more complete operational platform.
          </p>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          {roadmap.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-2 text-sm text-cyan-300">{item.phase}</div>
              <h2 className="mb-4 text-2xl font-semibold">{item.title}</h2>

              <div className="space-y-3">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-xl border border-white/10 bg-[#0b1321] px-4 py-3 text-sm text-slate-200"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}