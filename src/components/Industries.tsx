"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const industries = [
  {
    title: "Restaurants",
    copy: "Full-service to fast casual—menus, coursing, and revenue in one rhythm.",
    tag: "FSR / QSR",
  },
  {
    title: "Cafes",
    copy: "Peak-hour throughput, loyalty, and handcrafted modifiers without bottlenecks.",
    tag: "Coffee & bakery",
  },
  {
    title: "Entertainment",
    copy: "Events, packages, and concessions with guardrails for complex pricing.",
    tag: "Venues",
  },
  {
    title: "Retail stores",
    copy: "Omnichannel-ready POS with inventory truth and staff accountability.",
    tag: "Brick & click",
  },
  {
    title: "Multi-branch",
    copy: "Central policies, localized execution, and consolidated reporting.",
    tag: "HQ + edge",
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry solutions"
          title="Purpose-built playbooks for how you operate."
          subtitle="Vertical depth without vertical lock-in—swap modules as you grow."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.article
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 transition-all hover:border-electric/40 hover:shadow-lg hover:shadow-electric/10"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-neon/20 blur-3xl transition-opacity group-hover:opacity-100" />
              <span className="relative inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-mint">
                {ind.tag}
              </span>
              <h3 className="relative mt-4 font-display text-2xl font-bold text-white">
                {ind.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {ind.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
