import Image from "next/image"
import Link from "next/link"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import AboutNavigation from "@/components/about-navigation"

export const metadata = {
  title: "Tarihçemiz | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin 1944'ten günümüze uzanan başarı dolu yolculuğu.",
}

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format"
            alt="Tarihçemiz"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TARİHÇEMİZ</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  1944'ten bugüne Anı Bisküvi'nin başarı dolu yolculuğu
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
                  <Image
                    src="https://images.unsplash.com/photo-1505941625782-9099e6c57ad0?q=80&w=1000&auto=format"
                    alt="Anı Bisküvi Tarihçe"
                    width={1000}
                    height={500}
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                <h2 className="text-3xl font-bold text-[#e30613] mb-6">
                  Anı Bisküvi'nin 1944'ten Günümüze Uzanan Hikayesi
                </h2>

                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kuruluş Yılları (1944-1955)</h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-2/3">
                      <p className="mb-4 text-lg">
                        Anı Bisküvi'nin temelleri 1944 yılında İstanbul Eminönü'nde küçük bir atölyede atıldı.
                        Kurucularımız, o dönemin zor şartlarında, kaliteli ve lezzetli bisküviler üretme hayaliyle yola
                        çıktı. İlk yıllarda sınırlı imkanlarla üretim yapılmasına rağmen, ürünlerimizin lezzeti kısa
                        sürede tüketicilerin beğenisini kazandı.
                      </p>
                      <p className="mb-4 text-lg">
                        1950'li yıllara gelindiğinde artan talep karşısında üretim kapasitesini artırma ihtiyacı doğdu
                        ve 1955 yılında Topkapı'da ilk modern üretim tesisimiz faaliyete geçti. Bu adım, Anı Bisküvi'nin
                        endüstriyel üretime geçişinin ilk adımı oldu.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format"
                        alt="Eski Bisküvi Üretimi"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Büyüme ve Çeşitlenme Dönemi (1955-1980)
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=400&auto=format"
                        alt="Modern Fabrika"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="mb-4 text-lg">
                        1960'lı yıllarda Türkiye'nin ekonomik kalkınmasına paralel olarak Anı Bisküvi de büyümeye devam
                        etti. Ürün çeşitliliği artırıldı ve sadece bisküvi değil, çikolata, gofret ve kek gibi farklı
                        ürün kategorilerine de yatırım yapıldı.
                      </p>
                      <p className="mb-4 text-lg">
                        1970'lere gelindiğinde Anı Bisküvi, Türkiye'nin en tanınmış gıda markalarından biri haline
                        gelmişti. Bu dönemde üretim teknolojilerine yapılan yatırımlar, ürün kalitesini ve üretim
                        kapasitesini daha da artırdı.
                      </p>
                    </div>
                  </div>

                  <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">1944</h4>
                      <p className="text-gray-700">
                        Anı Bisküvi'nin İstanbul Eminönü'nde küçük bir atölyede kurulması.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">1955</h4>
                      <p className="text-gray-700">Topkapı'da ilk modern üretim tesisinin faaliyete geçmesi.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">1970</h4>
                      <p className="text-gray-700">
                        Çikolata ve gofret üretimine başlanması, ürün yelpazesinin genişletilmesi.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">1980</h4>
                      <p className="text-gray-700">
                        Türkiye genelinde dağıtım ağının genişletilmesi ve pazar liderliğine ulaşılması.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Uluslararası Açılım (1980-2000)</h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-2/3">
                      <p className="mb-4 text-lg">
                        1980'li yıllar, Anı Bisküvi için uluslararası pazarlara açılma dönemi oldu. İlk ihracat
                        faaliyetleri Orta Doğu ülkelerine başladı ve kısa sürede Avrupa, Afrika ve Asya pazarlarına da
                        ürünlerimiz ulaştırıldı.
                      </p>
                      <p className="mb-4 text-lg">
                        1990'lı yıllarda global standartlarda üretim yapan tesislerimiz, uluslararası kalite
                        sertifikalarıyla taçlandırıldı. Bu dönemde yeni üretim tesisleri açıldı ve ihracat yapılan ülke
                        sayısı hızla artmaya devam etti.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=400&auto=format"
                        alt="Global Pazarlar"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Yenilikçilik ve Sürdürülebilirlik (2000-Günümüz)
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format"
                        alt="Modern Üretim"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="mb-4 text-lg">
                        2000'li yıllar, Anı Bisküvi için teknolojik yenilenme ve sürdürülebilirlik odaklı yatırımların
                        yapıldığı bir dönem oldu. Üretim tesislerimiz en son teknoloji ile yenilendi ve çevre dostu
                        üretim süreçleri benimsendi.
                      </p>
                      <p className="mb-4 text-lg">
                        2010'lu yıllarda dijital dönüşüm çalışmalarına hız verildi ve Endüstri 4.0 uygulamaları ile
                        üretim süreçleri tamamen dijitalleştirildi. Ar-Ge çalışmalarına yapılan yatırımlar, yenilikçi
                        ürünlerin geliştirilmesini sağladı.
                      </p>
                      <p className="mb-4 text-lg">
                        Bugün Anı Bisküvi, 100'den fazla ülkeye ihracat yapan, modern üretim tesisleri ve geniş ürün
                        yelpazesiyle Türkiye'nin önde gelen gıda şirketlerinden biri olarak yoluna devam etmektedir.
                        Geçmişten gelen değerlerimizi koruyarak, geleceğe emin adımlarla ilerliyoruz.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">Anı Bisküvi'nin Dünü, Bugünü ve Yarını</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Dünümüz</h4>
                      <p className="text-gray-700">
                        1944'te küçük bir atölyede başlayan yolculuğumuzda, kalite ve lezzetten ödün vermeden
                        tüketicilerimize en iyi ürünleri sunmak için çalıştık.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Bugünümüz</h4>
                      <p className="text-gray-700">
                        Modern üretim tesislerimiz, yenilikçi ürünlerimiz ve global pazardaki varlığımızla sektörün önde
                        gelen markalarından biri olarak hizmet veriyoruz.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Yarınımız</h4>
                      <p className="text-gray-700">
                        Sürdürülebilir üretim, dijital dönüşüm ve yenilikçi ürünlerle geleceğe hazırlanıyor, global
                        pazarda daha güçlü bir konuma ulaşmayı hedefliyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Anı Bisküvi'yi Daha Yakından Tanıyın</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Kurucularımız, yönetim kadromuz ve şirket değerlerimiz hakkında daha fazla bilgi edinmek için diğer
              kurumsal sayfalarımızı ziyaret edebilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kurucumuz"
                className="bg-[#e30613] text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Kurucumuz
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
