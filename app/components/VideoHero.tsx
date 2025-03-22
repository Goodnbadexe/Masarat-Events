"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import Image from "next/image"
import Link from "next/link"

export default function VideoHero() {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [deviceType, setDeviceType] = useState("desktop")

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setDeviceType("mobile")
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const content = {
    en: {
      title: "Masarat Events",
      subtitle: "Imagine. Implement. Inspire.",
      cta: "Get Started",
      watchVideo: "Watch Demo",
    },
    ar: {
      title: "مسارات إيفنتس",
      subtitle: "تخيّل. نفّذ. ألهم.",
      cta: "ابدأ الآن",
      watchVideo: "شاهد العرض",
    },
  }

  const buttonStyles = `rounded-full font-semibold transition duration-300 ${
    deviceType === "mobile"
      ? "px-4 py-2 text-sm"
      : deviceType === "tablet"
        ? "px-6 py-2 text-base"
        : "px-8 py-3 text-lg"
  }`

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/qnMPHznhc8U?autoplay=1&mute=1&loop=1&playlist=qnMPHznhc8U&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=https://your-domain.com"
            title="Background video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Small%20Logo-QXWrjkxPyf2gunbB84lWlwWCKDZL30.png"
          alt="Masarat Events Logo"
          width={200}
          height={100}
          className="mb-12"
          priority
        />
        <h1 className="sr-only">{content[language].title}</h1>
        <p
          className={`mb-8 ${
            deviceType === "mobile"
              ? "text-lg"
              : deviceType === "tablet"
                ? "text-xl"
                : "text-xl md:text-2xl lg:text-3xl"
          }`}
        >
          {content[language].subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className={`bg-[#8b793c] text-white hover:bg-opacity-90 ${buttonStyles}`}>
            {content[language].cta}
          </Link>
          <button
            onClick={() => setIsPlaying(true)}
            className={`bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 ${buttonStyles}`}
          >
            {content[language].watchVideo}
          </button>
        </div>
      </div>

      {/* Modal Video Player */}
      {isPlaying && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/qnMPHznhc8U?autoplay=1&rel=0&modestbranding=1"
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  )
}

