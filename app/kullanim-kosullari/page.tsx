import Link from "next/link";

export const metadata = {
  title: "Kullanım Koşulları — Emre Baltaoğlu",
};

export default function TermsOfUse() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen py-20 px-6 md:px-12 lg:px-20 text-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-widest text-[#2563EB] hover:text-[#0A0A0A] transition-colors duration-200"
        >
          ← Ana Sayfa
        </Link>
        <h1 className="font-black text-4xl md:text-5xl tracking-tight leading-none mt-8 mb-4">
          Kullanım Koşulları
        </h1>
        <p className="text-xs text-[#71717A] font-mono tracking-widest uppercase mb-12">
          Son Güncelleme: 29 Mayıs 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-[#3F3F46]">
          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">1. Koşulların Kabulü</h2>
            <p>
              Bu web sitesini ziyaret ederek ve kullanarak, aşağıda belirtilen kullanım koşullarını herhangi bir sınırlama veya istisna olmaksızın kabul etmiş sayılırsınız. Eğer bu koşulları kabul etmiyorsanız, lütfen siteyi kullanmaya devam etmeyiniz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">2. Fikri Mülkiyet Hakları</h2>
            <p>
              Bu web sitesinde yer alan tüm görsel tasarımlar, logolar, yazılar, kod yapıları ve diğer tüm içerikler Emre Baltaoğlu&apos;na veya ilgili lisans sahiplerine aittir. Yazılı ön izin alınmaksızın bu içeriklerin kopyalanması, çoğaltılması, dağıtılması veya ticari amaçlarla kullanılması kesinlikle yasaktır. Sitedeki kodların geliştirilmesi Semih Aydın tarafından gerçekleştirilmiştir.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">3. Sorumluluk Sınırları</h2>
            <p>
              Sitede sunulan tüm bilgiler, "olduğu gibi" esasıyla sağlanmaktadır. Emre Baltaoğlu, sitede yer alan bilgilerin eksiksizliği, doğruluğu veya güncelliği konusunda herhangi bir taahhütte bulunmaz. Sitenin kullanımından veya siteye erişilememesinden kaynaklanabilecek doğrudan veya dolaylı hiçbir zarardan Emre Baltaoğlu veya site geliştiricisi sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">4. Koşullarda Değişiklik Yapılması</h2>
            <p>
              Bu Kullanım Koşulları, önceden herhangi bir bildirimde bulunulmaksızın dilediğimiz zaman güncellenebilir veya değiştirilebilir. Değişiklikler yayınlandığı andan itibaren geçerlilik kazanır. Ziyaretçilerin güncel koşulları takip etmesi kendi sorumluluğundadır.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
