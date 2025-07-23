"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Product categories data with enhanced imagery and descriptions
const categories = [
  {
    id: "biskuvi",
    name: "Bisküviler",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-chips-cookies-bitscuit.png-tVLvCuFbZgtNM8n0SMKZpjnXB8qYSA.jpeg",
    link: "/biskuviler",
    color: "#e30613",
    gradient: "from-red-600 to-red-800",
    accentColor: "rgba(227, 6, 19, 0.2)",
    description: "Çıtır çıtır, ağızda dağılan enfes lezzetler",
    products: [
      {
        name: "Petit Beurre",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-chips-cookies-bitscuit.png-tVLvCuFbZgtNM8n0SMKZpjnXB8qYSA.jpeg",
        description: "Klasik lezzetin en özel hali",
        isNew: true,
      },
      {
        name: "Çikolatalı Bisküvi",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-chips-cookies-bitscuit.png-tVLvCuFbZgtNM8n0SMKZpjnXB8qYSA.jpeg",
        description: "Bol çikolatalı, eşsiz lezzet",
      },
      {
        name: "Kremalı Bisküvi",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-chips-cookies-bitscuit.png-tVLvCuFbZgtNM8n0SMKZpjnXB8qYSA.jpeg",
        description: "İki bisküvi arasında enfes krema",
        isPopular: true,
      },
    ],
  },
  {
    id: "cikolata",
    name: "Çikolatalar",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format",
    link: "/cikolatalar",
    color: "#8B4513",
    gradient: "from-amber-800 to-amber-950",
    accentColor: "rgba(139, 69, 19, 0.2)",
    description: "Eşsiz kakao çekirdeklerinden, damağınızda iz bırakan lezzet",
    products: [
      {
        name: "Sütlü Çikolata",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=300&auto=format",
        description: "Kremsi dokusuyla vazgeçilmez lezzet",
        isPopular: true,
      },
      {
        name: "Bitter Çikolata",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=300&auto=format",
        description: "%70 kakao içeriğiyle yoğun lezzet",
      },
      {
        name: "Fındıklı Çikolata",
        image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
        description: "Kavrulmuş fındıklarla zenginleştirilmiş",
        isNew: true,
      },
    ],
  },
  {
    id: "kek",
    name: "Kekler",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format",
    link: "/kekler",
    color: "#FF6B6B",
    gradient: "from-rose-500 to-rose-700",
    accentColor: "rgba(255, 107, 107, 0.2)",
    description: "Yumuşacık dokusu ve enfes lezzetiyle vazgeçilmez tatlar",
    products: [
      {
        name: "Kakaolu Kek",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=300&auto=format",
        description: "Yoğun kakao lezzetiyle",
        isPopular: true,
      },
      {
        name: "Meyveli Kek",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=300&auto=format",
        description: "Gerçek meyve parçacıklarıyla",
      },
      {
        name: "Kremalı Kek",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300&auto=format",
        description: "Vanilya kreması ile doldurulmuş",
        isNew: true,
      },
    ],
  },
  {
    id: "gofret",
    name: "Gofretler",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format",
    link: "/gofretler",
    color: "#6B3FA0",
    gradient: "from-purple-600 to-purple-900",
    accentColor: "rgba(107, 63, 160, 0.2)",
    description: "Katman katman lezzet, çıtır çıtır keyif",
    products: [
      {
        name: "Çikolatalı Gofret",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format",
        description: "Çikolata kaplı, enfes lezzet",
        isNew: true,
      },
      {
        name: "Fındıklı Gofret",
        image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
        description: "Fındık kremalı, çıtır gofret",
      },
      {
        name: "Sütlü Gofret",
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format",
        description: "Sütlü krema dolgulu gofret",
        isPopular: true,
      },
    ],
  },
]

