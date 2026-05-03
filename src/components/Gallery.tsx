import Image from "next/image";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/gallery-image${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
}));

export default function Gallery() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 md:grid-cols-4">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
