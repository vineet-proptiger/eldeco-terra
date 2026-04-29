// 'use client'
// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { heroImages } from '../lib/images'

// const GOLD = 'var(--color-gold)'
// const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
// const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

// const slides = [heroImages.banner, heroImages.banner2]

// const BRAND = 'var(--color-primary)'
// const BRAND_DARK = 'var(--color-primary-dark)'

// const Hero = ({ setIsOpen }) => {
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section className="!pt-[82px] !pb-0 bg-[var(--color-bg)]">
//       <div className="flex flex-col lg:flex-row">

//         {/* LEFT — Image Carousel */}
//         <div className="w-full lg:w-[62%] relative h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[calc(100vh-82px)]"
//           data-aos="fade-right">

//           {/* Carousel — outline draws 10px inside, not clipped by overflow-hidden */}
//           <div className="overflow-hidden" style={{ position: 'absolute', inset: 0, zIndex: 1, borderRadius: '10px' }}>
//             <div
//               className="flex h-full"
//               style={{
//                 width: `${slides.length * 100}%`,
//                 transform: `translateX(-${(current * 100) / slides.length}%)`,
//                 transition: 'transform 0.7s cubic-bezier(0.77,0,0.18,1)',
//                 height: '100%',
//               }}
//             >
//               {slides.map((src, idx) => (
//                 <div key={idx} style={{ width: `${100 / slides.length}%`, flexShrink: 0, position: 'relative' }}>
//                   <Image src={src} alt={`Runwal Raaya ${idx + 1}`} fill className="object-cover"
//                     priority={idx === 0} sizes="(max-width: 1024px) 100vw, 62vw" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Dot indicators */}
//           <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
//             {slides.map((_, idx) => (
//               <button key={idx} onClick={() => setCurrent(idx)}
//                 style={{
//                   width: current === idx ? '36px' : '10px', height: '4px', background: GOLD,
//                   opacity: current === idx ? 1 : 0.5, border: 'none',
//                   borderRadius: '2px', cursor: 'pointer', transition: 'all 0.4s ease'
//                 }} />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT — Premium Info Card */}
//         <div className="w-full lg:w-[38%] flex flex-col bg-white border-l border-gray-100 shadow-[-8px_0_32px_rgba(0,0,0,0.06)]" data-aos="fade-left">

//           {/* ── Top Banner ── */}
//           <div style={{
//             background: `linear-gradient(135deg, ${BRAND_DARK} 0%, ${BRAND} 100%)`,
//             color: '#fff',
//             textAlign: 'center',
//             padding: '11px 16px',
//             position: 'relative',
//             overflow: 'hidden',
//           }}>
//             {/* shimmer line */}
//             <div style={{
//               position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
//               background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
//             }} />
//             <p style={{
//               fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
//               letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0,
//               color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
//             }}>
//               <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'rgba(255,255,255,0.6)' }} />
//               EOI Window Now Opens
//               <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'rgba(255,255,255,0.6)' }} />
//             </p>
//           </div>

//           <div className="p-4 flex flex-col gap-3">
//             {/* ── New Launch Badge ── */}
//             <div className="flex justify-center -mt-2 mb-1" data-aos="zoom-in" data-aos-delay="400">
//               <span style={{
//                 background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)',
//                 color: '#fff',
//                 padding: '6px 20px',
//                 borderRadius: '50px',
//                 fontSize: '13px',
//                 fontWeight: '800',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.14em',
//                 border: '2px solid rgba(255,255,255,0.35)',
//                 boxShadow: '0 4px 18px rgba(181,135,40,0.45)',
//                 fontFamily: F_JOST,
//               }}>
//                 ✦ New Launch Phase-5 ✦
//               </span>
//             </div>

