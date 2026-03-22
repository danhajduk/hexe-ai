import SiteHeader from "../components/SiteHeader";

const statusItems = [
  "Core → Supervisor → Nodes architecture is active",
  "Node onboarding and trust activation are implemented",
  "Capability declaration and governance flows are live",
  "MQTT uses the hexe/... namespace",
  "Supervisor health and admission visibility exist",
  "AI Node provider and pricing workflows are active",
];

const subsystemCards = [
  {
    title: "Core",
    text: "APIs, UI, scheduler, governance, MQTT authority, and trusted-node coordination are in place.",
  },
  {
    title: "Supervisor",
    text: "Host health, resource visibility, runtime summaries, and workload-admission context are implemented.",
  },
  {
    title: "Nodes",
    text: "Onboarding, trust activation, capability declaration, governance issuance, and telemetry reporting are active.",
  },
  {
    title: "MQTT",
    text: "Core-owned topic policy, notification flows, bootstrap publishing, and reserved families are established.",
  },
  {
    title: "AI Node",
    text: "Provider discovery, model classification, pricing workflows, local control API, and readiness gates are documented and active.",
  },
  {
    title: "Notifications",
    text: "Internal popup/event/state notifications plus bridge-owned external delivery are in place.",
  },
];

export default function Status() {
  return (
    <div className="relative min-h-screen bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <SiteHeader />
    
        <section className="mb-16">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            What is implemented today.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            This is the current state of the platform as it exists now — not
            wishlist fluff, not future promises, the actual implemented surface
            and active platform direction.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Platform Snapshot</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {statusItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Subsystem Surface</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {subsystemCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}