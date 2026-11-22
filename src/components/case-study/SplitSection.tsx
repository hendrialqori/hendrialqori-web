import type { ReactNode } from "react";
import { caseH2Class } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";

const cellPad = "px-pad py-[clamp(48px,6vw,80px)]";

/**
 * Two cells separated by the 1px-gap trick. When they wrap on mobile the gap
 * becomes a horizontal line automatically.
 */
export function SplitSection({
  id,
  number,
  label,
  title,
  padded = true,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  /** false when the body draws its own full-width rows. */
  padded?: boolean;
  children: ReactNode;
}) {
  const titleId = `${id}-title`;
  return (
    <section
      aria-labelledby={titleId}
      className="flex flex-wrap gap-px border-b border-line bg-line"
    >
      <div className={`flex min-w-0 flex-[1_1_300px] flex-col gap-3.5 bg-white ${cellPad}`}>
        <SectionLabel number={number}>{label}</SectionLabel>
        <h2 id={titleId} className={caseH2Class}>
          {title}
        </h2>
      </div>
      <div
        className={`flex min-w-0 flex-[2_1_520px] flex-col bg-white ${padded ? `gap-6 ${cellPad}` : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
