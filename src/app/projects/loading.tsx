export default function Loading() {
  return (
    <main className="section-spacing animate-pulse">
      <div className="container-width">

        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-4 w-32 rounded-full bg-white/10" />

          <div className="mx-auto mt-6 h-10 w-96 rounded bg-white/10" />

          <div className="mx-auto mt-6 h-5 w-full max-w-2xl rounded bg-white/10" />

          <div className="mx-auto mt-3 h-5 w-3/4 rounded bg-white/10" />
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              {/* Image */}
              <div className="h-56 bg-white/10" />

              {/* Content */}
              <div className="space-y-5 p-6">

                <div className="h-6 w-40 rounded-full bg-white/10" />

                <div className="h-8 w-3/4 rounded bg-white/10" />

                <div className="space-y-3">
                  <div className="h-4 rounded bg-white/10" />
                  <div className="h-4 rounded bg-white/10" />
                  <div className="h-4 w-5/6 rounded bg-white/10" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-20 rounded-full bg-white/10"
                    />
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <div className="h-11 flex-1 rounded-xl bg-white/10" />
                  <div className="h-11 flex-1 rounded-xl bg-white/10" />
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}