'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'

interface ProjectImage {
  url: string
  alt: string
}

interface ProjectCardProps {
  title: string
  images: ProjectImage[]
  className?: string
}

export default function ProjectCard({ title, images, className = '' }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(nextImage, 5000) // 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovering])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const isNear = (
          e.clientX >= rect.left - 100 &&
          e.clientX <= rect.right + 100 &&
          e.clientY >= rect.top - 100 &&
          e.clientY <= rect.bottom + 100
        )
        setIsHovering(isNear)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleDragStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if ('touches' in event) {
        dragStartX.current = (event as TouchEvent).touches[0].clientX
      } else {
        dragStartX.current = (event as MouseEvent).clientX
      }
    }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragEndX = 'touches' in event ? (event as TouchEvent).changedTouches[0].clientX : (event as MouseEvent).clientX
    const dragDistance = dragEndX - dragStartX.current

    if (dragDistance > 50) {
      previousImage()
    } else if (dragDistance < -50) {
      nextImage()
    }
  }

  return (
    <div 
      ref={cardRef}
      className={`relative project-card overflow-hidden rounded-lg shadow-lg bg-white ${className}`}
    >
      <div className="relative h-64 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            ref={dragRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              fill
              className="object-cover pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{images[currentIndex].alt}</p>
      </div>
    </div>
  )
}

