import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-[24px] flex justify-between items-center px-6 lg:px-12 py-4 lg:py-6 shadow-none">
      <div className="text-xl lg:text-2xl font-headline italic text-rose-900">
        Little Lace
      </div>
      <div className="hidden md:flex space-x-8 font-headline text-sm tracking-wide uppercase font-medium">
        <a
          className="text-rose-900 border-b border-yellow-600/40 pb-1 hover:opacity-80 transition-all duration-300"
          href="#"
        >
          Collections
        </a>
        <a
          className="text-zinc-800 hover:text-rose-700 transition-colors hover:opacity-80 transition-all duration-300"
          href="#"
        >
          Bespoke
        </a>
        <a
          className="text-zinc-800 hover:text-rose-700 transition-colors hover:opacity-80 transition-all duration-300"
          href="#"
        >
          Atelier
        </a>
        <a
          className="text-zinc-800 hover:text-rose-700 transition-colors hover:opacity-80 transition-all duration-300"
          href="#"
        >
          Our Story
        </a>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <button className="text-rose-900 hover:opacity-80 transition-all duration-300 scale-90 lg:scale-95 active:scale-100 transition-transform">
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <button className="text-rose-900 hover:opacity-80 transition-all duration-300 scale-90 lg:scale-95 active:scale-100 transition-transform relative">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-tertiary rounded-full"></span>
        </button>
      </div>
    </nav>
  );
}
