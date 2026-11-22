import React from "react";
import Image from "next/image";

interface AkLogoProps {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

export default function AkLogo({ size = "md", showName = true, className = "" }: AkLogoProps) {
  const pixelSizes = {
    sm: 36,
    md: 42,
    lg: 52,
  };

  const containerSizes = {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
  };

  const dim = pixelSizes[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic AK Brand Monogram */}
      <div
        className={`relative flex items-center justify-center overflow-hidden border border-cyan-400/40 bg-[#0f172a] shadow-[0_0_15px_rgba(34,211,238,0.25)] group-hover:border-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] transition-all duration-300 ${containerSizes[size]}`}
        style={{ width: dim, height: dim }}
      >
        <Image
          src="/ak-logo.png"
          alt="AK Logo"
          width={dim}
          height={dim}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {showName && (
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors leading-tight">
            ARAVINDHAKUMAR
          </span>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-cyan-400/90 -mt-0.5">
            TECHNICAL CONSULTANT
          </span>
        </div>
      )}
    </div>
  );
}
