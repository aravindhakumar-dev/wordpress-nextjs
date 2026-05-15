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
    <div className="mb-16 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
        {label}
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}