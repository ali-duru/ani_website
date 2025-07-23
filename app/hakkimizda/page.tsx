import Image from "next/image"
import Link from "next/link"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import AboutNavigation from "@/components/about-navigation"
import CompanyTimeline from "@/components/company-timeline"

export const metadata = {
  title: "Hakkımızda | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description:
    "Anı Bisküvi Gıda San. ve Tic. A.Ş. hakkında bilgi edinin. Tarihçemiz, kurucumuz, yönetim kadromuz ve değerlerimiz.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c59f1424617765.56348501885cf.jpg-vzUFc5rAKM3u1VdyoL9PHyS77Ostsr.jpeg"
            alt="ANI Hakkında - Kakao ile çizilmiş logo ve ürünler"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ANI HAKKINDA</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Türkiye'nin köklü, güçlü, yerli ve milli markası: Anı Bisküvi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Navigation */}
              <div className="w-full lg:w-1/4">
                <AboutNavigation />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-3/4">
                <div className="mb-10">
                  <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c59f1424617765.56348501885cf.jpg-vzUFc5rAKM3u1VdyoL9PHyS77Ostsr.jpeg"
                      alt="ANI Hakkında - Kakao ile çizilmiş logo ve ürünler"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#e30613] mb-6">
                  Türkiye'nin köklü, güçlü, yerli ve milli markası: Anı Bisküvi
                </h2>

                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4 text-lg">
                    1995 yılında kurulan ANI BİSKÜVİ A.Ş İlk olarak bisküvi üretimiyle faaliyetine başlamış,
                    kuruluşundan bu güne 20 yıllık sürede satışlarında gösterdiği büyük sıçramayla sürekli yatırımlara
                    yönelmiştir.
                  </p>

                  <p className="mb-4 text-lg">
                    Şirketimizin göstermiş olduğu performans sonucunda 1997, 2000, 2008, 2009, 2010, 2011 ve 2012
                    yıllarında İstanbul Sanayi Odasınca yayınlanan Türkiye'nin ikinci 500 büyük firması arsında yer
                    almış ardından 2013- 2014 yıllarında ise Türkiye'nin ilk 500 büyük firma arasına girme başarısını
                    göstermiştir.
                  </p>

                  <p className="mb-4 text-lg">40 işçi ile başlayan faaliyetimiz bugün 1500 işçiyle sürdürülmektedir.</p>

                  <p className="mb-4 text-lg">
                    ANI BİSKÜVİ A.Ş, 65000 m2 açık 115000 m2 kapalı alanda faaliyetin sürdüğü fabrikada dünya ülkelerine
                    yaptığı ihracatıyla Karaman'da en çok ihracat yapan şirketler sıralamasında 1. sıraya yükselmiştir.
                    (2011 - 2012 - 2013 - 2014 Karaman il birincisi)
                  </p>

                  <p className="mb-4 text-lg">
                    ANI BİSKÜVİ fabrika bünyesindeki bisküvi - kek - çikolata - gofret - kraker - marshmallow - şeker -
                    fındık kreması ve 2010 yılında yeni bir hat ekleyerek kakao kremalı mozaik bisküvi-fındık pasta ve
                    çikolata damlalı bisküvi hatlarıyla ürün yelpazesine dâhil etmiştir. 2015 yılında kremalı bisküvi
                    ürünleri yurt dışından en son model tam otomatik yeni bir tesisi devreye girmiştir.
                  </p>

                  <p className="mb-4 text-lg">
                    ANI BİSKÜVİ GIDA SANAYİ VE TİC. A.Ş kaliteye de büyük önem vermiş ve kuruluşunun ilk yıllarından
                    itibaren TSE+TSEK ve TS-EN+ISO 9001 belgesini almış olup bununla yetinmeyip gıda sektöründe tüm
                    dünya tarafından kabul edilen, gıda güvenliği ve sağlığa uygunluk konusunda son nokta olan ve HACCP
                    disiplinini de içeren ISO 22000 kalite belgesin de bünyesine ve helal gıda üretim belgesini de
                    katmıştır.
                  </p>

                  <p className="mb-4 text-lg">
                    Nihayetinde Bilgi Güvenliği Sistemi olan ISO 27001 sertifikasını almış bulunmaktayız.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                    <p className="text-gray-700 mb-4">
                      ANI BİSKÜVİ GIDA SAN. ve TİC. A.Ş. olarak unlu mamüller, çikolata, şekerleme sektöründe;
                    </p>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                      <li>Sürekli yeni yatırımlarla sektörde büyümeyi sürdürmek,</li>
                      <li>
                        Ülkemizde sektöründe 2020 yılında ilk dört şirket arasına girmek yanında Uluslar arası ihracatta
                        ülke sayısını 90'dan 140 üşlkeye çıkarmak,
                      </li>
                      <li>"ANI" markasını ülkemizde ve dünyada ençok tercih edilen marka olmasını sağlamak,</li>
                      <li>
                        Tüm faaliyetlerimizde doğruluk, çalışkanlık yanında sıfır hata ile kaliteli mamüller üreterek
                        ülkemiz ve dünyanın en güvenilir şirketi olmaktır
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                    <p className="text-gray-700 mb-4">
                      ANI BİSKÜVİ GIDA SAN. ve TİC. A.Ş. olarak unlu mamüller, çikolata, şekerleme sektöründe;
                    </p>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                      <li>
                        Çalışanlarımıza, tüketicilerimize ve tüm insanlara, çevreye duyarlı bir anlayış içinde yaratılan
                        değerle ülke ekonomisine katkı sağlayarak şirketimizi uluslararası bir şirket haline
                        getirmektir.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">Değerlerimiz</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[#e30613] text-2xl font-bold">1</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Kalite</h4>
                      <p className="text-gray-700">
                        Her ürünümüzde en yüksek kalite standartlarını sağlamak için çalışıyoruz.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[#e30613] text-2xl font-bold">2</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Güven</h4>
                      <p className="text-gray-700">
                        Tüketicilerimizin, çalışanlarımızın ve iş ortaklarımızın güvenini kazanmak önceliğimizdir.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[#e30613] text-2xl font-bold">3</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Yenilikçilik</h4>
                      <p className="text-gray-700">
                        Sürekli gelişim ve yenilikçilik anlayışıyla sektörde öncü olmayı hedefliyoruz.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[#e30613] text-2xl font-bold">4</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Sürdürülebilirlik</h4>
                      <p className="text-gray-700">
                        Çevreye ve topluma karşı sorumluluklarımızı yerine getirerek sürdürülebilir bir gelecek için
                        çalışıyoruz.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[#e30613] text-2xl font-bold">5</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Müşteri Odaklılık</h4>
                      <p className="text-gray-700">
                        Tüm faaliyetlerimizde müşterilerimizin memnuniyetini ön planda tutuyoruz.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[#e30613] text-2xl font-bold">6</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Ekip Ruhu</h4>
                      <p className="text-gray-700">
                        Başarımızın temelinde güçlü ekip çalışması ve dayanışma ruhu yatmaktadır.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-8">Kilometre Taşlarımız</h3>
                  <CompanyTimeline />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bizi Daha Yakından Tanıyın</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Anı Bisküvi'nin hikayesini, değerlerini ve vizyonunu daha yakından tanımak için kurumsal sayfalarımızı
              ziyaret edebilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tarihcemiz"
                className="bg-[#e30613] text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Tarihçemiz
              </Link>
              <Link
                href="/yonetimimiz"
                className="bg-white border border-[#e30613] text-[#e30613] px-6 py-3 rounded-full font-medium hover:bg-[#e30613] hover:text-white transition-colors"
              >
                Yönetim Kadromuz
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
