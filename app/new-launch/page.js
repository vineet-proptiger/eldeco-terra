'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'

const Overview = dynamic(() => import('../../components/Overview'), { ssr: true })
const Highlights = dynamic(() => import('../../components/Highlights'), { ssr: true })
const Amenities = dynamic(() => import('../../components/Amenities'), { ssr: true })
const Pricing = dynamic(() => import('../../components/Pricing'), { ssr: true })
const Location = dynamic(() => import('../../components/Location'), { ssr: true })
const MasterPlan = dynamic(() => import('../../components/MasterPlan'), { ssr: true })
const AboutDeveloper = dynamic(() => import('../../components/AboutDeveloper'), { ssr: true })
const Footer = dynamic(() => import('../../components/Footer'), { ssr: true })

const Gallery = dynamic(() => import('../../components/Gallery'), { ssr: false })
const EnquireModal = dynamic(() => import('../../components/EnquireModal'), { ssr: false })
const AosInit = dynamic(() => import('../../components/AosInit'), { ssr: false })

export default function NewLaunch() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-white">
      <AosInit />
      <Navbar setIsOpen={setIsOpen} />
      <Hero setIsOpen={setIsOpen} />
      <Overview setIsOpen={setIsOpen} />
      <Highlights setIsOpen={setIsOpen} />
      <Gallery setIsOpen={setIsOpen} />
      <Amenities setIsOpen={setIsOpen} />
      <Pricing setIsOpen={setIsOpen} />
      <Location />
      <MasterPlan setIsOpen={setIsOpen} />
      <AboutDeveloper setIsOpen={setIsOpen} />
      <Footer />
      <EnquireModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Floating Vertical Enquire Tab — Desktop only */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden lg:flex btn-floating-tab !py-3 !px-3 shadow-lg"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          letterSpacing: '2px',
          borderRadius: '6px 0 0 6px',
        }}
      >
        Enquire Now
      </button>

      {/* Mobile Sticky Bottom Bar (Call and Enquire Only) */}
      <style>{`
        @keyframes phone-vibrate {
          0% { transform: rotate(0deg) scale(1); }
          10% { transform: rotate(-10deg) scale(1.1); }
          20% { transform: rotate(10deg) scale(1.1); }
          30% { transform: rotate(-10deg) scale(1.1); }
          40% { transform: rotate(10deg) scale(1.1); }
          50%, 100% { transform: rotate(0deg) scale(1); }
        }
        .animate-vibrate {
          animation: phone-vibrate 2s infinite ease-in-out;
          transform-origin: center;
        }
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-3px); }
        }
        .typing-dot-1 { animation: typing-bounce 1.4s infinite ease-in-out; }
        .typing-dot-2 { animation: typing-bounce 1.4s infinite ease-in-out; animation-delay: 0.15s; }
        .typing-dot-3 { animation: typing-bounce 1.4s infinite ease-in-out; animation-delay: 0.3s; }
      `}</style>
      <div className="sticky-bottom-bar">
        <a
          id="mobile-call"
          href="tel:+919718344024"
          className="flex-1 flex flex-col items-center justify-center gap-1 btn-gold !py-1 !px-0 text-white transition-all !rounded-none"
        >
          <div className="flex items-center justify-center rounded-full animate-vibrate" style={{ width: '26px', height: '26px', border: '2px solid currentColor' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
          </div>
          <span style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.04em', fontFamily: 'var(--font-jost)' }}>Call For Details</span>
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 !py-2 !px-0 !rounded-none text-white transition-all"
          style={{ background: '#006A44' }}
        >
          <svg className="w-5 h-5 animate-vibrate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01" className="typing-dot-1" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10h.01" className="typing-dot-2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 10h.01" className="typing-dot-3" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.04em', fontFamily: 'var(--font-jost)' }}>Enquire</span>
        </button>
      </div>

      <div className="h-10 lg:hidden" />
    </main>
  )
}
