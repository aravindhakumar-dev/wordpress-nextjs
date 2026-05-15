import SectionTitle from "@/components/common/SectionTitle";

const experiences = [
  {
    role: "Senior Web Developer",
    company: "Digital Marketing Agency – Dubai",
    duration: "2024 — 2026",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "aravindhakumar.com",
    duration: "2023 — 2024",
  },
  {
    role: "UI/UX Developer",
    company: "BLeap Digital Marketing",
    duration: "2021 — 2023",
  },
];

export default function Experience() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <SectionTitle
          label="Experience"
          title="Professional journey & experience."
        />

        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={item.role}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-cyan-400">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}