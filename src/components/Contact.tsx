"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const social = [
  { label: "LinkedIn", href: "#", handle: "linkedin.com/company/billingss" },
  { label: "X", href: "#", handle: "@billingss" },
  { label: "Instagram", href: "#", handle: "@billingss" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s architect your next chapter."
          subtitle="Share your footprint—we’ll respond with a tailored walkthrough and migration outline."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                Support email
              </p>
              <a
                href="mailto:billingss.support@gmail.com"
                className="mt-2 block break-all font-display text-xl font-semibold text-gradient hover:opacity-90 sm:text-2xl"
              >
                billingss.support@gmail.com
              </a>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted">
                Mobile
              </p>
              <a
                href="tel:+919989336999"
                className="mt-2 block font-display text-xl font-semibold text-white hover:text-mint sm:text-2xl"
              >
                +91 99893 36999
              </a>
              <p className="mt-4 text-sm text-muted">
                Sales, support, and partnerships—reach us directly by email or phone.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                Social
              </p>
              <ul className="mt-4 space-y-3">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-electric/40"
                    >
                      <span className="text-sm font-medium text-white">{s.label}</span>
                      <span className="text-xs text-muted group-hover:text-mint">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  Name
                </span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-electric/40 transition placeholder:text-muted/50 focus:border-electric/50 focus:ring-2"
                  placeholder="Jordan Lee"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  Work email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-electric/40 transition placeholder:text-muted/50 focus:border-electric/50 focus:ring-2"
                  placeholder="you@company.com"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  Company
                </span>
                <input
                  name="company"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-electric/40 transition placeholder:text-muted/50 focus:border-electric/50 focus:ring-2"
                  placeholder="Billingss Partner Inc."
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  How can we help?
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-electric/40 transition placeholder:text-muted/50 focus:border-electric/50 focus:ring-2"
                  placeholder="Locations, systems in place, timeline…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-gradient-to-r from-electric to-neon py-3.5 text-sm font-semibold text-white shadow-lg shadow-electric/25 transition hover:opacity-95"
            >
              {sent ? "Thanks — we’ll be in touch." : "Request a callback"}
            </button>
            <p className="mt-4 text-center text-xs text-muted">
              This demo form does not send email yet—wire your API or form backend when
              ready.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
