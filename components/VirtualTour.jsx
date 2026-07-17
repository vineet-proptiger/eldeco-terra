'use client'
import React, { useState, useRef } from 'react'

const VirtualTour = ({ setIsOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((err) => console.warn("Video play error:", err))
    }
  }

  return (
    <section id="virtual-tour" className="relative w-full aspect-video flex items-center justify-center overflow-hidden bg-black group">

      <style>{`
        .vt-play-btn {
          width: 80px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #FF0000;
          z-index: 10;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 20px rgba(255, 0, 0, 0.4);
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .vt-play-btn {
            width: 100px;
            height: 70px;
            border-radius: 18px;
          }
        }
        .vt-play-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 12px 30px rgba(255, 0, 0, 0.6);
        }
        .ripple-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid #FF0000;
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
          poster="/images/hero/banner2.webp"
          preload="auto"
          playsInline 
          controls={isPlaying}
          className="w-full h-full object-cover bg-black"
        />
      </div>

      {/* Overlay and Content - Only show when NOT playing */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handlePlay}
        >
          {/* Dark Overlay Background */}
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

          {/* Centered Play Button Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
            {/* Wrapper with fixed square size for circular ripples */}
            <div className="relative flex items-center justify-center w-[90px] h-[90px] md:w-[120px] md:h-[120px]">
              <div className="vt-play-btn">
                {/* Play triangle */}
                <svg className="w-8 h-8 md:w-10 md:h-10 ml-[2px] md:ml-1" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="ripple-ring"></div>
              <div className="ripple-ring"></div>
            </div>

            {/* Text placed absolutely below so it doesn't push the button up */}
            <h2 style={{
              fontFamily: 'var(--font-sans), Open Sans, sans-serif',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin: 0
            }} className="absolute top-[100%] mt-5 md:mt-8 text-[22px] md:text-[36px] drop-shadow-md text-white whitespace-nowrap">
              VIRTUAL TOUR
            </h2>
          </div>
        </div>
      )}
    </section>
  )
}

export default VirtualTour
