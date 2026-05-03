import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Featured", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Location & Hours", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-sky">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 py-8 md:grid-cols-3">
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-navy-ink md:justify-start">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-navy">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Frosty Delights"
            width={48}
            height={48}
          />
        </div>

        <form
          className="flex w-full items-center gap-2 md:justify-end"
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
            placeholder="Email address"
            className="w-full rounded-full bg-white px-4 py-2 text-sm text-navy-ink placeholder:text-navy-ink/50 focus:outline-none md:w-64"
          />
          <button
            type="submit"
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-ink"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="border-t border-white/40 py-3 text-center text-xs text-navy-ink/70">
        Copyright Frosty Delights
      </div>
    </footer>
  );
}
