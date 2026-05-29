"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Music2 } from "lucide-react";

/* ── Inline SVG brand icons (Lucide removed brand icons in v0.4+) ─────── */
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1-.04z" />
  </svg>
);

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const socials = [
  {
    name: "Twitter / X",
    handle: "@baltaoglou",
    Icon: XIcon,
    href: "https://x.com/baltaoglou",
    stat: "42.3K",
  },
  {
    name: "Instagram",
    handle: "@baltaoglou",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/baltaoglou/",
    stat: "47K",
  },
  {
    name: "TikTok",
    handle: "@baltaoglou",
    Icon: TiktokIcon,
    href: "https://www.tiktok.com/@baltaoglou",
    stat: "420K ❤",
  },
  {
    name: "YouTube",
    handle: "@BaltaogluEmre",
    Icon: YoutubeIcon,
    href: "https://www.youtube.com/@BaltaogluEmre",
    stat: "Aktif",
  },
  {
    name: "Spotify",
    handle: "Socrates GP",
    Icon: SpotifyIcon,
    href: "https://open.spotify.com/show/3TRf66y5fJZ02hkfvz4VWN",
    stat: "Podcast",
  },
  {
    name: "LinkedIn",
    handle: "Emre Baltaoğlu",
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/emre-baltaoglu-0b13b618b/",
    stat: "500+",
  },
];

const quickLinks = [
  { label: "Hikâye", href: "#hikaye" },
  { label: "Projeler", href: "#projeler" },
  { label: "Kariyer", href: "#kariyer" },
  { label: "Referanslar", href: "#referanslar" },
];

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-[#0A0A0A] overflow-hidden">
      {/* Contact CTA band */}
      <div className="border-b border-white/10 py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          >
            <div>
              <p className="eyebrow eyebrow-blue mb-5">İletişim</p>
              <h2
                className="font-black text-white leading-[0.92] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
              >
                Konuşalım.
              </h2>
              <p className="text-[#52525B] text-base mt-4 max-w-sm leading-relaxed">
                Yayın iş birliği, sponsorluk ya da içerik üretimi için doğrudan yaz.
                Cevap süresi genellikle 24 saat.
              </p>
            </div>
            <motion.a
              href="mailto:emrebaltaoglu1@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-3 px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-full text-sm hover:bg-[#1d4ed8] transition-colors duration-200 flex-shrink-0"
            >
              <Mail className="w-4 h-4" />
              emrebaltaoglu1@gmail.com
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Social links grid */}
      <div className="py-16 px-6 md:px-12 lg:px-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {socials.map((social, idx) => {
              const { Icon } = social;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#2563EB]/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-[#2563EB] transition-colors duration-200" />
                    <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-[13px] md:text-sm tracking-tight truncate">{social.handle}</div>
                    <div className="text-white/40 text-[10px] tracking-wide mt-0.5">{social.name}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar with massive wordmark */}
      <div className="relative px-6 md:px-12 lg:px-20 pt-8 pb-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Massive watermark wordmark */}
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-white/[0.05] font-bold leading-none select-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
            >
              BALTAOĞLU
            </motion.div>
          </div>

          {/* Bottom row — legal + nav + credits */}
          <div className="border-t border-white/[0.06] pt-8 space-y-4">
            {/* Nav links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/25 text-xs hover:text-white/50 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Legal row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 border-t border-white/[0.04]">
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center">
                <p className="text-white/20 text-[11px]">
                  © 2026 Emre Baltaoğlu. Tüm hakları saklıdır.
                </p>
                <span className="text-white/10 hidden md:inline">·</span>
                <a href="/gizlilik-politikasi" className="text-white/15 text-[11px] hover:text-white/35 transition-colors duration-200">
                  Gizlilik Politikası
                </a>
                <a href="/cerez-politikasi" className="text-white/15 text-[11px] hover:text-white/35 transition-colors duration-200">
                  Çerez Politikası
                </a>
                <a href="/kullanim-kosullari" className="text-white/15 text-[11px] hover:text-white/35 transition-colors duration-200">
                  Kullanım Koşulları
                </a>
              </div>

              {/* Developer credit */}
              <a
                href="https://www.semihaydin.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 group flex-shrink-0"
              >
                <span className="text-white/15 text-[11px] group-hover:text-white/35 transition-colors duration-200">
                  Developed by
                </span>
                <span className="text-white/25 text-[11px] font-semibold group-hover:text-[#2563EB] transition-colors duration-200">
                  Semih Aydın
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
