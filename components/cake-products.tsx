"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, X, Star } from "lucide-react"

// Sample cake products data with more detailed information
const cakeProducts = [
  {
    id: "kakaolu-kek",
    name: "Kakaolu Kek",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=300&auto=format",
    description: "Yoğun kakao lezzetiyle yumuşacık dokulu kek",
    category: "Kakaolu Kek",
    isNew: true,
    detailedDescription:
      "Yoğun kakao lezzetiyle yumuşacık dokulu kekimiz, çay ve kahvenin yanında mükemmel bir atıştırmalık.",
    ingredients: "Buğday unu, şeker, yumurta, bitkisel yağ, kakao tozu, kabartma tozu, vanilya, tuz.",
    nutritionalValues: {
      calories: "390 kcal",
      fat: "18g",
      carbs: "52g",
      protein: "6g",
      sugar: "28g",
    },
    packageSizes: ["50g", "200g"],
    rating: 4.8,
    specifications: {
      productNumber: "201",
      caseQuantity: "24",
      container: '1200 (40" HC)',
    },
  },
  {
    id: "meyveli-kek",
    name: "Meyveli Kek",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=300&auto=format",
    description: "Gerçek meyve parçacıklarıyla zenginleştirilmiş kek",
    category: "Meyveli Kek",
    isNew: false,
    detailedDescription:
      "Gerçek meyve parçacıklarıyla zenginleştirilmiş kekimiz, doğal meyve lezzetini her lokmada hissetmenizi sağlıyor.",
    ingredients: "Buğday unu, şeker, yumurta, bitkisel yağ, kuru meyveler (üzüm, kayısı), kabartma tozu, vanilya, tuz.",
    nutritionalValues: {
      calories: "380 kcal",
      fat: "16g",
      carbs: "55g",
      protein: "5g",
      sugar: "30g",
    },
    packageSizes: ["50g", "200g"],
    rating: 4.7,
  },
  {
    id: "kremali-kek",
    name: "Kremalı Kek",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300&auto=format",
    description: "Vanilya kreması ile doldurulmuş yumuşak kek",
    category: "Kremalı Kek",
    isNew: true,
    detailedDescription: "Vanilya kreması ile doldurulmuş yumuşak kekimiz, tatlı krizleriniz için mükemmel bir çözüm.",
    ingredients:
      "Buğday unu, şeker, yumurta, bitkisel yağ, vanilya kreması (süt, şeker, nişasta), kabartma tozu, vanilya, tuz.",
    nutritionalValues: {
      calories: "420 kcal",
      fat: "22g",
      carbs: "50g",
      protein: "5g",
      sugar: "32g",
    },
    packageSizes: ["60g", "180g"],
    rating: 4.9,
  },
  {
    id: "mini-kek",
    name: "Mini Kek",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=300&auto=format",
    description: "Tek porsiyonluk, pratik mini kekler",
    category: "Mini Kek",
    isNew: false,
    detailedDescription:
      "Tek porsiyonluk, pratik mini keklerimiz, hareket halindeyken bile tatlı ihtiyacınızı karşılamak için ideal.",
    ingredients:
      "Buğday unu, şeker, yumurta, bitkisel yağ, kakao tozu (kakaolu çeşitler için), kabartma tozu, vanilya, tuz.",
    nutritionalValues: {
      calories: "150 kcal",
      fat: "7g",
      carbs: "20g",
      protein: "2g",
      sugar: "12g",
    },
    packageSizes: ["25g x 6", "25g x 12"],
    rating: 4.6,
  },
  {
    id: "havuclu-kek",
    name: "Havuçlu Kek",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=300&auto=format",
    description: "Taze havuç ve ceviz ile hazırlanan sağlıklı kek",
    category: "Özel Kek",
    isNew: true,
    detailedDescription:
      "Taze havuç ve ceviz ile hazırlanan sağlıklı kekimiz, hem lezzetli hem de besleyici bir alternatif.",
    ingredients: "Buğday unu, şeker, yumurta, bitkisel yağ, havuç, ceviz, tarçın, kabartma tozu, vanilya, tuz.",
    nutritionalValues: {
      calories: "370 kcal",
      fat: "19g",
      carbs: "45g",
      protein: "7g",
      sugar: "25g",
    },
    packageSizes: ["200g", "400g"],
    rating: 4.8,
  },
  {
    id: "limonlu-kek",
    name: "Limonlu Kek",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=300&auto=format",
    description: "Ferahlatıcı limon aromalı kek",
    category: "Özel Kek",
    isNew: false,
    detailedDescription: "Ferahlatıcı limon aromalı kekimiz, tatlı ile ekşinin mükemmel uyumunu sunar.",
    ingredients:
      "Buğday unu, şeker, yumurta, bitkisel yağ, limon kabuğu rendesi, limon suyu, kabartma tozu, vanilya, tuz.",
    nutritionalValues: {
      calories: "360 kcal",
      fat: "16g",
      carbs: "48g",
      protein: "5g",
      sugar: "26g",
    },
    packageSizes: ["200g", "400g"],
    rating: 4.7,
  },
]

// Categories for filtering
const categories = [
  { id: "all", name: "Tümü" },
  { id: "kakaolu", name: "Kakaolu Kek" },
  { id: "meyveli", name: "Meyveli Kek" },
  { id: "kremali", name: "Kremalı Kek" },
  { id: "mini", name: "Mini Kek" },
  { id: "ozel", name: "Özel Kek" },
]

// Product Detail Modal Component
const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: (typeof cakeProducts)[0] | null
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

export default function CakeProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProduct, setSelectedProduct] = useState<(typeof cakeProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const openProductDetail = (product: (typeof cakeProducts)[0]) => {
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
      ? cakeProducts
      : cakeProducts.filter((product) => {
          if (activeCategory === "kakaolu") return product.category === "Kakaolu Kek"
          if (activeCategory === "meyveli") return product.category === "Meyveli Kek"
          if (activeCategory === "kremali") return product.category === "Kremalı Kek"
          if (activeCategory === "mini") return product.category === "Mini Kek"
          if (activeCategory === "ozel") return product.category === "Özel Kek"
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
          <h2 className="text-3xl font-bold text-[#e30613] mb-4">Öne Çıkan Keklerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En sevilen keklerimizi keşfedin. Her biri özenle hazırlanmış, yumuşacık dokulu, lezzetli ürünler.
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
            TÜM KEKLERİ KEŞFET
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeProductDetail} />
    </section>
  )
}
