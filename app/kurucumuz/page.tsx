import Image from "next/image"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import AboutNavigation from "@/components/about-navigation"

export const metadata = {
  title: "Kurucumuz | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin kurucusu hakkında bilgi edinin.",
}

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format"
            alt="Kurucumuz"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">KURUCUMUZ</h1>
                <p className="text-white/90 text-lg md:text-xl">Anı Bisküvi'nin kurucusu ve vizyonu</p>
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
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=450&auto=format"
                        alt="Anı Bisküvi Kurucusu"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-[#e30613] mb-6">Ahmet Yılmaz</h2>
                    <p className="text-gray-500 text-lg mb-6">1920 - 2005</p>
                    <div className="prose max-w-none text-gray-700">
                      <p className="mb-4 text-lg">
                        Ahmet Yılmaz, 1920 yılında İstanbul'da doğdu. Genç yaşta iş hayatına atılan Yılmaz, ticaret
                        alanında edindiği tecrübelerle 1944 yılında Anı Bisküvi'nin temellerini attı.
                      </p>
                      <p className="mb-4 text-lg">
                        İkinci Dünya Savaşı'nın zorlu ekonomik koşullarında, küçük bir atölyede başlayan üretim
                        serüveni, onun vizyoner bakış açısı ve çalışkanlığı sayesinde kısa sürede büyüdü. Ahmet Yılmaz,
                        kaliteden ödün vermeden, en iyi hammaddeleri kullanarak üretim yapma prensibini şirketin temel
                        değeri haline getirdi.
                      </p>
                      <p className="mb-4 text-lg">
                        1950'li yıllarda modern üretim tesislerinin kurulmasına öncülük eden Yılmaz, Türkiye'nin
                        sanayileşme sürecine de önemli katkılarda bulundu. Onun liderliğinde Anı Bisküvi, sadece bir
                        gıda şirketi olmaktan çıkıp, toplumsal sorumluluk bilinciyle hareket eden bir kurum haline
                        geldi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kurucumuzun Vizyonu</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className="prose max-w-none text-gray-700">
                        <p className="mb-4 text-lg">
                          Ahmet Yılmaz'ın en büyük vizyonu, Türkiye'nin kendi ürettiği ürünlerle dünya pazarlarında söz
                          sahibi olmasıydı. "Kaliteli üretim, dürüst ticaret" ilkesini benimseyen Yılmaz, şirketin tüm
                          faaliyetlerinde bu ilkeyi rehber edindi.
                        </p>
                        <p className="mb-4 text-lg">
                          Onun için Anı Bisküvi, sadece bir ticari işletme değil, Türkiye'nin ekonomik kalkınmasına
                          katkıda bulunan, istihdam sağlayan ve toplumsal değer üreten bir kurumdu. Bu vizyon
                          doğrultusunda, şirket bünyesinde birçok sosyal sorumluluk projesi hayata geçirildi.
                        </p>
                        <p className="mb-4 text-lg">
                          Ahmet Yılmaz'ın bir diğer önemli vizyonu da sürekli yenilik ve gelişimdi. Teknolojik
                          yenilikleri yakından takip eden ve şirketine adapte eden Yılmaz, Anı Bisküvi'nin her zaman
                          sektörün öncü kuruluşlarından biri olmasını sağladı.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format"
                        alt="Vizyon ve Liderlik"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">Kurucumuzun İlkeleri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Kalite Odaklılık</h4>
                      <p className="text-gray-700">
                        "En iyi hammadde, en iyi üretim, en iyi ürün" felsefesiyle hareket eden Ahmet Yılmaz, kaliteden
                        asla taviz vermedi.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Dürüstlük</h4>
                      <p className="text-gray-700">
                        Ticari ilişkilerde dürüstlük ve şeffaflığı ön planda tutan Yılmaz, bu değerleri şirket
                        kültürünün temel taşı haline getirdi.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Yenilikçilik</h4>
                      <p className="text-gray-700">
                        Sürekli gelişim ve yenilik arayışında olan Ahmet Yılmaz, teknolojik yenilikleri yakından takip
                        ederek şirketine adapte etti.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Toplumsal Sorumluluk</h4>
                      <p className="text-gray-700">
                        Sadece ticari başarıyı değil, topluma fayda sağlamayı da amaçlayan Yılmaz, birçok sosyal
                        sorumluluk projesine öncülük etti.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mirası</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format"
                        alt="Şirket Mirası"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="mb-4 text-lg">
                        Ahmet Yılmaz, 2005 yılında hayata veda ettiğinde arkasında sadece başarılı bir şirket değil,
                        güçlü değerlere sahip bir kurum kültürü de bıraktı. Onun ilkeleri ve vizyonu, bugün hala Anı
                        Bisküvi'nin tüm faaliyetlerine yön vermektedir.
                      </p>
                      <p className="mb-4 text-lg">
                        Kurucumuzun en büyük mirası, kaliteden ödün vermeden üretim yapma anlayışı ve toplumsal
                        sorumluluklarını yerine getiren bir şirket olma vizyonudur. Bu miras, Anı Bisküvi'nin bugünkü
                        başarısının temelini oluşturmaktadır.
                      </p>
                      <p className="mb-4 text-lg">
                        Ahmet Yılmaz'ın adı, şirketimiz bünyesinde kurulan "Ahmet Yılmaz Eğitim Vakfı" ile yaşatılmakta
                        ve her yıl yüzlerce öğrenciye burs imkanı sağlanmaktadır. Ayrıca, şirket merkezimizde bulunan
                        "Ahmet Yılmaz Müzesi"nde, kurucumuzun hayatı ve şirketimizin tarihi sergilenmektedir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-[#e30613]">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="text-white max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-light italic mb-6">
                "Kaliteli üretim ve dürüst ticaret, başarının anahtarıdır. Ancak gerçek başarı, topluma değer katmakla
                mümkündür."
              </p>
              <footer className="text-white/80">
                <cite>- Ahmet Yılmaz, Anı Bisküvi Kurucusu</cite>
              </footer>
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
