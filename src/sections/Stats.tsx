const stats = [
  {
    number: "155+",
    label: "Projects Completed",
  },
  {
    number: "28+",
    label: "WooCommerce & E-Commerce",
  },
  {
    number: "18+",
    label: "Booking & Custom Systems",
  },
  {
    number: "14+",
    label: "Next.js & AI Webapps",
  },
];

export default function Stats() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 transition hover:border-cyan-400/40"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 tracking-tight">
                {item.number}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-gray-400 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
