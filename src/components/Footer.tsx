import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Featured", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Location & Hours", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-sky-deep px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <ul className="flex flex-wrap items-center justify-center gap-8 border-y-2 border-white py-4 text-base font-medium md:justify-start md:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:opacity-80">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Frosty Delights"
            width={80}
            height={80}
          />
        </div>

        <form
          className="flex w-full items-stretch overflow-hidden rounded-full border-2 border-white md:justify-self-end md:max-w-sm"
          action="#"
          method="post"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            suppressHydrationWarning
            className="flex-1 bg-transparent px-6 py-3 text-base text-white placeholder:text-white/80 focus:outline-none"
          />
          <div className="my-2 w-px bg-white/60" aria-hidden />
          <button
            type="submit"
            className="px-6 text-base font-medium text-white hover:opacity-80"
          >
            Contact
          </button>
        </form>
      </div>

      <p className="mt-10 text-center text-base">
        Copyright &copy; 2004 Frosty Delights
      </p>
    </footer>
  );
}
