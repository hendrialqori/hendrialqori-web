import type { Project } from "@/content/projects";
import { TextLink } from "@/components/ui/Button";

// Flex-wrap (not grid) so a short last row stretches instead of leaving an empty grey cell.
const cell = "flex min-w-0 flex-[1_1_170px] flex-col gap-1.5 bg-white px-pad py-6";

export function InfoStrip({ project }: { project: Project }) {
  const items = [
    { label: "Client", value: project.client },
    { label: "Type", value: project.type },
    { label: "Year", value: project.year },
    ...(project.duration ? [{ label: "Duration", value: project.duration }] : []),
  ];
  return (
    <dl className="bleed mt-3 flex flex-wrap gap-px border-y border-line bg-line">
      {items.map((i) => (
        <div key={i.label} className={cell}>
          <dt className="text-xs text-muted">{i.label}</dt>
          <dd className="text-base font-semibold">{i.value}</dd>
        </div>
      ))}
      <div className={`${cell} grow-[2] basis-[220px] justify-center [overflow-wrap:anywhere]`}>
        <dt className="sr-only">Live site</dt>
        <dd>
          <TextLink href={project.url} icon="arrowUpRight" className="text-base">
            {project.urlLabel}
          </TextLink>
        </dd>
      </div>
    </dl>
  );
}
