import type { Project } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";

type Testimonial = NonNullable<Project["testimonial"]>;

export function Testimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section
      aria-label="Client testimonial"
      className="border-b border-line bg-accent px-pad py-[clamp(56px,7vw,96px)]"
    >
      <figure className="flex max-w-[860px] flex-col gap-6">
        <Icon name="quote" size={40} strokeWidth={1.6} className="text-ink" />
        <blockquote className="text-[clamp(22px,3vw,34px)] leading-[1.35] font-semibold tracking-[-0.02em]">
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
        <figcaption className="text-[15px] text-ink-2">
          <strong className="font-bold">{testimonial.name}</strong>, {testimonial.position}
        </figcaption>
      </figure>
    </section>
  );
}
