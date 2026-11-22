import type { ReactNode } from "react";

/** Centered 1200px column with grey side lines. Every section sits inside it. */
export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="px-[clamp(12px,2vw,24px)]">
      <div className="mx-auto max-w-frame border-x border-line">{children}</div>
    </div>
  );
}
