import type { ReactNode } from "react";

/** Homepage section: bottom border, horizontal pad, top padding. Grids inside go full-bleed. */
export function Section({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id?: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-b border-line px-pad pt-[clamp(64px,8vw,112px)] ${className}`}
    >
      {children}
    </section>
  );
}

export const h2Class = "text-[clamp(30px,4vw,46px)] leading-[1.1] font-bold tracking-[-0.03em]";
export const caseH2Class =
  "text-[clamp(26px,3vw,36px)] leading-[1.15] font-bold tracking-[-0.03em]";
