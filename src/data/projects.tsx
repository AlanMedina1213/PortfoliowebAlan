export const projects = [
  {
    slug: "acusita",
    title: "AcusIta",
    description: "Ecosistema IoT de asistencia para personas con discapacidad auditiva. Desarrollado como proyecto de residencia profesional, integra sensores biométricos y de seguridad bajo protocolo MQTT. Optimizado para una respuesta en tiempo real (<500ms) con notificaciones críticas vía Telegram y Firebase.",
    tech: ["Arduino", "MQTT", "Node-RED", "Home Assistant", "Firebase", "Telegram API"],
    link: "https://youtu.be/6Pz0QelKTSc?si=SG0nXCHKxIlM721_",
    image: "/images/AcusIta.png",
  },
  {
    slug: "mapita",
    title: "Mapita",
    description: "Sistema de posicionamiento y navegación interna para el Instituto Tecnológico de Aguascalientes. Implementa una solución de gestión de accesos mediante QR dinámicos, permitiendo el control de flujo de visitantes y la localización precisa de edificios en tiempo real.",
    tech: ["React Native", "Expo", "Figma", "QR Code Engine"],
    link: "https://github.com/AlanMedina1213/MapitaFinal.git",
    image: "/images/Mapita.png",
  },
  {
    slug: "phishing-detector",
    title: "Phishing Detector",
    description: "Plataforma de ciberseguridad que utiliza modelos de Machine Learning para el análisis y detección de URLs fraudulentas. Desarrollada con un backend robusto en Django, permite identificar patrones maliciosos para prevenir ataques de ingeniería social.",
    tech: ["Python", "Django", "Machine Learning", "Scikit-Learn"],
    link: "https://github.com/AlanMedina1213/UrlPhishing.git",
    image: "/images/phishing.png",
  },
  {
    slug: "foodfinder",
    title: "FoodFinder",
    description: "Motor de búsqueda gastronómico inteligente que optimiza el aprovechamiento de recursos mediante algoritmos de recomendación. Filtra recetas basadas en ingredientes disponibles y perfiles dietéticos del usuario a través de integraciones con APIs externas.",
    tech: ["React", "Next.js", "External APIs", "Tailwind CSS"],
    link: "https://github.com/AlanMedina1213/foodfinder.git",
    image: "/images/foodfinder.png",
  },

];