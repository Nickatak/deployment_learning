import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Featured", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Location & Hours", href: "#location" },
];

export default function Nav() {
  return (
    <header className="bg-sky-deep">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Frosty Delights"
              width={64}
              height={64}
              priority
            />
          </Link>

          <ul className="hidden items-center gap-10 text-lg font-medium text-white md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:opacity-80">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="#order"
          className="rounded-full border-2 border-white px-6 py-2 text-base font-medium text-white transition-colors hover:bg-white hover:text-sky-deep"
        >
          Order Online
        </Link>
      </nav>
    </header>
  );
}
