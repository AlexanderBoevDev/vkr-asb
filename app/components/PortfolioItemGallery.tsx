"use client";

import Image from "next/image";

interface PortfolioItemGalleryProps {
  images: string[];
}

export default function PortfolioItemGallery({
  images
}: PortfolioItemGalleryProps) {
  return (
    <section className="block z-10 relative mt-6 mb-10">
      <div className="md:columns-2 gap-8">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={600}
            height={600}
            className="
              w-full
              h-auto
              object-cover
              mb-5
            "
          />
        ))}
      </div>
    </section>
  );
}
