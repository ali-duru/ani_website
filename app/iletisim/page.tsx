import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "İletişim | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi ile iletişime geçin. İletişim bilgilerimiz ve iletişim formu.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1200&auto=format"
            alt="İletişim"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">İLETİŞİM</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi ile iletişime geçin. Sorularınız, önerileriniz ve talepleriniz için bize ulaşın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-[#e30613]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Telefon</h3>
                <p className="text-gray-600">+90 (338) 224 12 30</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#e30613]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-posta</h3>
                <p className="text-gray-600">info@anibiskuvi.com.tr</p>
                <p className="text-gray-600">musteri@anibiskuvi.com.tr</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#e30613]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Adres</h3>
                <p className="text-gray-600">Organize Sanayi Bölgesi, 16. Cd., 70100 Karaman Merkez/Karaman</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#e30613]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-600">Pazartesi - Cuma: 08:30 - 17:30</p>
                <p className="text-gray-600">Cumartesi - Pazar: Kapalı</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#e30613] mb-6">Bize Ulaşın</h2>
                <p className="text-gray-600 mb-6">
                  Sorularınız, önerileriniz veya talepleriniz için aşağıdaki formu doldurarak bize ulaşabilirsiniz. En
                  kısa sürede size geri dönüş yapacağız.
                </p>
                <ContactForm />
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold text-[#e30613] mb-6">Konum</h2>
                <div className="bg-gray-100 rounded-xl overflow-hidden h-[450px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!3m2!1str!2str!4v1746081418106!5m2!1str!2str!6m8!1m7!1sVB7j7UP7JlRLIUXY2iq9Hw!2m2!1d37.21644250868508!2d33.31424340323932!3f218.37921808264144!4f6.034405323846769!5f0.7820865974627469"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Anı Bisküvi Konum"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Sıkça Sorulan Sorular</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ürünlerinizi nereden satın alabilirim?</h3>
                  <p className="text-gray-600">
                    Ürünlerimizi Türkiye genelindeki tüm büyük marketler, süpermarketler ve birçok yerel markette
                    bulabilirsiniz. Ayrıca çeşitli online alışveriş platformlarından da sipariş verebilirsiniz.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Ürünlerinizle ilgili şikayetimi nasıl iletebilirim?
                  </h3>
                  <p className="text-gray-600">
                    Ürünlerimizle ilgili her türlü şikayet, öneri ve görüşlerinizi yukarıdaki iletişim formu
                    aracılığıyla veya müşteri hizmetleri telefon numaramızdan bize iletebilirsiniz.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    İş başvurusu yapmak istiyorum, nasıl yapabilirim?
                  </h3>
                  <p className="text-gray-600">
                    İş başvuruları için özgeçmişinizi kariyer@anibiskuvi.com.tr adresine gönderebilir veya web
                    sitemizdeki Kariyer bölümünden online başvuru yapabilirsiniz.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fabrika ziyareti yapabilir miyim?</h3>
                  <p className="text-gray-600">
                    Fabrika ziyaretleri için önceden randevu almanız gerekmektedir. Ziyaret talebinizi iletişim formu
                    üzerinden veya telefon ile iletebilirsiniz.
                  </p>
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
