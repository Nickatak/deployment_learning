import Image from "next/image";
import Link from "next/link";

const items = [
  { name: "Ice Cream", price: "$10.00", src: "/images/featured-ice_cream.jpg" },
  { name: "Sundae", price: "$10.00", src: "/images/featured-sundae.jpg" },
  { name: "Milkshake", price: "$10.00", src: "/images/featured-milkshake.jpg" },
];

export default function Featured() {
  return (
    <section id="featured" className="bg-sky-deep py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-5xl font-black italic text-sky md:text-6xl">
          Featured
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="overflow-hidden bg-white">
              <div className="relative aspect-square w-full">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 20rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-xl font-bold text-navy-ink">{item.name}</h3>
                <p className="mt-1 text-base text-navy-ink/80">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="#menu"
            className="rounded-full bg-[#cbedf3] px-6 py-2 text-base font-semibold text-black transition-colors hover:bg-white"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
