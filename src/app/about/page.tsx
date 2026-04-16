import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-12 border-b border-gray-800 pb-4">Sobre mí</h1>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Columna de la Foto */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.15)] border-4 border-gray-800 bg-gray-900 flex items-center justify-center">
              {/* Aquí irá tu foto real con Next/Image */}
              <span className="text-gray-700 text-8xl font-black">AM</span>
            </div>
          </div>
          
          {/* Columna de Texto de Presentación */}
          <div className="lg:col-span-8 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Hola, soy <strong className="text-white">Alan Medina</strong>, Ingeniero en Tecnologías de la Información egresado del Instituto Tecnológico de Aguascalientes. Soy un profesional apasionado por integrar soluciones tecnológicas que resuelvan problemas reales de manera eficiente y escalable.
            </p>
            <p>
              Mi perfil integral me permite adaptarme a diferentes áreas de la tecnología. No solo construyo aplicaciones web modernas y robustas, sino que también tengo experiencia administrando infraestructura TI, brindando soporte técnico, y desarrollando proyectos de automatización IoT. 
            </p>
            <p>
              Además, complemento mi perfil técnico con habilidades en diseño gráfico y UI/UX, habiendo desarrollado proyectos visuales para el sector comercial. Mi objetivo es crear ecosistemas tecnológicos completos: desde la red que los soporta y el código que los hace funcionar, hasta la interfaz que ve el usuario final.
            </p>
          </div>
        </div>

        {/* Sección de Habilidades (Actualizada a 4 columnas para abarcar todo el perfil TI) */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-gray-800 pb-4">Áreas de Experiencia</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Desarrollo Web</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creación de aplicaciones Full Stack. Front-end con React, Next.js y Tailwind CSS. Back-end utilizando Node.js, Python (Django) y Laravel.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Infraestructura TI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Soporte técnico, mantenimiento de hardware, configuración de redes, administración de sistemas operativos Linux (Ubuntu/Fedora) y Windows.
              </p>
            </div>

            {/* Diseño Gráfico */}
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Diseño Gráfico</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creación de identidad visual, diseño para medios impresos (flexografía), manipulación de imágenes y diseño de interfaces (UI/UX) en Figma.
              </p>
            </div>

            {/* IoT y Datos */}
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-white">IoT & Datos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automatización domótica con Arduino, MQTT y Home Assistant. Análisis de datos e investigación utilizando herramientas como RStudio.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}