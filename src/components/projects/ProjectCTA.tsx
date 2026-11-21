import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

export default function ProjectCTA({
  title,
  description,
  buttonText,
  buttonHref,
}: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-white/5 p-6 sm:p-10 lg:p-16">

      <div className="mx-auto max-w-4xl text-center">

        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400 font-semibold">
          Let&apos;s Build Together
        </span>

        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          {title}
        </h2>

        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-300">
          {description}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">

          <Link href={buttonHref} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              {buttonText}
              <ArrowRight size={18} />
            </Button>
          </Link>

          <Link href="/projects" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto">
              View More Projects
            </Button>
          </Link>

        </div>

      </div>

    </section>
  );
}