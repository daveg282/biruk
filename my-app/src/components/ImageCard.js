'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageCard({ title, imageUrl, category, aspectRatio = 'aspect-square' }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div 
        className={`${aspectRatio} relative bg-cover bg-center cursor-pointer`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => setIsExpanded(true)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <span className="text-xs font-semibold text-reel-gold">{category}</span>
          <h3 className="text-white font-medium">{title}</h3>
        </div>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsExpanded(false)}
          >
            &times;
          </button>
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      )}
    </div>
  )
}