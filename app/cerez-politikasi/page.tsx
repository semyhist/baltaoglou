import Link from "next/link";

export const metadata = {
  title: "Çerez Politikası — Emre Baltaoğlu",
};

export default function CookiePolicy() {
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
          Çerez Politikası
        </h1>
        <p className="text-xs text-[#71717A] font-mono tracking-widest uppercase mb-12">
          Son Güncelleme: 29 Mayıs 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-[#3F3F46]">
          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">1. Çerez (Cookie) Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza (bilgisayar, akıllı telefon veya tablet) kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını sağlamak ve ziyaretçi tercihlerini hatırlamak amacıyla kullanılır.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">2. Kullanılan Çerez Türleri</h2>
            <p>
              Sitemizde ziyaretçilerimizin gezinme kalitesini artırmak için aşağıdaki çerezler kullanılmaktadır:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Zorunlu Çerezler:</strong> Web sitesinin temel fonksiyonlarını yerine getirebilmesi için gerekli olan teknik çerezlerdir. Bunlar olmadan sitenin belirli kısımları düzgün çalışmayabilir.
              </li>
              <li>
                <strong>Analitik Çerezler:</strong> Ziyaretçilerin web sitesini nasıl kullandığını (hangi sayfaların daha sık ziyaret edildiği, sitede kalma süresi vb.) anlamak amacıyla anonim gezinme verilerini kaydeden çerezlerdir.
              </li>
              <li>
                <strong>Tercih Çerezleri:</strong> Varsa dil seçimi gibi tercihlerinizi sonraki ziyaretleriniz için hatırlayan işlevsel çerezlerdir.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">3. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
            <p>
              Kullandığınız web tarayıcısı üzerinden çerez tercihlerinizi yönetme, mevcut çerezleri silme veya yeni çerezlerin kaydedilmesini tamamen engelleme hakkına sahipsiniz. Tarayıcınızın ayarlar menüsünden gizlilik ve güvenlik seçeneklerini düzenleyerek çerezleri kontrol edebilirsiniz. Çerezleri engellemeniz durumunda, sitenin bazı özelliklerinin tam performansla çalışmayabileceğini hatırlatmak isteriz.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
