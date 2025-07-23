import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Çerez Tercihleri | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi web sitesi çerez tercihleri ve çerez politikası.",
}

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format"
            alt="Çerez Tercihleri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ÇEREZ TERCİHLERİ</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi web sitesinde kullanılan çerezler hakkında bilgi
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
              <span className="font-medium text-[#e30613]">Çerez Tercihleri</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#e30613] mb-6">Çerez Politikası</h2>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Bu Çerez Politikası, Anı Bisküvi Gıda San. ve Tic. A.Ş. ("Anı Bisküvi" veya "Şirket") tarafından
                  işletilen web sitesinde kullanılan çerezler hakkında bilgi vermek amacıyla hazırlanmıştır.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Çerez Nedir?</h3>
                <p className="mb-4">
                  Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla cihazınıza veya ağ
                  sunucusuna depolanan küçük metin dosyalarıdır. Çerezler, internet sitesini ziyaret ettiğinizde site
                  tarafından cihazınıza gönderilir ve bu veriler tarayıcınız tarafından saklanır. Bu veriler, internet
                  sitesi tarafından, tekrar ziyaret ettiğinizde tarayıcınızdan okunabilir ve böylece cihazınız tanınır.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Çerez Türleri</h3>
                <p className="mb-4">Web sitemizde kullanılan çerez türleri aşağıdaki gibidir:</p>

                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Zorunlu Çerezler</h4>
                <p className="mb-4">
                  Bu çerezler, web sitesinin düzgün çalışması için gereklidir ve sistemlerimizde kapatılamazlar. Bu
                  çerezler genellikle yalnızca sizin tarafınızdan gerçekleştirilen ve gizlilik tercihlerinizi ayarlama,
                  oturum açma veya form doldurma gibi hizmet taleplerine karşılık olarak ayarlanır.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Performans Çerezleri</h4>
                <p className="mb-4">
                  Bu çerezler, ziyaretçilerin web sitesini nasıl kullandığı hakkında bilgi toplar. Bu çerezler, hangi
                  sayfaların en çok ziyaret edildiği veya hata mesajlarının görüntülenip görüntülenmediği gibi bilgileri
                  toplar. Bu çerezler, ziyaretçiyi tanımlamaz ve toplanan tüm bilgiler anonimdir.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. İşlevsellik Çerezleri</h4>
                <p className="mb-4">
                  Bu çerezler, web sitesinin daha kişiselleştirilmiş bir deneyim sunmasını sağlar. Bu çerezler, dil
                  tercihiniz veya bulunduğunuz bölge gibi bilgileri hatırlayabilir.
                </p>

                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Hedefleme/Reklam Çerezleri</h4>
                <p className="mb-4">
                  Bu çerezler, size ve ilgi alanlarınıza uygun reklamlar göstermek için kullanılır. Ayrıca, bir reklamı
                  görme sayınızı sınırlamak ve reklam kampanyasının etkinliğini ölçmek için de kullanılır.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                  Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?
                </h3>
                <p className="mb-4">
                  Çoğu web tarayıcısı, çerezleri otomatik olarak kabul eder, ancak isterseniz tarayıcı ayarlarınızı
                  değiştirerek çerezleri reddedebilir veya engelleyebilirsiniz. Çerezleri devre dışı bırakmak, web
                  sitesinin bazı özelliklerinin düzgün çalışmamasına neden olabilir.
                </p>

                <p className="mb-4">
                  Çerez tercihlerinizi yönetmek için tarayıcınızın ayarlar bölümünü kullanabilirsiniz. Tarayıcınızın
                  yardım bölümünde, çerezleri nasıl kontrol edeceğiniz veya sileceğiniz hakkında daha fazla bilgi
                  bulabilirsiniz.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Çerez Tercihlerinizi Ayarlayın</h3>
                <p className="mb-4">Aşağıdaki seçenekleri kullanarak çerez tercihlerinizi ayarlayabilirsiniz:</p>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Zorunlu Çerezler</h4>
                      <p className="text-sm text-gray-600">
                        Bu çerezler web sitesinin çalışması için gereklidir ve kapatılamaz.
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-[#e30613] rounded-full relative">
                      <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Performans Çerezleri</h4>
                      <p className="text-sm text-gray-600">
                        Bu çerezler, web sitesinin performansını ölçmemize yardımcı olur.
                      </p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-12 h-6 bg-gray-200 peer-checked:bg-[#e30613] rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">İşlevsellik Çerezleri</h4>
                      <p className="text-sm text-gray-600">Bu çerezler, daha kişiselleştirilmiş bir deneyim sunar.</p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-12 h-6 bg-gray-200 peer-checked:bg-[#e30613] rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">Hedefleme/Reklam Çerezleri</h4>
                      <p className="text-sm text-gray-600">
                        Bu çerezler, ilgi alanlarınıza uygun reklamlar göstermek için kullanılır.
                      </p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-12 h-6 bg-gray-200 peer-checked:bg-[#e30613] rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button className="bg-[#e30613] hover:bg-red-700">Tercihleri Kaydet</Button>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">İletişim</h3>
                <p className="mb-4">
                  Çerez politikamız veya çerez tercihleriniz hakkında herhangi bir sorunuz varsa, lütfen bizimle
                  iletişime geçin:
                </p>
                <p className="mb-4">
                  E-posta: info@anibiskuvi.com.tr
                  <br />
                  Telefon: +90 (212) 123 45 67
                </p>

                <p className="mt-8 text-sm text-gray-500">Son güncelleme: 10 Nisan 2023</p>
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
