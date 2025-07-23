"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Star } from "lucide-react";

// Sample biscuit products data with more detailed information
const biscuitProducts = [
  {
    id: "cimboo",
    name: "Cimboo",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ED7VyJ3rNsHrb62esA1rNSw8kGtDa4.png",
    description:
      "Antep Fıstığı Aromalı Kaplamalı Marshmallowlu Sandviç Bisküvi",
    category: "Sandviç Bisküvi",
    isNew: true,
    detailedDescription:
      "Antep Fıstığı Aromalı Kaplamalı Marshmallowlu Sandviç Bisküvi. Yumuşak marshmallow dolgulu, çıtır bisküvi katmanları ve Antep fıstığı aromalı kaplama ile eşsiz bir lezzet deneyimi.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ, marshmallow (şeker, glikoz şurubu, jelatin), Antep fıstığı aroması, kakao, kabartma tozu, tuz, aroma verici.",
    nutritionalValues: {
      calories: "240 kcal",
      fat: "10g",
      carbs: "35g",
      protein: "3g",
      sugar: "18g",
    },
    packageSizes: ["50g"],
    rating: 4.9,
    specifications: {
      productNumber: "627",
      caseQuantity: "6x24",
      container: '1330 (40" HC)',
    },
  },
  {
    id: "finger",
    name: "Finger",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format",
    description: "Çıtır çıtır lezzet",
    category: "Tatlı Bisküvi",
    isNew: true,
    detailedDescription:
      "Parmak şeklinde, çıtır çıtır, ağızda dağılan enfes bir lezzet. Çocukların favorisi.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ, süt tozu, kabartma tozu, tuz, vanilya.",
    nutritionalValues: {
      calories: "440 kcal",
      fat: "14g",
      carbs: "72g",
      protein: "7g",
      sugar: "26g",
    },
    packageSizes: ["150g", "300g"],
    rating: 4.6,
  },
  {
    id: "haylayf",
    name: "Haylayf",
    image:
      "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?q=80&w=300&auto=format",
    description: "Tam tahıllı bisküvi",
    category: "Tatlı Bisküvi",
    isNew: false,
    detailedDescription:
      "Tam tahıllı undan yapılan, lif açısından zengin, sağlıklı bir atıştırmalık.",
    ingredients:
      "Tam buğday unu, şeker, bitkisel yağ, yulaf ezmesi, bal, kabartma tozu, tuz.",
    nutritionalValues: {
      calories: "380 kcal",
      fat: "10g",
      carbs: "65g",
      protein: "9g",
      sugar: "18g",
    },
    packageSizes: ["175g", "350g"],
    rating: 4.7,
  },
  {
    id: "bebe-biskuvisi",
    name: "Bebe Bisküvisi",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300&auto=format",
    description: "Bebekler için özel formül",
    category: "Bebe Bisküvi",
    isNew: false,
    detailedDescription:
      "Bebeklerin ilk katı gıda deneyimi için özel olarak formüle edilmiş, kolay sindirilebilir bisküvi.",
    ingredients:
      "Buğday unu, şeker, bitkisel yağ, süt tozu, demir, kalsiyum, B vitaminleri.",
    nutritionalValues: {
      calories: "360 kcal",
      fat: "8g",
      carbs: "68g",
      protein: "10g",
      sugar: "15g",
    },
    packageSizes: ["100g", "200g"],
    rating: 4.9,
  },
  {
    id: "tuzsuz-kraker",
    name: "Tuzsuz Kraker",
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=300&auto=format",
    description: "Sade lezzet",
    category: "Tuzlu Bisküvi",
    isNew: false,
    detailedDescription:
      "Tuz içermeyen, sade lezzetiyle öne çıkan, diyet yapanlar ve tuz tüketimini azaltmak isteyenler için ideal kraker.",
    ingredients: "Buğday unu, bitkisel yağ, maya, şeker, kabartma tozu.",
    nutritionalValues: {
      calories: "400 kcal",
      fat: "12g",
      carbs: "68g",
      protein: "8g",
      sugar: "2g",
    },
    packageSizes: ["100g", "200g"],
    rating: 4.5,
  },
  {
    id: "cubuk-kraker",
    name: "Çubuk Kraker",
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=300&auto=format",
    description: "Çıtır çubuklar",
    category: "Tuzlu Bisküvi",
    isNew: true,
    detailedDescription:
      "Çubuk şeklinde, çıtır çıtır, aperatif olarak tüketilebilen lezzetli krakerler.",
    ingredients: "Buğday unu, bitkisel yağ, tuz, maya, susam, baharatlar.",
    nutritionalValues: {
      calories: "420 kcal",
      fat: "15g",
      carbs: "65g",
      protein: "9g",
      sugar: "1g",
    },
    packageSizes: ["150g", "300g"],
    rating: 4.7,
  },
];

// Categories for filtering
const categories = [
  { id: "all", name: "Tümü" },
  { id: "tatli", name: "Tatlı Bisküvi" },
  { id: "tuzlu", name: "Tuzlu Bisküvi" },
  { id: "bebe", name: "Bebe Bisküvi" },
];

// Product Detail Modal Component
const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: (typeof biscuitProducts)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!product) return null;

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
                    <h3 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h3>
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
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating}/5
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6">
                    {product.detailedDescription}
                  </p>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      İÇİNDEKİLER
                    </h4>
                    <p className="text-sm text-gray-600">
                      {product.ingredients}
                    </p>
                  </div>

                  {/* Nutritional Values */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      BESİN DEĞERLERİ (100g)
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Enerji:</span>
                        <span className="font-medium">
                          {product.nutritionalValues.calories}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Yağ:</span>
                        <span className="font-medium">
                          {product.nutritionalValues.fat}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Karbonhidrat:</span>
                        <span className="font-medium">
                          {product.nutritionalValues.carbs}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Protein:</span>
                        <span className="font-medium">
                          {product.nutritionalValues.protein}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Şeker:</span>
                        <span className="font-medium">
                          {product.nutritionalValues.sugar}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Package Sizes */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      PAKET BOYUTLARI
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.packageSizes.map((size) => (
                        <span
                          key={size}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
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
  );
};

export default function BiscuitProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof biscuitProducts)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? biscuitProducts
      : biscuitProducts.filter((product) => {
          const categoryMap: { [key: string]: string } = {
            tatli: "Tatlı Bisküvi",
            tuzlu: "Tuzlu Bisküvi",
            bebe: "Bebe Bisküvi",
          };
          return product.category === categoryMap[activeCategory];
        });

  const openProductDetail = (product: (typeof biscuitProducts)[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProductDetail = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

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
          <h2 className="text-3xl font-bold text-[#e30613] mb-4">
            Öne Çıkan Bisküvilerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En sevilen bisküvilerimizi keşfedin. Her biri özenle hazırlanmış,
            damağınızda iz bırakacak lezzetler.
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
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-[#e30613] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
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
          {/* <button className="inline-flex items-center gap-2 bg-white border border-[#e30613] text-[#e30613] px-8 py-3 rounded-full font-medium hover:bg-[#e30613] hover:text-white transition-colors">
            TÜM BİSKÜVİLERİ KEŞFET
            <ArrowRight size={18} />
          </button> */}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductDetail}
      />
    </section>
  );
}
