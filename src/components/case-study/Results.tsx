import type { Project } from "@/content/projects";
import { SplitSection } from "./SplitSection";

type Results = NonNullable<Project["results"]>;

export function Results({ results, number }: { results: Results; number: string }) {
  return (
    <SplitSection id="results" number={number} label="Results" title="What changed">
      {results.metrics.length > 0 && (
        <dl className="flex flex-wrap gap-px border border-line bg-line">
          {results.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-[1_1_160px] flex-col-reverse gap-1.5 bg-white p-6"
            >
              <dt className="text-sm text-muted">{m.label}</dt>
              <dd className="text-4xl font-bold tracking-[-0.03em]">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <p className="text-lg leading-[1.7] text-ink-2">{results.text}</p>
    </SplitSection>
  );
}
