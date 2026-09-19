import Hero from "@/components/hero";
import DataSections from "@/components/data-sections";
import Features from "@/components/features";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <DataSections />
      <Features />
      <ContactSection />

      <footer className="border-t border-white/10 bg-night-950 py-8">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MetroPulse. Built with Next.js,
            TypeScript &amp; FastAPI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <a
              href="mailto:myselfxdeveloper@gmail.com"
              className="transition-colors hover:text-accent-300"
            >
              myselfxdeveloper@gmail.com
            </a>
            <a
              href="tel:+923441586424"
              className="transition-colors hover:text-accent-300"
            >
              +92 344 1586424
            </a>
            <span className="text-slate-500">Multan, Punjab, Pakistan</span>
          </div>
        </div>
      </footer>
    </main>
  );
}