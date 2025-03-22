"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, School, Award } from "lucide-react"

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Artificial Intelligence Engineering (AIE)",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      period: "2022-26",
      grade: "Current CGPA: 7.55",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      id: 2,
      degree: "Higher Secondary Education (12th)",
      field: "",
      institution: "Sri Ganesh College",
      period: "2020-22",
      grade: "Percentage: 90.9%",
      icon: <School className="w-6 h-6" />,
    },
    {
      id: 3,
      degree: "Secondary Education (10th)",
      field: "",
      institution: "Sri Chaitanya Techno School",
      period: "2020",
      grade: "Percentage: 96.5%",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600/50 via-purple-600/30 to-purple-600/10"></div>

          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
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
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    {item.field && <p className="text-primary mb-2">{item.field}</p>}
                    <p className="text-gray-300 mb-2">{item.institution}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{item.period}</span>
                      <span className="font-medium text-primary">{item.grade}</span>
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

