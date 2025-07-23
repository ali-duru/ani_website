"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Leaf, Wheat, Lightbulb, Users, HandHeart, Award } from "lucide-react"

const sustainabilityItems = [
  {
    id: "cevre",
    title: "ÇEVRE",
    icon: Leaf,
    color: "#27AE60",
    description: "Doğayı korumak ve çevresel etkimizi azaltmak için sürdürülebilir uygulamalar geliştiriyoruz.",
  },
  {
    id: "deger-zinciri",
    title: "DEĞER ZİNCİRİ",
    icon: Wheat,
    color: "#F39C12",
    description: "Tedarikten tüketime kadar tüm değer zincirimizde sürdürülebilirliği gözetiyoruz.",
  },
  {
    id: "inovasyon",
    title: "İNOVASYON",
    icon: Lightbulb,
    color: "#3498DB",
    description: "Sürdürülebilir ürün ve süreçler için yenilikçi çözümler geliştiriyoruz.",
  },
  {
    id: "calisanlar",
    title: "ÇALIŞANLAR",
    icon: Users,
    color: "#9B59B6",
    description: "Çalışanlarımızın gelişimi ve mutluluğu için sürdürülebilir bir çalışma ortamı sağlıyoruz.",
  },
  {
    id: "toplumsal-sorumluluk",
    title: "TOPLUMSAL SORUMLULUK",
    icon: HandHeart,
    color: "#F1C40F",
    description: "Topluma değer katan projelerle sosyal sorumluluğumuzu yerine getiriyoruz.",
  },
  {
    id: "liderlik",
    title: "LİDERLİK",
    icon: Award,
    color: "#E74C3C",
    description: "Sürdürülebilirlik alanında sektöre öncülük ediyoruz.",
  },
]

export default function SustainabilitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border border-current opacity-30" />
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full border border-current opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-[#e30613] mb-8">SÜRDÜRÜLEBİLİRLİK</h2>
          <p className="text-gray-700 mb-6">
            1944'ten bu yana farklı kategorilerde gıda ürünlerini tüketicilerimizle buluşturuyoruz. İşimizi yaparken
            çiftçimizden aldığımız en iyi mahsulü işleyerek, yine en iyi, en kaliteli ve en lezzetli haliyle
            tüketicilerimize sunuyoruz.
          </p>
          <p className="text-gray-700">
            Anı Bisküvi Gıda San. ve Tic. A.Ş. olarak sürdürülebilirlik yaklaşımını, iş yapış şeklimizin merkezine
            yerleştirerek, yeni nesillere yaşanabilir ve mutlu bir dünya bırakmak için çalışıyoruz.
          </p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#e30613] text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              DAHA FAZLA
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Sustainability Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {sustainabilityItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link href={`/surdurulebilirlik/${item.id}`} className="block group">
                <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center relative"
                      style={{ backgroundColor: `${item.color}20` }} // 20% opacity of the color
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ borderColor: item.color }}
                        initial={{ borderWidth: 0 }}
                        whileHover={{
                          borderWidth: 2,
                          rotate: 360,
                          transition: { duration: 0.8, ease: "easeInOut" },
                        }}
                      />
                      <motion.div
                        className="w-12 h-12 relative z-10 flex items-center justify-center"
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3, type: "spring", stiffness: 300 },
                        }}
                      >
                        <item.icon size={32} style={{ color: item.color }} />
                      </motion.div>

                      {/* Animated dashed circle */}
                      <svg
                        className="absolute inset-0 w-full h-full -z-10"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke={item.color}
                          strokeWidth="1"
                          strokeDasharray="5,5"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          style={{ transformOrigin: "center" }}
                        />
                      </svg>
                    </div>

                    {/* Animated dots */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: item.color,
                          top: `${20 + i * 20}%`,
                          left: `${80 + i * 5}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          transition: {
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                            repeatDelay: 0.5,
                          },
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>

                  {/* Read More Link */}
                  <div className="flex items-center mt-auto">
                    <span className="text-sm font-medium mr-2" style={{ color: item.color }}>
                      DEVAMINI OKU
                    </span>
                    <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight size={16} style={{ color: item.color }} />
                    </motion.div>
                  </div>

                  {/* Bottom border that animates on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: "0%" }}
                    whileHover={{
                      width: "100%",
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
