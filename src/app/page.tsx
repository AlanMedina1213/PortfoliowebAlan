import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-20">

        <div className="space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hola, soy <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Alan Antonio Medina Juarez
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            Desarrollador Web Full Stack
          </p>
          
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Me gusta el Desarrollo aplicaciones web modernas enfocadas en rendimiento, seguridad y experiencia de usuario. Convirtiendo ideas complejas en interfaces intuitivas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          <Link 
            href="/projects" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_0px_rgba(37,99,235,0.6)]"
          >
            Ver mis proyectos
          </Link>
          
          <a 
            href="/cv-alan-medina.pdf" 
            download
            className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-400 hover:bg-gray-900 text-gray-300 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
          >
            <span>📄</span> Descargar CV
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Proyectos Destacados</h2>
          <p className="text-gray-500">Una selección de mi trabajos más recientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/projects" className="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center gap-2 transition-colors">
            Ver todos los proyectos <span>→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}