type Props = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: Props) {
  return (
    <div className="mb-8 sm:mb-14 max-w-3xl">
      <p className="mb-2.5 text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400 font-semibold">
        {label}
      </p>

      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
