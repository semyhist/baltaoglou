"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Bottom ticker items
const tickerItems = [
  "Servus TV · MotoGP Spikeri",
  "Red Bull TV · WorldSBK Yorumcusu",
  "Toprak Razgatlıoğlu · Türkçe Yorum Sesi",
  "Mika Häkkinen · Özel Röportaj",
  "5 Yıl · Red Bull Türkiye",
  "High Limit · Rafine TV",
  "Socrates GP · Podcast Sunucusu",
  "42K+ X (Twitter) · 47K+ Instagram",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const smoothContentY = useSpring(contentY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.65;

      const handleVideoLoad = () => {
        setVideoLoaded(true);
      };

      // Add native event listeners to avoid React hydration race conditions
      video.addEventListener("loadeddata", handleVideoLoad);
      video.addEventListener("canplay", handleVideoLoad);

      // If the video is already loaded from cache, trigger load state immediately
      if (video.readyState >= 2) {
        handleVideoLoad();
      }

      // Explicitly trigger play to bypass browser autoplay policies
      video.play().catch((err) => {
        console.log("Autoplay blocked, retrying muted:", err);
        video.muted = true;
        video.play().catch((e) => console.error("Muted play blocked:", e));
      });

      return () => {
        video.removeEventListener("loadeddata", handleVideoLoad);
        video.removeEventListener("canplay", handleVideoLoad);
      };
    }
  }, []);

  const wordVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
  };
  const charVariant: Variants = {
    hidden: { opacity: 0, y: 80, skewY: 4 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.85, ease: EASE },
    },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  const allChars = "EMRE BALTAOĞLU".split("");

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[100dvh] overflow-hidden bg-[#050505]"
    >
      {/* ── Video ─────────────────────────────────── */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Optimized lite scene pack — loads faster on both mobile and desktop */}
          <source src="/baltaoglouvideolite.mp4" type="video/mp4" />
        </video>
        {/* Fallback */}
        <div
          className={`absolute inset-0 bg-[#050505] transition-opacity duration-[1500ms] ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Subtle high-tech telemetry grid overlay to mask compression artifacts */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px]" />
        {/* Subtle horizontal scanline overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(rgba(0,0,0,0.2)_50%,transparent_50%)] [background-size:100%_4px]" />
      </motion.div>

      {/* ── Overlay system ────────────────────────── */}
      {/* Hard vignette from bottom — this is what gives it editorial feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent z-10" />
      {/* Sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent z-10" />
      {/* Top */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#050505]/40 to-transparent z-10" />

      {/* ── Main content ────────────────────────── */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-end pb-32 md:pb-40 px-8 md:px-16 lg:px-20"
        style={{ y: smoothContentY, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#2563EB]" />
          <span className="text-[#2563EB] text-[10px] font-bold tracking-[0.35em] uppercase">
            Türkiye&apos;nin Motorsporları Sesi
          </span>
        </motion.div>

        {/* Massive left-aligned title */}
        <h1 className="overflow-hidden mb-4">
          <motion.div
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row flex-wrap md:gap-x-[0.35em] gap-y-1"
            aria-label="Emre Baltaoğlu"
          >
            {/* Word 1: EMRE */}
            <div className="flex flex-row">
              {"EMRE".split("").map((char, idx) => (
                <motion.span
                  key={`emre-${idx}`}
                  variants={charVariant}
                  className="inline-block text-white font-black leading-[0.88] tracking-[-0.02em] select-none"
                  style={{ fontSize: "clamp(2.8rem, 9.5vw, 9.5rem)" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Word 2: BALTAOĞLU */}
            <div className="flex flex-row">
              {"BALTAOĞLU".split("").map((char, idx) => (
                <motion.span
                  key={`baltaoglu-${idx}`}
                  variants={charVariant}
                  className="inline-block text-white font-black leading-[0.88] tracking-[-0.02em] select-none"
                  style={{ fontSize: "clamp(2.8rem, 9.5vw, 9.5rem)" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </h1>

        {/* Role line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-8"
        >
          <span className="text-white/50 text-xs md:text-sm tracking-[0.12em] uppercase font-light">
            Servus TV MotoGP Spikeri
          </span>
          <div className="hidden sm:block w-px h-3 bg-white/20" />
          <span className="text-white/50 text-xs md:text-sm tracking-[0.12em] uppercase font-light">
            Red Bull TV WorldSBK Yorumcusu
          </span>
          <div className="hidden sm:block w-px h-3 bg-white/20" />
          <span className="text-white/50 text-xs md:text-sm tracking-[0.12em] uppercase font-light">
            High Limit Sunucusu
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.45 }}
          className="flex items-center gap-4"
        >
          <motion.a
            href="#iletisim"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-7 py-3 bg-[#2563EB] text-white text-xs font-bold tracking-[0.08em] uppercase rounded-full hover:bg-[#1d4ed8] transition-colors duration-200"
          >
            İletişime Geç
          </motion.a>
          <motion.a
            href="#projeler"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-7 py-3 border border-white/20 text-white/70 text-xs font-bold tracking-[0.08em] uppercase rounded-full hover:border-white/40 hover:text-white transition-all duration-200"
          >
            Projeleri Gör
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Right-side stats (desktop) ────────────── */}
      <motion.div
        className="absolute right-10 bottom-36 z-20 hidden lg:flex flex-col gap-6 text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.7, ease: EASE }}
      >
        {[
          { val: "47K", label: "Instagram" },
          { val: "42K", label: "X (Twitter)" },
          { val: "5Y+", label: "Red Bull" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-white text-2xl font-bold leading-none">{s.val}</div>
            <div className="text-white/30 text-[10px] tracking-[0.2em] uppercase mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── Bottom ticker ─────────────────────────── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-[#050505]/80 backdrop-blur-sm py-3 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div
          className="flex animate-marquee gap-0"
          style={{ width: "max-content", animationDuration: "35s" }}
        >
          {tickerItems.map((item, i) => (
            <span key={i} className="flex items-center gap-6 flex-shrink-0 px-6">
              <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#2563EB]/40 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll arrow ──────────────────────────── */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <ArrowDown className="w-3.5 h-3.5 text-white/20" />
        </motion.div>
        <div
          className="text-white/15 text-[9px] tracking-[0.3em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Kaydır
        </div>
      </motion.div>
    </section>
  );
}
