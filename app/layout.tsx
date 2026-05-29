import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emrebaltaoglu.com"),
  alternates: {
    canonical: "/",
  },
  title: "Emre Baltaoğlu — MotoGP Spikeri & Motorsporları Yorumcusu",
  description:
    "Emre Baltaoğlu'nun resmi web sitesi. Servus TV MotoGP Spikeri, Red Bull TV Yorumcusu, Diabolica & High Limit içerik üreticisi.",
  keywords: [
    "Emre Baltaoğlu",
    "MotoGP spiker",
    "Formula 1 yorumcusu",
    "Servus TV",
    "Red Bull TV",
    "motorsporları",
    "Socrates GP",
    "Diabolica",
    "High Limit",
  ],
  authors: [{ name: "Emre Baltaoğlu" }],
  openGraph: {
    title: "Emre Baltaoğlu — MotoGP Spikeri & Motorsporları Yorumcusu",
    description:
      "Servus TV MotoGP Spikeri. Red Bull TV WorldSBK Yorumcusu. İçerik Üreticisi.",
    url: "https://emrebaltaoglu.com",
    siteName: "Emre Baltaoğlu",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Baltaoğlu — MotoGP Spikeri",
    description: "Servus TV MotoGP Spikeri & Motorsporları Yorumcusu.",
    creator: "@baltaoglou",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geist.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#0A0A0A]">
        {/* JSON-LD Structured Data for Google SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Emre Baltaoğlu",
              "url": "https://emrebaltaoglu.com",
              "image": "https://emrebaltaoglu.com/baltaogluredbull.jpg",
              "jobTitle": "MotoGP Spikeri & Motorsporları Yorumcusu",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Servus TV",
                },
                {
                  "@type": "Organization",
                  "name": "Socrates Dergi",
                },
                {
                  "@type": "Organization",
                  "name": "Rafine TV",
                },
              ],
              "sameAs": [
                "https://x.com/baltaoglou",
                "https://www.instagram.com/baltaoglou/",
                "https://www.youtube.com/@BaltaogluEmre",
                "https://www.linkedin.com/in/emre-baltaoglu-0b13b618b/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
