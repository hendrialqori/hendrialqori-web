import { site } from "@/content/site";
import { SmartLink } from "@/components/ui/SmartLink";

const links = [
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.github, label: "GitHub" },
  { href: site.cvUrl, label: "Download CV" },
];

/** Full-bleed dark bar that closes every page, right under the dark CTA section. */
export function Footer() {
  return (
    <footer className="on-dark flex flex-wrap items-center justify-between gap-4 border-t border-dark-line bg-ink px-pad py-6">
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <SmartLink
              href={l.href}
              className="inline-block px-3.5 py-2.5 text-sm text-dark-body no-underline hover:text-white"
            >
              {l.label}
            </SmartLink>
          </li>
        ))}
      </ul>
      <p className="font-mono text-xs text-dark-muted">{site.footer}</p>
    </footer>
  );
}