// Product card component with advanced hover effects
const ProductCard = ({ product, color, index }: any) => {
  const [isHovered, setIsHovered] = useState(false)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const cardRef = useRef<HTMLDivElement>(null)

  // Smooth spring animations for rotation
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const parallaxY = useTransform(springRotateX, (value) => value * -2)
  const parallaxX = useTransform(springRotateY, (value) => value * 2)
  const transform = `perspective(1000px) rotateX(${springRotateX.get()}deg) rotateY(${springRotateY.get()}deg)`

  // 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXVal = ((y - centerY) / centerY) * 10
    const rotateYVal = ((centerX - x) / centerX) * 10
    rotateX.set(rotateXVal)
    rotateY.set(rotateYVal)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
          isHovered ? "shadow-xl scale-[1.02]" : ""
        }`}
        style={{
          boxShadow: isHovered ? `0 20px 30px -10px ${color}40` : "",
        }}
      >
        {/* Product image with parallax effect */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br bg-opacity-10">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              y: parallaxY,
              x: parallaxX,
            }}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700"
              style={{
                scale: isHovered ? 1.05 : 1,
              }}
            />
          </motion.div>

          {/* Badges */}
          {product.isNew && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              <Sparkles className="h-3 w-3" />
              <span>YENİ</span>
            </div>
          )}
          {product.isPopular && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
              <Sparkles className="h-3 w-3" />
              <span>POPÜLER</span>
            </div>
          )}

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
            animate={{ backgroundColor: isHovered ? `${color}20` : "rgba(0,0,0,0)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full p-3 shadow-lg"
            >
              <Eye className="h-5 w-5 text-gray-700" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3
            className="font-bold text-gray-800 mb-1 transition-colors duration-300"
            style={{ color: isHovered ? color : "" }}
          >
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{product.description}</p>

          {/* Animated line */}
          <motion.div
            className="h-0.5 w-0 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// Main component
export default function ModernProductSlider() {
  const [activeCategory, setActiveCategory] = useState(2) // Start with Kekler (index 2)
  const [isHovering, setIsHovering] = useState(false)
  const [direction, setDirection] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Parallax effect for background elements
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    const { left, top, width, height } = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    mouseX.set(x / width - 0.5)
    mouseY.set(y / height - 0.5)
  }

  // Auto-rotate categories
  useEffect(() => {
    if (isHovering) return

    const startAutoplay = () => {
      autoplayRef.current = setTimeout(() => {
        setDirection(1)
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

  const nextCategory = () => {
    setDirection(1)
    setActiveCategory((prev) => (prev + 1) % categories.length)
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
  }

  const prevCategory = () => {
    setDirection(-1)
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length)
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
  }

  const goToCategory = (index: number) => {
    setDirection(index > activeCategory ? 1 : -1)
    setActiveCategory(index)
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  }

  const currentCategory = categories[activeCategory]
  const bgColor = currentCategory.accentColor

  return (
    <section
      ref={sliderRef}
      className="py-16 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              backgroundColor: currentCategory.color,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              x: useTransform(mouseX, (value) => value * (i % 2 === 0 ? -30 : 30)),
              y: useTransform(mouseY, (value) => value * (i % 2 === 0 ? -30 : 30)),
            }}
          />
        ))}
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-modern category tabs */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: `linear-gradient(to right, ${currentCategory.color}20, ${currentCategory.color}10)` }}
          />
          <div className="relative flex justify-between items-center p-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-lg overflow-hidden">
            {/* Animated background pill */}
            <motion.div
              className="absolute h-full rounded-full"
              style={{
                background: `linear-gradient(to right, ${currentCategory.color}, ${currentCategory.color}CC)`,
                width: `${100 / categories.length}%`,
              }}
              animate={{
                x: `${activeCategory * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Category buttons */}
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => goToCategory(index)}
                className={cn(
                  "relative z-10 py-3 px-6 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex-1 text-center",
                  activeCategory === index ? "text-white" : "text-gray-700 hover:text-gray-900",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          {/* Navigation arrows */}
          <motion.button
            onClick={prevCategory}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg text-gray-700 hover:text-gray-900 transition-all"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            whileTap={{ scale: 0.9 }}
            style={{ boxShadow: `0 10px 25px -5px ${currentCategory.color}40` }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={nextCategory}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg text-gray-700 hover:text-gray-900 transition-all"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            whileTap={{ scale: 0.9 }}
            style={{ boxShadow: `0 10px 25px -5px ${currentCategory.color}40` }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Main slider content */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`slide-${activeCategory}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
            >
              {/* Left side - Main category image */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative w-full h-[400px] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={currentCategory.image || "/placeholder.svg"}
                    alt={currentCategory.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-br opacity-60 ${currentCategory.gradient}`}
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-4xl font-bold mb-2"
                    >
                      {currentCategory.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-white/90"
                    >
                      {currentCategory.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Products */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-6" style={{ color: currentCategory.color }}>
                  {currentCategory.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {currentCategory.products.map((product, idx) => (
                    <ProductCard
                      key={`${currentCategory.id}-${idx}`}
                      product={product}
                      color={currentCategory.color}
                      index={idx}
                    />
                  ))}
                </div>

                <div className="mt-auto flex justify-center">
                  <Link href={currentCategory.link}>
                    <Button
                      className="group rounded-full px-6 py-2 font-medium text-white transition-all duration-300 flex items-center gap-2"
                      style={{ backgroundColor: currentCategory.color }}
                    >
                      Tümünü Gör
                      <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                        <ExternalLink className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modern indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCategory(index)}
              className="group relative p-1 focus:outline-none"
              aria-label={`Go to ${categories[index].name}`}
            >
              <motion.div
                className="w-3 h-3 rounded-full transition-all duration-300 relative z-10"
                style={{
                  backgroundColor: index === activeCategory ? categories[index].color : "#D1D5DB",
                  boxShadow: index === activeCategory ? `0 0 0 2px white, 0 0 0 4px ${categories[index].color}40` : "",
                }}
                whileHover={{ scale: 1.2 }}
                animate={index === activeCategory ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: index === activeCategory ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
              />
              <div className="absolute inset-0 -z-10 scale-0 rounded-full bg-gray-200 transition-transform duration-300 group-hover:scale-100" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
