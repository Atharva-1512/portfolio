"use client";

import { motion } from "framer-motion";
import { BrainCircuit, MessageSquareText, ScanSearch, Waves } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const signals = [
  {
    icon: MessageSquareText,
    title: "Adaptive interview flow",
    description: "A conversation UI that can branch by answer quality, topic, or target role."
  },
  {
    icon: ScanSearch,
    title: "Embeddings-powered recall",
    description: "Extend the system with retrieval for deeper personalization and context grounding."
  },
  {
    icon: BrainCircuit,
    title: "LLM orchestration",
    description: "Prompted response generation shaped around structure, clarity, and coaching value."
  }
];

export function AiSpotlight() {
  return (
    <SectionShell id="ai">
      <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
        <Reveal>
          <SectionHeading
            eyebrow="AI Feature"
            title="The AI Interview Assistant is presented like a real product surface."
            description="This section intentionally feels different from the rest of the portfolio. It turns an AI project into an experience preview, reinforcing that the work is about product design, orchestration, and usability, not just model calls."
          />
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.18),transparent_32%)]" />
            <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Simulation Panel
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">Interview Session</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
                    <Waves size={14} />
                    Live response scoring
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300">
                    <span className="font-medium text-white">Interviewer:</span> Design a backend
                    architecture for a high-volume interview platform with AI-generated feedback.
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="ml-auto max-w-[88%] rounded-2xl border border-accent-blue/20 bg-accent-blue/10 p-4 text-sm leading-7 text-slate-100"
                  >
                    I would separate session orchestration, evaluation pipelines, and retrieval
                    services to keep latency predictable while allowing model-driven feedback to
                    evolve independently.
                  </motion.div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Depth", "91%"],
                    ["Clarity", "94%"],
                    ["System Design", "89%"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</div>
                      <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {signals.map((signal, index) => {
                  const Icon = signal.icon;

                  return (
                    <motion.div
                      key={signal.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.12 }}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-accent-cyan">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-white">{signal.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{signal.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
