'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    {
      name: "Vimeo",
      url: "https://vimeo.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
        </svg>
      )
    },
    {
      name: "IMDb",
      url: "https://imdb.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.291 3.367c-.955-1.165-2.264-1.367-3.454-1.367H4.587C3.398 2 2 3.398 2 4.587v14.826C2 20.602 3.398 22 4.587 22h11.25c1.19 0 2.5-.202 3.454-1.367.955-1.165.915-2.703.915-4.633V7.367c0-1.93.04-3.47-.915-4.634zM9.41 7.992h2.222v8.93H9.41v-8.93zm6.126 5.93c0 .915-.754 1.662-1.68 1.662s-1.68-.747-1.68-1.662v-3.5c0-.915.754-1.662 1.68-1.662s1.68.747 1.68 1.663v3.5zm1.254 3.008h-2.222v-.65h2.222v.65zm2.222-5.93c0 .915-.754 1.662-1.68 1.662s-1.68-.747-1.68-1.662v-3.5c0-.915.754-1.662 1.68-1.662s1.68.747 1.68 1.663v3.5z"/>
        </svg>
      )
    }
  ]

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <footer className="bg-slate-900 border-t border-amber-500/20">
      {/* Minimal top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        {/* Main content - single row */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center group">
              <span className="text-xl font-bold text-amber-400 tracking-[0.2em] font-mono">
                BIRUK
              </span>
              <span className="text-xl font-light text-white ml-2 tracking-[0.15em]">
              DAMTEW
              </span>
            </Link>
          </motion.div>
          
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-full"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
        
        {/* Simple divider */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} BIRUK DAMTEW. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Crafted for visual storytelling
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}