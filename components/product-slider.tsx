"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Product categories with their respective floating product images
const categories = [
  {
    id: "biskuvi",
    name: "Bisküviler",
    image: "/placeholder.svg?height=600&width=600&text=Bisküviler",
    link: "/biskuviler",
    color: "#e30613",
    floatingImages: [
      {
        src: "/placeholder.svg?height=150&width=150&text=Bisküvi+1",
        alt: "Bisküvi 1",
        initialPosition: { x: -220, y: 20 },
        animation: { x: [-220, -200, -220], y: [20, 0, 20], rotate: [0, 5, 0] },
      },
      {
        src: "/placeholder.svg?height=150&width=150&text=Bisküvi+2",
        alt: "Bisküvi 2",
        initialPosition: { x: -180, y: 250 },
        animation: { x: [-180, -160, -180], y: [250, 230, 250], rotate: [0, -5, 0] },
      },
      {
        src: "/placeholder.svg?height=120&width=120&text=Bisküvi+3",
        alt: "Bisküvi 3",
        initialPosition: { x: 250, y: 50 },
        animation: { x: [250, 270, 250], y: [50, 30, 50], rotate: [0, 10, 0] },
      },
      {
        src: "/placeholder.svg?height=120&width=120&text=Bisküvi+4",
        alt: "Bisküvi 4",
        initialPosition: { x: 200, y: 300 },
        animation: { x: [200, 220, 200], y: [300, 280, 300], rotate: [0, -8, 0] },
      },
      {
        src: "/placeholder.svg?height=100&width=100&text=Bisküvi+5",
        alt: "Bisküvi 5",
        initialPosition: { x: -150, y: 400 },
        animation: { x: [-150, -130, -150], y: [400, 380, 400], rotate: [0, 7, 0] },
      },
    ],
  },
  {
    id: "cikolata",
    name: "Çikolatalar",
    image: "/placeholder.svg?height=600&width=600&text=Çikolatalar",
    link: "/cikolatalar",
    color: "#8B4513",
    floatingImages: [
      {
        src: "/placeholder.svg?height=150&width=150&text=Çikolata+1",
        alt: "Çikolata 1",
        initialPosition: { x: -250, y: 50 },
        animation: { x: [-250, -230, -250], y: [50, 30, 50], rotate: [0, 8, 0] },
      },
      {
        src: "/placeholder.svg?height=120&width=120&text=Çikolata+2",
        alt: "Çikolata 2",
        initialPosition: { x: -180, y: 280 },
        animation: { x: [-180, -160, -180], y: [280, 260, 280], rotate: [0, -10, 0] },
      },
      {
        src: "/placeholder.svg?height=100&width=100&text=Çikolata+3",
        alt: "Çikolata 3",
        initialPosition: { x: 220, y: 30 },
        animation: { x: [220, 240, 220], y: [30, 10, 30], rotate: [0, 15, 0] },
      },
      {
        src: "/placeholder.svg?height=130&width=130&text=Çikolata+4",
        alt: "Çikolata 4",
        initialPosition: { x: 180, y: 320 },
        animation: { x: [180, 200, 180], y: [320, 300, 320], rotate: [0, -12, 0] },
      },
      {
        src: "/placeholder.svg?height=90&width=90&text=Çikolata+5",
        alt: "Çikolata 5",
        initialPosition: { x: -120, y: 420 },
        animation: { x: [-120, -100, -120], y: [420, 400, 420], rotate: [0, 6, 0] },
      },
    ],
  },
  {
    id: "kek",
    name: "Kekler",
    image: "/placeholder.svg?height=600&width=600&text=Kekler",
    link: "/kekler",
    color: "#FF6B6B",
    floatingImages: [
      {
        src: "/placeholder.svg?height=140&width=140&text=Kek+1",
        alt: "Kek 1",
        initialPosition: { x: -240, y: 40 },
        animation: { x: [-240, -220, -240], y: [40, 20, 40], rotate: [0, 10, 0] },
      },
      {
        src: "/placeholder.svg?height=110&width=110&text=Kek+2",
        alt: "Kek 2",
        initialPosition: { x: -160, y: 260 },
        animation: { x: [-160, -140, -160], y: [260, 240, 260], rotate: [0, -8, 0] },
      },
      {
        src: "/placeholder.svg?height=90&width=90&text=Kek+3",
        alt: "Kek 3",
        initialPosition: { x: 230, y: 40 },
        animation: { x: [230, 250, 230], y: [40, 20, 40], rotate: [0, 12, 0] },
      },
      {
        src: "/placeholder.svg?height=120&width=120&text=Kek+4",
        alt: "Kek 4",
        initialPosition: { x: 190, y: 310 },
        animation: { x: [190, 210, 190], y: [310, 290, 310], rotate: [0, -10, 0] },
      },
      {
        src: "/placeholder.svg?height=100&width=100&text=Kek+5",
        alt: "Kek 5",
        initialPosition: { x: -130, y: 410 },
        animation: { x: [-130, -110, -130], y: [410, 390, 410], rotate: [0, 5, 0] },
      },
    ],
  },
  {
    id: "gofret",
    name: "Gofretler",
    image: "/placeholder.svg?height=600&width=600&text=Gofretler",
    link: "/gofretler",
    color: "#6B3FA0",
    floatingImages: [
      {
        src: "/placeholder.svg?height=160&width=160&text=Gofret+1",
        alt: "Gofret 1",
        initialPosition: { x: -230, y: 30 },
        animation: { x: [-230, -210, -230], y: [30, 10, 30], rotate: [0, 7, 0] },
      },
      {
        src: "/placeholder.svg?height=130&width=130&text=Gofret+2",
        alt: "Gofret 2",
        initialPosition: { x: -170, y: 270 },
        animation: { x: [-170, -150, -170], y: [270, 250, 270], rotate: [0, -9, 0] },
      },
      {
        src: "/placeholder.svg?height=110&width=110&text=Gofret+3",
        alt: "Gofret 3",
        initialPosition: { x: 240, y: 60 },
        animation: { x: [240, 260, 240], y: [60, 40, 60], rotate: [0, 14, 0] },
      },
      {
        src: "/placeholder.svg?height=140&width=140&text=Gofret+4",
        alt: "Gofret 4",
        initialPosition: { x: 200, y: 290 },
        animation: { x: [200, 220, 200], y: [290, 270, 290], rotate: [0, -11, 0] },
      },
      {
        src: "/placeholder.svg?height=90&width=90&text=Gofret+5",
        alt: "Gofret 5",
        initialPosition: { x: -140, y: 400 },
        animation: { x: [-140, -120, -140], y: [400, 380, 400], rotate: [0, 8, 0] },
      },
    ],
  },
]

