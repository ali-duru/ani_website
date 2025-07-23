"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Bisküvilerinizin raf ömrü ne kadardır?",
    answer:
      "Bisküvilerimizin raf ömrü, ürün çeşidine göre 6 ile 12 ay arasında değişmektedir. Her ürünün ambalajında son kullanma tarihi belirtilmiştir. Ürünlerimizi serin ve kuru bir yerde saklayarak tazeliğini daha uzun süre koruyabilirsiniz.",
  },
  {
    question: "Bisküvilerinizde hangi koruyucular kullanılıyor?",
    answer:
      "Anı Bisküvi olarak, ürünlerimizde mümkün olduğunca doğal içerikler kullanmaya özen gösteriyoruz. Kullandığımız tüm katkı maddeleri, Türk Gıda Kodeksi ve uluslararası standartlara uygun olup, sağlık açısından güvenlidir. Detaylı içerik bilgisi için ürün ambalajlarını inceleyebilirsiniz.",
  },
  {
    question: "Glutensiz bisküvileriniz var mı?",
    answer:
      "Evet, özel beslenme ihtiyaçları olan tüketicilerimiz için glutensiz bisküvi çeşitlerimiz bulunmaktadır. Bu ürünlerimiz, glutensiz logosu ile işaretlenmiş olup, çölyak hastaları için güvenle tüketilebilir. Glutensiz ürünlerimiz, ayrı bir üretim hattında, kontaminasyon riski olmadan üretilmektedir.",
  },
  {
    question: "Bisküvileriniz helal sertifikalı mıdır?",
    answer:
      "Evet, tüm ürünlerimiz Helal Gıda sertifikasına sahiptir. Üretim süreçlerimiz ve kullandığımız tüm hammaddeler, İslami kurallara uygun olarak seçilmekte ve düzenli olarak denetlenmektedir.",
  },
  {
    question: "Şeker hastaları için uygun bisküvileriniz var mı?",
    answer:
      "Evet, şeker hastaları ve şeker tüketimini azaltmak isteyen tüketicilerimiz için şeker ilavesiz bisküvi çeşitlerimiz bulunmaktadır. Bu ürünlerimizde tatlandırıcı olarak stevia gibi doğal tatlandırıcılar kullanılmaktadır.",
  },
  {
    question: "Bisküvilerinizi nereden satın alabilirim?",
    answer:
      "Ürünlerimizi Türkiye genelindeki tüm büyük marketler, süpermarketler ve birçok yerel markette bulabilirsiniz. Ayrıca çeşitli online alışveriş platformlarından da sipariş verebilirsiniz. En yakın satış noktasını öğrenmek için web sitemizdeki 'Satış Noktaları' bölümünü ziyaret edebilirsiniz.",
  },
]

export default function BiscuitFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Sıkça Sorulan Sorular</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Bisküvilerimiz hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
        </p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
                  activeIndex === index ? "bg-gray-50" : "bg-white"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
