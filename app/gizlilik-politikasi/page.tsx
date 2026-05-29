import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası — Emre Baltaoğlu",
};

export default function PrivacyPolicy() {
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
          Gizlilik Politikası
        </h1>
        <p className="text-xs text-[#71717A] font-mono tracking-widest uppercase mb-12">
          Son Güncelleme: 29 Mayıs 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-[#3F3F46]">
          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">1. Giriş</h2>
            <p>
              Bu Gizlilik Politikası, Emre Baltaoğlu kişisel portfolyo web sitesi (site) üzerinden ziyaretçilerimizin gizliliğini korumak amacıyla hazırlanmıştır. Web sitemizi ziyaret ederken hangi verilerin işlendiğini ve gizliliğinizin nasıl güvence altına alındığını burada bulabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">2. Toplanan Veriler</h2>
            <p>
              Bu web sitesi, doğrudan üyelik sistemi barındırmaz ve ziyaretçilerden zorunlu kişisel veri (isim, soyisim vb.) talep etmez. Ancak aşağıdaki durumlarda veri akışı gerçekleşebilir:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>İletişim Talepleri:</strong> Sitede yer alan e-posta adresi (emrebaltaoglu1@gmail.com) veya sosyal medya kanalları üzerinden bizimle iletişime geçtiğinizde, paylaştığınız e-posta adresi ve mesaj içeriği talebinize yanıt vermek amacıyla işlenir.
              </li>
              <li>
                <strong>Analitik Veriler:</strong> Sitenin performansını analiz etmek ve kullanıcı deneyimini iyileştirmek amacıyla üçüncü taraf analitik araçlar (örneğin Google Analytics) kullanılabilir. Bu araçlar kişisel kimliğinizi açığa çıkarmayan anonim gezinme verilerini (IP adresi, tarayıcı türü, ziyaret edilen sayfalar) toplar.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">3. Verilerin Saklanması ve Paylaşılması</h2>
            <p>
              Bizimle doğrudan paylaştığınız iletişim verileri, yasal bir zorunluluk olmadığı sürece üçüncü taraflarla kesinlikle paylaşılmaz, satılmaz veya kiralanmaz. Toplanan anonim analitik veriler yalnızca sitenin teknik altyapısını optimize etmek amacıyla kullanılır.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">4. Üçüncü Taraf Bağlantıları</h2>
            <p>
              Sitemiz; Servus TV, Red Bull TV, Spotify, YouTube ve diğer harici sosyal medya kanallarına bağlantılar (linkler) içermektedir. Bu harici sitelerin kendilerine ait gizlilik politikaları bulunmaktadır ve bu siteler üzerinde gerçekleşen işlemlerinizden Emre Baltaoğlu veya site geliştiricisi sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-3">5. Haklarınız</h2>
            <p>
              Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, bizimle iletişime geçerek hakkınızda saklanan herhangi bir veri olup olmadığını sorgulama, yanlış verilerin düzeltilmesini talep etme veya tüm verilerinizin silinmesini isteme hakkına sahipsiniz.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
