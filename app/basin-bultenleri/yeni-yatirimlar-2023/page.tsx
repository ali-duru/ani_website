import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Anı Bisküvi Yeni Yatırımlarla Büyümesini Sürdürüyor | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description:
    "Anı Bisküvi ortaklarından Rıfkı Boynukalın, şirketin büyüme stratejisi ve yeni yatırımları hakkında bilgi verdi.",
}

export default function NewInvestmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Breadcrumb */}
        <section className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#e30613] transition-colors">
                Ana Sayfa
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/basin-bultenleri" className="hover:text-[#e30613] transition-colors">
                Basın Bültenleri
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-[#e30613]">Anı Bisküvi Yeni Yatırımlarla Büyümesini Sürdürüyor</span>
            </div>
          </div>
        </section>

        {/* Press Release Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>20 Aralık 2023</span>
                  <span className="mx-2">|</span>
                  <span className="bg-[#e30613] text-white text-xs px-3 py-1 rounded-full">Yatırım</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Anı Bisküvi Yeni Yatırımlarla Büyümesini Sürdürüyor
                </h1>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JujEaTbfIOCpuk1lniyleMieWCXW3L.png"
                  alt="Anı Bisküvi Yeni Yatırımlarla Büyümesini Sürdürüyor"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose max-w-none text-gray-700 mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  Ekonomi Dergisi Platin'in Karaman özel ekine konuşan Anı Bisküvi ortaklarından Rıfkı Boynukalın; ''Anı
                  Bisküvi, 1994 yılında Karaman Organize sanayi Bölgesinde kuruldu. Üretime başladığı tarihten bugüne 20
                  yıl geçti. Genç bir şirket olarak günde 320 ton mamül üretiyoruz...''
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Anı Bisküvi'nin Büyüme Stratejisi</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Rıfkı Boynukalın, Anı Bisküvi'nin kuruluşundan bu yana geçen 20 yıllık süreçte gösterdiği büyüme
                  performansını ve gelecek hedeflerini anlattı. Şirketin günlük 320 ton mamül üretim kapasitesine
                  ulaştığını belirten Boynukalın, yeni yatırımlarla bu kapasiteyi artırmayı hedeflediklerini ifade etti.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Yeni Yatırımlar ve Hedefler</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Boynukalın, şirketin yeni yatırım planları hakkında da bilgi verdi. Üretim kapasitesini artırmak ve
                  ürün çeşitliliğini genişletmek için yeni yatırımlar planladıklarını belirten Boynukalın, bu
                  yatırımların hem iç pazarda hem de ihracat pazarlarında şirketin rekabet gücünü artıracağını
                  vurguladı.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">İhracat Hedefleri</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Anı Bisküvi'nin ihracat performansına da değinen Boynukalın, şirketin ihracat hacmini artırmak için
                  yeni pazarlara açılma stratejisi izlediğini belirtti. Mevcut ihracat pazarlarındaki paylarını
                  artırmanın yanı sıra, yeni pazarlara giriş yapmak için çalışmalar yürüttüklerini ifade eden
                  Boynukalın, ihracatın şirketin büyüme stratejisinde önemli bir yer tuttuğunu vurguladı.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Kalite ve İnovasyon</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Boynukalın, Anı Bisküvi'nin kalite ve inovasyon odaklı yaklaşımının şirketin başarısındaki önemli
                  faktörlerden biri olduğunu belirtti. Ürün kalitesinden ödün vermeden, tüketici beklentilerine uygun
                  yenilikçi ürünler geliştirmeye devam edeceklerini ifade eden Boynukalın, bu yaklaşımın şirketin
                  rekabet gücünü artırdığını vurguladı.
                </p>
              </div>

              {/* Share and Download */}
              <div className="flex flex-wrap justify-between items-center border-t border-gray-200 pt-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <span className="text-gray-700 font-medium">Paylaş:</span>
                  <div className="flex gap-2">
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                <Button className="bg-[#e30613] hover:bg-red-700 flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  PDF İndir
                </Button>
              </div>

              {/* Related Press Releases */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Basın Bültenleri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="relative h-48">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tq027JQIHszYePLSp3S5LXPFHpp3lv.png"
                        alt="Anı Bisküvi BRC Sertifikasını Aldı"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#e30613] text-white text-xs px-3 py-1 rounded-full">
                        Sertifika
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>15 Aralık 2023</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Anı Bisküvi BRC Sertifikasını Aldı</h3>
                      <Link
                        href="/basin-bultenleri/brc-sertifikasi-2023"
                        className="inline-flex items-center text-[#e30613] font-medium hover:underline"
                      >
                        Detaylar
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
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
