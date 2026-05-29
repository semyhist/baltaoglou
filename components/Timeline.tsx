"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const milestones = [
  {
    year: "2016",
    month: "Şubat",
    title: "YouTube Serüveni",
    description: "YouTube kanalı üzerinden motor sporları ve oyun odaklı içerikler üreterek dijital yayıncılık dünyasına adım attı. (Şubat 2016 – Devam Ediyor)",
    accent: "#DC2626",
    size: "sm",
  },
  {
    year: "2019",
    month: "Mart",
    title: "Motorsport.com Türkiye",
    description: "Motorsport.com Türkiye bünyesinde içerik üreticisi olarak profesyonel kariyerine başladı. (Mart 2019 – Haziran 2021)",
    accent: "#6B7280",
    size: "sm",
  },
  {
    year: "2020",
    month: "Ağustos",
    title: "Twitch Yayınları",
    description: "Twitch platformunda düzenli canlı yayınlar gerçekleştirerek topluluğunu genişletti. (Ağustos 2020 – Ekim 2023)",
    accent: "#6B7280",
    size: "sm",
  },
  {
    year: "2021",
    month: "Mart",
    title: "Oxygen Esports",
    description: "Oxygen Esports bünyesinde dijital içerik üreticisi olarak espor ve motor sporları odaklı projeler yürüttü. (Mart 2021 – Ekim 2021)",
    accent: "#6B7280",
    size: "sm",
  },
  {
    year: "2022",
    month: "Haziran",
    title: "FUT Esports",
    description: "Türkiye'nin en büyük espor kulüplerinden FUT Esports bünyesinde içerik üreticiliğini üstlendi. (Haziran 2022 – Temmuz 2023)",
    accent: "#2563EB",
    size: "sm",
  },
  {
    year: "2023",
    month: "Temmuz",
    title: "Socrates Dergi — Yorumculuk",
    description: "Socrates Dergi platformuna konuk yorumcu olarak katılarak Formula 1 ve motor sporları analizleri sundu. (Temmuz 2023 – Aralık 2023)",
    accent: "#DC2626",
    size: "sm",
  },
  {
    year: "2023",
    month: "Eylül",
    title: "Diabolica'nın Kuruluşu",
    description: "Kurucusu olduğu, motor sporları (Formula 1, MotoGP, WorldSBK vb.) odaklı yayınlar yapan dijital medya platformu Diabolica'yı kurdu. (Eylül 2023 – Devam Ediyor)",
    accent: "#2563EB",
    size: "lg",
  },
  {
    year: "2025",
    month: "Mart",
    title: "Red Bull TV",
    description: "Red Bull TV WorldSBK Türkçe spikeri ve yorumcusu olarak milli sporcumuz Toprak Razgatlıoğlu'nun yarışlarını canlı anlattı. (Mart 2025 – Ekim 2025)",
    accent: "#DC2626",
    size: "md",
  },
  {
    year: "2026",
    month: "Şubat",
    title: "Servus TV — MotoGP Spikeri",
    description: "Avusturya merkezli uluslararası spor kanalı Servus TV'de MotoGP yarışlarının resmi Türkçe canlı anlatım spikerliğini yaptı. (Şubat 2026 – Mayıs 2026)",
    accent: "#2563EB",
    size: "lg",
  },
  {
    year: "2026",
    month: "Mart",
    title: "Socrates Dergi — İçerik Üreticisi",
    description: "Socrates Dergi bünyesinde tam zamanlı İçerik Üreticisi olarak çalışmaya başladı ve Socrates GP podcast serisinin seslerinden biri oldu. (Mart 2026 – Devam Ediyor)",
    accent: "#DC2626",
    size: "md",
  },
  {
    year: "2026",
    month: "Mayıs",
    title: "Rafine TV — High Limit Yorumcusu",
    description: "Rafine TV platformunda Kubilay Vergili ile MotoGP, F1 ve WRC yarış analiz programı High Limit'i sunmaya başladı. (Mayıs 2026 – Devam Ediyor)",
    accent: "#2563EB",
    size: "lg",
  },
];

const sizeMap = { sm: "text-sm", md: "text-base", lg: "text-base" };

export default function Timeline() {
  return (
    <section id="kariyer" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header — editorial, split layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-28 items-end"
        >
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#9CA3AF] uppercase mb-4">
              2016 — 2026
            </p>
            <h2
              className="font-black text-[#0A0A0A] leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Kariyer
              <br />
              <span className="text-[#E5E7EB]">Yolculuğu.</span>
            </h2>
          </div>
          <p className="text-[#6B7280] text-base leading-relaxed md:max-w-xs">
            Sıfır destekle Twitter'dan başlayan yolculuğun uluslararası bir TV platformuna uzanan hikâyesi — on bir dönüm noktası.
          </p>
        </motion.div>

        {/* Timeline — horizontal year rail + vertical cards */}
        <div className="relative">
          {/* Vertical connector line — aligned exactly to the center of the gap-8 flex spacing */}
          <div className="absolute top-0 bottom-0 w-px bg-[#E5E7EB] hidden md:block" style={{ left: "8rem" }} />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <TimelineRow key={i} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const isHighlight = milestone.size === "lg";

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: EASE }}
      viewport={{ once: true, margin: "-60px" }}
      className={`relative flex gap-0 md:gap-8 items-start group ${
        isHighlight ? "py-8" : "py-5"
      } border-b border-[#F1F5F9] last:border-0`}
    >
      {/* Year column */}
      <div className="hidden md:flex w-28 flex-shrink-0 flex-col items-end pr-6 pt-1 relative z-10">
        <span
          className={`font-bold tabular-nums leading-none ${
            isHighlight ? "text-2xl text-[#0A0A0A]" : "text-base text-[#9CA3AF]"
          }`}
        >
          {milestone.year}
        </span>
        {milestone.month && (
          <span className="text-[10px] text-[#CBD5E1] tracking-widest uppercase mt-0.5">
            {milestone.month}
          </span>
        )}
      </div>

      {/* Dot — centered exactly on the vertical connector line at left-[8rem] */}
      <div className="hidden md:flex absolute -translate-x-1/2 top-[1.6rem] z-20 items-center justify-center" style={{ left: "8rem" }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20, delay: index * 0.04 + 0.1 }}
          viewport={{ once: true }}
          className={`rounded-full border-2 border-[#FAFAFA] transition-all duration-300 ${
            isHighlight ? "w-4 h-4" : "w-2.5 h-2.5"
          } group-hover:scale-110`}
          style={{ background: milestone.accent }}
        />
      </div>

      {/* Content */}
      <div className={`flex-1 min-w-0 ${isHighlight ? "" : ""}`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-8">
          {/* Mobile year */}
          <span className="md:hidden text-xs font-bold text-[#9CA3AF] mb-1">
            {milestone.year}
          </span>

          <div className="flex-1">
            <h3
              className={`font-bold leading-tight tracking-tight text-[#0A0A0A] mb-2 ${
                isHighlight ? "text-xl md:text-2xl" : "text-base md:text-lg"
              }`}
            >
              {milestone.title}
            </h3>
            <p className={`text-[#6B7280] leading-relaxed ${sizeMap[milestone.size as keyof typeof sizeMap]} max-w-lg`}>
              {milestone.description}
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
