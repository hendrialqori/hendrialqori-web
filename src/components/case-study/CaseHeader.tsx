import type { Project } from "@/content/projects";
import { InfoStrip } from "./InfoStrip";

export function CaseHeader({ project }: { project: Project }) {
  return (
    <section
      aria-labelledby="case-title"
      className="flex flex-col gap-7 px-pad pt-[clamp(56px,7vw,96px)]"
    >
      <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.04em] text-muted">
        <span className="bg-accent px-1.5 py-0.5 text-ink">CASE STUDY</span>
        {project.category}
      </p>
      <h1
        id="case-title"
        className="max-w-[960px] text-[clamp(44px,7vw,88px)] leading-none font-bold tracking-[-0.04em]"
      >
        {project.name}
      </h1>
      <p className="max-w-[720px] text-[clamp(18px,2vw,22px)] leading-[1.55] text-ink-3">
        {project.summary}
      </p>
      <InfoStrip project={project} />
    </section>
  );
}
