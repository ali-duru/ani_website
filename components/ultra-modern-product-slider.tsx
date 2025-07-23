"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { table } from "console";
import { Video } from "./Video";

// Product categories data with enhanced imagery and descriptions
const categories = [
  {
    id: "biskuvi",
    bg: "/images/bischomio.gif",
    name: "Bisküviler",
    mobileBg: "/images/chocolate-cookiee.png",
    tabletBg: "/images/chocolate-cookiee.png",
    image: "/images/anibanaasner.jpg", // Çikolatalı kurabiye
    link: "/biskuviler",
    color: "#e30613",
    gradient: "from-red-600 to-red-800",
    accentColor: "rgba(227, 6, 19, 0.2)",
    description: "Çıtır çıtır, ağızda dağılan enfes lezzetler",
    products: [
      {
        name: "Petit Beurre",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fB62jKyh6b263JgNKxIUSUFGULVb6o.png",
        description: "Klasik lezzetin en özel hali",
        isNew: true,
      },
      {
        name: "Çikolatalı Bisküvi",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fB62jKyh6b263JgNKxIUSUFGULVb6o.png",
        description: "Bol çikolatalı, eşsiz lezzet",
      },
      {
        name: "Kremalı Bisküvi",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fB62jKyh6b263JgNKxIUSUFGULVb6o.png",
        description: "İki bisküvi arasında enfes krema",
        isPopular: true,
      },
    ],
  },
  {
    id: "cikolata",
    name: "Sürpriz Çikolatalar",
    mobileBg: "/images/chocolate-cookiee.png",
    tabletBg: "/images/chocolate-cookiee.png",
    bg: "/images/startoy.gif",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format",
    link: "/cikolatalar",
    color: "#8B4513",
    gradient: "from-amber-800 to-amber-950",
    accentColor: "rgba(139, 69, 19, 0.2)",
    description: "Eşsiz kakao çekirdeklerinden, damağınızda iz bırakan lezzet",
    products: [
      {
        name: "Sütlü Çikolata",
        image:
          "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=300&auto=format",
        description: "Kremsi dokusuyla vazgeçilmez lezzet",
        isPopular: true,
      },
      {
        name: "Bitter Çikolata",
        image:
          "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=300&auto=format",
        description: "%70 kakao içeriğiyle yoğun lezzet",
      },
      {
        name: "Fındıklı Çikolata",
        image:
          "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
        description: "Kavrulmuş fındıklarla zenginleştirilmiş",
        isNew: true,
      },
    ],
  },
  // {
  //   id: "kek",
  //   name: "Kekler",
  //   mobileBg: "/images/chocolate-cookiee.png",
  //   tabletBg: "/images/chocolate-cookiee.png",
  //   bg: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format",
  //   image:
  //     "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format",
  //   link: "/kekler",
  //   color: "#FF6B6B",
  //   gradient: "from-rose-500 to-rose-700",
  //   accentColor: "rgba(255, 107, 107, 0.2)",
  //   description: "Yumuşacık dokusu ve enfes lezzetiyle vazgeçilmez tatlar",
  //   products: [
  //     {
  //       name: "Kakaolu Kek",
  //       image:
  //         "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=300&auto=format",
  //       description: "Yoğun kakao lezzetiyle",
  //       isPopular: true,
  //     },
  //     {
  //       name: "Meyveli Kek",
  //       image:
  //         "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=300&auto=format",
  //       description: "Gerçek meyve parçacıklarıyla",
  //     },
  //     {
  //       name: "Kremalı Kek",
  //       image:
  //         "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300&auto=format",
  //       description: "Vanilya kreması ile doldurulmuş",
  //       isNew: true,
  //     },
  //   ],
  // },
  {
    id: "cracker",
    name: "Crakerler",
    mobileBg: "/images/chocolate-cookiee.png",
    tabletBg: "/images/chocolate-cookiee.png",
    bg: "/images/craker.gif",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format",
    link: "/cracker",
    color: "#6B3FA0",
    gradient: "from-purple-600 to-purple-900",
    accentColor: "rgba(107, 63, 160, 0.2)",
    description: "Katman katman lezzet, çıtır çıtır keyif",
    products: [
      {
        name: "Cracker",
        image:
          "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format",
        description: "Çikolata kaplı, enfes lezzet",
        isNew: true,
      },
      {
        name: "Fındıklı Gofret",
        image:
          "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
        description: "Fındık kremalı, çıtır gofret",
      },
      {
        name: "Sütlü Gofret",
        image:
          "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format",
        description: "Sütlü krema dolgulu gofret",
        isPopular: true,
      },
    ],
  },
  // {
  //   id: "gofret",
  //   name: "Gofretler",
  //   mobileBg: "/images/chocolate-cookiee.png",
  //   tabletBg: "/images/chocolate-cookiee.png",
  //   bg: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-chips-cookies-bitscuit.png-tVLvCuFbZgtNM8n0SMKZpjnXB8qYSA.jpeg",
  //   image:
  //     "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format",
  //   link: "/gofretler",
  //   color: "#6B3FA0",
  //   gradient: "from-purple-600 to-purple-900",
  //   accentColor: "rgba(107, 63, 160, 0.2)",
  //   description: "Katman katman lezzet, çıtır çıtır keyif",
  //   products: [
  //     {
  //       name: "Çikolatalı Gofret",
  //       image:
  //         "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format",
  //       description: "Çikolata kaplı, enfes lezzet",
  //       isNew: true,
  //     },
  //     {
  //       name: "Fındıklı Gofret",
  //       image:
  //         "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
  //       description: "Fındık kremalı, çıtır gofret",
  //     },
  //     {
  //       name: "Sütlü Gofret",
  //       image:
  //         "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format",
  //       description: "Sütlü krema dolgulu gofret",
  //       isPopular: true,
  //     },
  //   ],
  // },
];

