import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Tag({
  children,
  className,
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors duration-300 hover:border-cyan-400/30 hover:text-cyan-300",
        className
      )}
    >
      {children}
    </span>
  );
}