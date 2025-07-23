import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Filter, Search, Play, Clock, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import VideoPlayer from "@/components/video-player"

export const metadata = {
  title: "Video Galeri | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin kurumsal videoları, ürün tanıtımları ve reklam filmleri.",
}

// Video kategorileri
const videoCategories = [
  { id: "all", name: "Tümü" },
  { id: "corporate", name: "Kurumsal Videolar" },
  { id: "products", name: "Ürün Tanıtımları" },
  { id: "commercials", name: "Reklam Filmleri" },
  { id: "events", name: "Etkinlikler" },
  { id: "interviews", name: "Röportajlar" },
]

// Video galeri verileri
const videoGallery = [
  {
    id: "corporate-1",
    title: "Anı Bisküvi Kurumsal Tanıtım Filmi",
    category: "corporate",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "03:45",
    date: "2023",
    views: 12540,
    description:
      "Anı Bisküvi'nin kuruluşundan bugüne uzanan başarı hikayesi ve üretim tesislerinin tanıtıldığı kurumsal film.",
  },
  {
    id: "product-1",
    title: "Çikolatalı Bisküvi Ürün Tanıtımı",
    category: "products",
    thumbnail: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "01:30",
    date: "2023",
    views: 8750,
    description: "Yeni çikolatalı bisküvi ürünümüzün özel içeriği ve lezzet sırlarının anlatıldığı tanıtım videosu.",
  },
  {
    id: "commercial-1",
    title: "Anı Bisküvi Reklam Filmi - Mutlu Anlar",
    category: "commercials",
    thumbnail: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "00:45",
    date: "2023",
    views: 156200,
    description: "Ailenizle paylaştığınız mutlu anlarda Anı Bisküvi'nin yeri.",
  },
  {
    id: "event-1",
    title: "Anı Bisküvi Fabrika Açılış Töreni",
    category: "events",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "05:20",
    date: "2022",
    views: 4320,
    description: "Yeni üretim tesisimizin açılış töreninden görüntüler ve konuşmalar.",
  },
  {
    id: "interview-1",
    title: "CEO ile Röportaj - Geleceğe Bakış",
    category: "interviews",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "08:15",
    date: "2023",
    views: 6780,
    description: "Anı Bisküvi CEO'su ile şirketin geleceği, yeni yatırımlar ve hedefler üzerine özel röportaj.",
  },
  {
    id: "product-2",
    title: "Kakaolu Gofret Üretim Süreci",
    category: "products",
    thumbnail: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "04:10",
    date: "2022",
    views: 7890,
    description: "Kakaolu gofretlerimizin hammaddeden paketlemeye kadar olan üretim sürecinin anlatıldığı video.",
  },
  {
    id: "commercial-2",
    title: "Anı Bisküvi Reklam Filmi - Enerji Kaynağı",
    category: "commercials",
    thumbnail: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "00:30",
    date: "2023",
    views: 98500,
    description: "Sporcuların enerji kaynağı Anı Bisküvi ürünleri.",
  },
  {
    id: "corporate-2",
    title: "Anı Bisküvi Sürdürülebilirlik Projesi",
    category: "corporate",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "06:25",
    date: "2022",
    views: 5430,
    description: "Çevre dostu üretim süreçlerimiz ve sürdürülebilirlik projelerimizin anlatıldığı tanıtım filmi.",
  },
  {
    id: "event-2",
    title: "Anı Bisküvi 25. Yıl Kutlamaları",
    category: "events",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "07:30",
    date: "2021",
    views: 8920,
    description: "Şirketimizin 25. kuruluş yıldönümü kutlamalarından özel görüntüler.",
  },
  {
    id: "interview-2",
    title: "Üretim Müdürü ile Fabrika Turu",
    category: "interviews",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:40",
    date: "2022",
    views: 4560,
    description: "Üretim müdürümüz eşliğinde fabrikamızı geziyoruz ve üretim süreçlerini yakından inceliyoruz.",
  },
  {
    id: "product-3",
    title: "Yeni Ürün Serisi Lansmanı",
    category: "products",
    thumbnail: "https://images.unsplash.com/photo-1587244141530-6b6aceef93db?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "02:15",
    date: "2023",
    views: 12300,
    description: "Premium Selection serimizin lansmanı ve ürün özelliklerinin anlatıldığı tanıtım videosu.",
  },
  {
    id: "commercial-3",
    title: "Anı Bisküvi Reklam Filmi - Aile Zamanı",
    category: "commercials",
    thumbnail: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=400&auto=format",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "00:40",
    date: "2022",
    views: 78600,
    description: "Aile ile geçirilen özel zamanlarda Anı Bisküvi lezzetleri.",
  },
]

