import Image from "next/image";
import type { Project } from "@/content/projects";
import { caseH2Class } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { imageSize } from "@/lib/images";

export function Overview({ project, number }: { project: Project; number: string }) {
  const [width, height] = imageSize(project.overviewImage);
  return (
    <section
      aria-labelledby="overview-title"
      className="flex flex-col gap-8 border-b border-line px-pad pt-[clamp(48px,6vw,80px)]"
    >
      <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
        <div className="flex flex-col gap-3.5">
          <SectionLabel number={number}>Overview</SectionLabel>
          <h2 id="overview-title" className={caseH2Class}>
            What&apos;s on the site
          </h2>
        </div>
        <p className="max-w-[420px] text-base leading-[1.65] text-ink-3">{project.overviewIntro}</p>
      </div>
      <Image
        src={project.overviewImage}
        alt={`Collage of pages from the ${project.name} website`}
        width={width}
        height={height}
        sizes="(min-width: 1200px) 1200px, 100vw"
        className="bleed bleed-w block h-auto border-t border-line"
      />
    </section>
  );
}
