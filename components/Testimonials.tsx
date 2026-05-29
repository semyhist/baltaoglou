"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const row1 = [
  { quote: "Motorsport Türkiye'de editör olduğunu öğrendiğim gayet mütevazi ve işinden anlayan bir genç.", source: "Ekşi Sözlük" },
  { quote: "Diksiyonu ve anlatış tarzı, vurgu ve tonlamaları çok iyi. Motor sporlarında yüksek potansiyel.", source: "Ekşi Sözlük" },
  { quote: "Twitter'da telsiz konuşmalarını Türkçe dublajlayarak, üstelik sıfır destek görerek başladı.", source: "Ekşi Sözlük" },
  { quote: "Toprak'ın yarışlarında onun sesiyle izlemek bambaşka bir his. Tam yerinde bir seçim.", source: "Takipçi" },
  { quote: "Servus TV'de Türkçe yorum alabilmek inanılmaz. Emre bu işi kesinlikle hak ediyor.", source: "Takipçi" },
];

const row2 = [
  { quote: "Häkkinen röportajı Türk motor sporları medyasının en özel anlarından biriydi.", source: "Sektör" },
  { quote: "Socrates GP, Türkiye'nin en iyi F1 podcastidir. Tartışmasız.", source: "Apple Podcasts" },
  { quote: "High Limit'in ilk bölümünden beri takip ediyorum, her hafta daha iyi.", source: "İzleyici" },
  { quote: "5 yıl Red Bull ile çalışmak çıtayı çok yükseltti — hâlâ daha yukarı çekiyor.", source: "Sektör" },
  { quote: "Emre gibi birileri olmazsa Türk motor sporları medyası bu kadar ileri gidemezdi.", source: "Ekşi Sözlük" },
];

export default function Testimonials() {
  return (
    <section id="referanslar" className="py-24 md:py-32 overflow-hidden bg-white">

      {/* Section header — left-aligned, no rule lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        viewport={{ once: true }}
        className="px-6 md:px-12 lg:px-20 mb-14"
      >
        <div className="max-w-6xl mx-auto flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#9CA3AF] uppercase mb-4">
              Sektör Görüşleri
            </p>
            <h2
              className="font-black text-[#0A0A0A] leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
            >
              Söylenenler.
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-[#9CA3AF] text-xs max-w-[180px] text-right leading-relaxed">
              Takipçilerden, Ekşi Sözlük'ten ve sektörden geri bildirimler.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden mb-3">
        <div
          className="flex gap-3 animate-marquee"
          style={{ width: "max-content", animationDuration: "32s" }}
        >
          {row1.map((t, i) => (
            <QuoteCard key={i} testimonial={t} variant="light" />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right, dark */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-3 animate-marquee-reverse"
          style={{ width: "max-content", animationDuration: "28s" }}
        >
          {row2.map((t, i) => (
            <QuoteCard key={i} testimonial={t} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({
  testimonial,
  variant,
}: {
  testimonial: { quote: string; source: string };
  variant: "light" | "dark";
}) {
  const isLight = variant === "light";

  return (
    <div
      className={`flex-shrink-0 w-72 md:w-80 rounded-xl px-6 py-5 border ${
        isLight
          ? "bg-[#FAFAFA] border-[#E5E7EB]"
          : "bg-[#0A0A0A] border-[#1F2937]"
      }`}
    >
      {/* Source tag */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-1 h-1 rounded-full ${isLight ? "bg-[#2563EB]" : "bg-[#DC2626]"}`} />
        <span
          className={`text-[9px] font-bold tracking-[0.25em] uppercase ${
            isLight ? "text-[#2563EB]" : "text-[#DC2626]"
          }`}
        >
          {testimonial.source}
        </span>
      </div>

      {/* Quote text */}
      <p
        className={`text-sm leading-[1.65] ${
          isLight ? "text-[#374151]" : "text-white/70"
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}
