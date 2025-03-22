"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isOverProject, setIsOverProject] = useState(false)
  const [isTextSelected, setIsTextSelected] = useState(false)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = "none"

    const updatePosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(targetPosition.current.x, targetPosition.current.y) as HTMLElement | null
      if (target) {
        setIsPointer(window.getComputedStyle(target).cursor === "pointer")
        setIsOverProject(target.closest(".project-card") !== null)
      } else {
        setIsPointer(false)
        setIsOverProject(false)
      }
    }

    const handleSelection = () => {
      const selection = window.getSelection()
      setIsTextSelected(!!selection && selection.toString().length > 0)
    }

    const animateCursor = () => {
      const easeFactor = 0.15
      const dx = targetPosition.current.x - currentPosition.current.x
      const dy = targetPosition.current.y - currentPosition.current.y

      currentPosition.current.x += dx * easeFactor
      currentPosition.current.y += dy * easeFactor

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(animateCursor)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updateCursorType)
    document.addEventListener("selectionchange", handleSelection)
    rafId.current = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updateCursorType)
      document.removeEventListener("selectionchange", handleSelection)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      document.documentElement.style.cursor = ""
    }
  }, [isPointer, isOverProject])

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out left-0 top-0 ${
        isOverProject ? "w-[80px] h-[80px] md:w-[64px] md:h-[64px]" : "w-[55px] h-[55px] md:w-[55px] md:h-[55px]"
      } ${isTextSelected ? "bg-[#8b793c]/50" : ""}`}
      style={{
        willChange: "transform",
      }}
    >
      <div className={`relative w-full h-full ${isOverProject ? "bg-white/20 backdrop-blur-sm rounded-full" : ""}`}>
        {isOverProject ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronLeft className="w-[24px] h-[24px] md:w-[20px] md:h-[20px] text-[#8b793c]" />
            <ChevronRight className="w-[24px] h-[24px] md:w-[20px] md:h-[20px] text-[#8b793c]" />
          </div>
        ) : (
          <span
            className={`absolute inset-0 flex items-center justify-center text-[24px] md:text-[20px] pointer-events-none select-none user-select-none ${
              isTextSelected ? "text-white" : "text-[#8b793c]"
            }`}
            style={{ WebkitUserSelect: "none", userSelect: "none" }}
          >
            ME
          </span>
        )}
      </div>
    </div>
  )
}

export default CustomCursor

