"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: "1944",
    title: "Kuruluş",
    description: "Anı Bisküvi, İstanbul Eminönü'nde küçük bir atölyede kuruldu.",
  },
  {
    year: "1955",
    title: "İlk Fabrika",
    description: "İlk modern üretim tesisimiz Topkapı'da faaliyete geçti.",
  },
  {
    year: "1970",
    title: "Ürün Çeşitliliği",
    description: "Bisküvi üretiminin yanı sıra çikolata ve gofret üretimine başlandı.",
  },
  {
    year: "1985",
    title: "İhracat Başlangıcı",
    description: "İlk ihracat faaliyetlerimiz Orta Doğu ülkelerine başladı.",
  },
  {
    year: "1995",
    title: "Teknoloji Yatırımı",
    description: "Üretim tesislerimiz en son teknoloji ile yenilendi.",
  },
  {
    year: "2005",
    title: "Global Genişleme",
    description: "İhracat yapılan ülke sayısı 50'yi aştı.",
  },
  {
    year: "2015",
    title: "Sürdürülebilirlik",
    description: "Çevre dostu üretim süreçleri ve ambalajlama sistemleri devreye alındı.",
  },
  {
    year: "2023",
    title: "Dijital Dönüşüm",
    description: "Endüstri 4.0 uygulamaları ile üretim süreçleri tamamen dijitalleştirildi.",
  },
]

export default function CompanyTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="relative" ref={ref}>
      {/* Vertical line */}
      <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={event.year}
              className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#e30613] rounded-full border-4 border-white shadow transform translate-x-[-14px] md:-translate-x-1/2 z-10 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"} pb-8 md:pb-0`}>
                <div
                  className={`bg-white p-5 rounded-lg shadow-sm border border-gray-100 ${
                    isEven ? "md:mr-6" : "md:ml-6"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-[#e30613] font-bold text-xl mr-2">{event.year}</span>
                    <h4 className="text-gray-900 font-bold">{event.title}</h4>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
