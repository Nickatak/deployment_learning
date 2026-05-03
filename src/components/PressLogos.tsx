import Image from "next/image";

const logos = [
  { src: "/images/press-logo1.png", alt: "Press logo 1" },
  { src: "/images/press-logo2.png", alt: "Press logo 2" },
  { src: "/images/press-logo3.png", alt: "Press logo 3" },
  { src: "/images/press-logo4.png", alt: "Press logo 4" },
];

export default function PressLogos() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-around gap-8 px-6">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={140}
            height={40}
            className="h-8 w-auto object-contain md:h-10"
          />
        ))}
      </div>
    </section>
  );
}
