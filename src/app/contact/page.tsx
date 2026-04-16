"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("enviando");

    const formData = new FormData(e.target);
    formData.append("access_key", "16b40ba6-c831-4676-9cea-cc0541384c16"); // 👈 CAMBIAR

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            ¡Vamos a trabajar juntos!
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            ¿Tienes una vacante, un proyecto en mente o simplemente quieres conectar?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* IZQUIERDA */}
          <div className="space-y-8">

            {/* Status */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-800/50 rounded-full w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-sm font-medium">
                  Disponible para trabajar
                </span>
              </div>

              <div className="text-gray-400">
                📍 Aguascalientes, México (Remoto / híbrido)
              </div>
            </div>

            {/* Links */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <Link href="mailto:medinajuarez180@gmail.com" className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-700 transition group">
                <span className="text-3xl mb-4 block group-hover:scale-110">✉️</span>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400 text-sm truncate">
                  medinajuarez180@gmail.com
                </p>
              </Link>

              <Link href="https://www.linkedin.com" target="_blank" className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-700 transition group">
                <span className="text-3xl mb-4 block group-hover:scale-110">🔗</span>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Alan Medina</p>
              </Link>

              <Link href="https://github.com" target="_blank" className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-700 transition group sm:col-span-2">
                <span className="text-3xl mb-4 block group-hover:scale-110">💻</span>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-400 text-sm">
                  Explora mis repositorios
                </p>
              </Link>

            </div>
          </div>

          {/* DERECHA - FORM */}
          <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">
              Envíame un mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Correo"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"
                />
              </div>

              <input
                name="subject"
                required
                type="text"
                placeholder="Asunto"
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"
              />

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Mensaje"
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:border-blue-500 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={status === "enviando"}
                className={`w-full py-4 rounded-xl font-bold transition ${
                  status === "enviando"
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {status === "enviando" ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {/* Feedback */}
              {status === "success" && (
                <p className="text-green-400 text-center">
                  Mensaje enviado correctamente
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center">
                  Error al enviar
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}