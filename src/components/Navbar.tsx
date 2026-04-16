import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-white font-semibold text-lg tracking-wide">
          <Link href="/" className="hover:text-white transition">
           Alan.dev</Link>
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <Link href="/about" className="hover:text-white transition">
            Sobre mí
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Proyectos
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contacto
          </Link>
        </div>

      </div>
    </nav>
  );
}