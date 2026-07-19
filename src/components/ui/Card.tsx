import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/30",
        className
      )}
    >
      {children}
    </div>
  );
}