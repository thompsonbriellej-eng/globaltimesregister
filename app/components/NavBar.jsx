import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          The Global Times Register
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link href="/world" className="hover:text-black transition">World</Link>
          <Link href="/business" className="hover:text-black transition">Business</Link>
          <Link href="/tech" className="hover:text-black transition">Tech</Link>
          <Link href="/culture" className="hover:text-black transition">Culture</Link>
          <Link href="/science" className="hover:text-black transition">Science</Link>
          <Link href="/opinion" className="hover:text-black transition">Opinion</Link>
        </nav>
      </div>
    </header>
  );
}
