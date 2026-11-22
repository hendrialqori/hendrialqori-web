import type { Project } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";
import { SplitSection } from "./SplitSection";

export function Role({ project, number }: { project: Project; number: string }) {
  return (
    <SplitSection id="role" number={number} label="My role" title="What I handled">
      <p className="text-lg leading-[1.7] text-ink-2">{project.role}</p>
      <ul aria-label="Scope" className="flex flex-wrap gap-px border border-line bg-line">
        {project.scope.map((item) => (
          <li key={item} className="flex flex-[1_1_150px] items-center gap-2.5 bg-white p-5">
            <span className="inline-flex size-[22px] shrink-0 items-center justify-center border border-ink bg-accent text-ink">
              <Icon name="check" size={12} strokeWidth={3} />
            </span>
            <span className="text-[15px] font-semibold">{item}</span>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
