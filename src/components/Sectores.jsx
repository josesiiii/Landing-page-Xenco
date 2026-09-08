"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { HandwritingText } from "./HandwritingText.jsx";

function SectorCard({ item, isActive, setActiveId }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onMouseEnter={() => setActiveId(item.id)}
      onClick={() => setActiveId(item.id)}
      className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isActive
          ? "flex-[4] border-teal-500 shadow-xl shadow-teal-900/10 brightness-100"
          : "flex-[1] border-slate-200 bg-slate-100 brightness-75 hover:brightness-90"
      }`}
    >
      <div className="absolute inset-0 h-full w-full bg-slate-800">
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-700/50 animate-pulse" />
        )}
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-1000 ${
            isActive ? "scale-100" : "scale-110"
          } ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-500 ${
            isActive ? "opacity-90" : "opacity-60"
          }`}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-6 md:p-8">
        <div
          className={`flex flex-col gap-3 transition-all duration-500 ${
            isActive
              ? "translate-y-0 opacity-100 delay-200"
              : "translate-y-12 opacity-0 pointer-events-none"
          }`}
        >
          <div>
            <span className="inline-block rounded-full border border-teal-300/30 bg-teal-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-200 backdrop-blur-md">
              {item.category}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold uppercase text-white md:text-4xl tracking-wide">
            {item.title}
          </h3>

          <p className="max-w-md text-sm text-slate-200 font-light leading-relaxed hidden sm:block">
            {item.description}
          </p>

          <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-300 md:text-sm hover:text-white transition-colors">
            Explorar Soluciones <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            isActive ? "opacity-0 scale-50" : "opacity-100 delay-300"
          }`}
        >
          <span className="hidden whitespace-nowrap text-lg font-bold uppercase tracking-widest text-white/90 [writing-mode:vertical-rl] md:block drop-shadow-md">
            {item.title}
          </span>
          <span className="block text-sm font-bold text-white md:hidden">
            {item.id}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Sectores() {
  const items = [
    {
      id: "01",
      title: "Entidades Gubernamentales",
      category: "Sector Público",
      description:
        "Soluciones de software de alta seguridad y gestión para entidades estatales.",
      src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1000",
      alt: "Entidades Gubernamentales",
    },
    {
      id: "02",
      title: "Salud Privada IPS",
      category: "Salud",
      description:
        "Optimización de procesos clínicos, historias médicas y atención al paciente.",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      alt: "Salud privada IPS",
    },
    {
      id: "03",
      title: "Salud Pública E.S.E",
      category: "Salud Integral",
      description:
        "Sistemas integrados para la red de salud pública territorial e institutional.",
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
      alt: "Salud Pública ESE",
    },
    {
      id: "04",
      title: "Empresas Corporativas",
      category: "Empresarial",
      description:
        "Arquitectura escalable y automatización de procesos de negocio.",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      alt: "Empresas Corporativas",
    },
    {
      id: "05",
      title: "Universidades y Centros de Formación",
      category: "Educación",
      description:
        "Nuestro software enfocado a la gestión académica y administrativa.",
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
      alt: "Universidades y Centros de Formación",
    },
  ];

  const [activeId, setActiveId] = useState("02");

  return (
    <section id="sectores" className="relative w-full bg-white py-20 text-slate-800 overflow-hidden">
      <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
            Nuestra Cobertura
          </p>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            Sectores que{" "}
            <HandwritingText
              words={["impulsamos.", "transformamos.", "potenciamos."]}
              className="text-teal-600 font-serif font-normal"
              height="1.1em"
              duration={1.8}
            />
          </h2>
        </div>

        {/* Tarjetas desplegables */}
        <div className="mx-auto flex h-[320px] w-full max-w-full flex-col gap-3 md:h-[580px] md:flex-row md:gap-4">
          {items.map((item) => (
            <SectorCard
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}