import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Leaf } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Çevre | Sürdürülebilirlik | Anı Bisküvi",
  description:
    "Anı Bisküvi'nin çevre odaklı sürdürülebilirlik çalışmaları, doğayı koruma ve çevresel etkiyi azaltma projeleri.",
}

export default function EnvironmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format"
            alt="Çevre"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ÇEVRE</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Doğayı korumak ve çevresel etkimizi azaltmak için sürdürülebilir uygulamalar geliştiriyoruz
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
              <span className="font-medium text-[#e30613]">Çevre</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="h-12 w-12 text-green-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Çevre Odaklı Sürdürülebilirlik</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Anı Bisküvi olarak, doğal kaynakların korunması ve çevresel etkimizin azaltılması konusunda kararlı
                  adımlar atıyoruz. Sürdürülebilir bir gelecek için çevre odaklı projelerimiz ve uygulamalarımızla
                  sektörümüzde öncü olmayı hedefliyoruz.
                </p>

                <h3 className="text-2xl font-bold text-green-600 mt-10 mb-4">Enerji Verimliliği</h3>
                <p className="mb-4">
                  Üretim tesislerimizde enerji verimliliğini artırmak için yenilikçi teknolojiler kullanıyor ve enerji
                  tüketimimizi sürekli olarak izliyoruz. Son 5 yılda enerji verimliliği projelerimiz sayesinde birim
                  üretim başına enerji tüketimimizi %25 oranında azalttık.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Enerji verimli ekipmanlar ve aydınlatma sistemleri</li>
                  <li>Isı geri kazanım sistemleri</li>
                  <li>Enerji izleme ve yönetim sistemleri</li>
                  <li>Çalışanlarımıza enerji verimliliği eğitimleri</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Enerji Verimliliği</h4>
                  <p>
                    2022 yılında tamamladığımız enerji verimliliği projemiz ile fırınlarımızdaki ısı geri kazanım
                    sistemlerini yenileyerek, yıllık 1.200 MWh enerji tasarrufu sağladık. Bu proje, Enerji ve Tabii
                    Kaynaklar Bakanlığı tarafından "Yılın Enerji Verimliliği Projesi" ödülüne layık görüldü.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-green-600 mt-10 mb-4">Su Yönetimi</h3>
                <p className="mb-4">
                  Su kaynaklarının verimli kullanılması ve atık su yönetimi konusunda kapsamlı çalışmalar yürütüyoruz.
                  Üretim süreçlerimizde su tüketimini azaltmak ve su kalitesini korumak için çeşitli projeler
                  geliştiriyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Kapalı devre su sistemleri</li>
                  <li>Yağmur suyu hasadı</li>
                  <li>İleri atık su arıtma tesisleri</li>
                  <li>Su tüketimini azaltan ekipman ve teknolojiler</li>
                </ul>

                <h3 className="text-2xl font-bold text-green-600 mt-10 mb-4">Atık Yönetimi</h3>
                <p className="mb-4">
                  "Sıfır Atık" vizyonuyla hareket ederek, üretim süreçlerimizde oluşan atıkları azaltmak, yeniden
                  kullanmak ve geri dönüştürmek için çalışıyoruz. Atık yönetimi stratejimiz, kaynakların verimli
                  kullanılması ve çevresel etkimizin en aza indirilmesi üzerine kuruludur.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Üretim süreçlerinde atık azaltma</li>
                  <li>Geri dönüşüm ve yeniden kullanım programları</li>
                  <li>Organik atıkların kompostlaştırılması</li>
                  <li>Tedarikçilerimizle işbirliği içinde ambalaj optimizasyonu</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Sıfır Atık</h4>
                  <p>
                    2023 yılında tüm üretim tesislerimizde "Sıfır Atık Belgesi" almaya hak kazandık. Atık yönetimi
                    çalışmalarımız sayesinde son 3 yılda düzenli depolama sahasına gönderilen atık miktarımızı %80
                    oranında azalttık.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-green-600 mt-10 mb-4">Karbon Ayak İzi</h3>
                <p className="mb-4">
                  İklim değişikliğiyle mücadele kapsamında, karbon ayak izimizi azaltmak için sistematik çalışmalar
                  yürütüyoruz. Sera gazı emisyonlarımızı düzenli olarak ölçüyor, raporluyor ve azaltım hedefleri
                  belirliyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Yenilenebilir enerji kullanımı</li>
                  <li>Enerji verimliliği projeleri</li>
                  <li>Lojistik optimizasyonu</li>
                  <li>Tedarik zinciri emisyonlarının azaltılması</li>
                </ul>

                <h3 className="text-2xl font-bold text-green-600 mt-10 mb-4">Biyoçeşitlilik</h3>
                <p className="mb-4">
                  Faaliyet gösterdiğimiz bölgelerdeki biyoçeşitliliğin korunması için çeşitli projeler geliştiriyor ve
                  destekliyoruz. Doğal yaşam alanlarının korunması ve geliştirilmesi için yerel ve ulusal
                  organizasyonlarla işbirliği yapıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Fabrika çevrelerinde yeşil alanların artırılması</li>
                  <li>Yerel tohum ve bitki türlerinin korunması</li>
                  <li>Arı ve polinatör dostu uygulamalar</li>
                  <li>Çalışanlarımızın katılımıyla ağaçlandırma projeleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-green-600 mt-10 mb-4">Çevresel Hedeflerimiz</h3>
                <p className="mb-6">
                  Anı Bisküvi olarak, 2030 yılına kadar aşağıdaki çevresel hedeflere ulaşmayı taahhüt ediyoruz:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Karbon emisyonlarımızı %50 azaltmak</li>
                  <li>Su tüketimimizi %40 azaltmak</li>
                  <li>Üretim atıklarımızın %100'ünü geri dönüştürmek veya yeniden kullanmak</li>
                  <li>
                    Ambalajlarımızın %100'ünü geri dönüştürülebilir, yeniden kullanılabilir veya kompostlanabilir hale
                    getirmek
                  </li>
                  <li>Yenilenebilir enerji kullanım oranımızı %75'e çıkarmak</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/surdurulebilirlik"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
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
