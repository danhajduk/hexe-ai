import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="mb-12 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
      
      {/* LEFT: Logo + Title */}
      <div className="flex items-center gap-2">
        <img
          src="/favicon.svg"
          alt="Hexe AI"
          className="h-12 w-12 rounded-md drop-shadow-[0_0_8px_rgba(56,189,248,0.35)]"
        />

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Hexe AI
          </div>
          <div className="text-lg font-semibold text-slate-200">
            Control Plane Platform
          </div>
        </div>
      </div>

      {/* RIGHT: Navigation */}
      <nav className="hidden md:flex gap-6 text-sm text-slate-300">
        <Link to="/" className="transition-colors duration-200 hover:text-cyan-300">
          Concept
        </Link>
        <Link to="/system" className="transition-colors duration-200 hover:text-cyan-300">
          System
        </Link>
        <Link to="/status" className="transition-colors duration-200 hover:text-cyan-300">
          Status
        </Link>
        <Link to="/roadmap" className="transition-colors duration-200 hover:text-cyan-300">
          Roadmap
        </Link>
      </nav>
    </header>
  );
}