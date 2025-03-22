"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className = "",
  cursorClassName = "bg-primary",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex].text

      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        setTypingSpeed(150)

        if (currentText === currentWord) {
          setIsDeleting(true)
          setTypingSpeed(1000) // Pause before deleting
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setTypingSpeed(50)

        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={`inline-flex text-2xl md:text-3xl font-bold ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="text-primary"
        >
          {currentText}
        </motion.div>
      </AnimatePresence>
      <div className="ml-1 w-2 h-6 mt-1 rounded-sm animate-blink-fast">
        <div className={`h-full w-full ${cursorClassName}`}></div>
      </div>
    </div>
  )
}

