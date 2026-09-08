"use client";

import React, { useState, useEffect, lazy, Suspense } from "react";
import { Mail, ChevronDown, Code2 } from "lucide-react";
import InfiniteClientSlider from "./InfiniteClientSlider.jsx";

// Importación dinámica para diferir la compilación del Shader/WebGL
const ShaderBackground = lazy(() => import("./ShaderBackground.jsx"));

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Retarda la activación del Shader para dar prioridad absoluta al texto (LCP)
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A1513] text-slate-100 selection:bg-indigo-500 selection:text-white"
    >
      {/* 1. Fondo shader diferido */}
      {mounted ? (
        <Suspense fallback={<div className="absolute inset-0 bg-[#0A1513]" />}>
          <ShaderBackground className="absolute inset-0 z-0 opacity-80" />
        </Suspense>
      ) : (
        <div className="absolute inset-0 bg-[#0A1513]" />
      )}

      {/* 2. Degradado superior */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1513]/60 via-transparent z-0 pointer-events-none" />

      {/* 3. Contenido textual e interactivo */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pt-28 pb-36 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center max-w-4xl w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6 backdrop-blur-md animate-pulse">
            <Code2 className="w-4 h-4" />
            <span>Soluciones de Software & Transformación Digital</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Transformamos ideas en{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-blue-200 to-teal-200 bg-clip-text text-transparent">
              software de alto impacto
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed font-light">
            Desarrollamos soluciones empresariales a medida, arquitecturas escalables
            y aplicaciones móviles de última generación para optimizar y hacer crecer tu negocio.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Contacto
            </a>
            <a
              href="#proyectos"
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium transition-all backdrop-blur-md"
            >
              Ver servicios
            </a>
          </div>

          {/* Carrusel */}
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Confían en nuestro trabajo
            </p>
            <div>
              <InfiniteClientSlider />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-300 pointer-events-auto">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* 4. Degradado hacia la sección blanca */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent z-10 pointer-events-none" />
    </section>
  );
}