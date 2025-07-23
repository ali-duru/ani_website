import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Kullanım Koşulları | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi web sitesi kullanım koşulları ve yasal bilgilendirmeler.",
}

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format"
            alt="Kullanım Koşulları"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">KULLANIM KOŞULLARI</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi web sitesi kullanım koşulları ve yasal bilgilendirmeler
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#e30613] transition-colors">
                Ana Sayfa
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-[#e30613]">Kullanım Koşulları</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#e30613] mb-6">Kullanım Koşulları</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Bu web sitesini kullanarak, aşağıda belirtilen kullanım koşullarını kabul etmiş sayılırsınız. Lütfen
                  bu koşulları dikkatlice okuyunuz. Bu koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayınız.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Genel Hükümler</h3>
                <p className="mb-4">
                  Bu web sitesi, Anı Bisküvi Gıda San. ve Tic. A.Ş. ("Anı Bisküvi" veya "Şirket") tarafından
                  işletilmektedir. Web sitesinde yer alan tüm içerik, tasarım, logo, marka ve diğer fikri mülkiyet
                  hakları Anı Bisküvi'ye aittir veya lisans altında kullanılmaktadır.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Kullanım Şartları</h3>
                <p className="mb-4">Web sitemizi kullanırken aşağıdaki kurallara uymayı kabul etmiş sayılırsınız:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Web sitesini yasa dışı amaçlarla kullanmamak</li>
                  <li>Web sitesinin güvenliğini tehlikeye atacak faaliyetlerde bulunmamak</li>
                  <li>Web sitesinin normal işleyişini engelleyecek veya aksatacak faaliyetlerde bulunmamak</li>
                  <li>Web sitesinde yer alan içerikleri izinsiz olarak kopyalamamak, çoğaltmamak veya dağıtmamak</li>
                  <li>Web sitesinde yer alan içerikleri değiştirmemek veya tahrif etmemek</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Fikri Mülkiyet Hakları</h3>
                <p className="mb-4">
                  Web sitesinde yer alan tüm içerik, tasarım, logo, marka ve diğer fikri mülkiyet hakları Anı Bisküvi'ye
                  aittir veya lisans altında kullanılmaktadır. Bu içeriklerin izinsiz olarak kopyalanması, çoğaltılması,
                  dağıtılması veya ticari amaçla kullanılması yasaktır.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Sorumluluk Reddi</h3>
                <p className="mb-4">
                  Web sitesinde yer alan bilgiler, genel bilgilendirme amacıyla sunulmaktadır ve herhangi bir garanti
                  verilmemektedir. Anı Bisküvi, web sitesinde yer alan bilgilerin doğruluğu, güncelliği veya
                  eksiksizliği konusunda herhangi bir taahhütte bulunmamaktadır.
                </p>
                <p className="mb-4">
                  Anı Bisküvi, web sitesinin kesintisiz veya hatasız çalışacağını garanti etmemektedir. Web sitesinin
                  kullanımından kaynaklanan herhangi bir doğrudan veya dolaylı zarar için Anı Bisküvi sorumlu tutulamaz.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Bağlantılar</h3>
                <p className="mb-4">
                  Web sitemizde, üçüncü taraf web sitelerine bağlantılar (linkler) bulunabilir. Bu bağlantılar, sadece
                  bilgilendirme amacıyla sunulmaktadır ve Anı Bisküvi, bu web sitelerinin içeriği veya gizlilik
                  politikaları üzerinde herhangi bir kontrole sahip değildir. Bu web sitelerinin kullanımından
                  kaynaklanan herhangi bir zarar için Anı Bisküvi sorumlu tutulamaz.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Gizlilik Politikası</h3>
                <p className="mb-4">
                  Web sitemizi kullanırken, kişisel verileriniz Gizlilik Politikamız doğrultusunda işlenmektedir.
                  Gizlilik Politikamız hakkında daha fazla bilgi için, lütfen web sitemizdeki ilgili bölümü ziyaret
                  ediniz.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Çerez Politikası</h3>
                <p className="mb-4">
                  Web sitemizde çerezler kullanılmaktadır. Çerez Politikamız hakkında daha fazla bilgi için, lütfen web
                  sitemizdeki ilgili bölümü ziyaret ediniz.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Değişiklikler</h3>
                <p className="mb-4">
                  Anı Bisküvi, bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutar.
                  Değişiklikler, web sitesinde yayınlandığı tarihte yürürlüğe girer. Web sitemizi kullanmaya devam
                  ederek, güncellenmiş kullanım koşullarını kabul etmiş sayılırsınız.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Uygulanacak Hukuk ve Yetkili Mahkeme</h3>
                <p className="mb-4">
                  Bu kullanım koşulları, Türkiye Cumhuriyeti kanunlarına tabidir. Bu kullanım koşullarından kaynaklanan
                  herhangi bir anlaşmazlık durumunda, İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. İletişim</h3>
                <p className="mb-4">
                  Bu kullanım koşulları hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
                </p>
                <p className="mb-4">
                  E-posta: info@anibiskuvi.com.tr
                  <br />
                  Telefon: +90 (212) 123 45 67
                  <br />
                  Adres: Organize Sanayi Bölgesi, 1. Cadde No: 123, 34000 İstanbul / Türkiye
                </p>

                <p className="mt-8 text-sm text-gray-500">Son güncelleme: 10 Nisan 2023</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
