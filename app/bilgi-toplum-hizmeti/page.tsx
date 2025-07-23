import Image from "next/image"
import Link from "next/link"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import AboutNavigation from "@/components/about-navigation"

export const metadata = {
  title: "Bilgi Toplum Hizmeti | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin bilgi toplum hizmetleri ve yasal bilgilendirmeleri.",
}

export default function InformationServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format"
            alt="Bilgi Toplum Hizmeti"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BİLGİ TOPLUM HİZMETİ</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin yasal bilgilendirmeleri ve kurumsal belgeleri
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
                <div className="prose max-w-none text-gray-700 mb-12">
                  <h2 className="text-3xl font-bold text-[#e30613] mb-6">Bilgi Toplum Hizmeti</h2>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <p className="text-lg">
                        6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve Ticari İletişim ve Ticari
                        Elektronik İletiler Hakkında Yönetmelik kapsamında, aşağıdaki bilgiler "Bilgi Toplum Hizmetleri"
                        bölümünde yer almaktadır.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format"
                        alt="Kurumsal Belgeler"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Şirket Bilgileri */}
                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Şirket Bilgileri</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Şirket Unvanı:</div>
                      <div className="md:col-span-2 text-gray-900">Anı Bisküvi Gıda San. ve Tic. A.Ş.</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Merkez Adresi:</div>
                      <div className="md:col-span-2 text-gray-900">
                        Organize Sanayi Bölgesi, 1. Cadde No: 123, 34000 İstanbul / Türkiye
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Ticaret Sicil No:</div>
                      <div className="md:col-span-2 text-gray-900">123456</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Mersis No:</div>
                      <div className="md:col-span-2 text-gray-900">0123456789012345</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Vergi Dairesi:</div>
                      <div className="md:col-span-2 text-gray-900">Büyük Mükellefler</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Vergi No:</div>
                      <div className="md:col-span-2 text-gray-900">1234567890</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Telefon:</div>
                      <div className="md:col-span-2 text-gray-900">+90 (338) 224 12 30</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">E-posta:</div>
                      <div className="md:col-span-2 text-gray-900">info@anibiskuvi.com.tr</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="font-medium text-gray-700">Web Sitesi:</div>
                      <div className="md:col-span-2 text-gray-900">www.anibiskuvi.com.tr</div>
                    </div>
                  </div>
                </div>

                {/* Kurumsal Belgeler */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">Kurumsal Belgeler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                      href="#"
                      className="flex items-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#e30613]"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Ticaret Sicil Gazetesi</h4>
                        <p className="text-sm text-gray-600">PDF, 2.5 MB</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#e30613]"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Vergi Levhası</h4>
                        <p className="text-sm text-gray-600">PDF, 1.2 MB</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#e30613]"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Faaliyet Belgesi</h4>
                        <p className="text-sm text-gray-600">PDF, 1.8 MB</p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#e30613]"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">İmza Sirküleri</h4>
                        <p className="text-sm text-gray-600">PDF, 3.1 MB</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Yasal Bilgilendirmeler */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Yasal Bilgilendirmeler</h3>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Kişisel Verilerin Korunması</h4>
                      <p className="text-gray-700 mb-4">
                        Anı Bisküvi olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel
                        verilerinizin güvenliği ve gizliliği konusunda gerekli tüm tedbirleri alıyoruz.
                      </p>
                      <Link href="#" className="inline-flex items-center text-[#e30613] font-medium hover:underline">
                        KVKK Aydınlatma Metni
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
                          className="ml-1"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Çerez Politikası</h4>
                      <p className="text-gray-700 mb-4">
                        Web sitemizde kullanılan çerezler hakkında detaylı bilgi için Çerez Politikamızı
                        inceleyebilirsiniz.
                      </p>
                      <Link href="#" className="inline-flex items-center text-[#e30613] font-medium hover:underline">
                        Çerez Politikası
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
                          className="ml-1"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Kullanım Koşulları</h4>
                      <p className="text-gray-700 mb-4">
                        Web sitemizi kullanırken uymanız gereken kurallar ve koşullar hakkında bilgi almak için Kullanım
                        Koşulları sayfamızı ziyaret edebilirsiniz.
                      </p>
                      <Link href="#" className="inline-flex items-center text-[#e30613] font-medium hover:underline">
                        Kullanım Koşulları
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
                          className="ml-1"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* İletişim Bilgileri */}
                <div>
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">İletişim Bilgileri</h3>
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <p className="text-gray-700 mb-6">
                      Bilgi Toplum Hizmetleri kapsamında herhangi bir sorunuz veya talebiniz olması durumunda, aşağıdaki
                      iletişim kanallarından bize ulaşabilirsiniz:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
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
                            className="text-[#e30613]"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">Telefon</h4>
                          <p className="text-gray-700">+90 (338) 224 12 30</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
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
                            className="text-[#e30613]"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">E-posta</h4>
                          <p className="text-gray-700">info@anibiskuvi.com.tr</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
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
                            className="text-[#e30613]"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">Adres</h4>
                          <p className="text-gray-700">
                            Organize Sanayi Bölgesi, 1. Cadde No: 123, 34000 İstanbul / Türkiye
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
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
                            className="text-[#e30613]"
                          >
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">Web Sitesi</h4>
                          <p className="text-gray-700">www.anibiskuvi.com.tr</p>
                        </div>
                      </div>
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
