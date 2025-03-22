"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Home, Cloud, Activity, ChevronRight, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { cn } from "@/lib/utils"

type ProjectType = {
  id: number
  title: string
  period: string
  description: string
  longDescription?: string
  technologies: string[]
  category: string
  icon: React.ReactNode
  image: string
  links: {
    github?: string
    demo?: string
  }
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Real Estate - 360",
      period: "Nov 2024 - Apr 2025",
      description:
        "Enhances property discovery by integrating QR codes in newspaper ads, allowing users to instantly access real-time property details, nearby amenities, and route mapping.",
      longDescription:
        "This innovative real estate platform revolutionizes property discovery by seamlessly integrating QR codes in traditional newspaper advertisements. Users can instantly access comprehensive property information, view real-time details, explore nearby amenities, and map optimal routes to properties. The platform facilitates informed decision-making for buyers while providing real estate agents with a modern, interactive way to showcase properties. Built with React.js for the frontend, Node.js for the backend, and leveraging AWS services for scalability and Google Maps API for location-based features.",
      technologies: ["React.js", "Node.js", "AWS", "Google Maps API", "QR Code Integration"],
      category: "Full-Stack",
      icon: <Home className="w-10 h-10 text-blue-500" />,
      image: "/real_estate_image.jpeg",
      links: {
        github: "https://github.com/Harshith422/Realestate360",
      },
    },
    {
      id: 2,
      title: "Cloud-Based Video Streaming Platform",
      period: "Feb 2024 - Jul 2024",
      description:
        "Enables seamless, secure video storage and streaming, ensuring high-performance content delivery with AWS Cognito for authentication and S3 for storage.",
      longDescription:
        "This comprehensive cloud-based video streaming platform enables seamless, secure video storage and streaming, ensuring high-performance content delivery across devices. AWS Cognito ensures robust user authentication and access control, while AWS S3 provides scalable, reliable storage for video content. The platform features an intuitive user interface built with modern web technologies, optimized video playback, and adaptive streaming capabilities. Ideal for educational platforms, content creators, and businesses requiring secure and efficient video hosting, this solution offers a complete end-to-end system for managing and distributing video content.",
      technologies: ["AWS", "Node.js", "HTML", "CSS", "JavaScript", "S3", "Cognito"],
      category: "Cloud Computing",
      icon: <Cloud className="w-10 h-10 text-purple-500" />,
      image: "/video_streaming_image.jpg",
      links: {
        github: "https://github.com/Harshith422/video_streaming_aws",
      },
    },
    {
      id: 3,
      title: "Detection of Cardiovascular Diseases",
      period: "Nov 2023 - Jan 2024",
      description:
        "Advances in early detection of cardiovascular diseases using non-invasive ECG and PCG analysis with machine learning-based classification.",
      longDescription:
        "This innovative medical technology project advances the early detection of cardiovascular diseases through non-invasive electrocardiogram (ECG) and phonocardiogram (PCG) signal analysis. The system applies sophisticated signal processing techniques, including Continuous Wavelet Transform (CWT) for feature extraction, and leverages both traditional machine learning (Support Vector Machines) and deep learning (hybrid CNN-LSTM model) approaches to capture spatial and temporal patterns in cardiac signals. The solution significantly improves diagnostic accuracy, helping healthcare professionals identify heart conditions efficiently, reducing misdiagnoses, and enabling timely medical intervention. This technology has potential applications in clinical settings, remote patient monitoring, and preventive healthcare.",
      technologies: ["Python", "NumPy", "SciPy", "TensorFlow", "SVM", "CNN-LSTM"],
      category: "Machine Learning",
      icon: <Activity className="w-10 h-10 text-red-500" />,
      image: "/cardiovascular_image.jpg",
      links: {
        github: "https://github.com/Harshith422/Detection-of-Cardiovascular-Diseases-Using-Heart-Sound-Analysis",
      },
    },
  ]

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in full-stack development, cloud computing, and machine
            learning.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full capitalize",
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : "hover:bg-primary/10 hover:text-primary",
              )}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="h-full perspective"
            >
              <div className="h-full transform-3d transition-transform duration-500 hover:rotate-y-5 hover:rotate-x-5">
                <Card className="h-full bg-gray-900/50 border-gray-800 hover:border-primary/30 transition-all duration-300 overflow-hidden group backdrop-blur-sm relative">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute top-4 right-4 p-2 bg-gray-900/80 backdrop-blur-sm rounded-full">
                      {project.icon}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="relative">
                    <div className="space-y-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-gray-400">{project.period}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-400 line-clamp-3">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800/80 hover:bg-gray-700">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-800/80 hover:bg-gray-700">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                      Details
                    </Button>
                    <div className="flex space-x-2">
                      {project.links.github && (
                        <Button asChild variant="outline" size="icon" className="h-8 w-8">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                onClick={() => setSelectedProject(null)}
              />

              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                      onClick={() => setSelectedProject(null)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                    <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30 w-fit">
                        {selectedProject.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
                      <p className="text-sm text-gray-300">{selectedProject.period}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Description</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-800/80 hover:bg-gray-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-t border-gray-800">
                      <Button variant="outline" onClick={() => setSelectedProject(null)}>
                        Close
                      </Button>
                      <div className="flex space-x-3">
                        {selectedProject.links.github && (
                          <Button asChild variant="outline">
                            <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> View Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Project Navigation */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 group" asChild>
            <a href="#skills">
              View My Skills
              <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

