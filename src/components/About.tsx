"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    title: "Cloud-native core",
    body: "Elastic infrastructure, resilient sync, and zero-drama updates across every location.",
  },
  {
    title: "Automation first",
    body: "From tax rules to reconciliation, we remove repetitive work so teams stay on the floor.",
  },
  {
    title: "Built to scale",
    body: "Single storefront to global franchises—same platform, same clarity, same speed.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Billingss"
          title="Software engineered for real-world operations."
          subtitle="Billingss is a modern technology company focused on POS billing, restaurant and entertainment operations, billing automation, and a roadmap of SaaS products that compound value over time."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card group rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-electric/10"
            >
              <div className="mb-4 h-px w-12 bg-gradient-to-r from-electric to-neon" />
              <h3 className="font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card mt-12 rounded-2xl p-8 sm:p-10 lg:p-12"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            We combine{" "}
            <span className="text-gradient font-medium">innovation</span>,{" "}
            <span className="text-white">smart management</span>, and{" "}
            <span className="text-mint/90">intelligent automation</span> so leadership
            sees the full picture—instantly. Your data stays protected, your workflows
            stay fast, and your brand stays elevated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
