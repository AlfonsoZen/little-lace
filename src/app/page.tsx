"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JewelryViewer from "@/components/3d/JewelryViewer";
import BentoGrid from "@/components/ui/BentoGrid";

const MATERIAL_OPTIONS = [
  { id: "gold", label: "Oro 18k", color: "#FFD700" },
  { id: "silver", label: "Plata Esterlina", color: "#C0C0C0" },
  { id: "rose", label: "Oro Rosa", color: "#E0BFB8" },
];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(MATERIAL_OPTIONS[2].color);

  // Componente del Selector de Materiales
  const MaterialPicker = () => (
    <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 glass-panel bg-white/60 p-4 lg:p-6 rounded-2xl shadow-xl border border-white/40 flex flex-col items-center gap-3 lg:gap-4 min-w-[280px] lg:min-w-[300px] z-20">
      <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-on-surface opacity-60">
        Personalizar Material
      </span>
      <div className="flex gap-4">
        {MATERIAL_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedColor(option.color)}
            className={`group relative flex flex-col items-center gap-2 transition-all duration-300 ${
              selectedColor === option.color ? "scale-110" : "hover:scale-105 opacity-60"
            }`}
          >
            <div 
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: option.color }}
            />
            <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-tighter">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen hero-gradient pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          {/* COLUMNA IZQUIERDA (Desktop) / CONTENEDOR PRINCIPAL (Móvil) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            {/* 1. Título y Descripción */}
            <div className="space-y-4">
              <span className="hidden lg:block font-headline text-xs tracking-[0.3em] uppercase text-primary font-semibold opacity-70">
                Colección Artesanal 2024
              </span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tight">
                Arte en Cada <br />
                <span className="italic text-primary-dim">Detalle</span>
              </h1>
              <p className="font-body text-base md:text-lg text-on-surface-variant max-w-md leading-relaxed">
                Piezas únicas que narran historias de herencia y maestría. Cada
                joya de Little Lace es forjada a mano por artesanos dedicados.
              </p>
            </div>

            {/* 2. MODELO MÓVIL (Solo visible en Móvil, entre texto y botones) */}
            <div className="lg:hidden w-full relative -mt-4 mb-16">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
              <JewelryViewer modelUrl="/models/ring.glb" color={selectedColor} />
              <MaterialPicker />
            </div>

            {/* 3. Botones y Acciones */}
            <div className="w-full lg:w-auto space-y-12">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-full font-medium tracking-wide shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-105 active:scale-100 transition-all duration-300">
                  Explorar Colección
                </button>
                <button className="hidden lg:block font-headline text-sm tracking-widest uppercase text-on-surface border-b border-outline-variant/40 pb-1 hover:text-primary hover:border-primary transition-colors duration-300">
                  Nuestra Historia
                </button>
              </div>

              {/* Stats solo para Desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-8 border-t border-outline-variant/15 pt-8">
                <div>
                  <div className="font-headline text-2xl text-primary-dim">100%</div>
                  <div className="font-headline text-[10px] tracking-widest uppercase text-on-surface-variant opacity-60 mt-1">Hecho a Mano</div>
                </div>
                <div>
                  <div className="font-headline text-2xl text-primary-dim">Sostenible</div>
                  <div className="font-headline text-[10px] tracking-widest uppercase text-on-surface-variant opacity-60 mt-1">Oro Ético</div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA (Solo visible en Desktop) */}
          <div className="hidden lg:flex lg:col-span-7 relative justify-center items-center">
            {/* MANCHÓN ROSA RESTAURADO PARA DESKTOP */}
            <div className="absolute w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            <div className="w-full relative">
              <JewelryViewer modelUrl="/models/ring.glb" color={selectedColor} />
              <MaterialPicker />
            </div>
          </div>

        </div>
      </main>
      <BentoGrid />
      <Footer />
    </>
  );
}
