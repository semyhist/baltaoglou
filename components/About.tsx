"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// Animated counter hook
function useCounter(target: number, duration = 1.8, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { value: 47, suffix: "K", label: "Instagram Takipçi", sublabel: "@baltaoglou" },
  { value: 42, suffix: "K", label: "X (Twitter) Takipçi", sublabel: "@baltaoglou · Eyl 2018'den beri" },
  { value: 5, suffix: "Y+", label: "Red Bull Türkiye", sublabel: "2020 — 2025" },
  { value: 420, suffix: "K+", label: "TikTok Beğeni", sublabel: "@baltaoglou" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#050505] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Top row: eyebrow + description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-28 items-end"
        >
          <div>
            <h2 className="eyebrow eyebrow-blue mb-5">Hakkında</h2>
            {/* Red Bull photo */}
            <div className="relative w-full max-w-xs rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/baltaogluredbull.jpg"
                alt="Emre Baltaoğlu — Red Bull"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
            </div>
            <blockquote
              className="text-white font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
            >
              &ldquo;10 yıldır sosyal medya içerisinde içerik üreticiliği yapıyorum.&rdquo;
            </blockquote>
            <p className="text-[#52525B] text-xs tracking-widest uppercase mt-3">
              — Emre Baltaoğlu, LinkedIn 2026
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-[#71717A] text-base leading-[1.75]">
              Anadolu Üniversitesi mezunu. Kariyerine Twitter&apos;da telsiz dublajları yaparak başladı — sponsorsuz, desteksiz, sadece sesiyle. Servus TV&apos;de MotoGP spikerliği ve Red Bull TV&apos;de WorldSBK yorumculuğu yaparak motor sporlarının sesi oldu. Socrates Dergi ve Rafine TV bünyesinde profesyonel yayıncılık ve içerik üreticiliği hayatını sürdürmektedir.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linktr.ee/emrebaltaoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] hover:text-white transition-colors duration-200 border-b border-[#2563EB]/30 pb-0.5 hover:border-white/30"
              >
                Linktree →
              </a>
              <a
                href="mailto:emrebaltaoglu1@gmail.com"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#52525B] hover:text-white transition-colors duration-200 border-b border-[#52525B]/30 pb-0.5 hover:border-white/30"
              >
                E-posta →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats grid — big animated numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#1C1C1C]">
          {stats.map((s, i) => (
            <StatCell key={i} stat={s} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom: current positions strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {[
            { label: "Rafine TV", role: "High Limit Yorumcusu", active: true },
            { label: "Socrates Dergi", role: "F1 İçerik Üreticisi", active: true },
            { label: "Diabolica", role: "Kurucu", active: true },
            { label: "Servus TV", role: "MotoGP Spikeri", active: false },
          ].map((pos) => (
            <div
              key={pos.label}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border ${
                pos.active
                  ? "border-[#2563EB]/30 bg-[#2563EB]/8"
                  : "border-[#2A2A2A] bg-[#111111]"
              }`}
            >
              {pos.active && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2563EB]"></span>
                </span>
              )}
              <span className="text-white text-xs font-bold">{pos.label}</span>
              <span className="text-[#52525B] text-[10px]">{pos.role}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCell({
  stat,
  index,
  inView,
}: {
  stat: typeof stats[0];
  index: number;
  inView: boolean;
}) {
  const count = useCounter(stat.value, 1.6 + index * 0.1, inView);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.07, ease: EASE }}
      className="bg-[#0A0A0A] px-6 py-8 md:px-8 md:py-10 flex flex-col gap-3"
    >
      <div className="flex items-end gap-0.5 leading-none">
        <span
          className="font-black text-white tabular-nums"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {count}
        </span>
        <span
          className="font-black text-[#2563EB] mb-1"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          {stat.suffix}
        </span>
      </div>
      <div>
        <p className="text-white text-sm font-semibold leading-tight">{stat.label}</p>
        <p className="text-[#52525B] text-[11px] tracking-wide mt-0.5">{stat.sublabel}</p>
      </div>
    </motion.div>
  );
}
