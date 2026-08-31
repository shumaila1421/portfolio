import { link } from "fs";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="text-xl font-bold tracking-tight">
          Shumaila <span className="text-gray-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="ext-sm font-medium text-gray-600 transition hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="ounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
