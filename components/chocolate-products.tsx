"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, X, Star } from "lucide-react"

// Sample chocolate products data with more detailed information
const chocolateProducts = [
  {
    id: "sutlu-cikolata",
    name: "Sütlü Çikolata",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=300&auto=format",
    description: "Kremsi dokusu ve zengin aromasıyla klasik sütlü çikolata",
    category: "Sütlü Çikolata",
    isNew: true,
    detailedDescription:
      "Zengin ve kremsi dokusu ile ağızda dağılan bir lezzet sunan sütlü çikolatamız, en kaliteli kakao çekirdekleri ve taze süt kullanılarak üretiliyor.",
    ingredients:
      "Şeker, kakao yağı, süt tozu, kakao kitlesi, süt yağı, emülgatör (soya lesitini), aroma verici (vanilin).",
    nutritionalValues: {
      calories: "560 kcal",
      fat: "35g",
      carbs: "55g",
      protein: "7g",
      sugar: "52g",
    },
    packageSizes: ["80g", "150g"],
    rating: 4.8,
    specifications: {
      productNumber: "101",
      caseQuantity: "24",
      container: '1200 (40" HC)',
    },
  },
  {
    id: "bitter-cikolata",
    name: "Bitter Çikolata",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=300&auto=format",
    description: "%70 kakao içeriğiyle yoğun bitter çikolata deneyimi",
    category: "Bitter Çikolata",
    isNew: false,
    detailedDescription:
      "%70 kakao içeriğiyle zengin ve yoğun bir tat sunan bitter çikolatamız, çikolata tutkunları için vazgeçilmez bir lezzet.",
    ingredients: "Kakao kitlesi, şeker, kakao yağı, emülgatör (soya lesitini), aroma verici (vanilin).",
    nutritionalValues: {
      calories: "580 kcal",
      fat: "42g",
      carbs: "40g",
      protein: "9g",
      sugar: "30g",
    },
    packageSizes: ["80g", "100g"],
    rating: 4.9,
  },
  {
    id: "findikli-cikolata",
    name: "Fındıklı Çikolata",
    image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
    description: "Kavrulmuş fındıklarla zenginleştirilmiş sütlü çikolata",
    category: "Sütlü Çikolata",
    isNew: true,
    detailedDescription:
      "Kavrulmuş bütün fındıklar ile zenginleştirilmiş sütlü çikolatamız, fındık ve çikolata severlerin vazgeçilmezi olacak.",
    ingredients:
      "Şeker, kakao yağı, süt tozu, kakao kitlesi, fındık (%15), süt yağı, emülgatör (soya lesitini), aroma verici (vanilin).",
    nutritionalValues: {
      calories: "590 kcal",
      fat: "42g",
      carbs: "48g",
      protein: "8g",
      sugar: "45g",
    },
    packageSizes: ["80g", "150g"],
    rating: 4.7,
  },
  {
    id: "karamel-dolgulu-cikolata",
    name: "Karamel Dolgulu Çikolata",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300&auto=format",
    description: "Karamel dolgulu, ağızda dağılan özel çikolata",
    category: "Dolgulu Çikolata",
    isNew: false,
    detailedDescription:
      "İçindeki yumuşak karamel dolgusu ile eşsiz bir lezzet deneyimi sunan çikolatamız, tatlı molalar için ideal.",
    ingredients:
      "Şeker, kakao yağı, süt tozu, kakao kitlesi, glukoz şurubu, tereyağı, süt yağı, emülgatör (soya lesitini), tuz, aroma verici (vanilin).",
    nutritionalValues: {
      calories: "550 kcal",
      fat: "34g",
      carbs: "58g",
      protein: "6g",
      sugar: "54g",
    },
    packageSizes: ["90g", "180g"],
    rating: 4.6,
  },
  {
    id: "portakal-aromali-cikolata",
    name: "Portakal Aromalı Çikolata",
    image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
    description: "Ferahlatıcı portakal aromalı bitter çikolata",
    category: "Bitter Çikolata",
    isNew: false,
    detailedDescription:
      "Bitter çikolata ve portakal aromasının eşsiz uyumu ile ferahlatıcı bir lezzet deneyimi sunan özel çikolatamız.",
    ingredients:
      "Kakao kitlesi, şeker, kakao yağı, portakal aroması (%2), emülgatör (soya lesitini), aroma verici (vanilin).",
    nutritionalValues: {
      calories: "570 kcal",
      fat: "40g",
      carbs: "45g",
      protein: "8g",
      sugar: "35g",
    },
    packageSizes: ["80g"],
    rating: 4.5,
  },
  {
    id: "beyaz-cikolata",
    name: "Beyaz Çikolata",
    image: "https://images.unsplash.com/photo-1548907040-4d42bea34b29?q=80&w=300&auto=format",
    description: "Kremsi ve tatlı beyaz çikolata",
    category: "Beyaz Çikolata",
    isNew: true,
    detailedDescription:
      "Kremsi dokusu ve tatlı lezzetiyle beyaz çikolatamız, farklı bir çikolata deneyimi arayanlar için ideal.",
    ingredients: "Şeker, kakao yağı, süt tozu, süt yağı, emülgatör (soya lesitini), aroma verici (vanilin).",
    nutritionalValues: {
      calories: "550 kcal",
      fat: "34g",
      carbs: "58g",
      protein: "6g",
      sugar: "56g",
    },
    packageSizes: ["80g", "100g"],
    rating: 4.4,
  },
]

// Categories for filtering
const categories = [
  { id: "all", name: "Tümü" },
  { id: "sutlu", name: "Sütlü Çikolata" },
  { id: "bitter", name: "Bitter Çikolata" },
  { id: "dolgulu", name: "Dolgulu Çikolata" },
  { id: "beyaz", name: "Beyaz Çikolata" },
]

// Product Detail Modal Component
const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: (typeof chocolateProducts)[0] | null
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

export default function ChocolateProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProduct, setSelectedProduct] = useState<(typeof chocolateProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const openProductDetail = (product: (typeof chocolateProducts)[0]) => {
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
      ? chocolateProducts
      : chocolateProducts.filter((product) => {
          if (activeCategory === "sutlu") return product.category === "Sütlü Çikolata"
          if (activeCategory === "bitter") return product.category === "Bitter Çikolata"
          if (activeCategory === "dolgulu") return product.category === "Dolgulu Çikolata"
          if (activeCategory === "beyaz") return product.category === "Beyaz Çikolata"
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
          <h2 className="text-3xl font-bold text-[#e30613] mb-4">Öne Çıkan Çikolatalarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En sevilen çikolatalarımızı keşfedin. Her biri özenle hazırlanmış, damağınızda iz bırakacak lezzetler.
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
            TÜM ÇİKOLATALARI KEŞFET
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeProductDetail} />
    </section>
  )
}