//             {/* ── Project Identity ── */}
//             <div style={{ textAlign: 'center', paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' }}>
//               <h1 style={{
//                 fontFamily: F_JOST, fontWeight: '800', fontSize: '24px',
//                 color: 'var(--color-dark)', lineHeight: 1.2, margin: '0 0 6px',
//                 letterSpacing: '-0.01em'
//               }}
//                 data-aos="fade-up" data-aos-delay="200">
//                 Runwal Raaya
//               </h1>
//               <p style={{
//                 fontFamily: F_SANS, fontSize: '12px', color: '#6b7280', margin: '0 0 8px',
//                 letterSpacing: '0.01em', lineHeight: 1.5
//               }}
//                 data-aos="fade-up" data-aos-delay="280">
//                 Runwal Raaya <strong style={{ color: "var(--color-gold)", fontWeight: "800" }}>Forest Reserve</strong> presents <strong style={{ color: "var(--color-dark)", fontWeight: "800" }}>Indo‑Japanese</strong> themed ultra-luxury Residences, an exclusive <strong style={{ color: "var(--color-dark)", fontWeight: "800" }}>new-launch</strong> on Dwarka Expressway.
//               </p>
//               {/* ── Google Rating ── */}
//               {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
//                 data-aos="fade-up" data-aos-delay="320">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4" />
//                   <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">G</text>
//                 </svg>
//                 <span style={{ display: 'flex', gap: '2px' }}>
//                   {[1, 2, 3, 4].map(s => (
//                     <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
//                   ))}
//                   <svg width="12" height="12" viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stopColor="#FBBC04" /><stop offset="50%" stopColor="#e5e7eb" /></linearGradient></defs><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" /></svg>
//                 </span>
//                 <span style={{ fontFamily: F_SANS, fontSize: '12px', color: '#374151', fontWeight: '700' }}>4.7</span>
//                 <span style={{ fontFamily: F_SANS, fontSize: '11px', color: '#9ca3af' }}>Stars 83 Reviews</span>
//               </div> */}
//             </div>

//             {/* ── Project Specs ── */}
//             <div style={{
//               background: 'var(--color-gold-bg)',
//               borderRadius: '12px',
//               border: '1px solid var(--color-gold-light)',
//               padding: '12px 8px',
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '0',
//             }} data-aos="fade-up" data-aos-delay="360">
//               {[
//                 { value: '33', label: ' Acres Integrated Township' },
//                 { value: '3 & 4 LDK', label: 'Configuration' },
//                 { value: '25:25:50', label: 'Payment Plan' },
//                 { value: '₹41 Lacs*', label: 'EOI (non-bankable cheques)' },
//               ].map((s, i) => (
//                 <div key={i} style={{
//                   textAlign: 'center',
//                   padding: '8px 6px',
//                   borderRight: i % 2 === 0 ? '1px solid var(--color-gold-light)' : 'none',
//                   borderBottom: i < 2 ? '1px solid var(--color-gold-light)' : 'none',
//                 }}>
//                   <p style={{
//                     fontFamily: F_JOST, fontSize: '24px', fontWeight: '800',
//                     color: 'var(--color-dark)', margin: '0 0 2px', lineHeight: 1,
//                   }}>{s.value}</p>
//                   <p style={{
//                     fontFamily: F_SANS, fontSize: '9px', color: 'var(--color-gold-dark)',
//                     margin: 0, textTransform: 'uppercase', letterSpacing: '0.07em', lineHeight: 1.35,
//                     fontWeight: '700',
//                   }}>{s.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* ── Privileged Launch Advantages ── */}
//             <div style={{
//               background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)',
//               borderRadius: '10px',
//               padding: '8px 14px',
//               border: '2px dashed rgba(255,255,255,0.45)',
//               boxShadow: '0 6px 20px var(--color-shadow-inner)',
//             }} data-aos="fade-up" data-aos-delay="400">
//               <p style={{
//                 fontFamily: F_JOST, fontSize: '10px', color: 'rgba(255,255,255,0.75)',
//                 margin: '0 0 4px', fontWeight: '700', letterSpacing: '0.14em',
//                 textTransform: 'uppercase', textAlign: 'center',
//               }}>
//                 Privileged Launch Advantages
//               </p>
//               {[
//                 'Two Iconic Skyline Towers',
//                 'Cascades Club – 1.6 Lakh* sq. ft.',
//                 'A Fusion of Indo‑Japanese Artistry',
//                 'A Rare Life Surrounded by Nature',
//               ].map((item, i, arr) => (
//                 <div key={i}>
//                   <p style={{
//                     fontFamily: F_JOST, fontSize: '12px', color: '#fff',
//                     margin: 0, fontWeight: '600', letterSpacing: '0.01em',
//                     padding: '5px 0', textAlign: 'center',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
//                   }}>
//                     <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', flexShrink: 0, display: 'inline-block' }} />
//                     {item}
//                   </p>
//                   {i < arr.length - 1 && (
//                     <div style={{ borderTop: '1px dashed rgba(255,255,255,0.25)' }} />
//                   )}
//                 </div>
//               ))}
//               <p style={{
//                 fontFamily: F_JOST, fontSize: '10px', color: 'rgba(255,255,255,0.6)',
//                 margin: '6px 0 2px', fontWeight: '600', letterSpacing: '0.08em',
//                 textAlign: 'center', textTransform: 'uppercase',
//               }}>
//                 LIMITED RELEASE, UNMATCHED OPPORTUNITY
//               </p>
//             </div>

