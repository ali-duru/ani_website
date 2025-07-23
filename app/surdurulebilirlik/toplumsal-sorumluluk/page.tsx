import Image from "next/image"
import Link from "next/link"
import { ChevronRight, HandHeart } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Toplumsal Sorumluluk | Sürdürülebilirlik | Anı Bisküvi",
  description: "Anı Bisküvi'nin topluma değer katan projeleri ve sosyal sorumluluk çalışmaları.",
}

export default function SocialResponsibilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format"
            alt="Toplumsal Sorumluluk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TOPLUMSAL SORUMLULUK</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Topluma değer katan projelerle sosyal sorumluluğumuzu yerine getiriyoruz
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
              <span className="font-medium text-[#e30613]">Toplumsal Sorumluluk</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center">
                  <HandHeart className="h-12 w-12 text-yellow-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Toplumsal Sorumluluk Projelerimiz</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Anı Bisküvi olarak, içinde bulunduğumuz topluma değer katmak ve sosyal sorumluluğumuzu yerine getirmek
                  için çeşitli projeler geliştiriyor ve uyguluyoruz. Eğitimden sağlığa, kültür-sanattan çevreye kadar
                  farklı alanlarda yürüttüğümüz projelerle sürdürülebilir bir gelecek için çalışıyoruz.
                </p>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Eğitim Projeleri</h3>
                <p className="mb-4">
                  Eğitimin sürdürülebilir kalkınmanın temel taşı olduğuna inanıyoruz. Bu nedenle, eğitim alanında
                  çeşitli projeler geliştiriyor ve gençlerin eğitimine destek oluyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Anı Bisküvi Eğitim Bursu Programı</li>
                  <li>Köy Okulları Yenileme Projesi</li>
                  <li>Meslek Liselerine Destek Programı</li>
                  <li>Kodlama ve Robotik Eğitim Atölyeleri</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: Anı Bisküvi Eğitim Bursu Programı
                  </h4>
                  <p>
                    2015 yılında başlattığımız Anı Bisküvi Eğitim Bursu Programı kapsamında, her yıl 100 başarılı ve
                    ihtiyaç sahibi öğrenciye eğitim bursu sağlıyoruz. Program, öğrencilerin eğitim masraflarının
                    karşılanmasının yanı sıra, mentorluk desteği, staj imkanları ve kişisel gelişim eğitimleri de
                    sunuyor. Bugüne kadar 800'den fazla öğrenciye burs sağladık ve mezunlarımızın %70'i şirketimizde
                    veya sektörümüzde istihdam edildi.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Sağlık Projeleri</h3>
                <p className="mb-4">
                  Toplum sağlığının geliştirilmesi ve herkesin kaliteli sağlık hizmetlerine erişebilmesi için çeşitli
                  projeler yürütüyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Gezici Sağlık Tarama Aracı</li>
                  <li>Sağlıklı Beslenme Eğitim Programı</li>
                  <li>Hastane Çocuk Bölümleri Yenileme Projesi</li>
                  <li>Sağlık Çalışanlarına Destek Programı</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Gezici Sağlık Tarama Aracı</h4>
                  <p>
                    2019 yılında başlattığımız Gezici Sağlık Tarama Aracı projesi ile sağlık hizmetlerine erişimi
                    kısıtlı olan kırsal bölgelere temel sağlık hizmetleri götürüyoruz. Tam donanımlı sağlık aracımız,
                    doktor ve sağlık personeli eşliğinde köy ve kasabaları ziyaret ederek ücretsiz sağlık taramaları
                    yapıyor. Proje kapsamında bugüne kadar 200'den fazla köy ve kasabada 50.000'in üzerinde kişiye
                    sağlık taraması hizmeti sunduk.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Kültür-Sanat Projeleri</h3>
                <p className="mb-4">
                  Kültürel mirasın korunması ve sanatın desteklenmesi için çeşitli projeler geliştiriyor ve kültür-sanat
                  etkinliklerine destek oluyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Geleneksel El Sanatları Koruma Projesi</li>
                  <li>Genç Sanatçılar Destek Programı</li>
                  <li>Kültürel Miras Restorasyon Projeleri</li>
                  <li>Çocuklar için Sanat Atölyeleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Çevre Projeleri</h3>
                <p className="mb-4">
                  Doğal çevrenin korunması ve gelecek nesillere aktarılması için çeşitli çevre projeleri geliştiriyor ve
                  uyguluyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Anı Bisküvi Hatıra Ormanı</li>
                  <li>Deniz ve Sahil Temizlik Kampanyaları</li>
                  <li>Geri Dönüşüm Bilincini Artırma Projeleri</li>
                  <li>Yenilenebilir Enerji Eğitim Programları</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Anı Bisküvi Hatıra Ormanı</h4>
                  <p>
                    2018 yılında başlattığımız Anı Bisküvi Hatıra Ormanı projesi kapsamında, her yıl belirli bölgelerde
                    ağaçlandırma çalışmaları yapıyoruz. Çalışanlarımız, ailelerimiz ve yerel toplulukların katılımıyla
                    gerçekleştirdiğimiz ağaçlandırma etkinliklerinde bugüne kadar 100.000'den fazla ağaç diktik. Proje,
                    hem karbon emisyonlarının dengelenmesine katkı sağlıyor hem de biyoçeşitliliğin korunmasına yardımcı
                    oluyor.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Toplumsal Kalkınma Projeleri</h3>
                <p className="mb-4">
                  Yerel toplulukların ekonomik ve sosyal kalkınmasını desteklemek için çeşitli projeler geliştiriyor ve
                  uyguluyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Kadın Girişimcileri Destekleme Programı</li>
                  <li>Köy Kooperatifleri Geliştirme Projesi</li>
                  <li>Engelli İstihdamını Artırma Programı</li>
                  <li>Mesleki Eğitim ve İstihdam Projeleri</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: Kadın Girişimcileri Destekleme Programı
                  </h4>
                  <p>
                    2020 yılında başlattığımız Kadın Girişimcileri Destekleme Programı kapsamında, kırsal bölgelerdeki
                    kadın girişimcilere eğitim, mentorluk ve finansal destek sağlıyoruz. Program, özellikle gıda üretimi
                    ve tarımsal ürün işleme alanlarında faaliyet gösteren kadın girişimcilere odaklanıyor. Bugüne kadar
                    150 kadın girişimciye destek sağladık ve desteklediğimiz işletmelerin %80'i başarılı bir şekilde
                    faaliyetlerine devam ediyor.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Afet Yardım ve İnsani Destek</h3>
                <p className="mb-4">
                  Doğal afetler ve insani krizler durumunda hızlı ve etkili yardım çalışmaları yürütüyor, afetzedelere
                  ve ihtiyaç sahiplerine destek oluyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Afet Müdahale ve Yardım Ekibi</li>
                  <li>Gıda ve Temel İhtiyaç Yardımları</li>
                  <li>Afet Sonrası Rehabilitasyon Projeleri</li>
                  <li>Afet Bilinci ve Hazırlık Eğitimleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Gönüllülük Programları</h3>
                <p className="mb-4">
                  Çalışanlarımızın toplumsal sorumluluk projelerine aktif katılımını teşvik etmek için çeşitli
                  gönüllülük programları düzenliyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Çalışan Gönüllülük Programı</li>
                  <li>Yetkinlik Bazlı Gönüllülük</li>
                  <li>Takım Gönüllülük Projeleri</li>
                  <li>Gönüllülük İzni Uygulaması</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Başarı Hikayemiz: Çalışan Gönüllülük Programı
                  </h4>
                  <p>
                    2019 yılında başlattığımız Çalışan Gönüllülük Programı kapsamında, çalışanlarımıza yılda 5 gün
                    ücretli gönüllülük izni veriyoruz. Çalışanlarımız bu izinlerini, şirketimizin desteklediği sosyal
                    sorumluluk projelerinde veya kendi seçtikleri sivil toplum kuruluşlarında gönüllü çalışarak
                    kullanabiliyorlar. Geçtiğimiz yıl, çalışanlarımızın %70'i gönüllülük programına katıldı ve toplam
                    10.000 saatten fazla gönüllü çalışma gerçekleştirildi.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-yellow-600 mt-10 mb-4">Toplumsal Sorumluluk Hedeflerimiz</h3>
                <p className="mb-6">
                  Anı Bisküvi olarak, 2030 yılına kadar toplumsal sorumluluk alanında aşağıdaki hedeflere ulaşmayı
                  taahhüt ediyoruz:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Toplumsal sorumluluk projelerimizle 1 milyon kişiye ulaşmak</li>
                  <li>Eğitim bursu sağladığımız öğrenci sayısını 2.000'e çıkarmak</li>
                  <li>Hatıra Ormanı projesi kapsamında 500.000 ağaç dikmek</li>
                  <li>Çalışanlarımızın gönüllülük katılım oranını %90'a çıkarmak</li>
                  <li>Toplumsal sorumluluk projelerine yıllık bütçemizin %2'sini ayırmak</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/surdurulebilirlik"
                  className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-700 transition-colors"
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
