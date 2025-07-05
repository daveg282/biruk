'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WorkDetails() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Midnight Echo",
      subtitle: "Noir-inspired Short Film",
      year: "2023",
      category: "Narrative",
      description: "A haunting exploration of urban solitude, Midnight Echo captures the essence of film noir through contemporary cinematography. Every frame was meticulously crafted to evoke the psychological depth of the protagonist's journey through the city's shadows.",
      challenge: "The primary challenge was achieving authentic noir aesthetics while maintaining modern visual standards. We needed to balance dramatic contrast with subtle character development.",
      solution: "Using a combination of practical lighting and careful color grading, we created a visual language that honored classic noir while feeling fresh and contemporary.",
      images: [
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      specs: {
        camera: "ARRI Alexa Mini",
        lenses: "Zeiss Master Prime",
        format: "4K ProRes",
        duration: "12 minutes"
      }
    },
    {
      id: 2,
      title: "Aurora Watches",
      subtitle: "Luxury Product Campaign",
      year: "2023",
      category: "Commercial",
      description: "An elegant showcase of precision timepieces, combining macro cinematography with time-lapse sequences to highlight the intricate craftsmanship of luxury watchmaking.",
      challenge: "Capturing the delicate details of watch mechanisms while maintaining the premium brand aesthetic required precise lighting and camera control.",
      solution: "We developed a specialized macro rig system that allowed for seamless transitions between static product shots and dynamic time-lapse sequences.",
      images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80"
      ],
      specs: {
        camera: "RED Komodo 6K",
        lenses: "Canon L Series Macro",
        format: "6K RAW",
        duration: "90 seconds"
      }
    },
    {
      id: 3,
      title: "The Last Horizon",
      subtitle: "Science Fiction Feature",
      year: "2023",
      category: "Narrative",
      description: "An epic sci-fi journey exploring humanity's place in the cosmos. The cinematography emphasizes scale and wonder, using vast landscapes and intimate character moments to tell a story of discovery and hope.",
      challenge: "Balancing the grandeur of sci-fi spectacle with intimate human storytelling required careful attention to visual hierarchy and emotional pacing.",
      solution: "We created a visual language that moved between epic wide shots and intimate close-ups, using natural lighting to ground the fantastical elements in reality.",
      images: [
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      specs: {
        camera: "ARRI Alexa LF",
        lenses: "Panavision Ultra Vista",
        format: "4K ProRes",
        duration: "126 minutes"
      }
    }
  ]

  const currentProject = projects[selectedProject]

  return (
    <main className="bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 min-h-screen pt-16">
      {/* Project Navigation */}
      <section className="py-8 md:py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">Selected Works</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedProject === index
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <div className="flex items-center justify-between bg-slate-100 rounded-full p-1">
                <button
                  onClick={() => setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length)}
                  className="p-2 rounded-full hover:bg-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex-1 text-center">
                  <span className="text-sm font-medium text-slate-800">
                    {selectedProject + 1} of {projects.length}
                  </span>
                  <div className="text-xs text-slate-600 mt-1">
                    {projects[selectedProject].title}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject((prev) => (prev + 1) % projects.length)}
                  className="p-2 rounded-full hover:bg-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center space-x-4 mb-6 md:mb-8">
                    <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
                    <span className="text-xs md:text-sm uppercase tracking-widest text-amber-600 font-semibold">
                      {currentProject.category} • {currentProject.year}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                      {currentProject.title}
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
                    {currentProject.subtitle}
                  </p>
                  
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={currentProject.images[0]}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating specs card - Hidden on mobile, repositioned on tablet */}
                  <div className="hidden md:block absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 bg-white p-4 lg:p-6 rounded-xl shadow-xl border border-slate-200 max-w-xs">
                    <h3 className="text-xs lg:text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                      Specifications
                    </h3>
                    <div className="space-y-2 text-xs lg:text-sm">
                      {Object.entries(currentProject.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-slate-600 capitalize">{key}:</span>
                          <span className="text-slate-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile specs section */}
              <div className="md:hidden mt-8 bg-slate-100 p-6 rounded-xl">
                <h3 className="text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {Object.entries(currentProject.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-slate-600 capitalize text-xs uppercase tracking-wider">{key}</span>
                      <span className="text-slate-800 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-12 md:py-24 bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="text-center mb-12 md:mb-16">
                <div className="flex items-center justify-center space-x-4 mb-6 md:mb-8">
                  <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
                  <span className="text-xs md:text-sm uppercase tracking-widest text-amber-600 font-semibold">
                    Creative Process
                  </span>
                  <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-8">
                  Behind the <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Vision</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">Challenge</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {currentProject.challenge}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4">Solution</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {currentProject.solution}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <div className="text-center mb-12 md:mb-16">
                <div className="flex items-center justify-center space-x-4 mb-6 md:mb-8">
                  <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
                  <span className="text-xs md:text-sm uppercase tracking-widest text-amber-600 font-semibold">
                    Visual Gallery
                  </span>
                  <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
                  Frame by <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Frame</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {currentProject.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img
                        src={image}
                        alt={`${currentProject.title} frame ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Next Project CTA */}
          <section className="py-12 md:py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Explore More <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Work</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8">
                Each project tells a unique story through cinematic vision
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject((prev) => (prev + 1) % projects.length)}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all text-sm md:text-base"
                >
                  Next Project
                  <svg className="ml-2 w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center border-2 border-amber-500 text-amber-400 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-amber-500/10 transition-all text-sm md:text-base"
                >
                  Let's Collaborate
                </motion.a>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}