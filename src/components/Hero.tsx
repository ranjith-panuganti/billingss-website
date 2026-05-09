"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.45, 0, 0.55, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 pb-20 sm:pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-neon/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-mint/10 blur-[80px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Now onboarding multi-branch partners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Billing that moves{" "}
            <span className="text-gradient">at the speed</span> of your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl"
          >
            Billingss delivers elite POS, cloud sync, and intelligent operations for
            restaurants, entertainment, and retail—built for scale, security, and the
            AI era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-electric via-neon to-mint px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-electric/30 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
              Book a live demo
            </Link>
            <Link
              href="#showcase"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              View product tour
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 text-xs text-muted/80 sm:text-sm"
          >
            Trusted by operators who demand sub-second checkout, real-time sync, and
            crystal-clear reporting.
          </motion.p>
        </div>

        <motion.div
          variants={float}
          animate="animate"
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl p-1 ring-1 ring-white/10 sm:rounded-3xl">
            <div className="relative overflow-hidden rounded-[14px] bg-surface sm:rounded-[22px]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-elevated/80 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="ml-2 text-xs text-muted">dashboard.billingss.com</span>
              </div>
              <div className="grid gap-0 md:grid-cols-[1fr_280px]">
                <div className="border-b border-white/5 p-6 md:border-b-0 md:border-r">
                  <div className="mb-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">
                        Today&apos;s revenue
                      </p>
                      <p className="mt-1 font-display text-3xl font-bold text-white">
                        $48,290
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                      +18.4%
                    </span>
                  </div>
                  <div className="flex h-36 items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 75, 100, 85, 92].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + i * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-electric/40 to-neon/80"
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Live orders
                  </p>
                  <ul className="mt-4 space-y-3">
                    {["Table 12 · QR", "Bar · Walk-in", "VIP Lounge"].map((row) => (
                      <li
                        key={row}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5 text-sm"
                      >
                        <span className="text-white/90">{row}</span>
                        <span className="text-xs text-mint">Syncing</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
