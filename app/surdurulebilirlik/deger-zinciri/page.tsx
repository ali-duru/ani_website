import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Wheat } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Değer Zinciri | Sürdürülebilirlik | Anı Bisküvi",
  description: "Anı Bisküvi'nin tedarikten tüketime kadar tüm değer zincirinde sürdürülebilirlik çalışmaları.",
}

export default function ValueChainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1595246007497-68002906f643?q=80&w=1200&auto=format"
            alt="Değer Zinciri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">DEĞER ZİNCİRİ</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Tedarikten tüketime kadar tüm değer zincirimizde sürdürülebilirliği gözetiyoruz
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
              <Link href="/surdurulebilirlik" className="hover:text-[#e30613] transition-colors">
                Sürdürülebilirlik
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-[#e30613]">Değer Zinciri</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
                  <Wheat className="h-12 w-12 text-amber-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sürdürülebilir Değer Zinciri</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Anı Bisküvi olarak, hammadde tedarikinden ürünlerimizin tüketiciye ulaşmasına kadar tüm değer
                  zincirimizde sürdürülebilirliği gözetiyoruz. Tedarikçilerimiz, üretim süreçlerimiz, dağıtım
                  kanallarımız ve tüketici deneyiminde sürdürülebilir uygulamaları hayata geçiriyoruz.
                </p>

                <h3 className="text-2xl font-bold text-amber-600 mt-10 mb-4">Sorumlu Tedarik</h3>
                <p className="mb-4">
                  Hammaddelerimizi sorumlu kaynaklardan tedarik etmek için kapsamlı politikalar geliştiriyor ve
                  uyguluyoruz. Tedarikçilerimizle uzun vadeli, şeffaf ve etik ilişkiler kurarak, değer zincirimizin en
                  başından itibaren sürdürülebilirliği sağlıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Tedarikçi Davranış Kuralları ve Etik İlkeler</li>
                  <li>Tedarikçi sürdürülebilirlik değerlendirmeleri ve denetimleri</li>
                  <li>Yerel tedarikçilere öncelik verme</li>
                  <li>Sürdürülebilir tarım uygulamalarını destekleme</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: Sürdürülebilir Buğday Tedariki
                  </h4>
                  <p>
                    2021 yılında başlattığımız "Sürdürülebilir Buğday Programı" ile çiftçilerimize sürdürülebilir tarım
                    uygulamaları konusunda eğitimler veriyor ve teknik destek sağlıyoruz. Program kapsamında, su
                    tasarrufu sağlayan modern sulama sistemleri, toprak sağlığını koruyan uygulamalar ve biyoçeşitliliği
                    destekleyen tarım teknikleri konusunda çiftçilerimizi destekliyoruz. Bugüne kadar 500'den fazla
                    çiftçi programımıza dahil oldu ve buğday tedarikimizin %60'ı sürdürülebilir kaynaklardan sağlanıyor.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-amber-600 mt-10 mb-4">Sürdürülebilir Üretim</h3>
                <p className="mb-4">
                  Üretim tesislerimizde enerji verimliliği, su tasarrufu, atık yönetimi ve emisyon azaltımı konularında
                  sürekli iyileştirmeler yapıyoruz. Kaynak verimliliğini artırarak çevresel etkimizi en aza indirmeyi
                  hedefliyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Enerji verimli üretim teknolojileri</li>
                  <li>Su tasarrufu sağlayan sistemler</li>
                  <li>Atık azaltma ve geri dönüşüm programları</li>
                  <li>Karbon ayak izini azaltma projeleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-amber-600 mt-10 mb-4">Sürdürülebilir Ambalaj</h3>
                <p className="mb-4">
                  Ürünlerimizin ambalajlarında çevresel etkiyi azaltmak için yenilikçi çözümler geliştiriyoruz. Ambalaj
                  malzemelerimizi azaltmak, geri dönüştürülebilir malzemeler kullanmak ve yeni nesil sürdürülebilir
                  ambalaj teknolojilerini uygulamak için çalışıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Ambalaj malzemesi azaltma (light-weighting)</li>
                  <li>Geri dönüştürülebilir ambalaj kullanımı</li>
                  <li>Biyobazlı ve kompostlanabilir ambalaj malzemeleri</li>
                  <li>Tek kullanımlık plastiklerin azaltılması</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: Yenilikçi Ambalaj Çözümleri
                  </h4>
                  <p>
                    2022 yılında başlattığımız ambalaj inovasyon projemiz kapsamında, bisküvi ambalajlarımızda
                    kullanılan plastik miktarını %25 oranında azalttık ve ambalajlarımızın %80'ini geri dönüştürülebilir
                    malzemelerden üretir hale geldik. Ayrıca, bazı ürün gruplarımızda biyobazlı ve kompostlanabilir
                    ambalaj malzemeleri kullanmaya başladık.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-amber-600 mt-10 mb-4">Verimli Lojistik ve Dağıtım</h3>
                <p className="mb-4">
                  Ürünlerimizin depolanması ve dağıtımı sırasında oluşan çevresel etkiyi azaltmak için lojistik
                  süreçlerimizi sürekli iyileştiriyoruz. Rota optimizasyonu, araç doluluk oranlarının artırılması ve
                  alternatif yakıt kullanımı gibi uygulamalarla lojistik kaynaklı emisyonlarımızı azaltıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Rota optimizasyonu ve araç doluluk oranlarının artırılması</li>
                  <li>Düşük emisyonlu araç filosu</li>
                  <li>Intermodal taşımacılık (karayolu, demiryolu, denizyolu kombinasyonu)</li>
                  <li>Enerji verimli depolama tesisleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-amber-600 mt-10 mb-4">Tüketici Bilinçlendirme</h3>
                <p className="mb-4">
                  Tüketicilerimizi sürdürülebilir tüketim konusunda bilinçlendirmek için çeşitli iletişim kampanyaları
                  ve projeler yürütüyoruz. Ürünlerimizin doğru şekilde tüketilmesi, saklanması ve ambalajlarının geri
                  dönüştürülmesi konusunda bilgilendirmeler yapıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Ambalaj üzerinde geri dönüşüm bilgileri</li>
                  <li>Sürdürülebilir tüketim önerileri</li>
                  <li>Gıda israfını önleme kampanyaları</li>
                  <li>Dijital platformlarda sürdürülebilirlik içerikleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-amber-600 mt-10 mb-4">Değer Zinciri Hedeflerimiz</h3>
                <p className="mb-6">
                  Anı Bisküvi olarak, 2030 yılına kadar değer zincirimizde aşağıdaki sürdürülebilirlik hedeflerine
                  ulaşmayı taahhüt ediyoruz:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Hammaddelerimizin %100'ünü sürdürülebilir kaynaklardan tedarik etmek</li>
                  <li>
                    Ambalajlarımızın %100'ünü geri dönüştürülebilir, yeniden kullanılabilir veya kompostlanabilir hale
                    getirmek
                  </li>
                  <li>Lojistik kaynaklı karbon emisyonlarımızı %45 azaltmak</li>
                  <li>Tedarikçilerimizin %90'ının sürdürülebilirlik kriterlerimize uyumunu sağlamak</li>
                  <li>Gıda israfını %50 oranında azaltmak</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/surdurulebilirlik"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors"
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
