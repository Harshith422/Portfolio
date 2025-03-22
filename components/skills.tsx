"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Server, Globe, Cloud, Brain, Cpu, GitBranch, LineChart, TerminalSquare, Triangle, Zap } from "lucide-react"

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const skillCategories = [
    {
      id: 1,
      title: "Programming",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      color: "purple",
      skills: [
        { name: "Python", proficiency: "Expert" },
        { name: "C++/C", proficiency: "Advanced" },
        { name: "Java", proficiency: "Advanced" },
        { name: "JavaScript", proficiency: "Advanced" },
        { name: "Matlab", proficiency: "Intermediate" },
      ],
    },
    {
      id: 2,
      title: "Web Development",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      color: "blue",
      skills: [
        { name: "React.js", proficiency: "Advanced" },
        { name: "Next.js", proficiency: "Advanced" },
        { name: "HTML/CSS", proficiency: "Advanced" },
        { name: "Node.js", proficiency: "Intermediate" },
        { name: "Express.js", proficiency: "Intermediate" },
      ],
    },
    {
      id: 3,
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      color: "pink",
      skills: [
        { name: "TensorFlow", proficiency: "Advanced" },
        { name: "PyTorch", proficiency: "Advanced" },
        { name: "Scikit-learn", proficiency: "Advanced" },
        { name: "NLP", proficiency: "Intermediate" },
      ],
    },
    {
      id: 4,
      title: "Data Science",
      icon: <LineChart className="w-6 h-6 text-green-400" />,
      color: "green",
      skills: [
        { name: "Pandas", proficiency: "Advanced" },
        { name: "NumPy", proficiency: "Advanced" },
        { name: "Data Visualization", proficiency: "Intermediate" },
        { name: "SQL", proficiency: "Advanced" },
        { name: "Statistics", proficiency: "Intermediate" },
      ],
    },
    {
      id: 5,
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      color: "cyan",
      skills: [
        { name: "AWS", proficiency: "Intermediate" },
        { name: "Azure", proficiency: "Intermediate" },
        { name: "Git/GitHub", proficiency: "Advanced" },
      ],
    },
    {
      id: 6,
      title: "Tools & Others",
      icon: <Triangle className="w-6 h-6 text-amber-400" />,
      color: "amber",
      skills: [
        { name: "VS Code", proficiency: "Expert" },
        { name: "Jupyter Notebook", proficiency: "Advanced" },
        { name: "Linux", proficiency: "Intermediate" },
      ],
    },
  ]

  // Map proficiency to intensity values for styling
  const proficiencyMap: Record<string, { level: number; color: string }> = {
    "Beginner": { level: 1, color: "opacity-60" },
    "Intermediate": { level: 2, color: "opacity-80" },
    "Advanced": { level: 3, color: "opacity-90" },
    "Expert": { level: 4, color: "opacity-100" }
  }

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My expertise spans multiple domains in software development and artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gray-900/40 rounded-xl p-6 border border-${category.color}-800/30 hover:border-${category.color}-500/40 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-${category.color}-500/10`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-2.5 bg-${category.color}-500/20 rounded-lg mr-3`}>{category.icon}</div>
                <h3 className={`text-xl font-bold text-${category.color}-300`}>{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const proficiency = proficiencyMap[skill.proficiency];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.1 }}
                      className={`p-3 rounded-lg bg-gray-800/40 border border-${category.color}-900/30 hover:border-${category.color}-600/30 transition-all duration-300`}
                    >
                      <div className="flex flex-col">
                        <span className="text-white font-medium">{skill.name}</span>
                        <div className="flex mt-1.5">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : { scale: 0 }}
                              transition={{ duration: 0.2, delay: 0.8 + i * 0.1 + skillIndex * 0.05 }}
                              className={`h-1.5 w-6 rounded-full mx-0.5 ${
                                i < proficiency.level 
                                  ? `bg-${category.color}-500 ${proficiency.color}` 
                                  : 'bg-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skill highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Generative AI", icon: <Cpu className="w-4 h-4 mr-2" /> },
              { name: "Prompt Engineering", icon: <TerminalSquare className="w-4 h-4 mr-2" /> },
              { name: "LLMOps", icon: <Brain className="w-4 h-4 mr-2" /> },
              { name: "AI Agents", icon: <Zap className="w-4 h-4 mr-2" /> }
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                className="bg-gray-800/60 text-white px-4 py-2 rounded-full flex items-center hover:bg-purple-900/40 transition-colors duration-300"
              >
                {item.icon} {item.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

