import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className,
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-300",
        className
      )}
    >
      {children}
    </span>
  );
}