import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetail({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find(
    (p) => p.slug?.toLowerCase() === resolvedParams.slug.toLowerCase()
  );

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main className="container mx-auto px-6 pt-32 pb-12 max-w-7xl">
        {/* Barra de Navegación de Detalles (Volver) */}
        <div className="flex items-center justify-between mb-16 pb-4 border-b border-neutral-800">
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium">
            <span className="text-xl">←</span> 
            <span>Volver a Proyectos</span>
          </Link>
        </div>

        {/* Encabezado del Proyecto (Imagen Hero y Título) */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Imagen Hero */}
          <div className="md:col-span-8">
            {project.image && (
              <div className="relative aspect-[16/9] mb-8 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={true}
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Título, Subtítulo y Descripción (Columna Lateral) */}
          <div className="md:col-span-4 space-y-6 sticky top-20">
            <div className="space-y-2">
              <h1 className="text-6xl font-extrabold tracking-tight text-neutral-100">{project.title}</h1>
              <p className="text-lg text-blue-400 font-medium">Proyecto de Desarrollo</p>
            </div>
            
            <p className="text-xl text-neutral-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Sección de Detalles (Tecnología y Enlace) */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-neutral-800 pt-16 mt-16">
          
          {/* Columna de Tecnologías */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-neutral-200 uppercase tracking-wide">Tecnologías Utilizadas</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <span key={i} className="text-sm bg-neutral-900 px-4 py-2 rounded-full text-blue-300 font-semibold border border-neutral-800 shadow-inner">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Columna del Enlace del Proyecto */}
          <div className="space-y-6 md:pl-12 md:border-l md:border-neutral-800">
            <h2 className="text-2xl font-semibold text-neutral-200 uppercase tracking-wide">Ver Proyecto</h2>
            {project.link && project.link !== "#" ? (
              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-2xl text-neutral-100 font-bold hover:bg-blue-500 transition duration-150 shadow-md text-lg"
              >
                <span className="text-2xl">🔗</span>
                <span>Ver Proyecto En Vivo</span>
              </Link>
            ) : (
              <p className="text-neutral-500">No hay enlace disponible para este proyecto.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}