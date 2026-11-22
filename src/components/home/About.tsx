import { site } from "@/content/site";
import { h2Class } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Experience } from "./Experience";

export function About() {
  const { about } = site;
  const paragraphs = about.paragraphs.filter(Boolean);
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-px border-b border-line bg-line"
    >
      <div className="flex min-w-0 flex-col gap-5 bg-white px-pad py-[clamp(64px,8vw,112px)]">
        <SectionLabel number="03">About</SectionLabel>
        <h2 id="about-title" className={h2Class}>
          {about.heading}
        </h2>
        {paragraphs.map((p) => (
          <p key={p} className="text-base leading-[1.7] text-ink-3">
            {p}
          </p>
        ))}
      </div>
      <Experience />
    </section>
  );
}
