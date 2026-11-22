import type { Project } from "@/content/projects";
import { SplitSection } from "./SplitSection";

export function Goals({ project, number }: { project: Project; number: string }) {
  return (
    <SplitSection
      id="goals"
      number={number}
      label="Goals"
      title="What we set out to do"
      padded={false}
    >
      <ol>
        {project.goals.map((goal, i) => (
          <li
            key={goal}
            className="flex items-baseline gap-5 border-line px-pad py-7 not-last:border-b"
          >
            <span className="font-mono text-[13px] text-muted">G{i + 1}</span>
            <span className="text-lg leading-normal font-semibold">{goal}</span>
          </li>
        ))}
      </ol>
    </SplitSection>
  );
}
