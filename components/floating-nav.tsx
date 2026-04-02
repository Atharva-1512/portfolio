"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Story" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Journey" },
  { href: "#ai", label: "AI" },
  { href: "#contact", label: "Contact" }
];

export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (value) => setScrolled(value > 20));
  }, [scrollY]);

  return (
    <div className="sticky top-4 z-50 mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.nav
        className={`mx-auto flex w-full items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl sm:px-5 ${
          scrolled
            ? "border-white/10 bg-slate-950/70 shadow-glow"
            : "border-white/10 bg-slate-950/40"
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#top" className="flex items-center gap-3 text-sm font-medium text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent-cyan">
            <Sparkles size={18} />
          </span>
          <span className="hidden sm:inline">Atharva Gade</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-4 right-4 top-[72px] rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-glow backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
