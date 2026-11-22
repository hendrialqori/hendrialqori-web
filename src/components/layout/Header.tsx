import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const navLink =
  "inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-ink-3 hover:text-ink";

const homeLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export function Header({ variant = "home" }: { variant?: "home" | "case" }) {
  const isHome = variant === "home";
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-pad py-5">
      <Link href={isHome ? "#top" : "/"} className="text-base font-bold text-ink no-underline">
        {site.name}
      </Link>
      <nav aria-label="Main" className="flex flex-wrap items-center gap-2">
        {isHome ? (
          homeLinks.map((l) => (
            <Link key={l.href} href={l.href} className={navLink}>
              {l.label}
            </Link>
          ))
        ) : (
          <Link href="/#work" className={navLink}>
            <Icon name="arrowLeft" size={14} />
            Back to all work
          </Link>
        )}
        <Button href={isHome ? "#contact" : "/#contact"} size="sm" trailingIcon="arrowUpRight">
          Start a project
        </Button>
      </nav>
    </header>
  );
}
