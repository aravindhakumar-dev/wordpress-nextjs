const stats = [
  {
    number: "155+",
    label: "Projects Completed",
  },
  {
    number: "24+",
    label: "WooCommerce Stores",
  },
  {
    number: "12+",
    label: "Shopify Projects",
  },
  {
    number: "6+",
    label: "Next.js Applications",
  },
];

export default function Stats() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}