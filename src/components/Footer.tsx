import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-950 border-t border-gray-800 mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Logo/Marca */}
                <Link href="/" className="text-white font-semibold text-xl tracking-wide">
                    Alan.dev
                </Link>

                {/* Enlaces Rápidos y Social */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-400 text-sm">
                    <Link href="/projects" className="hover:text-blue-400 transition">Proyectos</Link>
                    <Link href="/about" className="hover:text-blue-400 transition">Sobre mí</Link>
                    <Link href="/contact" className="hover:text-blue-400 transition">Contacto</Link>
                    <span className="mx-2 text-gray-700">|</span>
                    <Link href="https://linkedin.com/in/alanmedina" target="_blank" className="hover:text-blue-400 transition">LinkedIn</Link>
                    <Link href="https://github.com/alanmedina" target="_blank" className="hover:text-blue-400 transition">GitHub</Link>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm">
                    &copy; {currentYear} Alan Medina. Todos los derechos reservados.
                </p>

            </div>
        </footer>
    );
}