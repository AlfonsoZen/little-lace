import React from "react";

const items = [
  {
    title: "La Promesa",
    subtitle: "Anillos de Compromiso",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGBEOr8su4i9o21kDS11sl_qNwGjRU2LE5eqW-62_HRrM6A2BDg4c4WTbzk3ljjgo-2Uqh0-YR9wWHJuHmGto8lVmQHrOyu1tzopbXurnInuyPQRpkCD3HzaxcZ2hilRJ5qffPPJzxHHMivSTxJDj4HnKpadEmITEQ8VIXsTAZP6qW-sag9u9YKxARGwWy2Wnczv7LOWaEs6TqvGGQChdycnY3cMSpQ2ZoSwsSovsYa6EqJrLuKjDc7Glh_d2AAn-_114RKIY2GG_A",
    span: "md:col-span-8",
  },
  {
    title: "Gota de Oro",
    subtitle: "Pendientes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCieQmH1Gime1ox0s_Da3b1tb4Fsqx0RTFl0mFrKO_ngWSs8aEXWxZQBJKfkDKlf8GMwQcnZGVfbE0_rSNZ69c09-xxKXSHWUjEy8zhvhCokVfq5ybSKH4z1fOiCYucZkElK-B-QYcIz7dGeix9fg9RP95fa7GWt1ttG_IJo7A01SivCmm9ZWDrdN3QAY-ZjTwh_-DFqxcp36VHMJ4udNl8seQcNOGng6WKi_2IfRTtSlyXTnaN5-RmIxJVFw_P_txc2uKLf1apIsCq",
    span: "md:col-span-4",
  },
  {
    title: "Piezas a Medida",
    subtitle: "Colabora con nuestros maestros joyeros",
    isCTA: true,
    span: "md:col-span-4",
  },
  {
    title: "Elegancia Fluida",
    subtitle: "Brazaletes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTD6-ostgJJb2KP0PYDupfFgIksJoS0tEhBqvOSpo5fngnf6yf2wRzsyQGQi4ofDhdav5LU-8Yu5Mm0qwW_40n_wBVuJWg-hNY2p9Ip5wdDKe3G-rDf9Hx5Ouo5YzbUXJPBo4KMAntQPGldJ4dZPmNh2IFWLims38A-gLs_P50RKdNl2cWlbOgOvc7lBFmSPGvlWxeryEDQJ70BCEPUgsvcntrgqdhPOFwib_Ch7MnZhjgRl_UuvMZkseVIdm4ertuDyvsXz23iJb5",
    span: "md:col-span-8",
  },
];

export default function BentoGrid() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-headline text-4xl text-on-surface mb-4 italic">
            Selección del Atelier
          </h2>
          <div className="w-24 h-px bg-tertiary-fixed-dim"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} ${
                item.isCTA
                  ? "bg-primary-container/20 p-12 flex flex-col justify-center items-center text-center"
                  : "bg-surface-container-low rounded-lg overflow-hidden group relative"
              }`}
            >
              {item.isCTA ? (
                <>
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">
                    auto_awesome
                  </span>
                  <h3 className="font-headline text-2xl text-primary-dim mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mb-6">
                    {item.subtitle}
                  </p>
                  <button className="text-primary font-bold text-xs tracking-widest uppercase border-b-2 border-primary/20 pb-1">
                    Agendar Cita
                  </button>
                </>
              ) : (
                <>
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-white font-headline text-xs tracking-widest uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="text-white font-headline text-2xl mt-2">
                      {item.title}
                    </h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
