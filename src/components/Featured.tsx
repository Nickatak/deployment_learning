import Image from "next/image";
import Link from "next/link";

const items = [
  { name: "Ice Cream", price: "$10.00", src: "/images/featured-ice_cream.jpg" },
  { name: "Sundae", price: "$10.00", src: "/images/featured-sundae.jpg" },
  { name: "Milkshake", price: "$10.00", src: "/images/featured-milkshake.jpg" },
];

export default function Featured() {
  return (
    <section id="featured" className="bg-white pb-16">
      <div className="bg-sky py-6">
        <h2 className="text-center font-display text-4xl italic text-navy">
          Featured
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="overflow-hidden rounded-lg bg-cream shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.src}
                alt={item.name}
                fill
                sizes="(min-width: 768px) 20rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-navy-ink">
                {item.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-navy-ink/80">
                {item.price}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="#menu"
          className="rounded-full bg-navy px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-ink"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
}
