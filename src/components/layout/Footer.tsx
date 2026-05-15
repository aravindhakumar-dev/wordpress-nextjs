export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-width flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-500">
          © 2026 Aravindhakumar G. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}