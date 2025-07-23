import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, FileText, ImageIcon, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Medya Kit | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin medya kiti, logo, kurumsal kimlik ve basın materyalleri.",
}

// Medya kit verileri
const mediaKitItems = [
  {
    id: "logo",
    title: "Kurumsal Logo",
    description: "Anı Bisküvi'nin kurumsal logosu (PNG, SVG, EPS formatlarında)",
    icon: <ImageIcon className="h-6 w-6" />,
    files: [
      { name: "ANI_Logo_RGB.png", size: "2.5 MB", format: "PNG" },
      { name: "ANI_Logo_RGB.svg", size: "1.2 MB", format: "SVG" },
      { name: "ANI_Logo_CMYK.eps", size: "3.8 MB", format: "EPS" },
    ],
  },
  {
    id: "brand-guidelines",
    title: "Marka Kılavuzu",
    description: "Anı Bisküvi kurumsal kimlik ve marka kullanım kılavuzu",
    icon: <FileText className="h-6 w-6" />,
    files: [
      { name: "ANI_Brand_Guidelines_TR.pdf", size: "8.5 MB", format: "PDF" },
      { name: "ANI_Brand_Guidelines_EN.pdf", size: "8.3 MB", format: "PDF" },
    ],
  },
  {
    id: "product-images",
    title: "Ürün Görselleri",
    description: "Anı Bisküvi ürün görselleri (yüksek çözünürlüklü)",
    icon: <ImageIcon className="h-6 w-6" />,
    files: [
      { name: "ANI_Product_Images.zip", size: "45.2 MB", format: "ZIP" },
      { name: "ANI_Product_Catalog.pdf", size: "12.7 MB", format: "PDF" },
    ],
  },
  {
    id: "company-profile",
    title: "Şirket Profili",
    description: "Anı Bisküvi şirket profili ve tanıtım dokümanları",
    icon: <FileText className="h-6 w-6" />,
    files: [
      { name: "ANI_Company_Profile_TR.pdf", size: "5.3 MB", format: "PDF" },
      { name: "ANI_Company_Profile_EN.pdf", size: "5.1 MB", format: "PDF" },
    ],
  },
  {
    id: "promotional-videos",
    title: "Tanıtım Videoları",
    description: "Anı Bisküvi kurumsal ve ürün tanıtım videoları",
    icon: <Video className="h-6 w-6" />,
    files: [
      { name: "ANI_Corporate_Video.mp4", size: "85.6 MB", format: "MP4" },
      { name: "ANI_Product_Videos.zip", size: "120.3 MB", format: "ZIP" },
    ],
  },
  {
    id: "press-photos",
    title: "Basın Fotoğrafları",
    description: "Anı Bisküvi yönetim kadrosu ve fabrika fotoğrafları",
    icon: <ImageIcon className="h-6 w-6" />,
    files: [
      { name: "ANI_Management_Photos.zip", size: "32.8 MB", format: "ZIP" },
      { name: "ANI_Factory_Photos.zip", size: "48.5 MB", format: "ZIP" },
    ],
  },
]

export default function MediaKitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format"
            alt="Medya Kit"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MEDYA KİT</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin kurumsal kimlik, logo ve basın materyalleri
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
              <span className="font-medium text-[#e30613]">Medya Kit</span>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Medya Kit</h2>
              <p className="text-gray-600">
                Anı Bisküvi'nin kurumsal kimlik, logo, ürün görselleri ve basın materyallerini bu sayfadan
                indirebilirsiniz. Tüm materyaller yüksek çözünürlüklü ve profesyonel kullanıma uygundur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaKitItems.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-[#e30613]">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>

                    <div className="space-y-3">
                      {item.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">
                              {file.size} • {file.format}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#e30613] hover:text-[#e30613] hover:bg-red-50"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanım Kılavuzu</h2>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Logo Kullanımı</h3>
                <p className="text-gray-600 mb-4">
                  Anı Bisküvi logosunu kullanırken aşağıdaki kurallara uymanız gerekmektedir:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Logo oranlarını değiştirmeden kullanınız.</li>
                  <li>Logonun etrafında yeterli boşluk bırakınız.</li>
                  <li>Logoyu düşük çözünürlüklü veya bulanık şekilde kullanmayınız.</li>
                  <li>Logonun renklerini değiştirmeyiniz.</li>
                  <li>Logoyu arka planla kontrast oluşturacak şekilde yerleştiriniz.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Görsellerin Kullanımı</h3>
                <p className="text-gray-600 mb-4">
                  Anı Bisküvi ürün görsellerini kullanırken aşağıdaki kurallara uymanız gerekmektedir:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Görselleri orijinal hallerinde kullanınız.</li>
                  <li>Görselleri kırpmak veya düzenlemek gerekiyorsa, ürünün bütünlüğünü bozmayınız.</li>
                  <li>Görselleri yüksek kalitede basınız veya yayınlayınız.</li>
                  <li>Görselleri kullanırken kaynak belirtiniz.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">İzin ve Telif Hakları</h3>
                <p className="text-gray-600 mb-4">
                  Bu sayfada yer alan tüm materyaller Anı Bisküvi'nin mülkiyetindedir ve telif hakları ile
                  korunmaktadır. Materyalleri kullanmadan önce aşağıdaki hususlara dikkat ediniz:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Materyaller sadece Anı Bisküvi ile ilgili haber, tanıtım ve bilgilendirme amaçlı kullanılabilir.
                  </li>
                  <li>Materyallerin ticari amaçla kullanımı için önceden izin alınması gerekmektedir.</li>
                  <li>Materyallerin kullanımında Anı Bisküvi'nin adının belirtilmesi zorunludur.</li>
                  <li>Materyallerin Anı Bisküvi'nin itibarını zedeleyecek şekilde kullanılması yasaktır.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Daha Fazla Bilgi İçin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Medya kit ve basın materyalleri hakkında daha fazla bilgi almak veya özel taleplerde bulunmak için basın
              ilişkileri ekibimizle iletişime geçebilirsiniz.
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
