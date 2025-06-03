"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, Award, GraduationCap, Code, Sparkles } from "lucide-react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <Image src="/about_me_image.jpg" alt="Harshith Potnuri" fill className="object-cover" />

              {/* Overlay with scanlines */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent mix-blend-overlay"></div>
              <div className="absolute inset-0 scanlines opacity-30"></div>

              {/* Social links */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/70 backdrop-blur-md">
                <div className="flex justify-center space-x-5">
                  <a
                    href="https://www.linkedin.com/in/harshith-potnuri-144har"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 p-3 rounded-full hover:bg-purple-600/80 hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://github.com/Harshith422"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 p-3 rounded-full hover:bg-purple-600/80 hover:scale-110 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="mailto:potnuriharshith@gmail.com"
                    className="bg-gray-800/80 p-3 rounded-full hover:bg-purple-600/80 hover:scale-110 transition-all duration-300"
                    aria-label="Email Contact"
                  >
                    <Mail size={22} />
                  </a>
                  <a
                    href="tel:+917013704561"
                    className="bg-gray-800/80 p-3 rounded-full hover:bg-purple-600/80 hover:scale-110 transition-all duration-300"
                    aria-label="Phone Contact"
                  >
                    <Phone size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-purple-600/10 rounded-xl -z-10 rotate-6"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-600/10 rounded-xl -z-10 -rotate-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-7"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">I'm Harshith Potnuri</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a dedicated B.Tech student specializing in Artificial Intelligence Engineering at Amrita Vishwa Vidyapeetham. Driven by a passion for applying advanced AI concepts to real-world challenges, I focus on bridging the gap between theoretical knowledge and practical impact. With a solid foundation in machine learning, computer vision, and natural language processing, I have consistently developed innovative solutions to complex problems.
              </p>
            </div>

            {/* Highlights section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-800/30 hover:border-purple-500/40 transition-colors duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Code size={20} className="text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Developer</h4>
                </div>
                <p className="text-sm text-gray-400">Building innovative solutions with modern tech stacks</p>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-800/30 hover:border-blue-500/40 transition-colors duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Sparkles size={20} className="text-blue-400" />
                  </div>
                  <h4 className="font-semibold">AI Enthusiast</h4>
                </div>
                <p className="text-sm text-gray-400">Exploring ML, NLP & CV to create intelligent systems</p>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-800/30 hover:border-purple-500/40 transition-colors duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Award size={20} className="text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Problem Solver</h4>
                </div>
                <p className="text-sm text-gray-400">Converting complex challenges into elegant solutions</p>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-800/30 hover:border-blue-500/40 transition-colors duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <GraduationCap size={20} className="text-blue-400" />
                  </div>
                  <h4 className="font-semibold">Quick Learner</h4>
                </div>
                <p className="text-sm text-gray-400">Adapting to new technologies and methodologies rapidly</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-gray-900/50 p-5 rounded-lg border border-gray-800/80 backdrop-blur-sm shadow-lg">
              <div>
                <p className="text-gray-400 text-sm font-medium">Name:</p>
                <p className="font-medium text-white">Harshith Potnuri</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Email:</p>
                <p className="font-medium text-white">potnuriharshith@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Phone:</p>
                <p className="font-medium text-white">+91 7013704561</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Location:</p>
                <p className="font-medium text-white">Coimbatore, India</p>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild className="w-full group relative overflow-hidden">
                <a href="/Resume_SD.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11M12 16L17 11M12 16V4M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download Resume
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400"></span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-purple-300"></span>
                Hobbies
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-800/80 hover:bg-purple-600/30 transition-colors py-1.5 text-sm">
                  Photography
                </Badge>
                <Badge variant="secondary" className="bg-gray-800/80 hover:bg-purple-600/30 transition-colors py-1.5 text-sm">
                  Playing Guitar
                </Badge>
                <Badge variant="secondary" className="bg-gray-800/80 hover:bg-purple-600/30 transition-colors py-1.5 text-sm">
                  Open Source Contribution
                </Badge>
              </div>

              <h4 className="text-lg font-semibold flex items-center gap-2 mt-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-800/80 hover:bg-blue-600/30 transition-colors py-1.5 text-sm">
                  English
                </Badge>
                <Badge variant="secondary" className="bg-gray-800/80 hover:bg-blue-600/30 transition-colors py-1.5 text-sm">
                  Telugu
                </Badge>
                <Badge variant="secondary" className="bg-gray-800/80 hover:bg-blue-600/30 transition-colors py-1.5 text-sm">
                  Hindi
                </Badge>
              </div>
            </div>

            <Button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

