import React from "react";

interface AkLogoProps {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

export default function AkLogo({ size = "md", showName = true, className = "" }: AkLogoProps) {
  const badgeSizes = {
    sm: "h-8 w-8 text-xs rounded-lg",
    md: "h-10 w-10 text-sm rounded-xl",
    lg: "h-12 w-12 text-base rounded-2xl",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Signature AK Brand Icon Badge */}
      <div
        className={`relative flex items-center justify-center font-mono font-black tracking-tighter bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-emerald-500/20 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.25)] group-hover:border-cyan-300 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.45)] transition-all duration-300 ${badgeSizes[size]}`}
      >
        <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          AK
        </span>
      </div>

      {showName && (
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
            AK
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 -mt-1">
            ARAVINDHAKUMAR
          </span>
        </div>
      )}
    </div>
  );
}
