import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Basın Bültenleri | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin basın bültenleri ve haberler.",
}

// Basın bültenleri verileri
const pressReleases = [
  {
    id: "yeni-yatirimlar-2023",
    title: "Anı Bisküvi Yeni Yatırımlarla Büyümesini Sürdürüyor",
    date: "20 Aralık 2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JujEaTbfIOCpuk1lniyleMieWCXW3L.png",
    summary:
      "Ekonomi Dergisi Platin'in Karaman özel ekine konuşan Anı Bisküvi ortaklarından Rıfkı Boynukalın; ''Anı Bisküvi, 1994 yılında Karaman Organize sanayi Bölgesinde kuruldu. Üretime başladığı tarihten bugüne 20 yıl geçti. Genç bir şirket olarak günde 320 ton mamül üretiyoruz...''",
    category: "Yatırım",
  },
  {
    id: "brc-sertifikasi-2023",
    title: "Anı Bisküvi BRC Sertifikasını Aldı",
    date: "15 Aralık 2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tq027JQIHszYePLSp3S5LXPFHpp3lv.png",
    summary:
      "ANI BİSKÜVİ olarak; Uluslararası platformda hem tedarikçiler, hem de tüketiciler tarafından yüksek öneme sahip ulusal ve uluslararası üstün kalite belgelerinden BRC FOOD VERSİYON 8 Sertifikasını A seviyede firmamız bünyemize katmış bulunmaktayız. Bu süreçte firmamız gerekli tüm şartları ivedilikle sağlamış olup değerli tüketicilerimize daha kaliteli hizmet veriyor olmanın haklı gurur ve mutluluğunu paylaşıyoruz.",
    category: "Sertifika",
  },
]

export default function PressReleasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format"
            alt="Basın Bültenleri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BASIN BÜLTENLERİ</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin en güncel basın bültenleri ve haberler
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
              <Link href="#" className="hover:text-[#e30613] transition-colors">
                Basın Merkezi
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-[#e30613]">Basın Bültenleri</span>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Basın Bültenleri</h2>
                <p className="text-gray-600">
                  Anı Bisküvi'nin en güncel basın bültenleri ve haberlerini burada bulabilirsiniz.
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center">
                <span className="text-gray-600 mr-2">Filtrele:</span>
                <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="all">Tüm Kategoriler</option>
                  <option value="new-product">Yeni Ürün</option>
                  <option value="export">İhracat</option>
                  <option value="investment">Yatırım</option>
                  <option value="sustainability">Sürdürülebilirlik</option>
                  <option value="social-responsibility">Sosyal Sorumluluk</option>
                  <option value="r-d">Ar-Ge</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressReleases.map((release) => (
                <div key={release.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <Link href={`/basin-bultenleri/${release.id}`} className="block">
                    <div className="relative h-48">
                      <Image
                        src={release.image || "/placeholder.svg"}
                        alt={release.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#e30613] text-white text-xs px-3 py-1 rounded-full">
                        {release.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{release.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{release.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{release.summary}</p>

                      <div className="flex items-center">
                        <span className="inline-flex items-center text-[#e30613] font-medium hover:underline">
                          <Eye className="h-4 w-4 mr-1" />
                          Detaylar
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex">
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
                >
                  Önceki
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#e30613] bg-white border-t border-b border-gray-300 hover:bg-gray-50"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
                >
                  Sonraki
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Basın Bültenlerimize Abone Olun</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Anı Bisküvi'nin en güncel basın bültenlerinden haberdar olmak için e-posta listemize abone olun.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613]"
              />
              <Button className="bg-[#e30613] hover:bg-red-700">Abone Ol</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
