import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Lightbulb } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "İnovasyon | Sürdürülebilirlik | Anı Bisküvi",
  description:
    "Anı Bisküvi'nin sürdürülebilir ürün ve süreçler için geliştirdiği yenilikçi çözümler ve inovasyon yaklaşımı.",
}

export default function InnovationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format"
            alt="İnovasyon"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">İNOVASYON</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Sürdürülebilir ürün ve süreçler için yenilikçi çözümler geliştiriyoruz
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
              <span className="font-medium text-[#e30613]">İnovasyon</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                  <Lightbulb className="h-12 w-12 text-blue-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sürdürülebilir İnovasyon</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Anı Bisküvi olarak, sürdürülebilirlik odaklı inovasyon çalışmalarımızla sektörümüzde öncü olmayı
                  hedefliyoruz. Ar-Ge merkezimizde geliştirdiğimiz yenilikçi ürün ve süreçlerle, hem çevresel etkimizi
                  azaltıyor hem de tüketicilerimize daha sürdürülebilir seçenekler sunuyoruz.
                </p>

                <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">Ar-Ge ve İnovasyon Yaklaşımımız</h3>
                <p className="mb-4">
                  Sürdürülebilirlik odaklı inovasyon stratejimiz, ürün geliştirmeden üretim süreçlerine, ambalajlamadan
                  lojistiğe kadar tüm değer zincirimizi kapsıyor. Ar-Ge merkezimizde, sürdürülebilir gıda teknolojileri
                  konusunda uzman bir ekiple çalışıyor ve sektördeki en son gelişmeleri yakından takip ediyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Sürdürülebilir ürün formülasyonları</li>
                  <li>Kaynak verimli üretim teknolojileri</li>
                  <li>Yenilikçi ambalaj çözümleri</li>
                  <li>Dijital dönüşüm ve endüstri 4.0 uygulamaları</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Ar-Ge Merkezimiz</h4>
                  <p>
                    2020 yılında açılan Ar-Ge merkezimiz, Türkiye'nin gıda sektöründeki en kapsamlı inovasyon
                    merkezlerinden biri olarak faaliyet gösteriyor. Merkezimizde 50'den fazla araştırmacı ve mühendis,
                    sürdürülebilir gıda teknolojileri üzerine çalışıyor. Son 3 yılda 15 patent başvurusu yaptık ve 8
                    patent almaya hak kazandık.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">Sürdürülebilir Ürün İnovasyonu</h3>
                <p className="mb-4">
                  Ürünlerimizin çevresel etkisini azaltmak ve besleyici değerini artırmak için sürekli olarak yeni
                  formülasyonlar geliştiriyoruz. Sürdürülebilir kaynaklardan elde edilen hammaddeler, azaltılmış şeker
                  ve yağ içeriği, ve zenginleştirilmiş besin profili ile daha sağlıklı ve çevre dostu ürünler sunuyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Azaltılmış şeker ve yağ içeriği</li>
                  <li>Tam tahıllı ve yüksek lifli ürünler</li>
                  <li>Doğal içerikler ve temiz etiket yaklaşımı</li>
                  <li>Sürdürülebilir kaynaklı hammaddeler</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Ekolojik Ürün Serisi</h4>
                  <p>
                    2022 yılında piyasaya sürdüğümüz "Ekolojik Seri" ürünlerimiz, sürdürülebilir tarım uygulamalarıyla
                    yetiştirilen hammaddeler kullanılarak üretiliyor. Bu serideki ürünlerimiz, azaltılmış karbon ayak
                    izi, %30 daha az şeker içeriği ve tamamen geri dönüştürülebilir ambalajlarıyla dikkat çekiyor.
                    Ekolojik Seri, 2023 yılında "Yılın Sürdürülebilir Ürünü" ödülüne layık görüldü.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">Sürdürülebilir Süreç İnovasyonu</h3>
                <p className="mb-4">
                  Üretim süreçlerimizde enerji, su ve hammadde kullanımını azaltmak için yenilikçi teknolojiler
                  geliştiriyor ve uyguluyoruz. Endüstri 4.0 uygulamaları ve dijital dönüşüm projeleriyle üretim
                  verimliliğimizi artırırken çevresel etkimizi azaltıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Enerji verimli üretim teknolojileri</li>
                  <li>Su tasarrufu sağlayan sistemler</li>
                  <li>Atık azaltma ve geri dönüşüm çözümleri</li>
                  <li>Dijital izleme ve optimizasyon sistemleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">Ambalaj İnovasyonu</h3>
                <p className="mb-4">
                  Ambalajlarımızın çevresel etkisini azaltmak için yenilikçi malzemeler ve tasarımlar geliştiriyoruz.
                  Daha az malzeme kullanımı, geri dönüştürülebilir yapı ve biyobazlı alternatifler üzerine
                  çalışmalarımızı sürdürüyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Malzeme azaltma ve hafifletme çalışmaları</li>
                  <li>Tek malzemeli ve geri dönüştürülebilir ambalajlar</li>
                  <li>Biyobazlı ve kompostlanabilir ambalaj malzemeleri</li>
                  <li>Akıllı ambalaj teknolojileri</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Biyobazlı Ambalaj</h4>
                  <p>
                    2023 yılında geliştirdiğimiz biyobazlı ambalaj çözümümüz, mısır nişastası bazlı biyoplastik
                    kullanılarak üretiliyor. Bu yenilikçi ambalaj, geleneksel plastik ambalajlara göre %70 daha düşük
                    karbon ayak izine sahip ve endüstriyel kompost koşullarında tamamen biyolojik olarak
                    parçalanabiliyor. Pilot ürün grubumuzda kullanmaya başladığımız bu ambalaj çözümünü, 2025 yılına
                    kadar tüm ürün gruplarımıza yaygınlaştırmayı hedefliyoruz.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">Açık İnovasyon ve İşbirlikleri</h3>
                <p className="mb-4">
                  Sürdürülebilirlik alanındaki inovasyon çalışmalarımızı hızlandırmak için üniversiteler, araştırma
                  kurumları, start-up'lar ve diğer sektör paydaşlarıyla işbirlikleri geliştiriyoruz. Açık inovasyon
                  yaklaşımımızla, farklı disiplinlerden gelen bilgi ve deneyimleri bir araya getirerek daha etkili
                  çözümler üretiyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Üniversite-sanayi işbirlikleri</li>
                  <li>Start-up'larla ortak projeler</li>
                  <li>Sektörel konsorsiyumlar ve platformlar</li>
                  <li>Uluslararası araştırma ağları</li>
                </ul>

                <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">İnovasyon Hedeflerimiz</h3>
                <p className="mb-6">
                  Anı Bisküvi olarak, 2030 yılına kadar sürdürülebilir inovasyon alanında aşağıdaki hedeflere ulaşmayı
                  taahhüt ediyoruz:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Ar-Ge bütçemizin %70'ini sürdürülebilirlik odaklı projelere ayırmak</li>
                  <li>Ürün portföyümüzün %50'sini sürdürülebilir ürünlerden oluşturmak</li>
                  <li>Üretim süreçlerimizde enerji verimliliğini %40 artırmak</li>
                  <li>Ambalajlarımızın %100'ünü sürdürülebilir malzemelerden üretmek</li>
                  <li>Sürdürülebilirlik alanında en az 20 patent almak</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/surdurulebilirlik"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
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
