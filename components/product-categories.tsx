"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "biskuvi",
    name: "Bisküviler",
    image: "/placeholder.svg?height=300&width=300",
    description: "ANI'nın eşsiz bisküvi çeşitleri ile tatlı molalar",
    products: ["Petit Beurre", "Çikolatalı Gofret", "Halley", "Çokoprens"],
  },
  {
    id: "cikolata",
    name: "Çikolatalar",
    image: "/placeholder.svg?height=300&width=300",
    description: "Eşsiz lezzetiyle damağınızda iz bırakan çikolatalar",
    products: ["Albeni", "Metro", "Çokonat", "Dido"],
  },
  {
    id: "kek",
    name: "Kekler",
    image: "/placeholder.svg?height=300&width=300",
    description: "Yumuşacık dokulu, lezzetli kekler",
    products: ["Topkek", "Browni", "Hanımeller", "Pöti"],
  },
  {
    id: "gofret",
    name: "Gofretler",
    image: "/placeholder.svg?height=300&width=300",
    description: "Katman katman lezzet sunan gofretler",
    products: ["Çokomel", "Dido", "Çikolatalı Gofret", "Çubuk Kraker"],
  },
]

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ürün Kategorilerimiz</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          ANI'nın geniş ürün yelpazesinde her damak zevkine uygun lezzetler bulabilirsiniz.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Category Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 order-2 lg:order-1">
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === index ? "bg-[#e30613] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(index)}
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
              <h3 className="text-2xl font-bold text-gray-900">{categories[activeCategory].name}</h3>
              <p className="text-gray-600">{categories[activeCategory].description}</p>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Popüler Ürünler:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {categories[activeCategory].products.map((product) => (
                    <li key={product} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#e30613]"></span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="bg-[#e30613] hover:bg-red-700 mt-4 flex items-center gap-2">
                Tüm {categories[activeCategory].name}
                <ChevronRight className="h-4 w-4" />
              </Button>
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
                src={categories[activeCategory].image || "/placeholder.svg"}
                alt={categories[activeCategory].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{categories[activeCategory].name}</h3>
                  <p className="text-white/90">{categories[activeCategory].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
