import type { Project } from "@/content/projects";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

export function CaseHero({ project }: { project: Project }) {
  return (
    <div className="border-b border-line px-pad py-[clamp(40px,5vw,64px)]">
      <div
        className="px-[clamp(24px,6vw,80px)] pt-[clamp(24px,6vw,80px)]"
        style={{ backgroundColor: project.brandColor }}
      >
        <BrowserFrame
          src={project.cover}
          alt={`Hero section of the ${project.name} website`}
          sizes="(min-width: 1200px) 1200px, 100vw"
          aspect="aspect-[16/8]"
          size="lg"
          shadow
          priority
        />
      </div>
    </div>
  );
}
