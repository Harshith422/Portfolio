"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, Code, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const navRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()
  const scrollProgressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1 * i,
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  }

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-3 bg-black/70 backdrop-blur-md border-b border-purple-500/20" : "py-5 bg-transparent",
      )}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600"
        style={{ width: scrollProgressWidth }}
      />

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="#home" className="relative z-10 group">
          <motion.div variants={logoVariants} initial="hidden" animate="visible" className="flex items-center">
            <div className="relative mr-2 w-10 h-10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <Code className="w-5 h-5 text-white relative z-10" />
              <div className="absolute inset-0 bg-black/30 rounded-md group-hover:bg-transparent transition-colors" />
            </div>
            <div className="text-2xl font-bold tracking-tighter flex items-center">
              <span className="text-primary">H</span>
              <span className="relative overflow-hidden inline-block">
                <span className="inline-block group-hover:translate-y-full transition-transform duration-300">
                  ARSHITH
                </span>
                <span className="absolute top-0 left-0 inline-block -translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-primary">
                  ARSHITH
                </span>
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.div key={link.name} custom={index} variants={navItemVariants} initial="hidden" animate="visible">
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium relative group",
                  activeSection === link.href.substring(1) ? "text-primary" : "text-gray-300 hover:text-white",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                    activeSection === link.href.substring(1) && "scale-x-100",
                  )}
                />
              </Link>
            </motion.div>
          ))}
          <motion.div variants={navItemVariants} custom={navLinks.length} initial="hidden" animate="visible">
            <a
              href="/Resume_SD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 transition-colors flex items-center group"
            >
              Resume
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-8 h-8 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 bg-black/95 pt-20"
          >
            <nav className="container mx-auto px-4 flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link, index) => (
                <motion.div key={link.name} variants={mobileNavItemVariants} className="w-full">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-lg font-medium flex items-center justify-center py-3 border-b border-gray-800 w-full",
                      activeSection === link.href.substring(1)
                        ? "text-primary border-primary"
                        : "text-gray-300 hover:text-primary",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileNavItemVariants} className="pt-4 w-full flex justify-center">
                <a
                  href="/Resume_SD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 transition-colors flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Resume <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

