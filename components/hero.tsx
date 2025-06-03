"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { BackgroundBeams } from "@/components/background-beams"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const words = [
    {
      text: "AI",
    },
    {
      text: "Engineer",
    },
    {
      text: "&",
    },
    {
      text: "Web",
    },
    {
      text: "Developer",
    },
  ]

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BackgroundBeams />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div style={{ y, opacity }} className="space-y-8 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-light text-purple-400"
            >
              Hey there, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold tracking-tight glitch"
              data-text="HARSHITH POTNURI"
            >
              HARSHITH
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                POTNURI
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="h-12">
                <TypewriterEffect words={words} />
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full px-8 py-2 hover:scale-105 transition-transform"
                  asChild
                >
                  <a href="#projects">
                    <span className="relative z-10">View Projects</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-2 hover:scale-105 transition-transform"
                  asChild
                >
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full px-8 py-2 hover:scale-105 transition-transform"
                  asChild
                >
                <a href="/Resume_SD.pdf" download aria-label="Download Resume as PDF">
                  Download CV
                </a>

                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-2xl" />
              <div className="absolute inset-0 backdrop-blur-[1px] rounded-2xl overflow-hidden">
                <Image
                  src="/home_pht.jpg"
                  alt="Harshith Potnuri"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Barcode overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 backdrop-blur-sm">
                <div className="flex items-center justify-center">
                  <div className="h-12 w-64 relative">
                    {/* Barcode lines */}
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-full bg-white/80"
                        style={{
                          left: `${i * 3.33}%`,
                          width: `${Math.random() * 1.5 + 0.5}%`,
                          opacity: Math.random() * 0.5 + 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-center text-xs font-mono mt-2 tracking-widest">AI ENGINEER AND WEB DEVELOPER</div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-10 right-10 p-4 bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/20"
            >
              <p className="text-sm font-mono">AI Engineering Student</p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 left-10 p-4 bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/20"
            >
              <p className="text-sm font-mono">Full Stack Developer</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}

