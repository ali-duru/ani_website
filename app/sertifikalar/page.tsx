import Image from "next/image"

import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import AboutNavigation from "@/components/about-navigation"

export const metadata = {
  title: "Sertifikalar | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin kalite ve güvenlik sertifikaları hakkında bilgi edinin.",
}

// Sertifika verileri
const certificates = [
  {
    id: "iso9001",
    name: "ISO 9001:2015",
    title: "Kalite Yönetim Sistemi",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format",
    description:
      "ISO 9001, uluslararası kabul görmüş bir kalite yönetim sistemi standardıdır. Bu sertifika, ürün ve hizmetlerimizin tutarlı bir şekilde müşteri beklentilerini karşıladığını ve sürekli iyileştirme odaklı bir yaklaşım benimsediğimizi göstermektedir.",
    issueDate: "2020",
    validUntil: "2023",
  },
  {
    id: "iso22000",
    name: "ISO 22000:2018",
    title: "Gıda Güvenliği Yönetim Sistemi",
    image: "https://images.unsplash.com/photo-1576670392954-858c7994a0ed?q=80&w=400&auto=format",
    description:
      "ISO 22000, gıda güvenliği yönetim sistemleri için uluslararası bir standarttır. Bu sertifika, gıda zincirindeki tüm kuruluşlar için geçerli olan gıda güvenliği yönetim sistemi gereksinimlerini belirler ve ürünlerimizin güvenliğini garanti eder.",
    issueDate: "2021",
    validUntil: "2024",
  },
  {
    id: "fssc22000",
    name: "FSSC 22000",
    title: "Gıda Güvenliği Sistem Sertifikası",
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?q=80&w=400&auto=format",
    description:
      "FSSC 22000, gıda güvenliği yönetim sistemleri için kapsamlı bir sertifikasyon programıdır. Bu sertifika, gıda güvenliği risklerinin etkin bir şekilde yönetildiğini ve ürünlerimizin uluslararası standartlara uygun olduğunu göstermektedir.",
    issueDate: "2021",
    validUntil: "2024",
  },
  {
    id: "halal",
    name: "Helal Sertifikası",
    title: "Helal Gıda Sertifikası",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=400&auto=format",
    description:
      "Helal Sertifikası, ürünlerimizin İslami kurallara uygun olarak üretildiğini belgelemektedir. Bu sertifika, ürünlerimizin içeriğinin, üretim süreçlerinin ve tesislerimizin İslami gereksinimlere uygun olduğunu göstermektedir.",
    issueDate: "2022",
    validUntil: "2023",
  },
  {
    id: "brc",
    name: "BRC",
    title: "Global Gıda Güvenliği Standardı",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format",
    description:
      "BRC Global Standardı, gıda güvenliği, kalite ve operasyonel kriterlerin karşılanmasını sağlayan uluslararası bir standarttır. Bu sertifika, ürünlerimizin güvenliği ve kalitesi konusunda müşterilerimize güvence vermektedir.",
    issueDate: "2020",
    validUntil: "2023",
  },
  {
    id: "ifs",
    name: "IFS Food",
    title: "Uluslararası Gıda Standardı",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format",
    description:
      "IFS Food, gıda ürünlerinin güvenliği ve kalitesi için uluslararası bir standarttır. Bu sertifika, üretim süreçlerimizin ve ürünlerimizin uluslararası gıda güvenliği standartlarına uygunluğunu belgelemektedir.",
    issueDate: "2021",
    validUntil: "2024",
  },
]

