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
    <section className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-white/5 p-10 lg:p-16">

      <div className="mx-auto max-w-4xl text-center">

        <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Let's Build Together
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <Link href={buttonHref}>
            <Button>
              {buttonText}
              <ArrowRight size={18} />
            </Button>
          </Link>

          <Link href="/projects">
            <Button variant="secondary">
              View More Projects
            </Button>
          </Link>

        </div>

      </div>

    </section>
  );
}