// Ultra-modern product card with 3D effects, hover animations, and micro-interactions
const ProductCard = ({ product, color, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth spring animations for rotation
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  // 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXVal = ((y - centerY) / centerY) * 10;
    const rotateYVal = ((centerX - x) / centerX) * 10;
    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  // Calculate parallax values outside the component to avoid hook call in render
  const parallaxY = useTransform(springRotateX, (value) => value * -2);
  const parallaxX = useTransform(springRotateY, (value) => value * 2);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{
        transform: `perspective(1000px) rotateX(${springRotateX.get()}deg) rotateY(${springRotateY.get()}deg)`,
        transformStyle: "preserve-3d",
      }}
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
            <motion.div
              className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.2,
              }}
            >
              <Sparkles className="h-3 w-3" />
              <span>YENİ</span>
            </motion.div>
          )}
          {product.isPopular && (
            <motion.div
              className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-amber-500 text-white text-xs px-2 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.2,
              }}
            >
              <Sparkles className="h-3 w-3" />
              <span>POPÜLER</span>
            </motion.div>
          )}

          {/* Hover overlay with quick view button */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
            animate={{
              backgroundColor: isHovered ? `${color}20` : "rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full p-3 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="h-5 w-5 text-gray-700" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4">
          <motion.h3
            className="font-bold text-gray-800 mb-1 transition-colors duration-300"
            style={{ color: isHovered ? color : "" }}
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {product.name}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 mb-3"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {product.description}
          </motion.p>

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
  );
};

// Main component with ultra-modern UI
export default function UltraModernProductSlider() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Parallax effect for background elements
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    const { left, top, width, height } =
      sliderRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x / width - 0.5);
    mouseY.set(y / height - 0.5);
  };

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate categories
  useEffect(() => {
    if (isHovering) return;

    const startAutoplay = () => {
      autoplayRef.current = setTimeout(() => {
        setDirection(1);
        setActiveCategory((prev) => (prev + 1) % categories.length);
        startAutoplay();
      }, 5000);
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [isHovering]);

  const nextCategory = () => {
    setDirection(1);
    setActiveCategory((prev) => (prev + 1) % categories.length);
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
  };

  const prevCategory = () => {
    setDirection(-1);
    setActiveCategory(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
  };

  const goToCategory = (index: number) => {
    setDirection(index > activeCategory ? 1 : -1);
    setActiveCategory(index);
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
  };

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
  };

  const currentCategory = categories[activeCategory];
  const bgColor = currentCategory.accentColor;

  return (
    <section
      ref={sliderRef}
      className="-my-8 pb-34 h-[90vh] relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute  inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full z-20 opacity-5"
            style={{
              backgroundColor: currentCategory.color,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              x: useTransform(
                mouseX,
                (value) => value * (i % 2 === 0 ? -30 : 30)
              ),
              y: useTransform(
                mouseY,
                (value) => value * (i % 2 === 0 ? -30 : 30)
              ),
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 0.3 : 0 }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}
        {/* <div className="absolute inset-0 backdrop-blur-[100px]" /> */}
        <div>
          <Image
            alt=""
            src={
              typeof window !== "undefined" && window.innerWidth <= 640
                ? currentCategory.mobileBg
                : typeof window !== "undefined" && window.innerWidth <= 1024
                ? currentCategory.tabletBg
                : currentCategory.bg
            }
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, (max-width: 1280px) 50vw, 33vw"
            className="rounded-3xl"
          />
          {/* <Video videoPath="/banner-video.mp4" /> */}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-modern category tabs */}
        <motion.div
          className="relative mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(to right, ${currentCategory.color}20, ${currentCategory.color}10)`,
            }}
          />
          <div className="relative flex justify-between items-center py-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg overflow-hidden">
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
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />

            {/* Category buttons */}
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => goToCategory(index)}
                className={cn(
                  "relative z-10 py-3 px-6 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex-1 text-center",
                  activeCategory === index
                    ? "text-white"
                    : "text-gray-700 hover:text-gray-900"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main content area */}

        {/* Modern indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {categories.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToCategory(index)}
              className="group relative p-1 focus:outline-none"
              aria-label={`Go to ${categories[index].name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
              }}
            >
              {/* <motion.div
                className="w-3 h-3 rounded-full transition-all duration-300 relative z-10"
                style={{
                  backgroundColor:
                    index === activeCategory
                      ? categories[index].color
                      : "#D1D5DB",
                  boxShadow:
                    index === activeCategory
                      ? `0 0 0 2px white, 0 0 0 4px ${categories[index].color}40`
                      : "",
                }}
                whileHover={{ scale: 1.2 }}
                animate={
                  index === activeCategory
                    ? { scale: [1, 1.2, 1] }
                    : { scale: 1 }
                }
                transition={{
                  duration: 1.5,
                  repeat:
                    index === activeCategory ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
              /> */}
              <div className="absolute inset-0 -z-10 scale-0 rounded-full bg-gray-200 transition-transform duration-300 group-hover:scale-100" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
