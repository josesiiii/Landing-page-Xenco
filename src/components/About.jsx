import React, { useState } from "react";
import { Target, Eye, Gem, Compass, ArrowUpRight } from "lucide-react";
import { mission, vision, values, pillars } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";
import ParticleImage from "./ParticleImage";
import xencoLogoIcon from "../assets/fotos/xenco-x.png";

export default function About() {
  // Estado para manejar cuál tarjeta está expandida (por defecto la primera: "mission")
  const [activeId, setActiveId] = useState("mission");

  const cards = [
    {
      id: "mission",
      title: "Misión",
      icon: <Target size={24} />,
      content: mission,
      isList: false,
    },
    {
      id: "vision",
      title: "Visión",
      icon: <Eye size={24} />,
      content: vision,
      isList: false,
    },
    {
      id: "values",
      title: "Valores corporativos",
      icon: <Gem size={24} />,
      content: values,
      isList: true,
    },
    {
      id: "pillars",
      title: "Pilares corporativos",
      icon: <Compass size={24} />,
      content: pillars,
      isList: true,
    },
  ];

  return (
    <section id="nosotros" className="relative py-24 px-6 lg:px-12 bg-[#0A1513] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <ScrollReveal className="max-w-2xl mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-[#12967F] font-medium">
            Nuestro propósito
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
            Sobre XENCO
          </h2>
        </ScrollReveal>

        {/* Layout Split 50/50: Izquierda Partículas sin caja / Derecha Acordeón vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 50% Izquierda: La "X" con partículas interactiva y sin contenedor */}
<div className="lg:col-span-6 flex justify-center items-center h-[420px] sm:h-[500px]">
  <ParticleImage
    src={xencoLogoIcon}
    particleSize={2}
    particleDensity={7}
    dispersionStrength={18}
    returnSpeed={0.07}
    className="w-full h-full"
  />
</div>

          {/* 50% Derecha: Tarjetas apiladas con efecto acordeón (hover / click) */}
          <div className="lg:col-span-6 flex flex-col gap-3 h-[600px]">
            {cards.map((card) => {
              const isActive = activeId === card.id;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveId(card.id)}
                  onClick={() => setActiveId(card.id)}
                  className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] p-6 flex flex-col justify-center ${
                    isActive
                      ? "flex-[3.5] bg-white/[0.06] border-[#12967F]/60 shadow-[0_10px_30px_rgba(18,150,127,0.15)]"
                      : "flex-[1] bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Vista resumida (Cuando la tarjeta está colapsada) */}
                  <div className={`absolute inset-0 flex items-center justify-between px-6 transition-opacity duration-500 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-100"
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="text-[#12967F]">
                        {card.icon}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Ver detalle
                    </span>
                  </div>

                  {/* Vista expandida (Cuando la tarjeta está activa) */}
                  <div className={`flex flex-col h-full justify-between transition-all duration-500 ${
                    isActive ? "translate-y-0 opacity-100 delay-200" : "translate-y-6 opacity-0 pointer-events-none absolute"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2.5 rounded-xl bg-[#12967F]/20 text-[#12967F]">
                        {card.icon}
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>

                    {/* Contenido condicional: Texto plano o Lista de elementos */}
                    {card.isList ? (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
                        {card.content.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-xenco-gold shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans line-clamp-4">
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>
                
              );
            })}
          </div>

        </div>
      </div>
      
    </section>
  );
}