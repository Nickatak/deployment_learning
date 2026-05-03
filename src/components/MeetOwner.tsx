import Image from "next/image";

export default function MeetOwner() {
  return (
    <section id="about">
      <div
        className="h-24 bg-cover bg-center md:h-32"
        style={{ backgroundImage: "url('/images/header-background.jpg')" }}
        aria-hidden
      />

      <div className="relative bg-black px-6 py-16 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="-mt-32 mb-8 h-40 w-40 overflow-hidden rounded-full ring-4 ring-black md:h-48 md:w-48">
            <Image
              src="/images/meet-owner.jpg"
              alt="Amy, owner of Frosty Delights"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="font-display text-4xl tracking-wide md:text-5xl">
            MEET AMY
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80">
            Amy, owner of Frosty Delights, turned her passion for sweets into a
            thriving ice cream shop. Inspired by summers in her grandmother&apos;s
            kitchen, she crafts artisanal flavors using locally sourced
            ingredients. With a culinary degree in hand, Amy brings unique
            tastes to her community and loves hosting ice cream-making
            workshops for kids, sharing the joy for this sweet treat.
          </p>
        </div>
      </div>
    </section>
  );
}
