"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  basePath: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  hasPrevious,
  hasNext,
  basePath,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-16 flex items-center justify-center gap-3">
      {/* Previous */}

      <Link
        href={
          hasPrevious
            ? `${basePath}?page=${currentPage - 1}`
            : "#"
        }
        className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 transition ${
          hasPrevious
            ? "border-white/10 bg-white/5 text-white hover:border-cyan-400"
            : "pointer-events-none border-white/5 bg-white/5 text-gray-600"
        }`}
      >
        <ChevronLeft size={18} />
        Previous
      </Link>

      {/* Page Numbers */}

      <div className="flex items-center gap-2">
        {Array.from(
          { length: totalPages },
          (_, index) => {
            const page = index + 1;

            return (
              <Link
                key={page}
                href={`${basePath}?page=${page}`}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${
                  currentPage === page
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-white/10 bg-white/5 text-white hover:border-cyan-400"
                }`}
              >
                {page}
              </Link>
            );
          }
        )}
      </div>

      {/* Next */}

      <Link
        href={
          hasNext
            ? `${basePath}?page=${currentPage + 1}`
            : "#"
        }
        className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 transition ${
          hasNext
            ? "border-white/10 bg-white/5 text-white hover:border-cyan-400"
            : "pointer-events-none border-white/5 bg-white/5 text-gray-600"
        }`}
      >
        Next
        <ChevronRight size={18} />
      </Link>
    </nav>
  );
}