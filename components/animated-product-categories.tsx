"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Product categories data
const categories = [
  {
    id: "biskuvi",
    name: "Bisküviler",
    image: "/placeholder.svg?height=600&width=1200&text=Bisküviler",
    href: "/biskuviler",
    color: "#e30613",
  },
  {
    id: "cikolata",
    name: "Çikolatalar",
    image: "/placeholder.svg?height=600&width=1200&text=Çikolatalar",
    href: "/cikolatalar",
    color: "#8B4513",
  },
  {
    id: "kek",
    name: "Kekler",
    image: "/placeholder.svg?height=600&width=1200&text=Kekler",
    href: "/kekler",
    color: "#FF6B6B",
  },
  {
    id: "gofret",
    name: "Gofretler",
    image: "/placeholder.svg?height=600&width=1200&text=Gofretler",
    href: "/gofretler",
    color: "#6B3FA0",
  },
]

export default function AnimatedProductCategories() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotate categories every 5 seconds if not hovering
  useEffect(() => {
    if (isHovering) return

    const startAutoplay = () => {
      autoplayRef.current = setTimeout(() => {
        setActiveCategory((prev) => (prev + 1) % categories.length)
        startAutoplay()
      }, 5000)
    }

    startAutoplay()

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current)
      }
    }
  }, [isHovering])

  const nextSlide = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length)
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
  }

  const prevSlide = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length)
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
  }

  return (
    <section
      className="py-8 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4">
        {/* Top navigation tabs */}
        <div className="bg-[#e30613] rounded-full p-2 flex justify-center overflow-x-auto max-w-4xl mx-auto mb-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors whitespace-nowrap
                ${activeCategory === index ? "bg-white text-[#e30613]" : "text-white hover:bg-white/10"}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Full-width image slider */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-${activeCategory}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Link href={categories[activeCategory].href} className="block w-full h-full">
                <Image
                  src={categories[activeCategory].image || "/placeholder.svg"}
                  alt={categories[activeCategory].name}
                  fill
                  className="object-cover"
                  priority
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeCategory === index ? "bg-[#e30613]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setActiveCategory(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
