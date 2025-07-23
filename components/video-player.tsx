"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  videoUrl: string
  thumbnailUrl: string
}

export default function VideoPlayer({ videoUrl, thumbnailUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="w-full h-full relative">
      {!isPlaying ? (
        <>
          <Image src={thumbnailUrl || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button
              onClick={handlePlay}
              className="bg-white/90 hover:bg-white text-[#e30613] rounded-full h-16 w-16 flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          </div>
        </>
      ) : (
        <iframe
          src={`${videoUrl}?autoplay=1`}
          title="Video player"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}
