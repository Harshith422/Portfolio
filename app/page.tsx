"use client"

import { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Responsibility } from "@/components/responsibility"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Loader } from "@/components/loader"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <CustomCursor />
        <div className="noise-bg"></div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Responsibility />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}