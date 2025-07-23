import Image from "next/image"
import Link from "next/link"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import AboutNavigation from "@/components/about-navigation"

export const metadata = {
  title: "CEO | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin CEO'su hakkında bilgi edinin.",
}

export default function CeoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format"
            alt="CEO"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CEO</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin liderliğini üstlenen vizyoner yöneticimiz
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
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=450&auto=format"
                        alt="Anı Bisküvi CEO'su"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-[#e30613] mb-2">Mehmet Yılmaz</h2>
                    <p className="text-xl text-gray-700 mb-6">Yönetim Kurulu Başkanı ve CEO</p>
                    <div className="prose max-w-none text-gray-700">
                      <p className="mb-4 text-lg">
                        Mehmet Yılmaz, 2015 yılından bu yana Anı Bisküvi'nin Yönetim Kurulu Başkanı ve CEO'su olarak
                        görev yapmaktadır. İstanbul Teknik Üniversitesi Endüstri Mühendisliği bölümünden mezun olduktan
                        sonra, ABD'de Harvard Business School'da MBA eğitimini tamamlamıştır.
                      </p>
                      <p className="mb-4 text-lg">
                        Kariyerine uluslararası bir danışmanlık şirketinde başlayan Yılmaz, daha sonra çeşitli gıda
                        şirketlerinde üst düzey yöneticilik pozisyonlarında görev almıştır. 2010 yılında Anı Bisküvi
                        ailesine katılan Yılmaz, önce Operasyonlardan Sorumlu Genel Müdür Yardımcısı, ardından Genel
                        Müdür olarak görev yapmıştır.
                      </p>
                      <p className="mb-4 text-lg">
                        Mehmet Yılmaz'ın liderliğinde Anı Bisküvi, global pazardaki varlığını güçlendirmiş, ihracat
                        yapılan ülke sayısını artırmış ve dijital dönüşüm sürecini başarıyla yönetmiştir.
                        Sürdürülebilirlik ve inovasyon odaklı stratejileriyle şirketin büyümesine önemli katkılar
                        sağlamıştır.
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        LinkedIn
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        Twitter
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Vizyonu ve Stratejisi</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className="prose max-w-none text-gray-700">
                        <p className="mb-4 text-lg">
                          Mehmet Yılmaz'ın vizyonu, Anı Bisküvi'yi sadece Türkiye'nin değil, dünyanın önde gelen gıda
                          şirketlerinden biri haline getirmektir. Bu vizyon doğrultusunda, şirketin stratejik odak
                          noktalarını şu şekilde belirlemiştir:
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Global pazarda büyüme ve marka bilinirliğini artırma</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Dijital dönüşüm ve teknolojik yenilikler</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Sürdürülebilir üretim ve çevre dostu uygulamalar</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Ar-Ge çalışmalarına yatırım ve yenilikçi ürünler</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Çalışan memnuniyeti ve kurumsal kültürün güçlendirilmesi</span>
                          </li>
                        </ul>
                        <p className="mb-4 text-lg">
                          Bu stratejik hedefler doğrultusunda, Mehmet Yılmaz liderliğinde Anı Bisküvi, son yıllarda
                          önemli yatırımlara imza atmış ve büyüme ivmesini artırmıştır. Özellikle dijital dönüşüm
                          alanında yapılan yatırımlar, şirketin üretim verimliliğini ve ürün kalitesini daha da
                          yükseltmiştir.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format"
                        alt="Stratejik Planlama"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">Başarıları ve Ödülleri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">İhracat Başarısı</h4>
                      <p className="text-gray-700">
                        Mehmet Yılmaz'ın liderliğinde Anı Bisküvi, ihracat hacmini %60 artırarak 100'den fazla ülkeye
                        ürün ihraç eder hale gelmiştir.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Dijital Dönüşüm</h4>
                      <p className="text-gray-700">
                        Endüstri 4.0 uygulamalarının şirkete entegrasyonu ile üretim verimliliği %30 oranında
                        artırılmıştır.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Sürdürülebilirlik</h4>
                      <p className="text-gray-700">
                        Çevre dostu ambalaj ve üretim süreçleri ile karbon ayak izini %25 azaltma başarısı
                        gösterilmiştir.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Yılın CEO'su</h4>
                      <p className="text-gray-700">
                        2020 yılında "Yılın CEO'su" ödülüne layık görülmüş ve gıda sektöründe liderlik örneği
                        göstermiştir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sosyal Sorumluluk</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=400&auto=format"
                        alt="Sosyal Sorumluluk"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="mb-4 text-lg">
                        Mehmet Yılmaz, iş dünyasındaki başarılarının yanı sıra sosyal sorumluluk projelerine verdiği
                        destekle de tanınmaktadır. Eğitim, çevre ve sürdürülebilirlik alanlarında birçok projeye öncülük
                        eden Yılmaz, Anı Bisküvi'nin kurumsal sosyal sorumluluk stratejisini de bu doğrultuda
                        şekillendirmiştir.
                      </p>
                      <p className="mb-4 text-lg">
                        "Geleceğe Yatırım" adlı eğitim programı kapsamında her yıl yüzlerce öğrenciye burs imkanı
                        sağlanmakta ve gençlerin mesleki gelişimine katkıda bulunulmaktadır. Ayrıca, "Yeşil Üretim"
                        projesiyle çevre dostu üretim süreçleri geliştirilmekte ve doğal kaynakların korunmasına katkı
                        sağlanmaktadır.
                      </p>
                      <p className="mb-4 text-lg">
                        Mehmet Yılmaz, iş dünyasındaki liderliğinin yanı sıra, toplumsal sorunlara duyarlı yaklaşımı ve
                        sürdürülebilir bir gelecek için gösterdiği çabalarla da takdir toplamaktadır.
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
                "Başarı, geçmişten aldığımız güçle geleceğe emin adımlarla ilerlemektir. Anı Bisküvi olarak, köklü
                geçmişimizden aldığımız ilhamla, yenilikçi ve sürdürülebilir bir geleceğe doğru ilerliyoruz."
              </p>
              <footer className="text-white/80">
                <cite>- Mehmet Yılmaz, Anı Bisküvi CEO'su</cite>
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
