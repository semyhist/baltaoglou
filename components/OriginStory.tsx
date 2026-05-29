"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Tv2, Mic2, TvMinimal } from "lucide-react";

const PANEL_COUNT = 4;

const panels = [
  {
    id: 1,
    index: "01",
    year: "2018",
    tag: "BAŞLANGIÇ",
    accentColor: "#2563EB",
    leftContent: {
      eyebrow: "Sosyal Medya",
      headline: ["Telsiz kurgularından", "dijital topluluğa."],
      body: "Sosyal medyada motor sporları odaklı özgün video kurguları ve F1 pilotlarının telsiz konuşmalarını Türkçeye kazandırarak başladı. Kendi imkanlarıyla ürettiği bu içerikler, kısa sürede geniş bir motorsporları kitlesine ulaştı.",
    },
    rightContent: {
      type: "quote" as const,
      quote: "Twitter'da telsiz konuşmalarını Türkçe dublajlayarak, üstelik sıfır destek görerek başladı işe.",
      attribution: "Ekşi Sözlük",
      stats: [
        { value: "Eyl 2018", label: "İlk Paylaşım" },
        { value: "10 Yıl+", label: "İçerik Üretimi" },
      ],
    },
  },
  {
    id: 2,
    index: "02",
    year: "2019",
    tag: "İNŞA",
    accentColor: "#DC2626",
    leftContent: {
      eyebrow: "Motorsport Türkiye & Diabolica",
      headline: ["Profesyonel editörlükten", "kendi medyasına."],
      body: "2019'da Motorsport.com Türkiye ekibine katılarak profesyonel haberciliğe adım attı. Ardından, motor sporları üzerine analizler sunan bağımsız dijital medya platformu Diabolica'yı hayata geçirdi.",
    },
    rightContent: {
      type: "brand" as const,
      brandName: "DİABOLİCA",
      brandSub: "Dijital Medya Platformu · Kurucu",
      description: "Formula 1, MotoGP ve WorldSBK odaklı analizler, yarış sonu sohbetleri ve güncel haber kurgularıyla bağımsız motor sporları yayını.",
      stats: [
        { value: "Kurucu", label: "Diabolica Platformu" },
        { value: "2.5 Yıl", label: "Editörlük Deneyimi" },
      ],
    },
  },
  {
    id: 3,
    index: "03",
    year: "2023",
    tag: "YAYILMA",
    accentColor: "#2563EB",
    leftContent: {
      eyebrow: "Red Bull & Socrates GP",
      headline: ["Sektör ortaklıkları", "ve en popüler podcast."],
      body: "Red Bull Türkiye ile 5 yıla yayılan içerik iş birliklerini sürdürdü. Socrates Dergi çatısı altında sunuculuğunu üstlendiği Socrates GP podcast'i ile Türkiye'nin en çok dinlenen Formula 1 programlarından birine imza attı.",
    },
    rightContent: {
      type: "quote" as const,
      quote: "Motor sporları alanında yüksek bir potansiyele sahip. Diksiyonu ve anlatış tarzı, vurgu ve tonlamaları çok iyi.",
      attribution: "Ekşi Sözlük",
      stats: [
        { value: "Podcast", label: "Socrates GP Sunumu" },
        { value: "5 Yıl+", label: "Red Bull İş Birliği" },
      ],
    },
  },
  {
    id: 4,
    index: "04",
    year: "2025",
    tag: "GLOBAL VE TV",
    accentColor: "#DC2626",
    leftContent: {
      eyebrow: "Televizyon ve Canlı Anlatım",
      headline: ["Türkiye'nin", "uluslararası sesi."],
      body: "Red Bull TV ekranlarında milli motosikletçi Toprak Razgatlıoğlu'nun WorldSBK şampiyonluk yarışlarının ve Avusturya merkezli Servus TV'de MotoGP canlı yayınlarının resmi Türkçe spikerliğini üstlendi.",
    },
    rightContent: {
      type: "platforms" as const,
      platforms: [
        { name: "Servus TV", role: "MotoGP Canlı Anlatım Spikeri", Icon: Tv2 },
        { name: "Red Bull TV", role: "WorldSBK Canlı Yorumcusu", Icon: TvMinimal },
        { name: "High Limit", role: "Rafine TV Program Sunucusu", Icon: Mic2 },
      ],
      stats: [
        { value: "Canlı Yayın", label: "Resmi TV Spikerliği" },
        { value: "Global", label: "Yayın Altyapısı" },
      ],
    },
  },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function OriginStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop Scroll-driven progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll translation utilizing useSpring to eliminate mouse wheel jitter
  // Maps scroll progress (0->1) to 0 -> -75% of the 400vw track (which is exactly -300vw shift)
  const xPercent = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((PANEL_COUNT - 1) / PANEL_COUNT) * 100]
  );
  const smoothXPercent = useSpring(xPercent, { stiffness: 60, damping: 22, mass: 0.6 });
  const x = useTransform(smoothXPercent, (val) => `${val}%`);

  return (
    <section id="hikaye">
      {/* ──────────────── DESKTOP LAYOUT (Sticky Horizontal Scroll) ──────────────── */}
      <div
        ref={containerRef}
        className="hidden md:block relative bg-[#FAFAFA]"
        style={{ height: `${PANEL_COUNT * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Top label */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 pt-6 pointer-events-none">
            <span className="eyebrow">Kurucu Hikâye</span>
            <span className="eyebrow font-mono opacity-40">
              {panels.map((p) => p.index).join("  ·  ")}
            </span>
          </div>

          {/* Horizontal track — exactly PANEL_COUNT * 100vw wide */}
          <motion.div
            className="flex h-full"
            style={{ x, width: `${PANEL_COUNT * 100}vw` }}
          >
            {panels.map((panel, idx) => (
              <Panel key={panel.id} panel={panel} index={idx} />
            ))}
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E4E4E7] z-20">
            <motion.div
              className="h-full bg-[#0A0A0A]"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>

      {/* ──────────────── MOBILE LAYOUT (Clean Vertical Scroll) ──────────────── */}
      <div className="block md:hidden bg-[#FAFAFA] py-20 px-6 space-y-16">
        {/* Eyebrow & Headline */}
        <div className="border-b border-[#E4E4E7] pb-8">
          <p className="eyebrow mb-2">Kurucu Hikâye</p>
          <h2 className="font-black text-[#0A0A0A] text-3xl tracking-tight leading-tight">
            Başlangıçtan Bugüne.
          </h2>
        </div>

        {/* Vertical Panel List */}
        <div className="space-y-16">
          {panels.map((panel) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-6"
            >
              {/* Year & Tag */}
              <div className="flex items-center gap-3">
                <span
                  className="text-[10px] font-black tracking-[0.3em] uppercase"
                  style={{ color: panel.accentColor }}
                >
                  {panel.tag}
                </span>
                <span className="text-[10px] text-[#A1A1AA] tracking-widest font-mono">
                  {panel.year}
                </span>
              </div>

              {/* Text Content */}
              <div>
                <p className="eyebrow mb-2">{panel.leftContent.eyebrow}</p>
                <h3 className="font-black text-2xl text-[#0A0A0A] tracking-tight leading-tight mb-4">
                  {panel.leftContent.headline.join(" ")}
                </h3>
                <p className="text-[#71717A] text-sm leading-relaxed">
                  {panel.leftContent.body}
                </p>
              </div>

              {/* Right Content Component (Cards / Info) */}
              <div className="pt-2">
                <RightContent panel={panel} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Panel (Desktop) ───────────────────────────────────────────────────
function Panel({
  panel,
  index,
}: {
  panel: (typeof panels)[0];
  index: number;
}) {
  const { leftContent, rightContent, accentColor } = panel;

  return (
    <div
      className="relative w-screen h-full flex-shrink-0 flex items-center px-8 md:px-16 lg:px-24"
      style={{ width: "100vw" }}
    >
      {/* Decorative index watermark */}
      <div className="absolute right-6 bottom-8 pointer-events-none select-none z-0">
        <span className="font-black leading-none text-[18vw] opacity-[0.025] text-[#0A0A0A]">
          {panel.index}
        </span>
      </div>

      {/* Year + tag — top left of panel */}
      <div className="absolute top-16 left-8 md:left-16 flex items-center gap-3">
        <span
          className="text-[10px] font-black tracking-[0.3em] uppercase"
          style={{ color: accentColor }}
        >
          {panel.tag}
        </span>
        <span className="text-[10px] text-[#D4D4D8] tracking-widest font-mono">
          {panel.year}
        </span>
      </div>

      {/* Main two-column grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center h-full py-28">

        {/* LEFT: editorial text */}
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            viewport={{ once: true }}
            className="eyebrow mb-5"
          >
            {leftContent.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            viewport={{ once: true }}
            className="font-black leading-[1.0] tracking-[-0.03em] text-[#0A0A0A] mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            {leftContent.headline.map((line, i) => (
              <span key={i} className="block">
                {i === 1
                  ? <span style={{ color: accentColor }}>{line}</span>
                  : line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            viewport={{ once: true }}
            className="text-[#71717A] text-base leading-[1.75] max-w-sm"
          >
            {leftContent.body}
          </motion.p>
        </div>

        {/* RIGHT: visual element */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-4"
        >
          <RightContent panel={panel} />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Right column renderers ────────────────────────────────────────────
function RightContent({ panel }: { panel: (typeof panels)[0] }) {
  const { rightContent, accentColor } = panel;
  const cardBase = "bg-white border border-[#E4E4E7] rounded-2xl";
  const shadow = { boxShadow: "0 4px 32px rgba(0,0,0,0.06)" };

  if (rightContent.type === "quote") {
    return (
      <>
        <div className={`${cardBase} p-7 md:p-8`} style={shadow}>
          <div
            className="font-serif text-[4.5rem] leading-none -mt-4 -ml-1 mb-1 opacity-15"
            style={{ color: accentColor }}
          >
            "
          </div>
          <p className="text-[#0A0A0A] text-lg md:text-xl font-medium leading-[1.5] tracking-tight mb-5">
            {rightContent.quote}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-4 rounded-full" style={{ background: accentColor }} />
            <span className="eyebrow">{rightContent.attribution}</span>
          </div>
        </div>
        {rightContent.stats && (
          <div className="grid grid-cols-2 gap-3 mt-3">
            {rightContent.stats.map((s) => (
              <div key={s.label} className={`${cardBase} p-5`} style={shadow}>
                <div className="text-xl font-bold tracking-tight mb-0.5" style={{ color: accentColor }}>
                  {s.value}
                </div>
                <div className="eyebrow">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  if (rightContent.type === "brand") {
    return (
      <>
        <div className={`${cardBase} p-7 md:p-8 overflow-hidden relative`} style={shadow}>
          <div
            className="absolute -bottom-6 -right-4 font-black text-[6rem] leading-none opacity-[0.04] select-none"
            style={{ color: accentColor }}
          >
            DİA
          </div>
          <div className="relative z-10">
            <div
              className="font-black tracking-[-0.04em] leading-none mb-2"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: accentColor }}
            >
              {rightContent.brandName}
            </div>
            <div className="eyebrow mb-5">{rightContent.brandSub}</div>
            <p className="text-[#71717A] text-sm leading-relaxed">{rightContent.description}</p>
          </div>
        </div>
        {rightContent.stats && (
          <div className="grid grid-cols-2 gap-3 mt-3">
            {rightContent.stats.map((s) => (
              <div key={s.label} className={`${cardBase} p-5`} style={shadow}>
                <div className="text-xl font-bold tracking-tight mb-0.5" style={{ color: accentColor }}>
                  {s.value}
                </div>
                <div className="eyebrow">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  if (rightContent.type === "platforms") {
    return (
      <>
        <div className="flex flex-col gap-3">
          {rightContent.platforms?.map((platform) => {
            const Icon = platform.Icon;
            return (
              <div
                key={platform.name}
                className={`${cardBase} flex items-center justify-between p-5 group hover:border-[#2563EB]/30 transition-colors duration-300`}
                style={shadow}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: accentColor + "10" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0A0A0A] text-sm leading-tight">{platform.name}</div>
                    <div className="eyebrow mt-0.5">{platform.role}</div>
                  </div>
                </div>
                <div
                  className="w-1.5 h-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"
                  style={{ background: accentColor }}
                />
              </div>
            );
          })}
        </div>
        {rightContent.stats && (
          <div className="grid grid-cols-2 gap-3 mt-3">
            {rightContent.stats.map((s) => (
              <div key={s.label} className={`${cardBase} p-5`} style={shadow}>
                <div className="text-xl font-bold tracking-tight mb-0.5" style={{ color: accentColor }}>
                  {s.value}
                </div>
                <div className="eyebrow">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  return null;
}
