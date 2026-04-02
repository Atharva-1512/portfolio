import { experienceItems } from "@/data/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="Early in career, already thinking in architecture, reliability, and user trust."
            description="The strongest signal here is not years of experience. It is the pattern of decisions: building secure workflows, shipping full-stack products, and exploring AI through practical systems instead of superficial demos."
          />
        </Reveal>

        <div className="space-y-6">
          {experienceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="absolute left-6 top-0 h-6 w-px bg-accent-cyan/60" />
                <div className="absolute left-5 top-6 h-3 w-3 rounded-full bg-accent-cyan shadow-neon" />
                <div className="pl-8">
                  <div className="text-xs uppercase tracking-[0.28em] text-accent-cyan">
                    {item.period}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    {item.description}
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
