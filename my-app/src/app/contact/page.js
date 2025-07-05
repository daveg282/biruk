'use client'

import { motion } from 'framer-motion'
import ContactForm from '../../components/ContactForm'

export default function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: "hello@birukdamtew.com",
      action: "mailto:hello@birukdamtew.com"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: "Vimeo",
      url: "https://vimeo.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
        </svg>
      )
    }
  ]

  return (
    <main className="min-h-screen bg-white py-10">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-light text-gray-900 mb-4"
          >
            Let&apos;s <span className="text-amber-600 font-medium">collaborate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Reach out and let&apos;s create something meaningful together.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6">Contact</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-0.5 text-amber-600">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">{method.title}</h3>
                        <a 
                          href={method.action} 
                          className="text-gray-900 hover:text-amber-600 transition-colors font-medium"
                        >
                          {method.details}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6">Connect</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 text-gray-500 hover:text-amber-600 transition-colors"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Availability</h3>
                <p className="text-gray-900">
                  Currently accepting new projects. <span className="text-amber-600 font-medium">Typical response: 1-2 days</span>
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-light text-gray-900 mb-6">Send a message</h2>
              <div className="border border-gray-200 rounded-lg p-6 sm:p-8 bg-white shadow-sm">
                <ContactForm 
                  inputClass="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  labelClass="block text-sm font-medium text-gray-700 mb-1"
                  buttonClass="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  errorClass="text-red-600 text-sm mt-1"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
