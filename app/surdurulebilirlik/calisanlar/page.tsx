import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Users } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Çalışanlar | Sürdürülebilirlik | Anı Bisküvi",
  description: "Anı Bisküvi'nin çalışanlarının gelişimi ve mutluluğu için sürdürülebilir çalışma ortamı uygulamaları.",
}

export default function EmployeesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format"
            alt="Çalışanlar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ÇALIŞANLAR</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Çalışanlarımızın gelişimi ve mutluluğu için sürdürülebilir bir çalışma ortamı sağlıyoruz
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
              <span className="font-medium text-[#e30613]">Çalışanlar</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-10">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="h-12 w-12 text-purple-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sürdürülebilir Çalışma Ortamı</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Anı Bisküvi olarak, çalışanlarımızın gelişimi, mutluluğu ve refahı için sürdürülebilir bir çalışma
                  ortamı sağlamayı önceliklerimiz arasında görüyoruz. İnsan kaynakları politikalarımız ve
                  uygulamalarımız, çalışanlarımızın potansiyellerini en üst düzeyde gerçekleştirmelerini desteklemek
                  üzere tasarlanmıştır.
                </p>

                <h3 className="text-2xl font-bold text-purple-600 mt-10 mb-4">Çalışan Gelişimi</h3>
                <p className="mb-4">
                  Çalışanlarımızın kişisel ve profesyonel gelişimlerini desteklemek için kapsamlı eğitim ve gelişim
                  programları sunuyoruz. Her çalışanımızın potansiyelini en üst düzeye çıkarmasına yardımcı olmak için
                  bireysel gelişim planları oluşturuyor ve kariyer yolculuklarında onlara rehberlik ediyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Teknik ve mesleki eğitimler</li>
                  <li>Liderlik ve yönetim becerileri geliştirme programları</li>
                  <li>Kişisel gelişim ve yetkinlik eğitimleri</li>
                  <li>Mentorluk ve koçluk programları</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Anı Akademi</h4>
                  <p>
                    2020 yılında kurduğumuz Anı Akademi, çalışanlarımızın sürekli gelişimini destekleyen kurumsal
                    üniversitemizdir. Akademi bünyesinde, teknik eğitimlerden liderlik programlarına, dijital
                    yetkinliklerden sürdürülebilirlik eğitimlerine kadar geniş bir yelpazede eğitimler sunuyoruz.
                    Geçtiğimiz yıl, çalışan başına ortalama 40 saat eğitim sağladık ve iç eğitmenlerimiz tarafından
                    verilen eğitimlerin oranını %60'a çıkardık.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-purple-600 mt-10 mb-4">Çeşitlilik ve Kapsayıcılık</h3>
                <p className="mb-4">
                  Farklı bakış açılarının ve deneyimlerin şirketimize değer kattığına inanıyoruz. Çeşitliliği ve
                  kapsayıcılığı teşvik eden bir çalışma ortamı yaratmak için politikalar geliştiriyor ve uygulamalar
                  hayata geçiriyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Fırsat eşitliği ve ayrımcılık karşıtı politikalar</li>
                  <li>Kadın istihdamını ve liderliğini destekleme programları</li>
                  <li>Engelli dostu çalışma ortamı</li>
                  <li>Kuşaklar arası işbirliğini teşvik eden uygulamalar</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: Kadın Liderler Programı</h4>
                  <p>
                    2021 yılında başlattığımız "Kadın Liderler Programı" ile kadın çalışanlarımızın liderlik
                    pozisyonlarına hazırlanmalarını destekliyoruz. Program kapsamında, mentorluk, koçluk, eğitim ve
                    networking fırsatları sunuyoruz. Program sayesinde, üst düzey yönetim pozisyonlarındaki kadın
                    oranımızı %25'ten %40'a çıkarmayı başardık ve 2025 yılına kadar bu oranı %50'ye çıkarmayı
                    hedefliyoruz.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-purple-600 mt-10 mb-4">İş Sağlığı ve Güvenliği</h3>
                <p className="mb-4">
                  Çalışanlarımızın sağlığı ve güvenliği en önemli önceliklerimiz arasındadır. Sıfır kaza hedefiyle
                  çalışıyor, risk değerlendirmeleri yapıyor ve sürekli iyileştirmeler gerçekleştiriyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Kapsamlı iş sağlığı ve güvenliği eğitimleri</li>
                  <li>Düzenli risk değerlendirmeleri ve önleyici tedbirler</li>
                  <li>Ergonomik çalışma ortamı</li>
                  <li>Sağlık taramaları ve destek programları</li>
                </ul>

                <h3 className="text-2xl font-bold text-purple-600 mt-10 mb-4">Çalışan Refahı ve İş-Yaşam Dengesi</h3>
                <p className="mb-4">
                  Çalışanlarımızın fiziksel, zihinsel ve duygusal refahını desteklemek için çeşitli programlar ve
                  uygulamalar sunuyoruz. İş-yaşam dengesini sağlamaya yönelik esnek çalışma modelleri ve destek
                  mekanizmaları geliştiriyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Esnek çalışma saatleri ve uzaktan çalışma imkanları</li>
                  <li>Fiziksel ve zihinsel sağlık programları</li>
                  <li>Stres yönetimi ve mindfulness eğitimleri</li>
                  <li>Sosyal aktiviteler ve takım çalışmasını güçlendiren etkinlikler</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Başarı Hikayemiz: İyi Yaşam Programı</h4>
                  <p>
                    2022 yılında başlattığımız "İyi Yaşam Programı", çalışanlarımızın fiziksel, zihinsel ve duygusal
                    sağlığını desteklemek için tasarlanmış kapsamlı bir programdır. Program kapsamında, beslenme
                    danışmanlığı, fitness aktiviteleri, stres yönetimi eğitimleri ve psikolojik destek hizmetleri
                    sunuyoruz. Program, çalışan memnuniyetinde %15'lik bir artış sağlarken, işe devamsızlık oranlarında
                    %20'lik bir azalma sağladı.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-purple-600 mt-10 mb-4">Çalışan Katılımı ve İletişim</h3>
                <p className="mb-4">
                  Çalışanlarımızın fikirlerini, önerilerini ve geri bildirimlerini paylaşabilecekleri açık iletişim
                  kanalları oluşturuyoruz. Karar alma süreçlerine katılımlarını teşvik ediyor ve sürekli iyileştirme
                  kültürünü destekliyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Düzenli çalışan memnuniyeti ve bağlılığı anketleri</li>
                  <li>Öneri sistemleri ve iyileştirme projeleri</li>
                  <li>Açık kapı politikası ve şeffaf iletişim</li>
                  <li>Çalışan temsilciliği ve komiteleri</li>
                </ul>

                <h3 className="text-2xl font-bold text-purple-600 mt-10 mb-4">Sürdürülebilirlik Kültürü</h3>
                <p className="mb-4">
                  Çalışanlarımızın sürdürülebilirlik konusunda bilinçlenmelerini ve bu alandaki çalışmalarımıza aktif
                  katılımlarını teşvik ediyoruz. Sürdürülebilirlik eğitimleri, gönüllülük programları ve yeşil ofis
                  uygulamalarıyla sürdürülebilirlik kültürünü yaygınlaştırıyoruz.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Sürdürülebilirlik eğitimleri ve farkındalık programları</li>
                  <li>Çalışan gönüllülük projeleri</li>
                  <li>Yeşil ofis uygulamaları</li>
                  <li>Sürdürülebilirlik fikir ve öneri platformu</li>
                </ul>

                <h3 className="text-2xl font-bold text-purple-600 mt-10 mb-4">Çalışan Hedeflerimiz</h3>
                <p className="mb-6">
                  Anı Bisküvi olarak, 2030 yılına kadar çalışanlarımızla ilgili aşağıdaki sürdürülebilirlik hedeflerine
                  ulaşmayı taahhüt ediyoruz:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Çalışan bağlılığı ve memnuniyetini %90 seviyesine çıkarmak</li>
                  <li>Kadın yönetici oranını %50'ye yükseltmek</li>
                  <li>İş kazası sıklık oranını sıfıra indirmek</li>
                  <li>Çalışan başına yıllık eğitim saatini 60 saate çıkarmak</li>
                  <li>Tüm çalışanlarımızın sürdürülebilirlik eğitimlerini tamamlamasını sağlamak</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/surdurulebilirlik"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
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
