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
  ...props
}: Props) {
  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        "inline-flex items-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-cyan-400 text-black hover:scale-105",
        variant === "secondary" &&
          "border border-white/10 bg-white/5 text-white hover:border-cyan-400",
        props.className
      )}
    >
      {children}
    </Link>
  );
}