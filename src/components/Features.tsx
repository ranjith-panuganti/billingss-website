"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const features = [
  "Fast billing & sub-second tender",
  "Real-time analytics & cohort views",
  "Multi-device: fixed POS, handheld, kiosk",
  "Cloud sync with offline resilience",
  "Smart reports & scheduled exports",
  "Role-based user management",
  "Enterprise-grade security posture",
  "AI-powered roadmap & integrations",
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform features"
          title="The details investors and operators ask about—handled."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -2 }}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-sm transition-colors hover:border-neon/30 hover:bg-white/[0.06]"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric to-neon text-xs font-bold text-white">
                ✓
              </span>
              <span className="text-sm font-medium leading-snug text-white/90">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
