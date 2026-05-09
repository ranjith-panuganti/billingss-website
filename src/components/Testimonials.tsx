"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const quotes = [
  {
    quote:
      "We replaced three tools with Billingss. Margin visibility alone paid for the migration in weeks.",
    name: "Elena Voss",
    role: "COO, Northline Hospitality Group",
  },
  {
    quote:
      "The UI is absurdly fast. Staff training dropped from days to hours—unheard of for us.",
    name: "Marcus Chen",
    role: "Director of Operations, Luma Cafés",
  },
  {
    quote:
      "Investors asked how we modernized our stack. We pointed at our dashboards and smiled.",
    name: "Priya Nair",
    role: "Founder, Arcadia Entertainment",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Teams that refuse to settle for ‘good enough’."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card relative flex flex-col rounded-2xl p-8"
            >
              <div className="mb-6 font-display text-4xl leading-none text-electric/40">
                “
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-white/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="mt-1 text-sm text-muted">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
