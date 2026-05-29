import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import About from "@/components/About";
import OriginStory from "@/components/OriginStory";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

/*
  Renk Ritmi (koyu/açık/koyu alternation):
  Hero       → KOYU  (#050505) — tam ekran video
  Ticker     → KOYU  (#050505) — geçiş bandı
  About      → KOYU  (#050505) — sayılar + bağlam
  OriginStory→ AÇIK  (#FAFAFA) — yatay hikâye
  Portfolio  → KOYU  (#0A0A0A) — proje grid
  Testimonials→ BEYAZ (#fff)  — referanslar
  Timeline   → AÇIK  (#FAFAFA) — kariyer listesi
  Footer     → KOYU  (#0A0A0A) — kapanış
*/
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandTicker />
      <About />
      <OriginStory />
      <Portfolio />
      <Testimonials />
      <Timeline />
      <Footer />
    </main>
  );
}