export default function ProductSlider() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [direction, setDirection] = useState(0) // -1: left, 1: right, 0: initial

  // Auto-rotate categories every 5 seconds if not hovering
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveCategory((prev) => (prev + 1) % categories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovering])

  const nextCategory = () => {
    setDirection(1)
    setActiveCategory((prev) => (prev + 1) % categories.length)
  }

  const prevCategory = () => {
    setDirection(-1)
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const goToCategory = (index: number) => {
    setDirection(index > activeCategory ? 1 : -1)
    setActiveCategory(index)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  }

  return (
    <section
      className="py-8 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Top navigation tabs */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-[#e30613] rounded-full p-2 flex justify-center overflow-x-auto max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors whitespace-nowrap
                ${activeCategory === index ? "bg-white text-[#e30613]" : "text-white hover:bg-white/10"}`}
              onClick={() => goToCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-[600px] overflow-hidden">
        {/* Main slider content */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`slide-${activeCategory}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Floating product images */}
            {categories[activeCategory].floatingImages.map((image, idx) => (
              <motion.div
                key={`${categories[activeCategory].id}-float-${idx}`}
                className="absolute"
                initial={{
                  x: image.initialPosition.x,
                  y: image.initialPosition.y,
                  opacity: 0,
                  rotate: 0,
                }}
                animate={{
                  ...image.animation,
                  opacity: 1,
                  transition: {
                    duration: 8 + idx,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
              >
                <motion.div whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }} transition={{ duration: 0.5 }}>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={
                      image.src.includes("150")
                        ? 150
                        : image.src.includes("140")
                          ? 140
                          : image.src.includes("130")
                            ? 130
                            : image.src.includes("120")
                              ? 120
                              : image.src.includes("110")
                                ? 110
                                : image.src.includes("100")
                                  ? 100
                                  : 90
                    }
                    height={
                      image.src.includes("150")
                        ? 150
                        : image.src.includes("140")
                          ? 140
                          : image.src.includes("130")
                            ? 130
                            : image.src.includes("120")
                              ? 120
                              : image.src.includes("110")
                                ? 110
                                : image.src.includes("100")
                                  ? 100
                                  : 90
                    }
                    className="object-contain rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* Main product image */}
            <Link href={categories[activeCategory].link} className="relative z-10 block">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Image
                  src={categories[activeCategory].image || "/placeholder.svg"}
                  alt={categories[activeCategory].name}
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <motion.button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 text-[#e30613] hover:bg-white/20 transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            prevCategory()
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous category"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        <motion.button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 text-[#e30613] hover:bg-white/20 transition-colors"
          onClick={nextCategory}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next category"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Category indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {categories.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeCategory === index ? "bg-[#e30613]" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToCategory(index)}
            aria-label={`Go to ${categories[index].name}`}
          />
        ))}
      </div>
    </section>
  )
}
