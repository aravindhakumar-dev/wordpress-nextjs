import Link from "next/link";
import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href = "/",
  children,
  variant = "primary",
  target,
  rel,
  ...props
}: Props) {
  const isExternal =
    href.startsWith("http") ||
    href.endsWith(".pdf") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  return (
    <Link
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      {...props}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[44px] touch-manipulation text-center",
        variant === "primary" &&
          "bg-cyan-400 text-black hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-400/20",
        variant === "secondary" &&
          "border border-white/10 bg-white/5 text-white hover:border-cyan-400 hover:bg-white/10 active:scale-95",
        props.className
      )}
    >
      {children}
    </Link>
  );
}
