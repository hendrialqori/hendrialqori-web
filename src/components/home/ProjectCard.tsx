import type { Project } from "@/content/projects";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { TextLink } from "@/components/ui/Button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-[22px] bg-white px-pad pt-8 pb-10">
      <div className="relative px-9 pt-9" style={{ backgroundColor: project.brandColor }}>
        <span className="absolute top-3.5 left-4 bg-accent px-2 py-[3px] font-mono text-xs font-medium text-ink">
          {project.number}
        </span>
        <BrowserFrame
          src={project.cover}
          alt={`Hero section of the ${project.name} website`}
          sizes="(min-width: 1200px) 400px, (min-width: 768px) 50vw, 100vw"
          aspect="aspect-video"
        />
      </div>
      <div className="flex grow flex-col gap-3">
        <p className="font-mono text-xs text-muted">{project.category}</p>
        <h3 className="text-[26px] leading-[1.2] font-bold tracking-[-0.02em]">{project.name}</h3>
        <p className="text-base leading-[1.65] text-ink-3">{project.cardDescription}</p>
        <div className="mt-auto">
          <TextLink href={`/projects/${project.slug}`} icon="arrowUpRight">
            View project<span className="sr-only">: {project.name}</span>
          </TextLink>
        </div>
      </div>
    </article>
  );
}
