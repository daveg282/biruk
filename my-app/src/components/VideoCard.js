'use client'

import { useState } from 'react'

export default function VideoCard({ title, thumbnail, videoUrl, category }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {!isPlaying ? (
        <div 
          className="relative aspect-video bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${thumbnail})` }}
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-reel-gold rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition">
              <svg className="w-6 h-6 text-film-blue ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <span className="text-xs font-semibold text-reel-gold">{category}</span>
            <h3 className="text-white font-medium">{title}</h3>
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-black">
          <video 
            controls 
            autoPlay 
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )
}