"use client"

import { useEffect, useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

interface SliderIndicatorsProps {
  api?: CarouselApi
  count: number
}

export default function SliderIndicators({ api, count }: SliderIndicatorsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    // İlk yüklemede aktif slide'ı ayarla
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="flex justify-center mt-4 mb-8">
      <div className="flex space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className="w-16 h-1 bg-gray-300 rounded-full overflow-hidden focus:outline-none"
            onClick={() => api?.scrollTo(index)}
            aria-label={`Slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : "false"}
          >
            <div
              className={`w-16 h-1 bg-[#e30613] rounded-full transform ${
                activeIndex === index ? "scale-x-100" : "scale-x-0"
              } origin-left transition-transform duration-300`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  )
}
