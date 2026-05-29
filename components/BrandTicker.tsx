"use client";

// Subtle brand strip between Hero and About.
// Dark background, very quiet — doesn't compete with Hero.
const items = [
  "SERVUS TV",
  "RED BULL TV",
  "MOTOGP",
  "WORLDSBK",
  "DIABOLICA",
  "SOCRATES GP",
  "HIGH LIMIT",
  "RED BULL TÜRKİYE",
  "RAFINE TV",
  "MOTUL",
  "MOTORSPORT TR",
  "FORMULA ADDICT",
];

export default function BrandTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#050505] border-y border-[#1C1C1C] py-4 select-none">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <div
        className="flex gap-0 animate-marquee"
        style={{ width: "max-content", animationDuration: "28s" }}
      >
        {doubled.map((name, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="text-[#2A2A2A] text-[11px] font-black tracking-[0.35em] uppercase px-6 whitespace-nowrap hover:text-[#444] transition-colors duration-300">
              {name}
            </span>
            <span className="text-[#1C1C1C] text-[8px]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
