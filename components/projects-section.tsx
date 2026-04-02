"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" className="overflow-visible">
      <Reveal>
        <SectionHeading
          eyebrow="Case Studies"
          title="Projects framed like products, not placeholders."
          description="Each project is presented around the recruiter questions that matter most: what problem was being solved, how the system was structured, what technical choices were involved, and why the outcome signals engineering maturity."
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-6 shadow-glow lg:p-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} />
              <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(5,8,22,0.9),rgba(5,8,22,0.98))]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="space-y-5">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-accent-cyan">
                      {project.category}
                    </div>
                    <h3 className="headline mt-3 text-3xl font-semibold text-white sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{project.highlight}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Problem</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.problem}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Solution</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.solution}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Impact</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div className="text-sm text-slate-400">
                  This case study communicates engineering judgment, not just feature count.
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                  Premium build signal
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
