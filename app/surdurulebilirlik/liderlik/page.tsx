import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Liderlik | Sürdürülebilirlik | Anı Bisküvi",
  description: "Anı Bisküvi'nin sürdürülebilirlik alanında sektöre öncülük eden çalışmaları ve liderlik yaklaşımı.",
}

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format"
            alt="Liderlik"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">LİDERLİK</h1>
                <p className="text-white/90 text-lg md:text-xl">Sürdürülebilirlik alanında sektöre öncülük ediyoruz</p>
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
              <Link href="/surdurulebilirlik" className="hover:text-[#e30613] transition-colors">
                Sürdürülebilirlik
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-[#e30613]">Liderlik</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                  <Award className="h-12 w-12 text-red-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sürdürülebilirlik Liderliği</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Anı Bisküvi olarak, sürdürülebilirlik alanında sektörümüze öncülük etmeyi ve iyi uygulamalarımızla
                  örnek olmayı hedefliyoruz. Sürdürülebilirlik stratejimiz ve uygulamalarımızla, gıda sektöründe
                  sürdürülebilir dönüşümü hızlandırmak için çalışıyoruz.
                </p>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">Sürdürülebilirlik Stratejimiz</h3>
                <p className="mb-4">
                  Sürdürülebilirlik stratejimiz, iş modelimizin merkezinde yer alıyor ve tüm faaliyetlerimize entegre
                  edilmiş durumda. Çevre, değer zinciri, inovasyon, çalışanlar ve toplumsal sorumluluk alanlarında
                  belirlediğimiz hedeflerle, sürdürülebilir bir gelecek için değer yaratıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Uzun vadeli sürdürülebilirlik vizyonu ve stratejisi</li>
                  <li>Bilime dayalı hedefler ve ölçülebilir performans göstergeleri</li>
                  <li>Üst yönetim liderliği ve taahhüdü</li>
                  <li>Tüm iş süreçlerine entegre sürdürülebilirlik yaklaşımı</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: 2030 Sürdürülebilirlik Stratejisi
                  </h4>
                  <p>
                    2021 yılında açıkladığımız "2030 Sürdürülebilirlik Stratejisi", şirketimizin uzun vadeli
                    sürdürülebilirlik vizyonunu ve hedeflerini ortaya koyuyor. Strateji, Birleşmiş Milletler
                    Sürdürülebilir Kalkınma Amaçları ile uyumlu olarak hazırlandı ve bilime dayalı hedefler içeriyor.
                    Stratejimiz, sektörümüzde bir ilk olarak, bağımsız bir kuruluş tarafından doğrulandı ve "Lider
                    Sürdürülebilirlik Stratejisi" ödülüne layık görüldü.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">Sürdürülebilirlik Yönetişimi</h3>
                <p className="mb-4">
                  Sürdürülebilirlik konusundaki taahhütlerimizi yerine getirmek için güçlü bir yönetişim yapısı
                  oluşturduk. Yönetim Kurulu düzeyinden başlayarak tüm organizasyona yayılan bu yapı, sürdürülebilirlik
                  stratejimizin etkin bir şekilde uygulanmasını sağlıyor.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Yönetim Kurulu Sürdürülebilirlik Komitesi</li>
                  <li>Sürdürülebilirlik Direktörlüğü</li>
                  <li>Departmanlar arası Sürdürülebilirlik Çalışma Grupları</li>
                  <li>Sürdürülebilirlik Performans Değerlendirme ve Ödüllendirme Sistemi</li>
                </ul>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">
                  Sürdürülebilirlik Raporlaması ve Şeffaflık
                </h3>
                <p className="mb-4">
                  Sürdürülebilirlik performansımızı şeffaf bir şekilde raporluyor ve paydaşlarımızla düzenli olarak
                  paylaşıyoruz. Uluslararası standartlara uygun raporlama yaparak, sürdürülebilirlik alanındaki
                  ilerlemelerimizi ve karşılaştığımız zorlukları açıkça ortaya koyuyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>GRI Standartlarına uygun Sürdürülebilirlik Raporu</li>
                  <li>Karbon Saydamlık Projesi (CDP) raporlaması</li>
                  <li>Sürdürülebilirlik performans göstergeleri ve hedefler</li>
                  <li>Bağımsız denetim ve doğrulama</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: Sürdürülebilirlik Raporlaması
                  </h4>
                  <p>
                    2018 yılından bu yana her yıl düzenli olarak yayınladığımız Sürdürülebilirlik Raporumuz, GRI
                    Standartları'na uygun olarak hazırlanıyor ve bağımsız bir kuruluş tarafından denetleniyor.
                    Raporumuz, 2022 yılında "En İyi Sürdürülebilirlik Raporu" ödülüne layık görüldü. Ayrıca, CDP İklim
                    Değişikliği ve Su Güvenliği programlarında A- skoruna ulaşarak sektörümüzde lider konuma yükseldik.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">Sektörel İşbirlikleri ve Girişimler</h3>
                <p className="mb-4">
                  Sürdürülebilirlik alanında sektörel işbirlikleri geliştiriyor ve ulusal/uluslararası girişimlere aktif
                  katılım sağlıyoruz. Bu işbirlikleri sayesinde, iyi uygulamaları paylaşıyor ve sektörümüzün
                  sürdürülebilir dönüşümüne katkıda bulunuyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Birleşmiş Milletler Küresel İlkeler Sözleşmesi (UN Global Compact)</li>
                  <li>Bilime Dayalı Hedefler Girişimi (Science Based Targets initiative)</li>
                  <li>Sürdürülebilir Gıda Platformu</li>
                  <li>Döngüsel Ekonomi İş Konseyi</li>
                </ul>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">Sürdürülebilirlik İnovasyonu ve Ar-Ge</h3>
                <p className="mb-4">
                  Sürdürülebilirlik odaklı inovasyon ve Ar-Ge çalışmalarımızla, sektörümüzde yenilikçi çözümler
                  geliştiriyor ve sürdürülebilir dönüşümü hızlandırıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Sürdürülebilir ürün formülasyonları</li>
                  <li>Kaynak verimli üretim teknolojileri</li>
                  <li>Yenilikçi ambalaj çözümleri</li>
                  <li>Dijital dönüşüm ve endüstri 4.0 uygulamaları</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: Sürdürülebilir Ambalaj İnovasyonu
                  </h4>
                  <p>
                    2022 yılında geliştirdiğimiz sürdürülebilir ambalaj çözümümüz, sektörümüzde bir ilk olarak %100 geri
                    dönüştürülebilir ve biyobazlı malzemelerden üretiliyor. Bu yenilikçi ambalaj çözümü, geleneksel
                    ambalajlara göre %60 daha az karbon ayak izine sahip ve üretiminde %40 daha az su kullanılıyor.
                    Projemiz, "Sürdürülebilir Ambalaj İnovasyonu" kategorisinde uluslararası bir ödüle layık görüldü ve
                    sektörümüzde yaygın olarak kullanılmaya başlandı.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">Sürdürülebilirlik Eğitimi ve Farkındalık</h3>
                <p className="mb-4">
                  Çalışanlarımızın, tedarikçilerimizin ve tüketicilerimizin sürdürülebilirlik konusunda
                  bilinçlenmelerini sağlamak için çeşitli eğitim ve farkındalık programları düzenliyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Çalışan sürdürülebilirlik eğitimleri</li>
                  <li>Tedarikçi sürdürülebilirlik programları</li>
                  <li>Tüketici bilinçlendirme kampanyaları</li>
                  <li>Sürdürülebilirlik iletişim platformları</li>
                </ul>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">Sürdürülebilirlik Ödülleri ve Başarılar</h3>
                <p className="mb-4">
                  Sürdürülebilirlik alanındaki çalışmalarımız ve başarılarımız, ulusal ve uluslararası platformlarda
                  çeşitli ödüllere layık görülüyor.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Sürdürülebilir İş Ödülleri - "Yılın Sürdürülebilir Şirketi" (2022)</li>
                  <li>Enerji Verimliliği Ödülü - "En İyi Uygulama" (2021)</li>
                  <li>Sürdürülebilir Ambalaj İnovasyon Ödülü (2022)</li>
                  <li>Kurumsal Sosyal Sorumluluk Ödülü - "Toplumsal Etki" (2023)</li>
                  <li>CDP İklim Liderliği Ödülü (2022)</li>
                </ul>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">
                  Sürdürülebilirlik Endeksleri ve Derecelendirmeler
                </h3>
                <p className="mb-4">
                  Sürdürülebilirlik performansımız, bağımsız kuruluşlar tarafından düzenli olarak değerlendiriliyor ve
                  çeşitli endekslerde yer alıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Borsa İstanbul Sürdürülebilirlik Endeksi</li>
                  <li>MSCI ESG Derecelendirmesi - AA</li>
                  <li>Sustainalytics ESG Risk Derecelendirmesi - Düşük Risk</li>
                  <li>CDP İklim Değişikliği ve Su Güvenliği - A-</li>
                </ul>

                <h3 className="text-2xl font-bold text-red-600 mt-10 mb-4">Liderlik Hedeflerimiz</h3>
                <p className="mb-6">
                  Anı Bisküvi olarak, 2030 yılına kadar sürdürülebilirlik liderliği alanında aşağıdaki hedeflere
                  ulaşmayı taahhüt ediyoruz:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Gıda sektöründe sürdürülebilirlik endekslerinde lider konuma yükselmek</li>
                  <li>Sürdürülebilirlik alanında en az 10 uluslararası ödül kazanmak</li>
                  <li>Sürdürülebilirlik inovasyonlarımızı sektörümüzde yaygınlaştırmak</li>
                  <li>Sürdürülebilirlik konusunda en az 5 sektörel girişime öncülük etmek</li>
                  <li>Sürdürülebilirlik performansımızı sürekli iyileştirerek örnek şirket olmak</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/surdurulebilirlik"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
                >
                  Sürdürülebilirlik Sayfasına Dön
                  <ChevronRight className="h-4 w-4" />
                </Link>
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
