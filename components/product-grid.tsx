"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

const productCategories = [
  {
    id: "biskuvi",
    nameKey: "products.biskuvi",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-chips-cookies-bitscuit.png-tVLvCuFbZgtNM8n0SMKZpjnXB8qYSA.jpeg", // Çikolatalı kurabiye
    description: "Farklı damak zevklerine hitap eden bisküvi çeşitlerimiz",
    products: ["Petit Beurre", "Çikolatalı Bisküvi", "Kremalı Bisküvi", "Yulaflı Bisküvi"],
  },
  {
    id: "cikolata",
    nameKey: "products.cikolata",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=400&auto=format", // Çikolata
    description: "Eşsiz lezzetiyle damağınızda iz bırakan çikolatalar",
    products: ["Sütlü Çikolata", "Bitter Çikolata", "Fındıklı Çikolata", "Dolgulu Çikolata"],
  },
  {
    id: "kek",
    nameKey: "products.kek",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format", // Kek
    description: "Yumuşacık dokulu, lezzetli kekler",
    products: ["Kakaolu Kek", "Meyveli Kek", "Kremalı Kek", "Mini Kek"],
  },
  {
    id: "gofret",
    nameKey: "products.gofret",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format", // Gofret/Wafer
    description: "Katman katman lezzet sunan gofretler",
    products: ["Çokomel", "Dido", "Çikolatalı Gofret", "Çubuk Kraker"],
  },
  {
    id: "kraker",
    nameKey: "products.kraker",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=400&auto=format", // Kraker
    description: "Çıtır çıtır krakerler ile atıştırmalık keyfi",
    products: ["Tuzlu Kraker", "Baharatlı Kraker", "Peynirli Kraker", "Çubuk Kraker"],
  },
  {
    id: "sekerleme",
    nameKey: "products.sekerleme",
    image: "https://images.unsplash.com/photo-1581798459219-318e68f60ae5?q=80&w=400&auto=format", // Şekerleme
    description: "Tatlı molalar için şekerleme çeşitleri",
    products: ["Jelibon", "Yumuşak Şeker", "Sert Şeker", "Draje"],
  },
]

// Animation variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut",
    },
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

const ProductCategory = ({ category }: { category: (typeof productCategories)[0] }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useLanguage()

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex flex-col items-center"
    >
      <Link
        href={`/${
          category.id === "biskuvi"
            ? "biskuviler"
            : category.id === "cikolata"
              ? "cikolatalar"
              : category.id === "kek"
                ? "kekler"
                : category.id === "gofret"
                  ? "gofretler"
                  : category.id === "kraker"
                    ? "krakerler"
                    : category.id === "sekerleme"
                      ? "sekerlemeler"
                      : category.id
        }`}
        className="flex flex-col items-center"
      >
        <div className="relative w-36 h-36 md:w-44 md:h-44">
          {/* Background decorative elements */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#e30613] to-[#ff6b6b] opacity-0 z-0"
            animate={
              isHovered
                ? {
                    opacity: 0.9,
                    scale: 1.1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }
                : {
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3, ease: "easeIn" },
                  }
            }
          />

          {/* Decorative circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-0 z-0"
              style={{
                width: `${(i + 1) * 10}%`,
                height: `${(i + 1) * 10}%`,
                top: `${50 - (i + 1) * 5}%`,
                left: `${50 - (i + 1) * 5}%`,
              }}
              animate={
                isHovered
                  ? {
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.2, 1.4],
                      transition: {
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      },
                    }
                  : { opacity: 0, scale: 1, transition: { duration: 0.3 } }
              }
            />
          ))}

          {/* Main circle with product image */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white shadow-lg flex items-center justify-center p-4 z-10"
            animate={
              isHovered
                ? {
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 20 },
                  }
                : {
                    y: 0,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    transition: { duration: 0.3 },
                  }
            }
          >
            <motion.div
              animate={
                isHovered
                  ? {
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }
                  : {
                      scale: 1,
                      transition: { duration: 0.3 },
                    }
              }
              className="relative w-full h-full rounded-full overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={t(category.nameKey)}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Category name with animation */}
        <motion.div
          className="mt-6 relative"
          animate={
            isHovered
              ? {
                  y: 5,
                  transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 20 },
                }
              : {
                  y: 0,
                  transition: { duration: 0.3 },
                }
          }
        >
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-2 left-0 h-0.5 bg-[#e30613]"
            initial={{ width: 0 }}
            animate={
              isHovered
                ? {
                    width: "100%",
                    transition: { duration: 0.3, delay: 0.1 },
                  }
                : {
                    width: 0,
                    transition: { duration: 0.3 },
                  }
            }
          />

          <motion.h3
            className="text-center text-sm font-bold text-gray-800"
            animate={
              isHovered
                ? {
                    color: "#e30613",
                    transition: { duration: 0.3 },
                  }
                : {
                    color: "#1f2937",
                    transition: { duration: 0.3 },
                  }
            }
          >
            {t(category.nameKey)}
          </motion.h3>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function ProductGrid() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header with animation */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold text-[#e30613] mb-8"
            initial="hidden"
            animate={controls}
            variants={headerVariants}
          >
            {t("home.products.title")}
          </motion.h2>
          <motion.div className="max-w-2xl mx-auto" initial="hidden" animate={controls} variants={descriptionVariants}>
            <h3 className="text-xl font-bold mb-4">{t("home.products.subtitle")}</h3>
            <p className="text-gray-600">
              Anı Bisküvi Gıda San. ve Tic. A.Ş. olarak markamızla farklı damak tadına hitap ediyor, hayatın her anında
              ağzınızı tatlandırıyoruz. Büyük alışveriş sepeti.
            </p>
          </motion.div>
        </div>

        {/* Product Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {productCategories.map((category) => (
            <ProductCategory key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
