import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

/** Dark closing CTA. The page Footer follows directly below it. */
export function CaseCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="on-dark flex flex-wrap items-center justify-between gap-8 bg-ink px-pad pt-[clamp(56px,7vw,96px)] pb-8 text-white"
    >
      <h2
        id="cta-title"
        className="max-w-160 text-[clamp(30px,4vw,48px)] leading-[1.08] font-bold tracking-[-0.03em]"
      >
        Need a website like this? <span className="text-accent">Let&apos;s talk.</span>
      </h2>
      <div className="flex flex-wrap gap-3">
        <Button href={`mailto:${site.email}`} size="lg" tone="dark">
          Email me
        </Button>
        <Button href={site.whatsapp} size="lg" tone="dark" variant="secondary">
          Chat on WhatsApp
        </Button>
      </div>
    </section>
  );
}
