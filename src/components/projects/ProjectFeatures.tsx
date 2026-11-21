import { CheckCircle2 } from "lucide-react";

import { FeatureItem } from "@/types/common";

type Props = {
  features: FeatureItem[];
};

export default function ProjectFeatures({
  features,
}: Props) {
  if (!features.length) {
    return null;
  }

  return (
    <section>

      {/* Section Heading */}

      <div className="mb-10">

        <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Features
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Key Features
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-gray-400">
          The project was developed with a strong focus on usability,
          performance, scalability and business goals while delivering
          a seamless user experience.
        </p>

      </div>

      {/* Feature Cards */}

      <div className="grid gap-6 md:grid-cols-2">

        {features.map((feature) => (

          <div
            key={feature.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
          >

            <div className="flex items-start gap-4">

              <div className="rounded-full bg-cyan-400/10 p-3">

                <CheckCircle2
                  size={22}
                  className="text-cyan-400"
                />

              </div>

              <div className="flex-1">

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                {feature.description && (
                  <p className="mt-3 leading-7 text-gray-400">
                    {feature.description}
                  </p>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}