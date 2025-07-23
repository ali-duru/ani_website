import Image from "next/image"
import Link from "next/link"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import AboutNavigation from "@/components/about-navigation"

export const metadata = {
  title: "Yönetimimiz | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin yönetim kadrosu hakkında bilgi edinin.",
}

// Yönetim kadrosu verileri
const executiveTeam = [
  {
    id: "ceo",
    name: "Mehmet Yılmaz",
    title: "Yönetim Kurulu Başkanı ve CEO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format",
    bio: "Harvard Business School MBA mezunu olan Mehmet Yılmaz, 2015 yılından bu yana Anı Bisküvi'nin CEO'su olarak görev yapmaktadır.",
  },
  {
    id: "cfo",
    name: "Ayşe Kaya",
    title: "Finans Direktörü (CFO)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format",
    bio: "20 yılı aşkın finans deneyimine sahip olan Ayşe Kaya, şirketin finansal stratejilerinden sorumludur.",
  },
  {
    id: "coo",
    name: "Ali Demir",
    title: "Operasyon Direktörü (COO)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format",
    bio: "Üretim ve tedarik zinciri alanında uzman olan Ali Demir, şirketin operasyonel süreçlerini yönetmektedir.",
  },
  {
    id: "cmo",
    name: "Zeynep Şahin",
    title: "Pazarlama Direktörü (CMO)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format",
    bio: "Pazarlama stratejileri ve marka yönetimi konusunda deneyimli olan Zeynep Şahin, şirketin global marka stratejisini yönetmektedir.",
  },
  {
    id: "cto",
    name: "Emre Yıldız",
    title: "Teknoloji Direktörü (CTO)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format",
    bio: "Dijital dönüşüm ve teknoloji alanında uzman olan Emre Yıldız, şirketin teknolojik altyapısını geliştirmektedir.",
  },
  {
    id: "hr",
    name: "Selin Öztürk",
    title: "İnsan Kaynakları Direktörü",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format",
    bio: "İnsan kaynakları yönetimi konusunda deneyimli olan Selin Öztürk, şirketin insan kaynakları stratejilerini yönetmektedir.",
  },
]

// Yönetim Kurulu verileri
const boardMembers = [
  {
    id: "chairman",
    name: "Mehmet Yılmaz",
    title: "Yönetim Kurulu Başkanı",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format",
  },
  {
    id: "vice-chairman",
    name: "Ahmet Yılmaz",
    title: "Yönetim Kurulu Başkan Yardımcısı",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format",
  },
  {
    id: "member1",
    name: "Fatma Demir",
    title: "Yönetim Kurulu Üyesi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format",
  },
  {
    id: "member2",
    name: "Mustafa Kaya",
    title: "Yönetim Kurulu Üyesi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format",
  },
  {
    id: "member3",
    name: "Ayşe Öztürk",
    title: "Bağımsız Yönetim Kurulu Üyesi",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format",
  },
  {
    id: "member4",
    name: "Kemal Yıldız",
    title: "Bağımsız Yönetim Kurulu Üyesi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format",
  },
]

export default function ManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format"
            alt="Yönetimimiz"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">YÖNETİMİMİZ</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin başarısının arkasındaki güçlü yönetim kadrosu
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
                  <h2 className="text-3xl font-bold text-[#e30613] mb-6">Yönetim Kadromuz</h2>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <p className="text-lg">
                        Anı Bisküvi'nin başarısının arkasında, alanında uzman ve deneyimli bir yönetim kadrosu
                        bulunmaktadır. Şirketimizin stratejik hedeflerine ulaşmasında önemli rol oynayan yönetim
                        ekibimiz, sektördeki gelişmeleri yakından takip ederek, yenilikçi ve sürdürülebilir çözümler
                        üretmektedir.
                      </p>
                      <p className="text-lg">
                        Yönetim kadromuz, şirketimizin kurumsal değerlerini benimseyerek, müşteri memnuniyeti, kalite ve
                        sürdürülebilirlik odaklı bir yaklaşımla çalışmaktadır. Her biri kendi alanında uzman olan
                        yönetim ekibi üyelerimiz, Anı Bisküvi'nin global pazardaki konumunu güçlendirmek için
                        çalışmaktadır.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=400&auto=format"
                        alt="Yönetim Toplantısı"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Üst Yönetim */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Üst Yönetim</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {executiveTeam.map((executive) => (
                      <div
                        key={executive.id}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                      >
                        <div className="relative h-64">
                          <Image
                            src={executive.image || "/placeholder.svg"}
                            alt={executive.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{executive.name}</h4>
                          <p className="text-[#e30613] font-medium mb-3">{executive.title}</p>
                          <p className="text-gray-600 text-sm">{executive.bio}</p>
                          <Link
                            href={`#${executive.id}`}
                            className="inline-flex items-center mt-4 text-[#e30613] font-medium text-sm"
                          >
                            Detaylı Bilgi
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
                    ))}
                  </div>
                </div>

                {/* Yönetim Kurulu */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Yönetim Kurulu</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {boardMembers.map((member) => (
                      <div
                        key={member.id}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                      >
                        <div className="relative h-64">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                          <p className="text-[#e30613] font-medium">{member.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Organizasyon Yapısı */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">Organizasyon Yapımız</h3>
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <p className="text-gray-700 mb-6">
                      Anı Bisküvi, etkin ve verimli bir organizasyon yapısıyla faaliyet göstermektedir. Şirketimizin
                      organizasyon yapısı, stratejik hedeflerimize ulaşmamızı sağlayacak şekilde tasarlanmıştır.
                    </p>
                    <div className="relative h-[400px] bg-white rounded-lg p-4 border border-gray-200">
                      <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format"
                        alt="Organizasyon Şeması"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Kurumsal Yönetim İlkeleri */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kurumsal Yönetim İlkelerimiz</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Şeffaflık</h4>
                      <p className="text-gray-700">
                        Tüm paydaşlarımıza karşı şeffaf bir iletişim politikası izliyor, finansal ve operasyonel
                        bilgilerimizi düzenli olarak paylaşıyoruz.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Adillik</h4>
                      <p className="text-gray-700">
                        Tüm paydaşlarımıza adil ve eşit davranıyor, karar alma süreçlerimizde hakkaniyeti gözetiyoruz.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Hesap Verebilirlik</h4>
                      <p className="text-gray-700">
                        Yönetim kurulumuz ve üst yönetimimiz, şirketimizin faaliyetleri konusunda hesap verebilir bir
                        anlayışla hareket etmektedir.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Sorumluluk</h4>
                      <p className="text-gray-700">
                        Faaliyetlerimizi yasal düzenlemelere uygun şekilde yürütüyor, toplumsal ve çevresel
                        sorumluluklarımızı yerine getiriyoruz.
                      </p>
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
