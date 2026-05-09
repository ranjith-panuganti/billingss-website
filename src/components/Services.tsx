"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    name: "POS Billing Systems",
    desc: "Frictionless checkout, tenders, splits, and compliance-ready receipts.",
    icon: "⚡",
  },
  {
    name: "Restaurant Billing",
    desc: "Floor plans, courses, modifiers, and kitchen sync without the chaos.",
    icon: "🍽️",
  },
  {
    name: "Entertainment Solutions",
    desc: "High-volume venues, tabs, packages, and dynamic pricing under control.",
    icon: "🎭",
  },
  {
    name: "Cloud Billing",
    desc: "Subscriptions, usage, and hybrid models with airtight audit trails.",
    icon: "☁️",
  },
  {
    name: "Inventory Management",
    desc: "Live stock, transfers, waste tracking, and predictive low-stock alerts.",
    icon: "📦",
  },
  {
    name: "QR Ordering",
    desc: "Guest-led ordering that feels native—branded, fast, and staff-friendly.",
    icon: "📱",
  },
  {
    name: "Analytics Dashboard",
    desc: "Executive-grade views: cohorts, margins, labor, and basket economics.",
    icon: "📊",
  },
  {
    name: "AI-ready integrations",
    desc: "Modular APIs and event streams built for copilots and automation agents.",
    icon: "✨",
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything revenue touches—unified."
          subtitle="A cohesive platform for how you sell, serve, stock, and strategize. No duct tape, no legacy dead-ends."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group glass-card flex flex-col rounded-2xl p-6"
            >
              <span className="text-2xl" aria-hidden>
                {s.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-electric/50 via-neon/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
