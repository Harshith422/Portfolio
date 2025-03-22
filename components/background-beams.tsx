"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const BackgroundBeams = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main beam following mouse */}
      <motion.div
        className="absolute w-[40vw] h-[40vh] bg-gradient-to-r from-purple-500/20 to-transparent blur-[80px] rounded-full"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 0.5,
        }}
      />

      {/* Static beams */}
      <div className="absolute top-0 left-[10%] w-[30vw] h-[30vh] bg-purple-500/10 blur-[80px] rounded-full" />
      <div className="absolute bottom-0 right-[10%] w-[30vw] h-[30vh] bg-purple-500/10 blur-[80px] rounded-full" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}

