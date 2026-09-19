import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT = {
  email: "myselfxdeveloper@gmail.com",
  phone: "+92 344 1586424",
  phoneHref: "tel:+923441586424",
  whatsappHref: "https://wa.me/923441586424",
  location: "Multan, Punjab, Pakistan",
  address: "Multan, Punjab, Pakistan",
};

const contactItems = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: CONTACT.phone,
    href: CONTACT.whatsappHref,
    icon: Phone,
  },
  {
    label: "Location",
    value: CONTACT.location,
    href: "https://maps.google.com/?q=Multan,Punjab,Pakistan",
    icon: MapPin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="container-page py-16 sm:py-20">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-night-950/70 p-8 sm:p-12">
        <div
          className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-brand-600/20 blur-[90px]"
          aria-hidden="true"
        />
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
          Get in touch
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Build your own data platform
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Need a data platform, SaaS product or a full-stack dashboard like
          MetroPulse? Let&apos;s talk about your project.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-accent-500/50"
            >
              <item.icon className="h-6 w-6 text-accent-400" />
              <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold break-all text-white group-hover:text-accent-300">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-500">{CONTACT.address}</p>
      </div>
    </section>
  );
}