//             {/* ── BHK & Pricing ── */}
//             <div style={{
//               textAlign: 'center',
//               background: 'var(--color-bg-muted)',
//               borderRadius: '10px',
//               padding: '12px 16px',
//             }} data-aos="fade-up" data-aos-delay="480">
//               <p style={{
//                 fontFamily: F_SANS, fontSize: '13px', color: '#374151',
//                 margin: '0 0 2px', fontWeight: '600',
//               }}>
//                 3/4 LDK Residences
//               </p>
//               <p style={{
//                 fontFamily: F_SANS, fontSize: '11px', color: '#9ca3af',
//                 margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600'
//               }}>
//                 Price Starting At
//               </p>
//               <span className="blink-price" style={{
//                 fontSize: '28px', fontWeight: '800',
//                 color: 'var(--color-gold)',
//                 fontFamily: F_JOST, lineHeight: 1, display: 'block',
//               }}>
//                 ₹6.5 Cr* Onwards
//               </span>
//             </div>

//             {/* ── CTA Button ── */}
//             <button onClick={() => setIsOpen(true)}
//               className="btn-gold"
//               style={{ width: '100%', padding: '14px', fontSize: '14px', letterSpacing: '0.1em' }}
//               data-aos="fade-up" data-aos-delay="560">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
//                 strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
//               </svg>
//               Request Brochure
//             </button>

//             {/* ── Trust Badges ── */}
//             <div style={{
//               display: 'flex', justifyContent: 'space-between',
//               borderTop: '1px solid #f0f0f0',
//               paddingTop: '10px', gap: '4px',
//             }}>
//               {[
//                 { icon: '🎧', label: 'Instant Call Back' },
//                 { icon: '🚗', label: 'Free Site Visit' },
//                 { icon: '🏷️', label: 'Best Price Assurance' },
//               ].map((b, i) => (
//                 <div key={i} style={{
//                   flex: 1, display: 'flex', flexDirection: 'column',
//                   alignItems: 'center', gap: '3px',
//                   padding: '8px 4px',
//                   borderRadius: '10px',
//                   background: '#fff',
//                   border: '1px solid #e5e7eb',
//                 }}>
//                   <span style={{ fontSize: '18px', lineHeight: 1 }}>{b.icon}</span>
//                   <span style={{
//                     fontSize: '10px', color: '#6b7280', fontFamily: F_SANS,
//                     fontWeight: '600', textAlign: 'center', letterSpacing: '0.02em'
//                   }}>{b.label}</span>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero








