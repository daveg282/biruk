'use client'

import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    "Cinematography",
    "Color Grading", 
    "Lighting Design",
    "Camera Operation",
    "Visual Storytelling",
    "Post Production"
  ]

  const experience = [
    { year: "2015-Present", role: "Director of Photography", company: "Freelance" },
    { year: "2012-2015", role: "Camera Operator", company: "CineVision Studios" },
    { year: "2010-2012", role: "Camera Assistant", company: "FilmArt Productions" }
  ]

  return (
    <main className="bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Biruk Damtew - Cinematographer"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-sm uppercase tracking-widest text-amber-400 font-semibold">About</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                BIRUK
              </span>
              <br />
              <span className="text-white">
                DAMTEW
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Visual storyteller crafting cinematic experiences through the artistry of light, composition, and motion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-sm uppercase tracking-widest text-amber-600 font-semibold">My Story</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12">
              The Art of <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Visual Storytelling</span>
            </h2>
            
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                With over a decade of experience in cinematography, I've dedicated my career to transforming ordinary moments into extraordinary visual narratives. My journey began with a simple fascination for how light and shadow could evoke emotion and tell stories without words.
              </p>
              
              <p>
                Every project is an opportunity to push creative boundaries, whether capturing the intimate details of a documentary subject or crafting the sweeping visuals of a commercial campaign. I believe that great cinematography serves the story first, using technical mastery to support artistic vision.
              </p>
              
              <p>
                When I'm not behind the camera, you'll find me exploring new techniques, mentoring emerging filmmakers, or analyzing the visual language of cinema masters who continue to inspire my work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-sm uppercase tracking-widest text-amber-600 font-semibold">Expertise</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12">
              Creative <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Disciplines</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">
                    {skill}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-sm uppercase tracking-widest text-amber-600 font-semibold">Journey</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12">
              Professional <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Path</span>
            </h2>
            
            <div className="space-y-8 max-w-2xl mx-auto">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 shadow-lg border border-slate-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="md:text-left">
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{item.role}</h3>
                      <p className="text-amber-600 font-semibold">{item.company}</p>
                    </div>
                    <div className="md:text-right mt-2 md:mt-0">
                      <span className="text-slate-600 font-medium">{item.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-sm uppercase tracking-widest text-amber-400 font-semibold">Philosophy</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Cinematic <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Vision</span>
            </h2>
            
            <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed italic max-w-3xl mx-auto">
              "Every frame is a canvas, every moment an opportunity to capture the extraordinary within the ordinary. I believe cinematography is the poetry of light—it speaks to the soul before the mind understands."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Ready to create something <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">extraordinary?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life through the power of cinematic storytelling.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all"
            >
              Let's Collaborate
              <svg 
                className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}