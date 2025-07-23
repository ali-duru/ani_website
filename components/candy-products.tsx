"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, X, Star } from "lucide-react"

// Sample candy products data with more detailed information
const candyProducts = [
  {
    id: "jelibon",
    name: "Jelibon",
    image: "https://images.unsplash.com/photo-1581798459219-318e68f60ae5?q=80&w=300&auto=format",
    description: "Yumuşak dokulu, meyve aromalı jelibonlar",
    category: "Yumuşak Şekerleme",
    isNew: false,
    detailedDescription:
      "Jelibon, yumuşak dokusu ve çeşitli meyve aromaları ile hem çocukların hem de yetişkinlerin favorisi. Renkli ve eğlenceli şekilleri ile her yaş grubuna hitap eden bu şekerleme, özel günlerde veya günlük atıştırmalık olarak tüketilebilir.",
    ingredients:
      "Şeker, glikoz şurubu, su, jelatin, meyve suyu konsantreleri (%3) (çilek, portakal, limon, elma), asitlendiriciler (sitrik asit, malik asit), aroma vericiler, renklendiriciler (antosiyaninler, kurkumin, klorofil).",
    nutritionalValues: {
      calories: "340 kcal",
      fat: "0.1g",
      carbs: "78g",
      protein: "6g",
      sugar: "65g",
    },
    packageSizes: ["80g", "150g", "300g"],
    rating: 4.7,
  },
  {
    id: "yumusak-seker",
    name: "Yumuşak Şeker",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300&auto=format",
    description: "Ağızda dağılan, yumuşak dokulu şekerler",
    category: "Yumuşak Şekerleme",
    isNew: true,
    detailedDescription:
      "Yumuşak Şeker, ağızda dağılan dokusu ve zengin aroması ile tatlı severlerin vazgeçilmezi. Çeşitli meyve tatları ile zenginleştirilmiş bu şekerleme, özel anlarda veya günlük atıştırmalık olarak tüketilebilir.",
    ingredients:
      "Şeker, glikoz şurubu, su, modifiye nişasta, meyve suyu konsantreleri (%2) (çilek, portakal, limon, elma), asitlendiriciler (sitrik asit, malik asit), aroma vericiler, renklendiriciler (antosiyaninler, kurkumin, klorofil).",
    nutritionalValues: {
      calories: "360 kcal",
      fat: "0.2g",
      carbs: "85g",
      protein: "0.5g",
      sugar: "70g",
    },
    packageSizes: ["75g", "150g", "250g"],
    rating: 4.5,
  },
  {
    id: "sert-seker",
    name: "Sert Şeker",
    image: "https://images.unsplash.com/photo-1581798459219-318e68f60ae5?q=80&w=300&auto=format",
    description: "Uzun süre keyif veren, sert şekerler",
    category: "Sert Şekerleme",
    isNew: false,
    detailedDescription:
      "Sert Şeker, uzun süre ağızda kalarak keyif veren yapısı ve çeşitli aromaları ile her yaştan tüketicinin favorisi. Özellikle yolculuklarda veya iş toplantılarında tercih edilen bu şekerleme, ferahlatıcı etkisi ile de öne çıkıyor.",
    ingredients:
      "Şeker, glikoz şurubu, asitlendiriciler (sitrik asit, malik asit), aroma vericiler, renklendiriciler (antosiyaninler, kurkumin, klorofil).",
    nutritionalValues: {
      calories: "390 kcal",
      fat: "0g",
      carbs: "97g",
      protein: "0g",
      sugar: "90g",
    },
    packageSizes: ["50g", "100g", "200g"],
    rating: 4.3,
  },
  {
    id: "draje",
    name: "Draje",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300&auto=format",
    description: "Çikolata kaplı, renkli draje şekerler",
    category: "Çikolatalı Şekerleme",
    isNew: true,
    detailedDescription:
      "Draje, içindeki çeşitli dolgular ve dışını saran renkli çikolata kaplaması ile göz alıcı bir şekerleme. Özel günlerde ikram edilebilecek veya sinema, tiyatro gibi etkinliklerde atıştırmalık olarak tüketilebilecek ideal bir ürün.",
    ingredients:
      "Şeker, kakao kitlesi, kakao yağı, süt tozu, bitkisel yağ (palm), emülgatör (soya lesitini), aroma vericiler, renklendiriciler (antosiyaninler, kurkumin, klorofil).",
    nutritionalValues: {
      calories: "480 kcal",
      fat: "22g",
      carbs: "68g",
      protein: "4g",
      sugar: "60g",
    },
    packageSizes: ["45g", "100g", "200g"],
    rating: 4.8,
  },
  {
    id: "naneli-seker",
    name: "Naneli Şeker",
    image: "https://images.unsplash.com/photo-1581798459219-318e68f60ae5?q=80&w=300&auto=format",
    description: "Ferahlatıcı nane aromalı sert şeker",
    category: "Sert Şekerleme",
    isNew: false,
    detailedDescription:
      "Naneli Şeker, ferahlatıcı nane aroması ile ağızda uzun süre kalarak serinletici bir etki bırakan sert şekerleme. Özellikle yemek sonrası veya gün içinde ferahlık arayanlar için ideal bir seçenek.",
    ingredients:
      "Şeker, glikoz şurubu, nane yağı (%0.5), asitlendiriciler (sitrik asit), aroma vericiler, renklendiriciler (klorofil).",
    nutritionalValues: {
      calories: "385 kcal",
      fat: "0g",
      carbs: "96g",
      protein: "0g",
      sugar: "90g",
    },
    packageSizes: ["50g", "100g", "200g"],
    rating: 4.6,
  },
  {
    id: "meyveli-lolipop",
    name: "Meyveli Lolipop",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300&auto=format",
    description: "Çubuklu, meyve aromalı renkli lolipoplar",
    category: "Sert Şekerleme",
    isNew: true,
    detailedDescription:
      "Meyveli Lolipop, çubuklu yapısı ve canlı renkleri ile özellikle çocukların favorisi olan bir şekerleme. Çeşitli meyve aromaları ile zenginleştirilmiş bu ürün, özel günlerde veya ödül olarak verilebilecek ideal bir seçenek.",
    ingredients:
      "Şeker, glikoz şurubu, asitlendiriciler (sitrik asit, malik asit), meyve suyu konsantreleri (%1) (çilek, portakal, limon, elma), aroma vericiler, renklendiriciler (antosiyaninler, kurkumin, klorofil).",
    nutritionalValues: {
      calories: "380 kcal",
      fat: "0g",
      carbs: "95g",
      protein: "0g",
      sugar: "90g",
    },
    packageSizes: ["12g", "6x12g", "12x12g"],
    rating: 4.7,
  },
]

