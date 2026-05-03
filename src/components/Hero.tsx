import Image from "next/image";

const products = [
  { src: "/images/header-cone.jpg", alt: "Ice cream cone" },
  { src: "/images/header-sundae.jpg", alt: "Sundae" },
  { src: "/images/header-milkshake.jpg", alt: "Milkshake" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/header-background.jpg')" }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <h1 className="font-display text-6xl italic text-navy md:text-7xl">
          Frosty Delights
        </h1>
        <p className="mt-3 max-w-md text-base font-medium text-navy-ink">
          Satisfy Your Sweet Tooth, One Scoop at a Time
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {products.map((p) => (
            <div
              key={p.src}
              className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white md:h-48 md:w-48"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 12rem, 10rem"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
