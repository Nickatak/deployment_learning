import Image from "next/image";

const products = [
  { src: "/images/header-cone.jpg", alt: "Ice cream cone" },
  { src: "/images/header-milkshake.jpg", alt: "Milkshake" },
  { src: "/images/header-sundae.jpg", alt: "Sundae" },
];

export default function Hero() {
  return (
    <section className="bg-sky">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <h1 className="font-display text-7xl font-black italic text-sky-deep md:text-8xl">
          Frosty Delights
        </h1>

        <div className="mt-6 inline-block rounded-full bg-sky-deep px-8 py-3">
          <p className="text-base font-medium text-white md:text-lg">
            Satisfy Your Sweet Tooth, One Scoop at a Time!
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          {products.map((p, i) => (
            <div
              key={p.src}
              className={
                "relative h-40 w-40 overflow-hidden rounded-full ring-[10px] ring-white md:h-56 md:w-56 md:ring-[14px]" +
                (i > 0 ? " -ml-8 md:-ml-12" : "")
              }
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 14rem, 10rem"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
