import { site } from "@/content/site";
import { TextLink } from "@/components/ui/Button";

/** Right cell of the About grid. The cell itself has no horizontal padding so row lines touch the edges. */
export function Experience() {
  return (
    <div className="flex min-w-0 flex-col bg-white py-[clamp(64px,8vw,112px)]">
      <h3 className="mb-4 px-pad font-mono text-xs font-normal tracking-[0.04em] text-muted">
        EXPERIENCE
      </h3>
      <ul>
        {site.experience.map((e) => (
          <li
            key={`${e.company}-${e.period}`}
            className="flex flex-wrap justify-between gap-x-6 gap-y-1.5 border-t border-line px-pad py-[22px] last:border-b"
          >
            <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-1">
              <span className="text-[17px] font-bold">{e.role}</span>
              <span className="text-[15px] text-ink-3">{e.company}</span>
            </div>
            <span className="font-mono text-[13px] text-muted">{e.period}</span>
          </li>
        ))}
      </ul>
      <TextLink href={site.cvUrl} className="mx-(--pad) mt-4 self-start">
        Download full CV (PDF)
      </TextLink>
    </div>
  );
}
