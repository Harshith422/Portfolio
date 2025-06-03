"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Medal, LightbulbIcon, Award, Briefcase, GraduationCap } from "lucide-react"

export function Responsibility() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const responsibilityData = [
    {
      id: 1,
      position: "Social Media Mentor",
      organization: "Tensor Club, Amrita Vishwa Vidyapeetham",
      period: "Sept 2024 – June 2025",
      description: "Guided the club's online presence, managed event promotions, and mentored juniors in tech outreach strategies.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 2,
      position: "Security Discipline Guide",
      organization: "Anokha Tech Fest, Amrita",
      period: "Feb 2024",
      description: "Ensured smooth and safe conduct of campus-wide technical events by coordinating logistics and crowd management",
      icon: <Briefcase className="w-6 h-6" />,
    }
  ]

  return (
    <section id="responsibility" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Positions of Responsibility</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600/50 via-purple-600/30 to-purple-600/10"></div>

          {/* Responsibility items */}
          <div className="space-y-12">
            {responsibilityData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-primary/30 transition-colors backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                    <p className="text-primary mb-2">{item.organization}</p>
                    <p className="text-gray-300 mb-2">{item.description}</p>
                    <div className="text-sm text-gray-400">
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}