export default function VideoGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format"
            alt="Video Galeri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">VİDEO GALERİ</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin kurumsal videoları, ürün tanıtımları ve reklam filmleri
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
              <span className="font-medium text-[#e30613]">Video Galeri</span>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Galeri</h2>
              <p className="text-gray-600">
                Anı Bisküvi'nin kurumsal videoları, ürün tanıtımları ve reklam filmlerini bu sayfadan izleyebilirsiniz.
                Tüm videolar yüksek kalitede ve profesyonel olarak hazırlanmıştır.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Video ara..." className="pl-10" />
              </div>

              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select className="bg-white border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm w-full md:w-auto">
                    <option value="all">Tüm Kategoriler</option>
                    <option value="corporate">Kurumsal Videolar</option>
                    <option value="products">Ürün Tanıtımları</option>
                    <option value="commercials">Reklam Filmleri</option>
                    <option value="events">Etkinlikler</option>
                    <option value="interviews">Röportajlar</option>
                  </select>
                </div>

                <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="newest">En Yeni</option>
                  <option value="oldest">En Eski</option>
                  <option value="most-viewed">En Çok İzlenen</option>
                  <option value="a-z">A-Z</option>
                </select>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {videoCategories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 ? "bg-[#e30613] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Featured Video */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Öne Çıkan Video</h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative aspect-video">
                    <VideoPlayer videoUrl={videoGallery[0].videoUrl} thumbnailUrl={videoGallery[0].thumbnail} />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="bg-[#e30613] text-white text-xs px-2 py-1 rounded-full mr-3">
                        {videoGallery[0].category === "corporate"
                          ? "Kurumsal Video"
                          : videoGallery[0].category === "products"
                            ? "Ürün Tanıtımı"
                            : videoGallery[0].category === "commercials"
                              ? "Reklam Filmi"
                              : videoGallery[0].category === "events"
                                ? "Etkinlik"
                                : "Röportaj"}
                      </span>
                      <div className="flex items-center mr-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{videoGallery[0].duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{videoGallery[0].date}</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{videoGallery[0].title}</h4>
                    <p className="text-gray-600 mb-6">{videoGallery[0].description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{videoGallery[0].views.toLocaleString()} görüntülenme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoGallery.slice(1).map((video) => (
                <div
                  key={video.id}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full h-12 w-12 p-0 flex items-center justify-center">
                        <Play className="h-5 w-5 ml-0.5" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full">
                        {video.category === "corporate"
                          ? "Kurumsal Video"
                          : video.category === "products"
                            ? "Ürün Tanıtımı"
                            : video.category === "commercials"
                              ? "Reklam Filmi"
                              : video.category === "events"
                                ? "Etkinlik"
                                : "Röportaj"}
                      </span>
                      <span className="ml-auto">{video.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{video.views.toLocaleString()} görüntülenme</span>
                    </div>
                  </div>
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

        {/* Usage Guidelines */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanım Koşulları</h2>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-4">
                  Bu sayfada yer alan tüm videolar Anı Bisküvi'nin mülkiyetindedir ve telif hakları ile korunmaktadır.
                  Videoları kullanmadan önce aşağıdaki hususlara dikkat ediniz:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Videolar sadece Anı Bisküvi ile ilgili haber, tanıtım ve bilgilendirme amaçlı kullanılabilir.</li>
                  <li>Videoların ticari amaçla kullanımı için önceden izin alınması gerekmektedir.</li>
                  <li>Videoların kullanımında Anı Bisküvi'nin adının belirtilmesi zorunludur.</li>
                  <li>Videoların Anı Bisküvi'nin itibarını zedeleyecek şekilde kullanılması yasaktır.</li>
                  <li>
                    Videoların üzerinde değişiklik yapılması veya kırpılması durumunda, video bütünlüğünün korunması
                    gerekmektedir.
                  </li>
                </ul>

                <p className="mt-4 text-gray-600">
                  Videolarla ilgili sorularınız veya özel kullanım talepleriniz için lütfen basın ilişkileri ekibimizle
                  iletişime geçiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Daha Fazla Video İçin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Arşivde bulamadığınız videolar veya özel çekim talepleri için basın ilişkileri ekibimizle iletişime
              geçebilirsiniz.
            </p>
            <Button className="bg-[#e30613] hover:bg-red-700">Basın İlişkileri</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
