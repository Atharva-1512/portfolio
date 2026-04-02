"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Stack"
            title="A stack shaped around systems, speed, and shipping."
            description="Instead of treating skills like a resume checklist, this section frames the toolset as a product engine: languages for core logic, frameworks for delivery, infrastructure for scale, and AI tooling for differentiated experiences."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{group.title}</div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 shadow-glow"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
