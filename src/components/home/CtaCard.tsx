import Link from "next/link";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { buttonClass } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Full-row card at the end of the work grid. The whole card is one link. */
export function CtaCard() {
  return (
    <Link
      href="#contact"
      className="group col-span-full flex flex-col justify-between gap-8 bg-surface-2 px-pad py-10 text-ink no-underline"
    >
      <SectionLabel number="04" as="span">
        Your project
      </SectionLabel>
      <span className="max-w-140 text-[clamp(30px,4vw,48px)] leading-[1.08] font-bold tracking-[-0.03em]">
        Your project could be next.
      </span>
      <span className={`${buttonClass({})} self-start group-hover:bg-[#a8f54d]`}>
        Start a project
        <Icon name="arrowRight" size={16} />
      </span>
    </Link>
  );
}
