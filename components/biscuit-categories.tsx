"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: 0,
    name: "Tatlı Bisküviler",
    image: "/placeholder.svg?height=300&width=300&text=Tatlı+Bisküviler",
    description:
      "Çay ve kahve yanında keyifle tüketebileceğiniz tatlı bisküvilerimiz.",
    products: [
      "Petit Beurre",
      "Finger",
      "Çikolatalı Bisküvi",
      "Yulaflı Bisküvi",
    ],
  },
  {
    id: 1,
    name: "Kremalı Bisküviler",
    image: "/placeholder.svg?height=300&width=300&text=Kremalı+Bisküviler",
    description: "İki bisküvi arasında lezzetli kremasıyla vazgeçilmez tatlar.",
    products: [
      "Çikolatalı Kremalı",
      "Vanilyalı Kremalı",
      "Muzlu Kremalı",
      "Çilekli Kremalı",
    ],
  },
  {
    id: 2,
    name: "Tuzlu Bisküviler",
    image: "/placeholder.svg?height=300&width=300&text=Tuzlu+Bisküviler",
    description:
      "Aperatif olarak tüketebileceğiniz lezzetli tuzlu bisküvilerimiz.",
    products: [
      "Tuzlu Kraker",
      "Peynirli Kraker",
      "Baharatlı Kraker",
      "Susamlı Kraker",
    ],
  },
  {
    id: 3,
    name: "Sağlıklı Bisküviler",
    image: "/placeholder.svg?height=300&width=300&text=Sağlıklı+Bisküviler",
    description:
      "Tam tahıllı, yüksek lifli ve düşük şekerli sağlıklı alternatifler.",
    products: [
      "Tam Tahıllı Bisküvi",
      "Yulaflı Bisküvi",
      "Kepekli Bisküvi",
      "Şeker İlavesiz Bisküvi",
    ],
  },
];

export default function BiscuitCategories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<string[]>(
    categories[0].products
  );

  const handleCategoryChange = (categoryId: number) => {
    setActiveCategory(categoryId);
    const selectedCategory = categories.find((cat) => cat.id === categoryId);
    if (selectedCategory) {
      setFilteredProducts(selectedCategory.products);
    }
  };

  const currentCategory =
    categories.find((cat) => cat.id === activeCategory) || categories[0];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Bisküvi Kategorilerimiz
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Farklı damak zevklerine hitap eden geniş bisküvi yelpazemizden size en
          uygun olanı seçin.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Category Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 order-2 lg:order-1">
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#e30613] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {currentCategory.name}
              </h3>
              <p className="text-gray-600">{currentCategory.description}</p>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Popüler Ürünler:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {filteredProducts.map((product) => (
                    <li
                      key={product}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#e30613]"></span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`#${currentCategory.id}`}
                className="inline-flex items-center gap-2 bg-[#e30613] text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Tüm {currentCategory.name}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Image Display */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={currentCategory.image || "/placeholder.svg"}
                alt={currentCategory.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentCategory.name}
                  </h3>
                  <p className="text-white/90">{currentCategory.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
