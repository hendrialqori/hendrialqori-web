import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const isExternal = (href: string) => /^https?:\/\//.test(href);
const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

/**
 * Internal routes go through next/link, external URLs open in a new tab,
 * everything else (mailto:, files) is a plain anchor.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  if (isInternal(href) && !/\.[a-z0-9]+$/i.test(href)) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
