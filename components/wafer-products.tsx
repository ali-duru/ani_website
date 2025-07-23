"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, X, Star } from "lucide-react"

// Sample wafer products data with more detailed information
const waferProducts = [
  {
    id: "cokomel",
    name: "Çokomel",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format",
    description: "Çikolata kaplı, fındık kremalı gofret",
    category: "Çikolatalı Gofret",
    isNew: true,
    detailedDescription:
      "Çokomel, çıtır gofret katmanları arasında zengin fındık kreması ve dışını saran nefis sütlü çikolatası ile vazgeçilmez bir lezzet. Her lokmada mükemmel bir uyum yakalayan Çokomel, özel formülü sayesinde tazeliğini uzun süre korur.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ (palm, ayçiçek), fındık ezmesi (%10), kakao tozu, süt tozu, emülgatör (soya lesitini), kabartıcılar (sodyum bikarbonat, amonyum bikarbonat), tuz, aroma vericiler.",
    nutritionalValues: {
      calories: "520 kcal",
      fat: "27g",
      carbs: "62g",
      protein: "6g",
      sugar: "35g",
    },
    packageSizes: ["40g", "80g", "5x40g"],
    rating: 4.8,
  },
  {
    id: "dido",
    name: "Dido",
    image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
    description: "Sütlü çikolata kaplı, vanilya kremalı gofret",
    category: "Sütlü Gofret",
    isNew: false,
    detailedDescription:
      "Dido, nefis vanilya kreması ve dışını saran enfes sütlü çikolatası ile gofret severlerin vazgeçilmezi. İnce gofret katmanları arasındaki kremamsı doku, ağızda eşsiz bir lezzet bırakır.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ (palm, ayçiçek), süt tozu (%12), kakao yağı, kakao kitlesi, emülgatör (soya lesitini), kabartıcılar (sodyum bikarbonat, amonyum bikarbonat), tuz, vanilya aroması.",
    nutritionalValues: {
      calories: "490 kcal",
      fat: "24g",
      carbs: "65g",
      protein: "5g",
      sugar: "38g",
    },
    packageSizes: ["35g", "70g", "8x35g"],
    rating: 4.6,
  },
  {
    id: "cikolatali-gofret",
    name: "Çikolatalı Gofret",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format",
    description: "Kakao kremalı, çıtır katmanlı gofret",
    category: "Kakaolu Gofret",
    isNew: false,
    detailedDescription:
      "Çikolatalı Gofret, kakao kreması ile zenginleştirilmiş çıtır katmanları ile klasik bir lezzet. Her yaş grubunun severek tükettiği bu gofret, günün her saatinde keyifle yenebilir.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ (palm), kakao tozu (%8), emülgatör (soya lesitini), kabartıcılar (sodyum bikarbonat, amonyum bikarbonat), tuz, aroma vericiler.",
    nutritionalValues: {
      calories: "480 kcal",
      fat: "22g",
      carbs: "68g",
      protein: "4.5g",
      sugar: "32g",
    },
    packageSizes: ["40g", "120g", "6x40g"],
    rating: 4.3,
  },
  {
    id: "cubuk-gofret",
    name: "Çubuk Gofret",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300&auto=format",
    description: "Pratik çubuk formunda, çikolatalı gofret",
    category: "Sade Gofret",
    isNew: true,
    detailedDescription:
      "Çubuk Gofret, pratik formu ve lezzetli çikolata kreması ile atıştırmalık arayanlar için ideal bir seçenek. İnce ve uzun yapısı sayesinde yanınızda taşıması kolay, her an tüketebileceğiniz bir gofret.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ (palm, ayçiçek), kakao tozu, emülgatör (soya lesitini), kabartıcılar (sodyum bikarbonat, amonyum bikarbonat), tuz, aroma vericiler.",
    nutritionalValues: {
      calories: "460 kcal",
      fat: "21g",
      carbs: "64g",
      protein: "4g",
      sugar: "30g",
    },
    packageSizes: ["30g", "6x30g", "12x30g"],
    rating: 4.5,
  },
  {
    id: "findikli-gofret",
    name: "Fındıklı Gofret",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format",
    description: "Gerçek fındık parçacıklı, kremalı gofret",
    category: "Fındıklı Gofret",
    isNew: false,
    detailedDescription:
      "Fındıklı Gofret, içindeki gerçek fındık parçacıkları ile zenginleştirilmiş kreması sayesinde benzersiz bir lezzet sunar. Çıtır gofret katmanları arasındaki kremamsı doku, ağızda eşsiz bir tat bırakır.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ (palm, ayçiçek), fındık parçacıkları (%15), süt tozu, emülgatör (soya lesitini), kabartıcılar (sodyum bikarbonat, amonyum bikarbonat), tuz, aroma vericiler.",
    nutritionalValues: {
      calories: "530 kcal",
      fat: "30g",
      carbs: "58g",
      protein: "7g",
      sugar: "32g",
    },
    packageSizes: ["45g", "90g", "6x45g"],
    rating: 4.7,
  },
  {
    id: "mini-gofret",
    name: "Mini Gofret",
    image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
    description: "Küçük boyutlu, sütlü çikolatalı gofret",
    category: "Sütlü Gofret",
    isNew: true,
    detailedDescription:
      "Mini Gofret, küçük boyutu ve lezzetli sütlü çikolata kreması ile tek seferde tüketebileceğiniz bir atıştırmalık. Özellikle çocukların beslenme çantalarına koyulabilecek ideal bir ürün.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ (palm, ayçiçek), süt tozu (%10), kakao tozu, emülgatör (soya lesitini), kabartıcılar (sodyum bikarbonat, amonyum bikarbonat), tuz, aroma vericiler.",
    nutritionalValues: {
      calories: "470 kcal",
      fat: "23g",
      carbs: "62g",
      protein: "5g",
      sugar: "34g",
    },
    packageSizes: ["25g", "10x25g", "20x25g"],
    rating: 4.4,
  },
]

// Categories for filtering
const categories = [
  { id: "all", name: "Tümü" },
  { id: "chocolate", name: "Çikolatalı Gofret" },
  { id: "milk", name: "Sütlü Gofret" },
  { id: "hazelnut", name: "Fındıklı Gofret" },
  { id: "plain", name: "Sade Gofret" },
]

// Product Detail Modal Component
const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: (typeof waferProducts)[0] | null
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

export default function WaferProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProduct, setSelectedProduct] = useState<(typeof waferProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  const openProductDetail = (product: (typeof waferProducts)[0]) => {
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
      ? waferProducts
      : waferProducts.filter((product) => {
          if (activeCategory === "chocolate") return product.category.includes("Çikolatalı")
          if (activeCategory === "milk") return product.category.includes("Sütlü")
          if (activeCategory === "hazelnut") return product.category.includes("Fındıklı")
          if (activeCategory === "plain") return product.category.includes("Sade")
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
          <h2 className="text-3xl font-bold text-[#e30613] mb-4">Öne Çıkan Gofretlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En sevilen gofretlerimizi keşfedin. Her biri özenle hazırlanmış, damağınızda iz bırakacak lezzetler.
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
            TÜM GOFRETLERİ KEŞFET
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeProductDetail} />
    </section>
  )
}
