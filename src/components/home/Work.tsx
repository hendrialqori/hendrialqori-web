import { projects } from "@/content/projects";
import { Section, h2Class } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { CtaCard } from "./CtaCard";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <Section id="work" labelledBy="work-title" className="flex flex-col gap-14">
      <div className="flex flex-col gap-3.5">
        <SectionLabel number="02">Selected work</SectionLabel>
        <h2 id="work-title" className={h2Class}>
          Projects I&apos;ve shipped
        </h2>
      </div>
      <div className="bleed grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-px border-t border-line bg-line">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        <CtaCard />
      </div>
    </Section>
  );
}
