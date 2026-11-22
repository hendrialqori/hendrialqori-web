import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = site;
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="hero-grid flex flex-col items-center gap-8 border-b border-line px-pad pt-[clamp(72px,9vw,128px)] pb-[clamp(64px,8vw,112px)]"
    >
      <Image
        src={site.avatar}
        alt={`Portrait of ${site.name}`}
        width={88}
        height={88}
        priority
        className="block size-[88px] border-[3px] border-white object-cover shadow-[0_0_0_1px_#0A0A0A,0_0_0_6px_#B9FF66]"
        style={{ borderRadius: "50%" }}
      />
      <p className="inline-flex items-center gap-2.5 border border-line bg-white px-3.5 py-2 font-mono text-xs text-ink-3">
        <span
          aria-hidden="true"
          className="size-2 bg-status shadow-[0_0_0_4px_var(--color-accent)]"
        />
        {hero.badge}
      </p>
      <h1
        id="hero-title"
        className="max-w-[820px] text-center text-[clamp(40px,6vw,80px)] leading-[1.04] font-bold tracking-[-0.035em]"
      >
        {/* Positioned so its descenders paint above the highlight on the next line. */}
        <span className="relative">{hero.headline}</span>{" "}
        <span className="bg-accent px-[0.12em] whitespace-nowrap">{hero.highlight}</span>
      </h1>
      <p className="max-w-[560px] text-center text-[19px] leading-[1.6] text-ink-3">
        {hero.description}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="#contact" trailingIcon="arrowRight">
          Start a project
        </Button>
        <Button href="#work" variant="secondary">
          See my work
        </Button>
      </div>
    </section>
  );
}
