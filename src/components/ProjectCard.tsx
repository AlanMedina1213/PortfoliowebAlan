import Image from "next/image";
import Link from "next/link";

type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    image: string;
};

export default function ProjectCard({
    slug,
    title,
    description,
    tech,
    link,
    image,
}: Project) {
    return (
        <div className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                />
            </div>

            <div className="p-6">

                <h2 className="text-xl font-semibold text-white">{title}</h2>

                <p className="mt-3 text-gray-400 text-sm">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs bg-gray-800 px-2 py-1 rounded-md text-gray-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>

            </div>

            <Link
                href={`/projects/${slug}`}
                className="px-6 py-2 bg-blue-500 rounded-lg"
            >
                Ver proyecto
            </Link>

        </div>
    );
}