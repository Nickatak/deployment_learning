import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Featured", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Location & Hours", href: "#location" },
];

export default function Nav() {
  return (
    <header className="bg-sky">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Frosty Delights"
            width={40}
            height={40}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-navy-ink md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-navy">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#order"
          className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-ink"
        >
          Order Online
        </Link>
      </nav>
    </header>
  );
}
