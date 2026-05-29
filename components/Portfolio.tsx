"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mic, Radio, Podcast, Tv2, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Custom vector SVGs for motorsport brands to ensure pixel-perfect rendering (no fuzzy raster assets)
const DiabolicaLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 22H58C75 22 84 31 84 45C84 59 75 68 58 68H36L31 81H20L31 59H25L25 22ZM37 32L37 50H56C64 50 69 46 69 41C69 36 64 32 56 32H37Z"
      fill="#FFFFFF"
    />
    <path d="M15 22H22L13 59H6L15 22Z" fill="#DC2626" />
  </svg>
);

const RafineTVLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="18" width="64" height="64" rx="14" stroke="#FFFFFF" strokeWidth="4" />
    <path
      d="M56 32L38 52H52L44 68L62 48H48L56 32Z"
      fill="#2563EB"
      stroke="#2563EB"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Portfolio() {
  return (
    <section id="projeler" className="py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="eyebrow mb-4">Projeler & İş Birlikleri</p>
          <div className="flex items-end justify-between">
            <h2
              className="font-black text-white leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Yapılanlar.
            </h2>
            <p className="hidden md:block text-[#52525B] text-sm max-w-[220px] leading-relaxed text-right">
              Uluslararası yayıncılıktan bağımsız motor sporları medya projelerine.
            </p>
          </div>
        </motion.div>

        {/* FEATURE CARD — Servus TV */}
        <FeatureCard />

        {/* Bento Row 2 (3 Cards: Red Bull TV 2-col, Diabolica 1-col, Socrates GP 1-col) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <LogoCard
            index={1}
            tag="2025 Sezonu"
            title="Red Bull TV"
            subtitle="WorldSBK Yorumcusu · Mart 2025 – Ekim 2025"
            description="Toprak Razgatlıoğlu'nun WorldSBK yarışlarında Türkçe yorum sesi."
            accentColor="#DC2626"
            icon={Radio}
            href="https://www.redbull.com/int-en/redbull-tv"
            span={2}
            logoSrc="/red-bull-tv-logo.svg"
            bgImage="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2023/8/8/kpzlnhoe4aaugaw5zqto/red-bull-racing-formula-4" // Official Red Bull Racing photo
          />
          <LogoCard
            index={2}
            tag="Founder · Eyl 2023"
            title="Diabolica"
            subtitle="Podcast & Video Serisi · Eylül 2023 – Günümüz"
            description="Ekim 2023'te kurulan, motor sporları (F1, MotoGP, WorldSBK) analiz platformu."
            accentColor="#2563EB"
            icon={Mic}
            href="https://www.instagram.com/dia8olica/"
            span={1}
            logoSrc="/diabolicawhitebg.jpg"
            bgImage="https://pbs.twimg.com/media/HJLjwnSXIAAsNZL.jpg" // Diabolica background
            bgPosition="95% center" // Slide left to show more of the right side of the image
          />
          <LogoCard
            index={3}
            tag="Socrates Dergi"
            title="Socrates GP"
            subtitle="F1 İçerik Üreticisi · Mart 2026 – Günümüz"
            description="Socrates Dergi çatısı altında hazırlanan popüler Formula 1 podcast serisi."
            accentColor="#DC2626"
            icon={Podcast}
            href="https://open.spotify.com/show/3TRf66y5fJZ02hkfvz4VWN"
            span={1}
            logoSrc="/socrateslogopng.png"
            bgImage="/socrateslogobg.jpg" // Local high-res Socrates GP theme cover image
          />
        </div>

        {/* Bento Row 3 (2 Cards: High Limit 1-col of 2-grid, Stats 1-col of 2-grid) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <LogoCard
            index={4}
            tag="Rafine TV · 2026"
            title="High Limit"
            subtitle="Program Yorumcusu · Mayıs 2026 – Günümüz"
            description="Kubilay Vergili ile MotoGP, F1 ve WRC yarış analiz programı."
            accentColor="#2563EB"
            icon={Zap}
            href="https://www.youtube.com/@RafineTV"
            span={1}
            logoSrc="/rafinegraybg.jpg"
            bgImage="https://i.ytimg.com/vi/kgDrSsTd4Co/maxresdefault.jpg" // High Limit YouTube Cover
          />

          {/* Stats cell — Premium telemetry style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#111] to-[#0A0A0A] p-8 flex flex-col justify-between relative overflow-hidden min-h-[260px]"
          >
            {/* Background scanner lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_50%,transparent_50%)] [background-size:100%_4px]" />
            <div className="relative z-10">
              <p className="eyebrow mb-6 text-white/40">2018 — 2026 METRİKLER</p>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-black text-white tracking-tight tabular-nums">89K+</div>
                  <div className="eyebrow mt-1 text-white/50">Toplam Takipçi Sayısı</div>
                </div>
                <div className="h-px bg-white/[0.08]" />
                <div>
                  <div className="text-2xl font-black text-[#2563EB] tracking-tight">5</div>
                  <div className="eyebrow mt-1 text-white/50">Aktif Yayın Platformu</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Feature Card — Servus TV ─────────────────────────────── */
function FeatureCard() {
  return (
    <motion.a
      href="https://www.servustv.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: EASE }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111] p-8 md:p-12 cursor-pointer min-h-[380px]"
      style={{ boxShadow: "0 0 80px rgba(37,99,235,0.03)" }}
    >
      {/* Background Image — MotoGP racer action, dark styled */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.diken.com.tr/wp-content/uploads/2025/11/2025-11-18-toprak-razgatlioglu-aa-2.jpg"
          alt="MotoGP Racing Background"
          fill
          className="object-cover opacity-25 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
        {/* Soft Vignette Overlay to maintain contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent" />
      </div>

      {/* Top row: tags and logo */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 w-full">
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 backdrop-blur-sm">
            <span className="eyebrow eyebrow-blue text-[9px]">Uluslararası Yayın</span>
          </div>
          <span className="eyebrow text-white/50">Avusturya · Red Bull GmbH</span>
        </div>

        {/* SVG Logo */}
        <div className="w-28 h-12 rounded-xl overflow-hidden border border-white/[0.08] bg-[#1A1A1A]/80 backdrop-blur-md flex items-center justify-center p-2 opacity-95 group-hover:opacity-100 transition-opacity">
          <Image
            src="/ServusTV_Logo.svg"
            alt="Servus TV"
            width={100}
            height={36}
            className="object-contain w-full h-full filter grayscale invert brightness-200"
          />
        </div>
      </div>

      {/* Bottom Row: title and descriptions */}
      <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full">
        <div>
          <h3
            className="font-black text-white leading-[0.88] tracking-[-0.04em] mb-3"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Servus TV
          </h3>
          <p className="text-[#2563EB] text-sm font-bold tracking-wider uppercase">
            MotoGP Türkçe Spikeri · Şubat 2026 – Mayıs 2026
          </p>
        </div>

        <div className="md:max-w-sm justify-self-start md:justify-self-end">
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Red Bull&apos;a ait Avusturya merkezli uluslararası spor kanalı. MotoGP yarışlarının resmi Türkçe canlı anlatım spikerliğini üstlenerek Türk motorsporları sesini küresel sahneye taşımaktadır.
          </p>
          <div className="flex items-center gap-2 text-[#2563EB] text-sm font-bold group-hover:gap-3 transition-all duration-200">
            <span>Yayınları İncele</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

/* ─── Logo Card ─────────────────────────────────────────────── */
function LogoCard({
  index, tag, title, subtitle, description,
  accentColor, icon: Icon, href, span,
  logoSrc, customSvg: CustomSvg, bgImage,
  bgPosition,
}: {
  index: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  icon: React.ElementType;
  href: string;
  span?: number;
  logoSrc?: string;
  customSvg?: React.ComponentType<{ className?: string }>;
  bgImage?: string;
  bgPosition?: string;
}) {
  const colSpan = span === 2 ? "md:col-span-2" : "md:col-span-1";
  const isInverted = title === "Diabolica" || title === "High Limit" || title === "Servus TV";
  const isSocrates = title === "Socrates GP";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, y: -2 }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#111] p-7 cursor-pointer min-h-[260px] overflow-hidden ${colSpan}`}
    >
      {/* Background Cover Image with dark overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={`${title} Cover`}
            fill
            className="object-cover opacity-15 group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            style={{ objectPosition: bgPosition || "center" }}
          />
          {/* Subtle gradient to ensure high readability on overlay text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </div>
      )}

      {/* Hover accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ background: `radial-gradient(circle at 20% 80%, ${accentColor}12 0%, transparent 60%)` }}
      />

      {/* Top Row: Logo Badge and Action Icon */}
      <div className="relative z-20 flex items-start justify-between">
        {CustomSvg ? (
          <div className="w-12 h-12 overflow-hidden flex items-center justify-center border border-white/[0.06] bg-[#1A1A1A]/95 rounded-xl p-2.5 backdrop-blur-sm shadow-md">
            <CustomSvg className="w-full h-full text-white" />
          </div>
        ) : logoSrc ? (
          <div
            className={`w-12 h-12 overflow-hidden flex items-center justify-center border border-white/[0.06] bg-[#1A1A1A]/95 backdrop-blur-sm shadow-md ${
              isSocrates ? "rounded-full p-0" : "rounded-xl p-1.5"
            }`}
          >
            <Image
              src={logoSrc}
              alt={title}
              width={48}
              height={48}
              className={`object-contain w-full h-full ${
                isInverted ? "filter grayscale invert brightness-200" : ""
              }`}
            />
          </div>
        ) : (
          <div
            className="w-12 h-12 rounded-xl border border-white/[0.06] bg-[#1A1A1A]/95 flex items-center justify-center"
          >
            <Icon className="w-5 h-5" style={{ color: accentColor }} />
          </div>
        )}
        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors duration-200" />
      </div>

      {/* Bottom Content Row */}
      <div className="relative z-20 mt-8">
        <p className="eyebrow mb-2" style={{ color: accentColor }}>{tag}</p>
        <h3 className="text-white font-bold text-xl tracking-tight leading-tight mb-2">{title}</h3>
        <p className="text-white/60 text-xs mb-3 font-semibold">{subtitle}</p>
        {description && (
          <p className="text-white/45 text-[11px] leading-relaxed max-w-sm">{description}</p>
        )}
      </div>
    </motion.a>
  );
}
