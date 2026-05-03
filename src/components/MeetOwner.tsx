import Image from "next/image";

export default function MeetOwner() {
  return (
    <section id="about">
      <div
        className="h-64 bg-cover bg-center md:h-96"
        style={{ backgroundImage: "url('/images/header-background.jpg')" }}
        aria-hidden
      />

      <div className="bg-black px-6 pb-20 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="-mt-32 mb-10 h-64 w-64 overflow-hidden rounded-full ring-[20px] ring-black md:-mt-40 md:mb-12 md:h-80 md:w-80 md:ring-[36px]">
            <Image
              src="/images/meet-owner.jpg"
              alt="Amy, owner of Frosty Delights"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="font-display text-7xl font-black italic text-sky md:text-8xl">
            MEET AMY
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Amy, owner of Frosty Delights, turned her passion for sweets into a
            thriving ice cream shop. Inspired by summers in her
            grandmother&apos;s kitchen, she crafts artisanal flavors using
            locally sourced ingredients. With a culinary degree in hand, Amy
            brings unique tastes to her community and loves hosting ice
            cream-making workshops for kids, sharing her joy for this sweet
            treat.
          </p>
        </div>
      </div>
    </section>
  );
}
