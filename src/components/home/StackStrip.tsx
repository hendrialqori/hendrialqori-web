import { site } from "@/content/site";

export function StackStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-line px-pad py-[22px] font-mono text-[13px] text-muted">
      <h2 className="font-medium text-ink">Stack</h2>
      <ul className="contents">
        {site.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
