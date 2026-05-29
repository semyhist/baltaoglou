"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "Hikâye", href: "#hikaye" },
  { label: "Projeler", href: "#projeler" },
  { label: "Kariyer", href: "#kariyer" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#F1F5F9] py-3"
            : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#hero"
            className={`font-black tracking-[-0.04em] transition-colors duration-300 text-sm ${
              scrolled ? "text-[#0A0A0A]" : "text-white"
            }`}
          >
            BALTAOĞLU
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.filter((link) => link.href !== "#iletisim").map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[0.06em] uppercase transition-colors duration-200 hover:text-[#2563EB] ${
                  scrolled ? "text-[#6B7280]" : "text-white/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#iletisim"
              className={`text-[10px] font-bold px-5 py-2.5 rounded-full tracking-[0.08em] uppercase transition-all duration-200 ${
                scrolled
                  ? "bg-[#0A0A0A] text-white hover:bg-[#2563EB]"
                  : "border border-white/20 text-white hover:bg-white hover:text-[#0A0A0A]"
              }`}
            >
              İletişim
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex flex-col gap-[5px] p-2 ${
              scrolled ? "text-[#0A0A0A]" : "text-white"
            }`}
            aria-label="Menü"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-current rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-[1.5px] bg-current rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-current rounded-full"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 bg-[#0A0A0A] md:hidden flex flex-col pt-28 px-8 pb-12"
      >
        {/* Big nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.08 * idx + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setMobileOpen(false)}
              className="block text-3xl font-black text-white/80 hover:text-white hover:text-[#2563EB] py-3 border-b border-white/[0.06] transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Bottom social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mobileOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.45 }}
          className="flex gap-5 pt-8"
        >
          {[
            ["Twitter", "https://x.com/baltaoglou"],
            ["Instagram", "https://www.instagram.com/baltaoglou/"],
            ["YouTube", "https://www.youtube.com/@BaltaogluEmre"],
          ].map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-[#2563EB] transition-colors"
            >
              {name}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