'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS  = 'var(--font-sans), "Open Sans", sans-serif'

const slides = [heroImages.banner, heroImages.banner2]
const INTERVAL = 5500

export default function Hero({ setIsOpen }) {
  const [cur, setCur]         = useState(0)
  const [progress, setProgress] = useState(0)
  const rafRef  = useRef(null)
  const startRef = useRef(null)

  // Auto-advance + progress bar
  useEffect(() => {
    setProgress(0)
    startRef.current = Date.now()
    cancelAnimationFrame(rafRef.current)

    function tick() {
      const pct = Math.min((Date.now() - startRef.current) / INTERVAL * 100, 100)
      setProgress(pct)
      if (pct < 100) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const timer = setTimeout(() => setCur(p => (p + 1) % slides.length), INTERVAL)
    return () => { clearTimeout(timer); cancelAnimationFrame(rafRef.current) }
  }, [cur])

  const goTo = (idx) => setCur(idx)

  return (
    <>
      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes heroFadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes heroRiseUp   { from{opacity:0;transform:translateY(22px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes heroSlideUp  { from{opacity:0;transform:translateY(30px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes livepulse {
          0%  { box-shadow:0 0 0 0 rgba(74,222,128,0.6); }
          70% { box-shadow:0 0 0 6px rgba(74,222,128,0); }
          100%{ box-shadow:0 0 0 0 rgba(74,222,128,0); }
        }
      `}</style>

      <div style={{
        width: '100%',
        height: 'calc(100vh - 80px)',
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#14110D'
      }}>

        {/* ══════════════════════════════
            IMAGE STAGE — top 65%
        ══════════════════════════════ */}
        <div style={{ flex:'0 0 65%', position:'relative', overflow:'hidden' }}>

          {/* Carousel track */}
          <div style={{
            position:'absolute', inset:0,
            display:'flex',
            transform:`translateX(-${cur * 100}%)`,
            transition:'transform 1s cubic-bezier(0.86,0,0.07,1)',
          }}>
            {slides.map((src, idx) => (
              <div key={idx} style={{
                flex:'0 0 100%', height:'100%', position:'relative', overflow:'hidden',
              }}>
                <div style={{
                  position:'absolute', inset:'-3%',
                  transform: cur === idx ? 'scale(1.06)' : 'scale(1)',
                  transition:'transform 8s ease-out',
                }}>
                  <Image
                    src={src}
                    alt={`Eldeco Terra & Sol ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Light bottom vignette */}
          <div style={{
            position:'absolute', bottom:0, left:0, right:0, height:'45%', zIndex:3,
            background:'linear-gradient(to top, rgba(20,17,13,0.82) 0%, rgba(20,17,13,0.18) 60%, transparent 100%)',
            pointerEvents:'none',
          }} />

          {/* Top nav */}
          <nav
            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-3 sm:p-6 lg:p-10"
            style={{
              background:'linear-gradient(to bottom, rgba(14,11,8,0.65) 0%, transparent 100%)',
              animation:'heroFadeDown 0.7s 0.2s ease both',
            }}
          >
           

            {/* New Launch Badge — Right */}
            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto"
              style={{ animation:'heroFadeDown 0.7s 0.2s ease both' }}
            >
              <span style={{
                fontFamily:F_SANS, fontSize:'clamp(8px, 2vw, 10px)', fontWeight:700,
                letterSpacing:'0.15em', textTransform:'uppercase',
                color:'var(--color-gold)',
                border:'1px solid var(--color-gold-light, rgba(201,168,76,0.3))',
                padding:'4px 10px', smPadding:'6px 14px', borderRadius:'2px',
                background:'rgba(14,11,8,0.5)', backdropFilter:'blur(8px)',
                whiteSpace: 'nowrap'
              }}
              className="px-2 py-1 sm:px-4 sm:py-1.5"
              >
                ✦ New Launch · Sector 80, Gurgaon
              </span>
            </div>
          </nav>

          {/* Project title overlaid on image */}
          <div style={{
            position:'absolute', bottom:0, left:0, zIndex:5,
            padding:'0 40px 22px',
            animation:'heroRiseUp 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both',
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px' }}>
              <span style={{ display:'block', width:'28px', height:'1px', background:'var(--color-gold)', opacity:0.8 }} />
              <span style={{ fontFamily:F_SANS, fontSize:'10px', fontWeight:600, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--color-gold)' }}>
                Sector 80, Gurgaon
              </span>
            </div>
            <h1 style={{
              fontFamily:F_JOST,
              fontSize:'clamp(28px, 3.4vw, 52px)',
              fontWeight:800, color:'#fff', lineHeight:1.05, letterSpacing:'-0.02em',
            }}>
              Eldeco Terra<br />
              <span style={{ color:'var(--color-gold)' }}>&amp; Sol</span>
            </h1>
          </div>

          {/* Pip dots */}
          <div style={{ position:'absolute', bottom:'20px', right:'40px', zIndex:6, display:'flex', gap:'7px' }}>
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)} style={{
                height:'2px', border:'none', borderRadius:'1px', cursor:'pointer', padding:0,
                width: cur === idx ? '40px' : '22px',
                background: cur === idx ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)',
                transition:'all 0.4s ease',
              }} />
            ))}
          </div>

          {/* Progress bar removed */}
        </div>

        {/* ══════════════════════════════
            INFO STRIP — bottom 35%
        ══════════════════════════════ */}
        <div className="flex flex-col lg:flex-row" style={{
          flex: 1,
          background: 'var(--color-bg, #F8F4EE)',
          animation: 'heroSlideUp 0.8s 0.5s cubic-bezier(0.16,1,0.3,1) both',
        }}>

          {/* A — Project name */}
          <div className="w-full lg:w-[280px]" style={{
            flex: '0 0 auto',
            padding:'18px 24px',
            background:'var(--color-dark, #14110D)',
            display:'flex', flexDirection:'column', justifyContent:'center', gap:'8px',
            borderRight:'1px solid rgba(255,255,255,0.06)',
          }}>
            {/* <h2 style={{ fontFamily:F_SERIF, fontSize:'20px', fontWeight:600, color:'#fff', lineHeight:1.15 }}>
              Waterside <em style={{ fontStyle:'italic', color:'var(--color-gold)' }}>Residences</em>
            </h2> */}
            <p style={{ fontFamily:F_SANS, fontSize:'13px', lineHeight:1.6, color:'rgba(255,255,255,0.45)', fontWeight:300 }}>
              A thoughtfully crafted residential development by{' '}
              <span style={{ color:'var(--color-gold)', fontWeight:600 }}>Eldeco Group</span> — offering spacious{' '}
              <strong style={{ color:'rgba(255,255,255,0.75)', fontWeight:600 }}>3 &amp; 4 BHK</strong>{' '}
              apartments at{' '}
              <span style={{ color:'var(--color-gold)', fontWeight:600 }}>Sector 80, Gurgaon</span>.
            </p>

            {/* Trust badges */}
            <div style={{ display:'flex', gap:'4px', marginTop:'4px' }}>
              {[
                { icon:'🎧', label:'Call\nBack'  },
                { icon:'🚗', label:'Site\nVisit' },
                { icon:'🏷️', label:'Best\nPrice' },
              ].map((b, i) => (
                <div key={i} style={{
                  flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'3px',
                  padding:'5px 2px',
                  border:'1px solid rgba(255,255,255,0.07)',
                  borderRadius:'6px',
                  background:'rgba(255,255,255,0.04)',
                }}>
                  <span style={{ fontSize:'13px', lineHeight:1 }}>{b.icon}</span>
                  <span style={{ fontFamily:F_SANS, fontSize:'9px', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', textAlign:'center', lineHeight:1.2, whiteSpace:'pre-line' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* B — Specs 2×2 */}
          <div className="w-full lg:w-[320px]" style={{
            flex: '0 0 auto',
            display:'grid', gridTemplateColumns:'1fr 1fr',
            borderRight:'1px solid rgba(20,17,13,0.1)',
          }}>
            {[
              { val:'10',          lbl:'Acres\nDevelopment' },
              { val:'3 & 4 BHK', lbl:'Config-\nuration'   },
              { val:'Dec\'27',   lbl:'Possession\nDate'   },
              { val:'₹2.9 Cr*',   lbl:'Starting\nPrice'    },
            ].map((s, i) => (
              <div key={i} style={{
                padding:'14px 16px',
                display:'flex', flexDirection:'column', justifyContent:'center',
                borderRight: i % 2 === 0 ? '1px solid rgba(20,17,13,0.1)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(20,17,13,0.1)' : 'none',
                background:'var(--color-bg, #F8F4EE)',
                cursor:'default',
              }}>
                <p style={{ fontFamily:F_JOST, fontSize:'20px', fontWeight:700, color:'var(--color-dark)', lineHeight:1, marginBottom:'3px' }}>{s.val}</p>
                <p style={{ fontFamily:F_SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.13em', textTransform:'uppercase', color:'var(--color-muted, #7A7268)', lineHeight:1.35, whiteSpace:'pre-line' }}>{s.lbl}</p>
              </div>
            ))}
          </div>

          {/* C — Advantages */}
          <div style={{
            flex:1, padding:'14px 20px',
            borderRight:'1px solid rgba(20,17,13,0.1)',
            display:'flex', flexDirection:'column', justifyContent:'center', gap:'6px',
          }}>
            <p style={{ fontFamily:F_JOST, fontSize:'13px', fontWeight:700, textTransform:'uppercase', color:'var(--color-gold-dark, #8A6E28)', marginBottom:'4px' }}>
              Privileged Launch Advantages
            </p>
            {[
              'Spacious 3 & 4 BHK Apartments',
              'Beautifully Landscaped Green Gardens',
              'Premium Clubhouse & Modern Amenities',
              'Excellent Connectivity — NH-48 & Dwarka Expressway',
            ].map((item, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--color-gold)', flexShrink:0, opacity:0.8 }} />
                <span style={{ fontFamily:F_SANS, fontSize:'13.5px', fontWeight:500, color:'var(--color-dark)' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* D — Price + CTA */}
          <div className="w-full lg:w-[260px]" style={{
            flex: '0 0 auto', padding:'16px 22px',
            background:'var(--color-dark, #14110D)',
            display:'flex', flexDirection:'column', justifyContent:'center', gap:'10px',
          }}>
            <div style={{ textAlign:'center' }}>
              <p style={{ fontFamily:F_SANS, fontSize:'14.5px', fontWeight:600, color:'rgba(255,255,255,0.4)', letterSpacing:'0.06em', marginBottom:'2px' }}>
                3 &amp; 4 BHK Spacious Apartments
              </p>
              <p style={{ fontFamily:F_SANS, fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.25)', marginBottom:'4px' }}>
                Starting at
              </p>
              <p className="blink-price" style={{ fontFamily:F_JOST, fontSize:'32px', fontWeight:600, color:'var(--color-gold)', lineHeight:1 }}>
                ₹2.9 Cr*
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              style={{
                width:'100%', padding:'12px',
                background:'var(--color-gold)', color:'#fff',
                border:'none', borderRadius:'6px',
                fontFamily:F_JOST, fontSize:'12.5px', fontWeight:700,
                letterSpacing:'0.10em', textTransform:'uppercase', cursor:'pointer',
                boxShadow:'0 4px 18px rgba(201,168,76,0.4)',
                transition:'opacity 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity='0.88'; e.currentTarget.style.transform='translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='translateY(0)' }}
            >
              Request Brochure
            </button>

          </div>

        </div>
      </div>
    </>
  )
}
