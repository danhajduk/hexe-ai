import { useEffect, useMemo, useState } from "react";

type SectionKey = "hero" | "idea" | "works" | "matters";

const avatarBySection: Record<SectionKey, string> = {
  hero: "/avatars/neutral.png",
  idea: "/avatars/thinking.png",
  works: "/avatars/presenting.png",
  matters: "/avatars/confident.png",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");

  useEffect(() => {
    const sectionIds: SectionKey[] = ["hero", "idea", "works", "matters"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          threshold: 0.45,
          rootMargin: "-10% 0px -25% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const avatarSrc = useMemo(() => avatarBySection[activeSection], [activeSection]);

  return (
    <div className="relative min-h-screen bg-[#07111f] text-slate-100">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Hexe AI
            </div>
            <div className="text-lg font-semibold">Control Plane Platform</div>
          </div>
        </header>

        {/* Main layout */}
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <div>

            {/* HERO */}
            <section id="hero" className="mb-24 scroll-mt-24">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Modular AI control plane for home, edge, and trusted external execution.
              </h1>

              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Core, Supervisor, and Nodes define clear execution boundaries with governance,
                telemetry, and messaging — built for real systems, not demos.
              </p>
            </section>

            {/* IDEA */}
            <section id="idea" className="mb-20 max-w-3xl scroll-mt-24">
              <h2 className="mb-6 text-2xl font-semibold">The Idea</h2>

              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <p>
                  Most home automation and AI systems are fragmented. Devices, services,
                  and intelligence layers operate independently with no shared structure,
                  no consistent governance, and no clear execution boundaries.
                </p>

                <p>
                  Hexe AI is designed as a unified control plane that brings structure to
                  that chaos — separating responsibility across distinct layers while
                  maintaining a single source of truth for decisions, permissions, and execution.
                </p>

                <p>
                  Instead of building isolated integrations, Hexe defines a system where
                  everything — from local devices to external AI services — operates under
                  a shared model of trust, capability, and control.
                </p>
              </div>
            </section>

            {/* WORKS */}
            <section id="works" className="mb-20 scroll-mt-24">
              <h2 className="mb-6 text-2xl font-semibold">How It Works</h2>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-2 text-sm text-cyan-300">Core</div>
                  <div className="mb-3 text-lg font-semibold">Control Plane</div>
                  <p className="text-sm text-slate-300">
                    Central authority for APIs, UI, governance, trust, and system-wide decision making.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-2 text-sm text-cyan-300">Supervisor</div>
                  <div className="mb-3 text-lg font-semibold">Host Runtime</div>
                  <p className="text-sm text-slate-300">
                    Local execution authority responsible for system health, resource control,
                    and lifecycle management.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-2 text-sm text-cyan-300">Nodes</div>
                  <div className="mb-3 text-lg font-semibold">External Execution</div>
                  <p className="text-sm text-slate-300">
                    Trusted external systems that declare capabilities and execute work
                    outside of the core system boundary.
                  </p>
                </div>
              </div>
            </section>

            {/* WHY IT MATTERS */}
            <section id="matters" className="max-w-3xl scroll-mt-24">
              <h2 className="mb-6 text-2xl font-semibold">Why It Matters</h2>

              <div className="space-y-4 text-slate-300">
                <p>
                  As AI becomes part of everyday systems, the challenge is no longer intelligence —
                  it is control, trust, and coordination.
                </p>

                <p>
                  Hexe AI focuses on making those systems predictable, observable, and governable —
                  turning a collection of tools into a coherent platform.
                </p>
              </div>
            </section>

          </div>

          {/* RIGHT AVATAR (sticky) */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <AvatarDisplay src={avatarSrc} activeSection={activeSection} />
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

function AvatarDisplay({
  src,
  activeSection,
}: {
  src: string;
  activeSection: SectionKey;
}) {
  return (
    <div className="relative flex justify-center lg:justify-end translate-y-8 lg:translate-y-20">

      <div
        className={`absolute rounded-full blur-[100px] transition-all duration-500 ${
          activeSection === "hero"
            ? "h-[280px] w-[280px] bg-cyan-500/20 lg:h-[340px] lg:w-[340px]"
            : activeSection === "idea"
            ? "h-[290px] w-[290px] bg-violet-500/20 lg:h-[350px] lg:w-[350px]"
            : activeSection === "works"
            ? "h-[300px] w-[300px] bg-sky-500/20 lg:h-[360px] lg:w-[360px]"
            : "h-[290px] w-[290px] bg-emerald-500/20 lg:h-[350px] lg:w-[350px]"
        }`}
      />

      <div className="relative w-[260px] h-[260px] lg:w-[320px] lg:h-[320px]">
        <img
          src={src}
          alt="Hexe AI Avatar"
          className="h-full w-full rounded-full object-cover object-[center_10%] border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all duration-500 animate-[hexe-float_6s_ease-in-out_infinite]"
        />

        <div className="pointer-events-none absolute inset-0 rounded-full border border-white/5" />
      </div>
    </div>
  );
}