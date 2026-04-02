import { storyMoments } from "@/data/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Story"
            title="I care about what happens behind the interface, and how it feels in front of it."
            description="My strongest work sits at the intersection of engineering depth and product clarity. I like systems that are reliable under pressure, interfaces that earn trust quickly, and AI features that solve real workflow problems."
          />
        </Reveal>

        <div className="space-y-5">
          {storyMoments.map((moment, index) => (
            <Reveal key={moment.title} delay={index * 0.08}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-pink" />
                <div className="pl-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-accent-cyan">
                    {moment.year}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    {moment.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
