import { site } from "@/content/site";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button } from "@/components/ui/Button";

/** Dark contact section. The page Footer follows directly below it. */
export function Contact() {
  const { contact } = site;
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark flex flex-col gap-10 bg-ink px-pad pt-[clamp(64px,9vw,128px)] pb-10 text-white"
    >
      <SectionLabel number="04" tone="dark">
        Contact
      </SectionLabel>
      <h2
        id="contact-title"
        className="max-w-[900px] text-[clamp(36px,6vw,72px)] leading-[1.04] font-bold tracking-[-0.035em]"
      >
        {contact.heading} <span className="text-accent">{contact.highlight}</span>
      </h2>
      <div className="flex flex-wrap gap-3">
        <Button href={`mailto:${site.email}`} size="lg" tone="dark" leadingIcon="mail">
          {site.email}
        </Button>
        <Button href={site.whatsapp} size="lg" tone="dark" variant="secondary" leadingIcon="chat">
          Chat on WhatsApp
        </Button>
      </div>
    </section>
  );
}
