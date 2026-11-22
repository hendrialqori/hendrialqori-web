import type { Project } from "@/content/projects";
import { SplitSection } from "./SplitSection";

const two = (n: number) => String(n).padStart(2, "0");

export function Solutions({ project, number }: { project: Project; number: string }) {
  return (
    <SplitSection
      id="solution"
      number={number}
      label="Solution"
      title="Key decisions"
      padded={false}
    >
      <ol>
        {project.solutions.map((s, i) => (
          <li key={s.title} className="flex gap-6 border-line px-pad py-8 not-last:border-b">
            <span className="inline-flex size-10 shrink-0 items-center justify-center bg-ink font-mono text-[13px] text-accent">
              {two(i + 1)}
            </span>
            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="text-xl leading-[1.2] font-bold tracking-[-0.01em]">{s.title}</h3>
              <p className="text-base leading-[1.65] text-ink-3">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </SplitSection>
  );
}
