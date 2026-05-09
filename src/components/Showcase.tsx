"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const panels = [
  {
    label: "Command center",
    accent: "from-electric to-blue-600",
    rows: ["Net sales", "Labor %", "Covers", "Avg check"],
  },
  {
    label: "Floor intelligence",
    accent: "from-neon to-fuchsia-600",
    rows: ["Table turns", "Wait times", "Upsell rate", "Voids"],
  },
  {
    label: "Inventory pulse",
    accent: "from-mint to-cyan-600",
    rows: ["SKUs low", "Transfers", "Shrink", "Margin"],
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Interfaces your team will actually enjoy."
          subtitle="Precision layouts, legible density, and motion that guides attention—never distracts."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {panels.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass-card overflow-hidden rounded-2xl">
                <div
                  className={`h-1.5 bg-gradient-to-r ${p.accent}`}
                  aria-hidden
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {p.label}
                  </p>
                  <div className="mt-6 space-y-3">
                    {p.rows.map((row, j) => (
                      <div
                        key={row}
                        className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2.5"
                      >
                        <span className="text-sm text-white/85">{row}</span>
                        <motion.span
                          className="font-mono text-xs text-mint"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.1 }}
                        >
                          Live
                        </motion.span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2">
                    <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-white/10 to-white/0" />
                    <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-white/8 to-white/0" />
                    <div className="h-16 w-20 rounded-lg bg-gradient-to-br from-white/10 to-white/0" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative mt-12 overflow-hidden rounded-3xl p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.12),transparent_50%)]" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Designed like a consumer product.{" "}
                <span className="text-gradient">Built for enterprise reality.</span>
              </h3>
              <p className="mt-4 text-muted">
                Every screen is obsessively tuned for clarity under pressure—Friday
                night rush, month-end close, board prep Tuesday.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-elevated shadow-2xl">
              <div className="absolute inset-0 flex">
                <div className="w-1/4 border-r border-white/5 bg-black/40 p-3">
                  <div className="h-2 w-12 rounded bg-white/10" />
                  <div className="mt-4 space-y-2">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="h-8 rounded bg-white/5" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex gap-2">
                    <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-electric/30 to-neon/20" />
                    <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-neon/25 to-mint/15" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div key={n} className="h-16 rounded-lg bg-white/5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
