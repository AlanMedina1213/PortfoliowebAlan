import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Medina | Ingeniero en TI & Desarrollador Web Full Stack",
  description:
    "Portafolio profesional de Alan Medina. Especialista en desarrollo web (React, Next.js, Django), infraestructura TI, diseño UI/UX y soluciones IoT.",
  keywords: [
    "Alan Medina",
    "Desarrollador Web",
    "Full Stack",
    "Ingeniero en TI",
    "React",
    "Next.js",
    "Django",
    "Aguascalientes",
  ],
  authors: [{ name: "Alan Medina" }],

  openGraph: {
    title: "Alan Medina | Portafolio Profesional",
    description:
      "Descubre mis proyectos en desarrollo web, IoT y diseño.",
    url: "https://portfolioweb-alan.vercel.app/", // ⚠️ cámbialo luego
    siteName: "Alan.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Previsualización del portafolio de Alan Medina",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alan Medina | Ingeniero en TI",
    description:
      "Especialista en desarrollo web, infraestructura TI, diseño UI/UX y soluciones IoT.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-black text-white`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Contenido */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}