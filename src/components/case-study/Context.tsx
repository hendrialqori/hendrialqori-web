import type { Project } from "@/content/projects";
import { SplitSection } from "./SplitSection";

export function Context({ project, number }: { project: Project; number: string }) {
  return (
    <SplitSection id="context" number={number} label="Context" title="The client & the problem">
      <p className="text-lg leading-[1.7] text-ink-2">{project.context}</p>
      <div className="flex flex-col gap-2 bg-surface-2 px-7 py-6">
        <h3 className="font-mono text-xs font-normal text-muted">BEFORE THIS PROJECT</h3>
        <p className="text-base leading-[1.65] text-ink-2">{project.problem}</p>
      </div>
    </SplitSection>
  );
}
