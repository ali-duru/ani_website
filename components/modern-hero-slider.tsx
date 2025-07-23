"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Slider data
const slides = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg-MqLB9p9qXkMSCLWxmJ4YJE97tYcggn.jpeg",
    title: "Doğadan Gelen Lezzet",
    subtitle: "En kaliteli hammaddelerle üretilen eşsiz tatlar",
    cta: "Keşfet",
    ctaLink: "/urunler",
    color: "#e30613",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Katman%C4%B1%20Sil.jpg-iiFrfHdXzNFgQcvCNXFQVQAoE5Tkps.jpeg",
    title: "İki Yarım, Bir Tutku",
    subtitle: "Çikolata ve lezzetin mükemmel uyumu",
    cta: "İncele",
    ctaLink: "/cikolatalar",
    color: "#8B4513",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format",
    title: "Yeni Ürünlerimizi Denediniz mi?",
    subtitle: "Yenilikçi lezzetlerimiz ile damak zevkinizi keşfedin",
    cta: "Yeni Ürünler",
    ctaLink: "/yeni-urunler",
    color: "#FF6B6B",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=1200&auto=format",
    title: "Özel Anlar İçin Özel Lezzetler",
    subtitle: "Sevdiklerinizle paylaşabileceğiniz enfes tatlar",
    cta: "Özel Koleksiyonlar",
    ctaLink: "/ozel-koleksiyonlar",
    color: "#6B3FA0",
  },
];

export default function ModernHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  // Reset autoplay timer
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }

    if (isAutoplay) {
      autoplayRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }
  };

  // Initialize and clean up autoplay
  useEffect(() => {
    resetAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [currentSlide, isAutoplay]);

  const currentColor = slides[currentSlide].color;

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === currentSlide}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
              style={{
                background: `linear-gradient(to right, ${slide.color}99, transparent)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-10">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  className="rounded-full px-8 py-6 text-base"
                  style={{
                    backgroundColor: slide.color,
                    borderColor: slide.color,
                  }}
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-colors ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
