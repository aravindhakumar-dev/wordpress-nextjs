import SectionTitle from "@/components/common/SectionTitle";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <SectionTitle
          label="Professional Experience"
          title="Career journey &amp; technical leadership."
          description="A track record of engineering scalable WordPress architectures, custom Next.js applications, and mentoring engineering teams."
        />

        <div className="space-y-4 sm:space-y-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 transition hover:border-cyan-400/30"
            >
              <div className="flex flex-col gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-cyan-400">
                    {item.company}
                  </p>
                </div>

                <span className="self-start md:self-auto rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                  {item.duration}
                </span>
              </div>

              {item.description && (
                <p className="mt-4 text-xs sm:text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
