import type { ReactNode } from "react";

/** Mono uppercase label with an accent number chip, e.g. [01] SERVICES. */
export function SectionLabel({
  number,
  children,
  tone = "light",
  as: Tag = "p",
}: {
  number?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  as?: "p" | "span";
}) {
  return (
    <Tag
      className={`font-mono text-xs tracking-[0.04em] uppercase ${tone === "dark" ? "text-dark-muted" : "text-muted"}`}
    >
      {number && <span className="mr-1.5 bg-accent px-1.5 py-0.5 text-ink">{number}</span>}
      {children}
    </Tag>
  );
}
