import Image from "next/image";

const hours = [
  { days: "Monday-Wednesday", time: "8:00am-7:00pm" },
  { days: "Thursday & Friday", time: "8:00am-9:00pm" },
  { days: "Saturday & Sunday", time: "8:00am-12:00am" },
];

export default function LocationHours() {
  return (
    <section id="location" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-8 md:grid-cols-2">
        <article className="bg-sky-deep p-10 md:p-14">
          <h2 className="font-display text-5xl font-black italic text-sky md:text-6xl">
            Location
          </h2>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="relative aspect-square w-full max-w-[220px] shrink-0 overflow-hidden">
              <Image
                src="/images/location-map.png"
                alt="Map to Frozen Delights"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <address className="text-lg not-italic leading-relaxed text-white">
              <span className="font-bold">Frozen Delights</span>
              <br />
              1100 N. Grand Ave.
              <br />
              Walnut, CA 91789
              <br />
              <span className="mt-2 inline-block">(909) 274-6890</span>
            </address>
          </div>
        </article>

        <article className="bg-sky p-10 md:p-14">
          <h2 className="font-display text-5xl font-black italic text-sky-deep md:text-6xl">
            Hours
          </h2>

          <dl className="mt-6 divide-y-2 divide-sky-deep border-y-2 border-sky-deep">
            {hours.map((row) => (
              <div key={row.days} className="py-5">
                <dt className="text-xl font-bold text-sky-deep">{row.days}</dt>
                <dd className="mt-1 text-lg text-black">{row.time}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
