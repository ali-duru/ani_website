"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

// Müşteri yorumları verileri
const testimonials = [
  {
    id: 1,
    quote:
      "Anı Bisküvi'nin çikolatalı bisküvileri gerçekten harika! Çocuklarım bayılıyor ve her alışverişte mutlaka alıyoruz. Kaliteli ve lezzetli ürünler için teşekkürler.",
    author: "Ayşe Y.",
    category: "Müşteri Yorumu",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=AY",
    product: "/placeholder.svg?height=80&width=80&text=Çikolatalı+Bisküvi",
  },
  {
    id: 2,
    quote:
      "Uzun yıllardır Anı Bisküvi ürünlerini tercih ediyorum. Özellikle kekleri çok taze ve lezzetli. Kahve yanında mükemmel bir tercih!",
    author: "Mehmet K.",
    category: "Müşteri Yorumu",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=MK",
    product: "/placeholder.svg?height=80&width=80&text=Kek",
  },
  {
    id: 3,
    quote:
      "Gofretleriniz çocukluğumdan beri favorim! Şimdi kendi çocuklarım da aynı lezzeti sevgiyle tüketiyor. Nesiller boyu devam eden bir lezzet.",
    author: "Zeynep A.",
    category: "Müşteri Yorumu",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=ZA",
    product: "/placeholder.svg?height=80&width=80&text=Gofret",
  },
  {
    id: 4,
    quote:
      "Kraker çeşitleriniz ofiste atıştırmalık olarak vazgeçilmezimiz. Pratik ambalajları ve lezzeti ile her zaman tercihimiz.",
    author: "Ahmet B.",
    category: "Müşteri Yorumu",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100&text=AB",
    product: "/placeholder.svg?height=80&width=80&text=Kraker",
  },
  {
    id: 5,
    quote:
      "Şekerlemeleriniz, özellikle jelibon çeşitleri çocuklarımın favorisi. Doğum günü partilerinin vazgeçilmezi haline geldi.",
    author: "Selin T.",
    category: "Müşteri Yorumu",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=ST",
    product: "/placeholder.svg?height=80&width=80&text=Şekerleme",
  },
]

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1: sol, 1: sağ, 0: başlangıç
  const [autoplay, setAutoplay] = useState(true)

  // Otomatik geçiş için
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3))
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3),
    )
  }

  // Her sayfada 3 yorum gösteriliyor
  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3)

  // Kart varyantları
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
      },
    }),
  }

  // Dekoratif elementler için varyantlar
  const decorVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Dekoratif elementler */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-red-100"
          style={{
            width: `${Math.random() * 50 + 20}px`,
            height: `${Math.random() * 50 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          initial="initial"
          animate="animate"
          custom={i}
          variants={decorVariants}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mutlu Müşterilerimiz ♥</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin deneyimleri ve yorumları bizim için çok değerli. İşte onların Anı Bisküvi ürünleri hakkında
            söyledikleri.
          </p>
        </motion.div>

        <div className="relative">
          {/* Önceki buton */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#e30613" }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation() // Tıklama olayının yayılmasını durdur
              prevTestimonial()
              setAutoplay(false)
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-lg p-3 text-gray-700 hover:text-white hover:bg-[#e30613] transition-colors"
            aria-label="Önceki yorumlar"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          {/* Yorumlar */}
          <div className="overflow-hidden px-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleTestimonials.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { duration: 0.3 },
                    }}
                    className="bg-[#e30613] text-white rounded-xl p-6 relative transform transition-transform duration-300"
                  >
                    {/* Ürün görseli - sağ üst köşede küçük ve dönen */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full p-2 shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Image
                        src={testimonial.product || "/placeholder.svg"}
                        alt="Ürün"
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </motion.div>

                    {/* Alıntı ikonu */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, 0] }}
                      transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                      className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full p-3 shadow-lg"
                    >
                      <Quote className="h-5 w-5 text-white" />
                    </motion.div>

                    <div className="mt-8 text-center">
                      <p className="text-sm mb-4 text-white/80">for {testimonial.category}</p>

                      {/* Yorum metni - animasyonlu */}
                      <motion.p
                        className="text-lg mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.2 + 0.5 }}
                      >
                        "{testimonial.quote}"
                      </motion.p>

                      {/* Yıldız derecelendirmesi */}
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 + i * 0.1, duration: 0.3 }}
                          >
                            <Star
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Avatar ve yazar ismi */}
                      <div className="flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: idx * 0.2 + 0.7, type: "spring" }}
                          className="w-10 h-10 rounded-full overflow-hidden mr-3"
                        >
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </motion.div>
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.2 + 0.8 }}
                          className="font-bold uppercase"
                        >
                          {testimonial.author}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sonraki buton */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#e30613" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              nextTestimonial()
              setAutoplay(false)
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-lg p-3 text-gray-700 hover:text-white hover:bg-[#e30613] transition-colors"
            aria-label="Sonraki yorumlar"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Sayfa göstergesi */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-[#e30613]" : "bg-gray-300"}`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1)
                setCurrentIndex(idx)
                setAutoplay(false)
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              animate={currentIndex === idx ? { scale: [1, 1.2, 1] } : {}}
              transition={{
                duration: 0.5,
                repeat: currentIndex === idx ? Number.POSITIVE_INFINITY : 0,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
