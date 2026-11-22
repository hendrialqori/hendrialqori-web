import { site } from "@/content/site";
import { Section, h2Class } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Icon, type IconName } from "@/components/ui/Icon";

export function Services() {
  const { services } = site;
  return (
    <Section id="services" labelledBy="services-title" className="flex flex-col gap-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[620px] flex-col gap-3.5">
          <SectionLabel number="01">Services</SectionLabel>
          <h2 id="services-title" className={h2Class}>
            What I can build for you
          </h2>
        </div>
        <p className="max-w-[380px] text-base leading-[1.6] text-ink-3">{services.intro}</p>
      </div>
      <ul className="bleed grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-px border-t border-line bg-line">
        {services.items.map((s) => (
          <li key={s.title} className="flex flex-col gap-4 bg-white px-pad py-10">
            <Icon name={s.icon as IconName} size={28} strokeWidth={1.6} className="text-ink" />
            <h3 className="text-[21px] leading-[1.2] font-bold tracking-[-0.01em]">{s.title}</h3>
            <p className="text-[15px] leading-[1.6] text-ink-3">{s.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
