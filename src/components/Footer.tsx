import Link from "next/link";

const cols = [
  {
    title: "Product",
    links: [
      { href: "#services", label: "Platform" },
      { href: "#features", label: "Features" },
      { href: "#showcase", label: "Showcase" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
      { href: "#", label: "Careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-16 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="#" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-neon font-display text-lg font-bold">
                B
              </span>
              <span className="font-display text-xl font-semibold">billingss.com</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Premium POS, billing, and operations software for brands that intend to
              lead—not follow.
            </p>
            <p className="mt-6 text-xs text-muted/70">
              © {new Date().getFullYear()} Billingss. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/80 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            Built for performance. Designed for trust.
          </p>
          <div className="flex gap-4 text-xs text-muted">
            <span className="rounded-full border border-white/10 px-3 py-1">
              SOC2 roadmap
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              99.9% uptime SLA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
