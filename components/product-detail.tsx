"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const productCategories = [
  {
    id: "biskuvi",
    nameKey: "products.biskuvi",
    path: "/biskuviler",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-chips-cookies-bitscuit.png-tVLvCuFbZgtNM8n0SMKZpjnXB8qYSA.jpeg", // Çikolatalı kurabiye
    description: "Farklı damak zevklerine hitap eden bisküvi çeşitlerimiz",
    products: [
      "Petit Beurre",
      "Çikolatalı Bisküvi",
      "Kremalı Bisküvi",
      "Yulaflı Bisküvi",
    ],
  },
  {
    id: "cikolata",
    nameKey: "products.cikolata",
    path: "/cikolata",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=400&auto=format", // Çikolata
    description: "Eşsiz lezzetiyle damağınızda iz bırakan çikolatalar",
    products: [
      "Sütlü Çikolata",
      "Bitter Çikolata",
      "Fındıklı Çikolata",
      "Dolgulu Çikolata",
    ],
  },
  {
    id: "kek",
    nameKey: "products.kek",
    path: "/kek",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format", // Kek
    description: "Yumuşacık dokulu, lezzetli kekler",
    products: ["Kakaolu Kek", "Meyveli Kek", "Kremalı Kek", "Mini Kek"],
  },
  {
    id: "gofret",
    nameKey: "products.gofret",
    path: "/gofret",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format", // Gofret/Wafer
    description: "Katman katman lezzet sunan gofretler",
    products: ["Çokomel", "Dido", "Çikolatalı Gofret", "Çubuk Kraker"],
  },
  {
    id: "kraker",
    nameKey: "products.kraker",
    path: "/kraker",
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=400&auto=format", // Kraker
    description: "Çıtır çıtır krakerler ile atıştırmalık keyfi",
    products: [
      "Tuzlu Kraker",
      "Baharatlı Kraker",
      "Peynirli Kraker",
      "Çubuk Kraker",
    ],
  },
  {
    id: "sekerleme",
    nameKey: "products.sekerleme",
    path: "/sekerleme",
    image:
      "https://images.unsplash.com/photo-1581798459219-318e68f60ae5?q=80&w=400&auto=format", // Şekerleme
    description: "Tatlı molalar için şekerleme çeşitleri",
    products: ["Jelibon", "Yumuşak Şeker", "Sert Şeker", "Draje"],
  },
];

export default function ProductDetail() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="py-20 h-[60vh] bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ürün Kategorilerimiz
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Anı Bisküvi Gıda San. ve Tic. A.Ş.'nin geniş ürün yelpazesinde her
          damak zevkine uygun lezzetler bulabilirsiniz.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Category Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 order-2 lg:order-1">
            <div className="flex flex-wrap gap-3 mb-8">
              {productCategories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === index
                      ? "bg-[#e30613] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  {t(category.nameKey)}
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
                {t(productCategories[activeCategory].nameKey)}
              </h3>
              <p className="text-gray-600">
                {productCategories[activeCategory].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Popüler Ürünler:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {productCategories[activeCategory].products.map((product) => (
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

              <Button className="bg-[#e30613] hover:bg-red-700 mt-4 flex items-center gap-2">
                <Link
                  className="flex items-center gap-2"
                  href={productCategories[activeCategory].path}
                >
                  {t(productCategories[activeCategory].nameKey)} Çeşitleri
                  <ChevronRight className="h-4 w-4" />
                </Link>
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
                src={
                  productCategories[activeCategory].image || "/placeholder.svg"
                }
                alt={t(productCategories[activeCategory].nameKey)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {t(productCategories[activeCategory].nameKey)}
                  </h3>
                  <p className="text-white/90">
                    {productCategories[activeCategory].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
