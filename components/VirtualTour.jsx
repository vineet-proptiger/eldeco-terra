'use client'
import React, { useState, useRef } from 'react'

const VirtualTour = ({ setIsOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  return (
    <section id="virtual-tour" className="relative w-full aspect-video flex items-center justify-center overflow-hidden bg-black group">

      <style>{`
        .vt-play-btn {
          position: relative;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          border: 4px solid var(--color-gold);
          z-index: 10;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        }
        @media (min-width: 768px) {
          .vt-play-btn {
            width: 90px;
            height: 90px;
          }
        }
        .vt-play-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }
        .ripple-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid var(--color-gold);
          border-radius: 50%;
          animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          pointer-events: none;
        }
        .ripple-ring:nth-child(2) {
          animation-delay: 0.8s;
        }
        @keyframes pulse-ring {
          0% { width: 100%; height: 100%; opacity: 1; }
          100% { width: 160%; height: 160%; opacity: 0; }
        }
      `}</style>

      {/* Background Video */}
      <div className={`absolute inset-0 ${!isPlaying ? 'transition-transform duration-700 group-hover:scale-105' : ''}`}>
        <video 
          ref={videoRef}
          src="/images/video/eldeco_video.mp4" 
          playsInline 
          controls={isPlaying}
          className="w-full h-full object-contain bg-black"
        />
      </div>

      {/* Overlay and Content - Only show when NOT playing */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          {/* Dark Overlay Background */}
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

          {/* Play Icon Circle */}
          <div className="relative mb-6 flex items-center justify-center z-20">
            <div className="vt-play-btn">
              {/* Play triangle */}
              <svg className="w-8 h-8 md:w-10 md:h-10 ml-1 md:ml-2" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="var(--color-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <div className="ripple-ring"></div>
            <div className="ripple-ring"></div>
          </div>

          {/* Text */}
          <h2 style={{
            fontFamily: 'var(--font-sans), Open Sans, sans-serif',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            margin: 0
          }} className="text-[26px] md:text-[36px] drop-shadow-md text-white z-20">
            VIRTUAL TOUR
          </h2>
        </div>
      )}
    </section>
  )
}

export default VirtualTour
