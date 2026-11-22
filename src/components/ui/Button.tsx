import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { SmartLink } from "./SmartLink";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";
type Tone = "light" | "dark";

const sizes: Record<Size, { box: string; icon: number }> = {
  sm: { box: "min-h-11 px-[18px] gap-2 text-sm", icon: 14 },
  md: { box: "min-h-[52px] px-6 gap-2.5 text-[15px]", icon: 16 },
  lg: { box: "min-h-14 px-[26px] gap-2.5 text-base", icon: 18 },
};

const variants: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "bg-accent text-ink border border-ink hover:bg-[#a8f54d]",
    secondary: "border border-line-strong text-ink hover:border-ink",
  },
  dark: {
    primary: "bg-accent text-ink border border-accent hover:bg-[#a8f54d]",
    secondary: "border border-muted text-white hover:border-white",
  },
};

export function buttonClass({
  variant = "primary",
  size = "md",
  tone = "light",
}: {
  variant?: Variant;
  size?: Size;
  tone?: Tone;
}) {
  return `inline-flex items-center font-semibold leading-none no-underline transition-colors ${sizes[size].box} ${variants[tone][variant]}`;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  tone?: Tone;
  /** Icon before the label. */
  leadingIcon?: IconName;
  /** Icon after the label. */
  trailingIcon?: IconName;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  tone = "light",
  leadingIcon,
  trailingIcon,
}: ButtonProps) {
  const iconSize = sizes[size].icon;
  return (
    <SmartLink href={href} className={buttonClass({ variant, size, tone })}>
      {leadingIcon && <Icon name={leadingIcon} size={iconSize} strokeWidth={2} />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} size={iconSize} />}
    </SmartLink>
  );
}

/** Underlined text link with an optional trailing icon. */
export function TextLink({
  href,
  children,
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: IconName;
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold underline underline-offset-4 hover:text-ink-3 ${className}`}
    >
      {children}
      {icon && <Icon name={icon} size={14} />}
    </SmartLink>
  );
}
