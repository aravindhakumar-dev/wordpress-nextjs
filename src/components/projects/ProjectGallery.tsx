import Image from "next/image";

import { GalleryImage } from "@/types/common";

type Props = {
  images: GalleryImage[];
};

export default function ProjectGallery({
  images,
}: Props) {
  if (!images || images.length === 0) {
    return null;
  }

  const [featuredImage, ...galleryImages] = images;

  return (
    <section>

      <div className="mb-8">

        <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Gallery
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Project Screenshots
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-gray-400">
          A visual walkthrough of the website showcasing layouts,
          user experience, responsive design and overall interface.
        </p>

      </div>

      {/* Featured Image */}

      <div className="relative overflow-hidden rounded-3xl border border-white/10">

        <div className="relative aspect-[16/9]">

          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            priority
            className="object-cover object-top transition duration-700 hover:scale-105"
          />
        </div>

      </div>

      {/* Gallery Grid */}

      {galleryImages.length > 0 && (

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((image) => (

            <div
              key={image.id}
              className="group overflow-hidden rounded-2xl border border-white/10"
            >

              <div className="relative aspect-[16/10]">

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill

                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}