export default function CertificatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format"
            alt="Sertifikalar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SERTİFİKALAR</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin kalite ve güvenlik standartlarını belgeleyen sertifikalar
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
                  <h2 className="text-3xl font-bold text-[#e30613] mb-6">Kalite ve Güvenlik Sertifikalarımız</h2>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <p className="text-lg">
                        Anı Bisküvi olarak, ürünlerimizin kalitesi ve güvenliği bizim için en önemli önceliktir. Bu
                        doğrultuda, uluslararası standartlara uygun üretim yapmak ve müşterilerimize en yüksek kalitede
                        ürünler sunmak için çalışıyoruz.
                      </p>
                      <p className="text-lg">
                        Üretim tesislerimiz ve ürünlerimiz, uluslararası kabul görmüş kalite ve gıda güvenliği
                        sertifikalarına sahiptir. Bu sertifikalar, ürünlerimizin güvenliği ve kalitesi konusunda
                        müşterilerimize güvence vermektedir.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format"
                        alt="Kalite Kontrol"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Sertifikalar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {certificates.map((certificate) => (
                    <div
                      key={certificate.id}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                    >
                      <div className="relative h-48">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{certificate.name}</h3>
                          <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">
                            Geçerli
                          </span>
                        </div>
                        <p className="text-[#e30613] font-medium mb-3">{certificate.title}</p>
                        <p className="text-gray-600 text-sm mb-4">{certificate.description}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Veriliş: {certificate.issueDate}</span>
                          <span>Geçerlilik: {certificate.validUntil}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kalite Politikamız */}
                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kalite Politikamız</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className="prose max-w-none text-gray-700">
                        <p className="mb-4">Anı Bisküvi olarak, kalite politikamız şu temel ilkelere dayanmaktadır:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>
                              Müşteri memnuniyetini ön planda tutarak, beklentileri karşılayan ve aşan ürünler sunmak
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Gıda güvenliği standartlarına uygun, sağlıklı ve güvenilir ürünler üretmek</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Sürekli iyileştirme anlayışıyla üretim süreçlerimizi geliştirmek</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Çalışanlarımızın kalite bilincini artırmak ve eğitimlerini desteklemek</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>
                              Tedarikçilerimizle işbirliği içinde çalışarak hammadde kalitesini güvence altına almak
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#e30613] mr-2">•</span>
                            <span>Çevre dostu üretim süreçleri benimseyerek sürdürülebilirliğe katkıda bulunmak</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format"
                        alt="Kalite Politikası"
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Laboratuvar ve Kalite Kontrol */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#e30613] mb-6">Laboratuvar ve Kalite Kontrol</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-700 mb-4">
                        Anı Bisküvi olarak, modern ve tam donanımlı laboratuvarlarımızda hammaddeden nihai ürüne kadar
                        tüm süreçlerde kapsamlı kalite kontrol testleri gerçekleştiriyoruz.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Laboratuvarlarımızda deneyimli gıda mühendisleri ve kalite kontrol uzmanları tarafından düzenli
                        olarak mikrobiyolojik, kimyasal ve fiziksel analizler yapılmaktadır.
                      </p>
                      <p className="text-gray-700">
                        Bu analizler sayesinde, ürünlerimizin kalitesi ve güvenliği sürekli olarak izlenmekte ve
                        standartlara uygunluğu garanti edilmektedir.
                      </p>
                    </div>
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=500&auto=format"
                        alt="Laboratuvar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Sertifikasyon Sürecimiz */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Sertifikasyon Sürecimiz</h3>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <ol className="space-y-6">
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e30613] text-white flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">Hazırlık ve Değerlendirme</h4>
                          <p className="text-gray-600">
                            Sertifikasyon sürecine başlamadan önce, mevcut sistemlerimizi değerlendiriyor ve gerekli
                            iyileştirmeleri yapıyoruz.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e30613] text-white flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">Dokümantasyon</h4>
                          <p className="text-gray-600">
                            Sertifikasyon standartlarına uygun olarak tüm süreçlerimizi dokümante ediyor ve gerekli
                            prosedürleri oluşturuyoruz.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e30613] text-white flex items-center justify-center font-bold">
                          3
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">Eğitim</h4>
                          <p className="text-gray-600">
                            Çalışanlarımıza sertifikasyon standartları ve gereklilikler hakkında kapsamlı eğitimler
                            veriyoruz.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e30613] text-white flex items-center justify-center font-bold">
                          4
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">İç Denetim</h4>
                          <p className="text-gray-600">
                            Sertifikasyon öncesinde, sistemlerimizin etkinliğini değerlendirmek için kapsamlı iç
                            denetimler gerçekleştiriyoruz.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e30613] text-white flex items-center justify-center font-bold">
                          5
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">Dış Denetim</h4>
                          <p className="text-gray-600">
                            Bağımsız denetim kuruluşları tarafından gerçekleştirilen dış denetimlerle sertifikasyon
                            sürecimiz tamamlanıyor.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e30613] text-white flex items-center justify-center font-bold">
                          6
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">Sürekli İyileştirme</h4>
                          <p className="text-gray-600">
                            Sertifikasyon sonrasında da sistemlerimizi sürekli olarak izliyor ve iyileştiriyoruz.
                          </p>
                        </div>
                      </li>
                    </ol>
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
