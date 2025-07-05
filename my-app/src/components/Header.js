'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md py-2 shadow-2xl shadow-amber-500/10' 
          : 'bg-slate-900/90 backdrop-blur-sm py-3'
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
        borderBottom: scrolled ? '1px solid rgba(245, 158, 11, 0.2)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <Link 
            href="/" 
            className="group relative flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex items-center relative">
              {/* Film strip decoration */}
              <div className="hidden sm:flex items-center mr-4">
                <div className="flex flex-col space-y-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex space-x-1">
                      {[...Array(2)].map((_, j) => (
                        <div 
                          key={j}
                          className="w-1 h-1 rounded-full bg-amber-500/60 group-hover:bg-amber-400 transition-all duration-300"
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="w-0.5 h-8 bg-gradient-to-b from-amber-500/40 to-transparent ml-2" />
              </div>
              
              {/* Logo text with cinematic styling */}
              <div className="relative">
                <span className="text-xl sm:text-2xl font-bold text-amber-400 tracking-[0.2em] group-hover:text-amber-300 transition-all duration-300 font-mono">
                 BIRUK
                </span>
                <span className="text-xl sm:text-2xl font-light text-slate-300 tracking-[0.15em] group-hover:text-white transition-all duration-300 ml-2">
                 DAMTEW
                </span>
                {/* Underline effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500" />
              </div>
              
              {/* Film strip decoration - right */}
              <div className="hidden sm:flex items-center ml-4">
                <div className="w-0.5 h-8 bg-gradient-to-b from-amber-500/40 to-transparent mr-2" />
                <div className="flex flex-col space-y-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex space-x-1">
                      {[...Array(2)].map((_, j) => (
                        <div 
                          key={j}
                          className="w-1 h-1 rounded-full bg-amber-500/60 group-hover:bg-amber-400 transition-all duration-300"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-800/30 rounded-full px-2 py-1 border border-amber-500/20 backdrop-blur-sm">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 font-medium ${
                    pathname === link.href 
                      ? 'text-slate-900 bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-amber-500/25' 
                      : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span 
                      className="absolute -bottom-2 left-1/2 w-2 h-2 bg-amber-400 transform -translate-x-1/2 rotate-45 shadow-lg shadow-amber-500/50"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Enhanced Mobile menu button */}
          <button 
            className="md:hidden text-amber-400 p-2 focus:outline-none hover:text-amber-300 transition-colors relative group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="absolute inset-0 bg-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            {mobileOpen ? (
              <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(245, 158, 11, 0.2)'
            }}
          >
            <nav className="flex flex-col space-y-1 p-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 flex items-center ${
                      pathname === link.href 
                        ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 font-semibold border-l-4 border-amber-500 shadow-lg' 
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-amber-400 hover:border-l-4 hover:border-amber-500/50'
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <div className="ml-auto w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Social links in mobile menu */}
            <div className="border-t border-amber-500/20 p-4">
              <div className="flex justify-center space-x-6 mb-4">
                {['Instagram', 'Vimeo', 'IMDb'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-slate-400 hover:text-amber-400 transition-colors text-xs uppercase tracking-wider hover:underline"
                  >
                    {social}
                  </a>
                ))}
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 tracking-wider">
                  VISUAL STORYTELLING
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Enhanced Scrolling progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent">
        <motion.div 
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 shadow-lg shadow-amber-500/50" 
          style={{ 
            width: scrolled ? `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` : '0%',
            transition: 'width 0.1s ease-out'
          }}
        />
      </div>
      
      {/* Cinematic light effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </header>
  )
}