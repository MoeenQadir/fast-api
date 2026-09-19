import { Building2, MapPin, TrendingUp, Users } from "lucide-react";

const stats = [
  { label: "Connected Cities", value: "120+", icon: Building2 },
  { label: "Tracked Residents", value: "48K", icon: Users },
  { label: "Data Points/Day", value: "15K", icon: TrendingUp },
  { label: "Regions Covered", value: "25", icon: MapPin },
];

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent-500/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-300">
          City Data Platform
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
          One dashboard for{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            cities &amp; people
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          MetroPulse is a modern urban data platform that keeps cities,
          populations and residents organized in one clean, real-time
          dashboard — powered by Next.js and FastAPI.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#cities"
            className="rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-600/30 transition-transform hover:scale-105"
          >
            Explore cities &amp; residents
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-accent-500/50 hover:text-accent-300"
          >
            Contact the team
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-accent-500/40"
            >
              <stat.icon className="mx-auto h-6 w-6 text-accent-400" />
              <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}