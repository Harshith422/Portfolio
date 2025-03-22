"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400">© {new Date().getFullYear()} Harshith Potnuri. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href="https://www.linkedin.com/in/harshith-potnuri-144har"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Harshith422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a href="mailto:potnuriharshith@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:+917013704561" className="text-gray-400 hover:text-primary transition-colors">
              <Phone size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

