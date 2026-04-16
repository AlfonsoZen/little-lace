import React from "react";

export default function Footer() {
  return (
    <footer className="bg-stone-50 w-full pt-20 pb-10 flat no-shadows">
      <div className="flex flex-col items-center gap-8 px-8 max-w-7xl mx-auto">
        <div className="text-lg font-headline italic text-rose-800">
          Little Lace Artisanal Jewelry
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <a
            className="font-headline text-xs tracking-widest uppercase text-zinc-500 hover:text-rose-800 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-zinc-500 hover:text-rose-800 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-zinc-500 hover:text-rose-800 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Shipping & Returns
          </a>
          <a
            className="font-headline text-xs tracking-widest uppercase text-zinc-500 hover:text-rose-800 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Contact Us
          </a>
        </div>
        <div className="flex gap-6 mt-4">
          <a
            className="text-rose-900 hover:scale-110 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
          <a
            className="text-rose-900 hover:scale-110 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
        <div className="w-full h-px bg-outline-variant/10 mt-8"></div>
        <div className="font-headline text-xs tracking-widest uppercase text-rose-900 opacity-60">
          © 2024 Little Lace Artisanal Jewelry
        </div>
      </div>
    </footer>
  );
}
