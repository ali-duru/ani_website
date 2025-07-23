import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import SustainabilitySection from "@/components/sustainability-section"

export const metadata = {
  title: "Sürdürülebilirlik | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description:
    "Anı Bisküvi'nin sürdürülebilirlik yaklaşımı, çevre, değer zinciri, inovasyon, çalışanlar, toplumsal sorumluluk ve liderlik alanlarındaki çalışmaları.",
}

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format"
            alt="Sürdürülebilirlik"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SÜRDÜRÜLEBİLİRLİK</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi olarak sürdürülebilirlik yaklaşımını, iş yapış şeklimizin merkezine yerleştiriyoruz
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
              <span className="font-medium text-[#e30613]">Sürdürülebilirlik</span>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <SustainabilitySection />

        {/* Additional Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sürdürülebilirlik Yaklaşımımız</h2>
              <p className="text-gray-600 mb-8">
                Anı Bisküvi olarak, sürdürülebilirlik yaklaşımımızı iş modelimizin merkezine yerleştirerek, gelecek
                nesillere daha yaşanabilir bir dünya bırakmak için çalışıyoruz. Çevre, değer zinciri, inovasyon,
                çalışanlar, toplumsal sorumluluk ve liderlik alanlarında yürüttüğümüz çalışmalarla sürdürülebilir bir
                gelecek için değer yaratıyoruz.
              </p>
              <Link
                href="/surdurulebilirlik/rapor"
                className="inline-flex items-center gap-2 bg-[#e30613] text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Sürdürülebilirlik Raporumuz
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
