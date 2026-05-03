import Image from "next/image";

const hours = [
  { days: "Monday-Wednesday", time: "9:00am-9:00pm" },
  { days: "Thursday & Friday", time: "9:00am-11:00pm" },
  { days: "Saturday & Sunday", time: "9:00am-12:00am" },
];

export default function LocationHours() {
  return (
    <section id="location" className="bg-sky py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <article className="rounded-lg bg-cream p-6">
          <h2 className="font-display text-3xl italic text-navy">Location</h2>
          <div className="mt-4 grid grid-cols-[auto_1fr] items-center gap-4">
            <div className="relative h-28 w-28 overflow-hidden rounded">
              <Image
                src="/images/location-map.png"
                alt="Map to Frosty Delights"
                fill
                sizes="7rem"
                className="object-cover"
              />
            </div>
            <address className="text-sm not-italic leading-relaxed text-navy-ink">
              123 Sweet Street
              <br />
              Sundae City, CA 90210
              <br />
              (555) 123-4567
            </address>
          </div>
        </article>

        <article className="rounded-lg bg-cream p-6">
          <h2 className="font-display text-3xl italic text-navy">Hours</h2>
          <dl className="mt-4 space-y-3 text-sm text-navy-ink">
            {hours.map((row) => (
              <div key={row.days}>
                <dt className="font-semibold">{row.days}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
