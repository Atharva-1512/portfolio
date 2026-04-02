import { AboutSection } from "@/components/about-section";
import { AiSpotlight } from "@/components/ai-spotlight";
import { ContactSection } from "@/components/contact-section";
import { CustomCursor } from "@/components/custom-cursor";
import { ExperienceSection } from "@/components/experience-section";
import { FloatingNav } from "@/components/floating-nav";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <FloatingNav />
      <HeroSection />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-10 sm:px-6 lg:px-8">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AiSpotlight />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
