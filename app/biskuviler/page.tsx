import Image from "next/image"

import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import BiscuitProducts from "@/components/biscuit-products"
import BiscuitFaq from "@/components/biscuit-faq"

export const metadata = {
  title: "Bisküviler | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description:
    "Anı Bisküvi'nin lezzetli bisküvi çeşitleri. Tatlı ve tuzlu bisküviler, kremalı bisküviler ve daha fazlası.",
}

export default function BiskuvilerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Featured Products */}
        <BiscuitProducts />

        {/* Quality Standards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Kalite Standartlarımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=🌾"
                    alt="Kaliteli Hammadde"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Kaliteli Hammadde</h3>
                <p className="text-gray-600 text-center">
                  Bisküvilerimizde sadece en kaliteli ve seçkin hammaddeler kullanıyoruz. Tedarikçilerimizi titizlikle
                  seçiyor ve düzenli kalite kontrolleri yapıyoruz.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=🔍"
                    alt="Kalite Kontrol"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Sıkı Kalite Kontrol</h3>
                <p className="text-gray-600 text-center">
                  Üretimin her aşamasında sıkı kalite kontrol süreçleri uyguluyoruz. Ürünlerimiz, uluslararası gıda
                  güvenliği standartlarına uygun olarak üretiliyor.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40&text=🏆" alt="Sertifikalar" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Uluslararası Sertifikalar</h3>
                <p className="text-gray-600 text-center">
                  ISO 9001, ISO 22000, FSSC 22000 ve Helal Gıda sertifikalarına sahibiz. Bu sertifikalar, ürünlerimizin
                  kalitesini ve güvenliğini garanti ediyor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <BiscuitFaq />

        {/* Call to Action */}
        <section className="py-16 bg-[#e30613]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Bisküvilerimizi Denediniz mi?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Anı Bisküvi'nin lezzetli dünyasını keşfedin. Tüm ürünlerimize en yakın satış noktasından ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#e30613] hover:bg-gray-100">Satış Noktaları</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                İletişime Geçin
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
