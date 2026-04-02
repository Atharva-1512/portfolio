"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { stats } from "@/data/portfolio";

const rotatingRoles = [
  "Backend systems that scale.",
  "AI features that feel useful.",
  "Product experiences with engineering depth."
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[92vh] w-full max-w-7xl items-center gap-10 py-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-glow backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-accent-cyan" />
            Pune-based engineer crafting premium digital experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="headline mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl"
          >
            I design <span className="text-gradient">developer-grade products</span> that look sharp,
            move fast, and think like systems.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex h-14 items-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 px-5 shadow-glow"
          >
            <div className="text-sm uppercase tracking-[0.28em] text-slate-500">Now building</div>
            <div className="relative ml-4 h-6 overflow-hidden">
              <motion.div
                animate={{ y: ["0%", "-33.3333%", "-66.6666%", "0%"] }}
                transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
                className="space-y-2"
              >
                {rotatingRoles.map((role) => (
                  <div key={role} className="h-6 text-sm text-slate-100 sm:text-base">
                    {role}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Atharva Rajendra Gade is a full stack developer and AI enthusiast who brings
            backend rigor, secure architecture, and product-level polish into every build.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Work
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact
            </a>
            <a
              href="/Atharva-Gade-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-6 py-3.5 text-sm font-semibold text-accent-cyan transition hover:border-accent-cyan/60 hover:bg-accent-cyan/15"
            >
              Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-accent-blue/30 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-48 w-48 rounded-full bg-accent-pink/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.96))] p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-slate-500">
                    Experience Layer
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">Recruiter Radar</div>
                </div>
                <div className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
                  Available for opportunities
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-neon"
                  >
                    <div className="headline text-3xl font-semibold text-white">{item.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                  <div className="text-xs uppercase tracking-[0.32em] text-slate-500">
                    Engineering Signature
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Scalable APIs", "92%"],
                      ["Security-first thinking", "95%"],
                      ["AI product integration", "88%"]
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: value }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-pink"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.32em] text-slate-500">
                    Snapshot
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      "REST API Design",
                      "Cloud Fundamentals",
                      "GenAI Workflows",
                      "Dockerized Delivery",
                      "System Security",
                      "Backend Performance"
                    ].map((chip) => (
                      <div
                        key={chip}
                        className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
                      >
                        {chip}
                      </div>
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