// Categories for filtering
const categories = [
  { id: "all", name: "Tümü" },
  { id: "soft", name: "Yumuşak Şekerleme" },
  { id: "hard", name: "Sert Şekerleme" },
  { id: "chocolate", name: "Çikolatalı Şekerleme" },
]

// Product Detail Modal Component
const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: (typeof candyProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}) => {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product Image */}
                <div className="relative h-64 md:h-full bg-gray-50 flex items-center justify-center p-8">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10 bg-[#e30613] text-white text-xs px-3 py-1 rounded-full font-medium">
                      YENİ
                    </div>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain max-h-full"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {product.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < product.rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
                  </div>

                  <p className="text-gray-700 mb-6">{product.detailedDescription}</p>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">İÇİNDEKİLER</h4>
                    <p className="text-sm text-gray-600">{product.ingredients}</p>
                  </div>

                  {/* Nutritional Values */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">BESİN DEĞERLERİ (100g)</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Enerji:</span>
                        <span className="font-medium">{product.nutritionalValues.calories}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Yağ:</span>
                        <span className="font-medium">{product.nutritionalValues.fat}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Karbonhidrat:</span>
                        <span className="font-medium">{product.nutritionalValues.carbs}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Protein:</span>
                        <span className="font-medium">{product.nutritionalValues.protein}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Şeker:</span>
                        <span className="font-medium">{product.nutritionalValues.sugar}</span>
                      </div>
                    </div>
                  </div>

                  {/* Package Sizes */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">PAKET BOYUTLARI</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.packageSizes.map((size) => (
                        <span key={size} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function CandyProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProduct, setSelectedProduct] = useState<(typeof candyProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const openProductDetail = (product: (typeof candyProducts)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeProductDetail = () => {
    setIsModalOpen(false)
    // Re-enable body scrolling
    document.body.style.overflow = "auto"
  }

  const filteredProducts =
    activeCategory === "all"
      ? candyProducts
      : candyProducts.filter((product) => {
          if (activeCategory === "soft") return product.category.includes("Yumuşak")
          if (activeCategory === "hard") return product.category.includes("Sert")
          if (activeCategory === "chocolate") return product.category.includes("Çikolatalı")
          return true
        })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#e30613] mb-4">Öne Çıkan Şekerlemelerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En sevilen şekerlemelerimizi keşfedin. Her biri özenle hazırlanmış, damağınızda iz bırakacak lezzetler.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                category.id === activeCategory
                  ? "bg-[#e30613] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="block group cursor-pointer">
                <div
                  className="bg-white rounded-2xl shadow-md overflow-hidden h-full transition-shadow group-hover:shadow-xl"
                  onClick={() => openProductDetail(product)}
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-50 overflow-hidden">
                    {product.isNew && (
                      <div className="absolute top-4 right-4 z-10 bg-[#e30613] text-white text-xs px-3 py-1 rounded-full font-medium">
                        YENİ
                      </div>
                    )}
                    <motion.div
                      className="w-full h-full flex items-center justify-center p-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain max-h-full"
                      />
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute inset-0 border-2 border-dashed border-[#e30613] rounded-2xl opacity-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 0.1, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#e30613] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    {/* View Details Link */}
                    <div className="flex items-center text-[#e30613] font-medium">
                      <span className="mr-2">Detaylar</span>
                      <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="inline-flex items-center gap-2 bg-white border border-[#e30613] text-[#e30613] px-8 py-3 rounded-full font-medium hover:bg-[#e30613] hover:text-white transition-colors">
            TÜM ŞEKERLEMELERİ KEŞFET
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeProductDetail} />
    </section>
  )
}
