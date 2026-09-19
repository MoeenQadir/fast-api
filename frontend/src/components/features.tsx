import { Activity, Braces, Moon, Rocket } from "lucide-react";

const FEATURES = [
  {
    icon: Activity,
    title: "Real-time data feeds",
    description:
      "Live population and resident records rendered directly from a REST API, with a graceful offline demo fallback.",
  },
  {
    icon: Braces,
    title: "REST-first architecture",
    description:
      "A type-safe Next.js frontend talking to a FastAPI service, ready to be extended with auth, pagination and more.",
  },
  {
    icon: Moon,
    title: "Modern dark UI",
    description:
      "A polished, accessible dark interface built with Tailwind CSS and a violet-fuchsia brand palette.",
  },
  {
    icon: Rocket,
    title: "Vercel-ready deploy",
    description:
      "Zero-configuration static deploy on Vercel — build once, ship instantly to a global edge network.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-white/10 bg-night-950/60 py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-300">
            <Activity size={14} />
            Why MetroPulse
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for modern urban data
          </h2>
          <p className="mt-2 text-slate-400">
            Everything you need to explore, visualize and manage city-level data
            in one clean, real-time dashboard.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent-500/50"
            >
              <feature.icon className="h-7 w-7 text-accent-400" />
              <h3 className="mt-4 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}